const modalTemplate = ({
    placeholder = "Search here...",
    welcomeMessage = "Write something to search...",
}) => `
<div class="search-modal-container"
    aria-modal="true" role="dialog" style="display: none">
    <div class="search-modal">
        <div class="search-modal-header">
            <form class="search-form">
                <input class="search-input"
                    spellcheck="false" placeholder="${placeholder}" maxlength="64" type="search" value="" />
            </form>
            <button
                class="close-modal" stype="button">
                <span>Esc</span>
            </button>
        </div>
        
        <div class="search-modal-body small-scrollbar">
            <div class="search-items">
                <div class="search-loader" style="display: none;">
                    <div role="status">
                        <svg class="search-spinner" viewBox="0 0 100 101" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                fill="currentColor" />
                            <path
                                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                <div class="search-body">
                    <ul class="search-results search-items">
                        <li class="no-result">
                            <span>
                                ${welcomeMessage}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div style="display: none" class="results-text search-modal-footer"></div>
    </div>
</div>

`;

/**
 * Search Modal
 * 
 * @param {*} options  - Options for the search modal
 * @param {string} options.searchUrl - The url to search the data
 * @param {string} options.autoInit - If true, the modal will be initialized automatically
 * @param {string} options.data - The data to be searched applicable when searchUrl is not provided
 * @param {string} options.searchKey - The key to be searched in the data
 * @param {string} options.keyboardShortcuts - If true, the modal will be opened with keyboard shortcuts
 * @param {string} options.transform - The function to transform the data; 
 * data should be transform to {title: "", category: "", excerpt: "", url: ""} format
 * @param {string} options.callback - The function to be called after various events`
 * @returns object
 */
const SearchModal = (options = {}) => {
    const root = document.createElement("div");
    root.innerHTML = modalTemplate({
        placeholder: options.placeholder,
        welcomeMessage: options.welcomeMessage,
    });
    const container = root.querySelector(".search-modal-container");

    const defaults = {
        autoInit: false,
        searchUrl: undefined,
        data: [],
        searchKey: "search",
        keyboardShortcuts: true,
        transform: (data) => data,
        callback: () => {},
    };

    const settings = Object.assign({}, defaults, options);

    const generateSearchItem = (item) =>
        `<li class="search-item">
            <a target="_blank" href="${item.url}">
                <div class="search-content">
                    ${
                        item.category
                            ? `<span class="search-tag">${item.category}</span>`
                            : ""
                    }
                    <span class="search-title">${item.title}</span>
                    <span class="search-excerpt">${item.excerpt || ""}</span>
                </div>
                <span class="icon"><svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" class="css-i6dzq1"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></span>
            </a>
        </li>`;

    const debounce = (callback, wait) => {
        let timerId;
        return (...args) => {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                callback(...args);
            }, wait);
        };
    };

    const isEditingContent = (event) => {
        const element = event.target;
        const tagName = element.tagName;

        return (
            element.isContentEditable ||
            tagName === "INPUT" ||
            tagName === "SELECT" ||
            tagName === "TEXTAREA"
        );
    };

    const toggleElm = (elm, show) => {
        if (show) {
            elm.style.display = "initial";
        } else {
            elm.style.display = "none";
        }
    };

    const callCallback = (event, data) => {
        if (typeof settings.callback === "function") {
            settings.callback(event, data);
        }
    };

    const searchInput = container.querySelector("input.search-input");
    const closeModal = container.querySelector(".close-modal");
    const loader = container.querySelector(".search-loader");
    const resultText = container.querySelector(".results-text");
    const searchResults = container.querySelector(".search-results");

    const resultMsg = (text) => {
        searchResults.innerHTML = `<li class="no-result"><span>${text}</span></li>`;
    };
    const closeSearchModal = () => {
        searchInput.value = "";
        toggleElm(container, false);
        toggleElm(resultText, false);
        resultMsg("Write something to search...");
        callCallback("close");
    };

    const searchData = (query) => {
        if ( Array.isArray(settings.data) && settings.data.length) {
            return settings.transform(settings.data).filter((item) => {
                const title = item.title ? item.title.toLowerCase() : '';
                const excerpt = item.excerpt ? item.excerpt.toLowerCase() : '';
                const category = item.category ? item.category.toLowerCase() : '';

                const queryLower = query.toLowerCase();

                return (
                    title.includes(queryLower) ||
                    excerpt.includes(queryLower) ||
                    category.includes(queryLower)
                );
            });
        }
        return [];
    };

    const renderData = (data) => {
        if (data.length) {
            const items = data.map((item) =>
                generateSearchItem(item)
            );
            searchResults.innerHTML = items.join("");
            resultText.innerHTML = `${data.length} result(s) found`;
        } else {
            resultMsg("No result found...");
        }
    };

    const searchRequest = (query) => {
        if (!query || query.length <= 2) {
            resultMsg("Write minimum 3 characters to search...");
            return;
        }
        callCallback("searching", query);
        toggleElm(loader, true);

        // check the url has already query params
        const hasQueryParams = settings.searchUrl.indexOf("?") !== -1;
        const searchUrl = `${settings.searchUrl}${hasQueryParams ? "&" : "?"}${
            settings.searchKey
        }=${query}`;

        fetch(searchUrl, {})
            .then((response) => response.json())
            .then((data) => {
                callCallback("searched", data);
                toggleElm(loader, false);
                toggleElm(resultText, true);
                renderData(settings.transform(data));
            })
            .catch((error) => {
                callCallback("error", error);
                resultMsg("No result found...");
                toggleElm(resultText, false);
            });
    };

    const triggerSearch = (value) => {
        if( settings.searchUrl ){
            searchRequest(value);
        }else{
            renderData(searchData(value));
            toggleElm(loader, false);
            toggleElm(resultText, true);
        }
    };

    const initialize = () => {
        searchInput.addEventListener(
            "input",
            debounce((event) => {
                triggerSearch(event.target.value);
            }, 1000)
        );
        closeModal.addEventListener("click", closeSearchModal);

        if (settings.keyboardShortcuts) {
            document.addEventListener("keydown", function (event) {
                const isOpen = container.style.display !== "none";
                if (event.key === "Escape" && isOpen) {
                    event.preventDefault();
                    closeSearchModal();
                    return;
                }
                if (
                    // The `Cmd+K` shortcut both opens and closes the modal.
                    (event.key === "k" && (event.metaKey || event.ctrlKey)) ||
                    // The `/` shortcut opens but doesn't close the modal because it's a character.
                    (!isEditingContent(event) && event.key === "/" && !isOpen)
                ) {
                    event.preventDefault();
                    toggleElm(container, !isOpen);
                    searchInput.focus();
                }
            });
        }
        document.body.appendChild(root);
        callCallback("init");
    };

    if (settings.autoInit) {
        initialize();
    }

    return {
        /**
         * Check if the search modal is open
         * @returns {bool} true if search modal is open
         */
        isOpened: () => container.style.display !== "none",

        /**
         * Open the search modal
         * @returns {void}
         * @example
         * searchModal.open();
         */
        open: () => {
            toggleElm(container, true);
            searchInput.focus();
            callCallback("open");
        },

        /**
         * Close the search modal
         * @returns {void}
         * @example
         * searchModal.close();
         * 
         */
        close: closeSearchModal,

        /**
         * Initialize the search modal
         * @returns {void}
         * @example
         * searchModal.init();
         */
        init: initialize,
    };
};
// window.SearchModal = SearchModal;
export default SearchModal;
