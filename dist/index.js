module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1).default;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var modalTemplate = function modalTemplate(_ref) {
    var _ref$placeholder = _ref.placeholder,
        placeholder = _ref$placeholder === undefined ? "Search here..." : _ref$placeholder,
        _ref$welcomeMessage = _ref.welcomeMessage,
        welcomeMessage = _ref$welcomeMessage === undefined ? "Write something to search..." : _ref$welcomeMessage;
    return "\n<div class=\"search-modal-container\"\n    aria-modal=\"true\" role=\"dialog\" style=\"display: none\">\n    <div class=\"search-modal\">\n        <div class=\"search-modal-header\">\n            <form class=\"search-form\">\n                <input class=\"search-input\"\n                    spellcheck=\"false\" placeholder=\"" + placeholder + "\" maxlength=\"64\" type=\"search\" value=\"\" />\n            </form>\n            <button\n                class=\"close-modal\" stype=\"button\">\n                <span>Esc</span>\n            </button>\n        </div>\n        \n        <div class=\"search-modal-body small-scrollbar\">\n            <div class=\"search-items\">\n                <div class=\"search-loader\" style=\"display: none;\">\n                    <div role=\"status\">\n                        <svg class=\"search-spinner\" viewBox=\"0 0 100 101\" fill=\"none\"\n                            xmlns=\"http://www.w3.org/2000/svg\">\n                            <path\n                                d=\"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z\"\n                                fill=\"currentColor\" />\n                            <path\n                                d=\"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z\"\n                                fill=\"currentFill\" />\n                        </svg>\n                        <span class=\"sr-only\">Loading...</span>\n                    </div>\n                </div>\n                <div class=\"search-body\">\n                    <ul class=\"search-results search-items\">\n                        <li class=\"no-result\">\n                            <span>\n                                " + welcomeMessage + "\n                            </span>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <div style=\"display: none\" class=\"results-text search-modal-footer\"></div>\n    </div>\n</div>\n\n";
};

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
var SearchModal = function SearchModal() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var root = document.createElement("div");
    root.innerHTML = modalTemplate({
        placeholder: options.placeholder,
        welcomeMessage: options.welcomeMessage
    });
    var container = root.querySelector(".search-modal-container");

    var defaults = {
        autoInit: false,
        searchUrl: undefined,
        data: [],
        searchKey: "search",
        keyboardShortcuts: true,
        transform: function transform(data) {
            return data;
        },
        callback: function callback() {}
    };

    var settings = _extends({}, defaults, options);

    var generateSearchItem = function generateSearchItem(item) {
        return "<li class=\"search-item\">\n            <a target=\"_blank\" href=\"" + item.url + "\">\n                <div class=\"search-content\">\n                    " + (item.category ? "<span class=\"search-tag\">" + item.category + "</span>" : "") + "\n                    <span class=\"search-title\">" + item.title + "</span>\n                    <span class=\"search-excerpt\">" + (item.excerpt || "") + "</span>\n                </div>\n                <span class=\"icon\"><svg viewBox=\"0 0 24 24\" width=\"24\" height=\"24\" stroke=\"currentColor\" stroke-width=\"2\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"css-i6dzq1\"><line x1=\"5\" y1=\"12\" x2=\"19\" y2=\"12\"></line><polyline points=\"12 5 19 12 12 19\"></polyline></svg></span>\n            </a>\n        </li>";
    };

    var debounce = function debounce(callback, wait) {
        var timerId = void 0;
        return function () {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            clearTimeout(timerId);
            timerId = setTimeout(function () {
                callback.apply(undefined, args);
            }, wait);
        };
    };

    var isEditingContent = function isEditingContent(event) {
        var element = event.target;
        var tagName = element.tagName;

        return element.isContentEditable || tagName === "INPUT" || tagName === "SELECT" || tagName === "TEXTAREA";
    };

    var toggleElm = function toggleElm(elm, show) {
        if (show) {
            elm.style.display = "initial";
        } else {
            elm.style.display = "none";
        }
    };

    var callCallback = function callCallback(event, data) {
        if (typeof settings.callback === "function") {
            settings.callback(event, data);
        }
    };

    var searchInput = container.querySelector("input.search-input");
    var closeModal = container.querySelector(".close-modal");
    var loader = container.querySelector(".search-loader");
    var resultText = container.querySelector(".results-text");
    var searchResults = container.querySelector(".search-results");

    var resultMsg = function resultMsg(text) {
        searchResults.innerHTML = "<li class=\"no-result\"><span>" + text + "</span></li>";
    };
    var closeSearchModal = function closeSearchModal() {
        searchInput.value = "";
        toggleElm(container, false);
        toggleElm(resultText, false);
        resultMsg("Write something to search...");
        callCallback("close");
    };

    var searchData = function searchData(query) {
        if (Array.isArray(settings.data) && settings.data.length) {
            return settings.transform(settings.data).filter(function (item) {
                var title = item.title ? item.title.toLowerCase() : '';
                var excerpt = item.excerpt ? item.excerpt.toLowerCase() : '';
                var category = item.category ? item.category.toLowerCase() : '';

                var queryLower = query.toLowerCase();

                return title.includes(queryLower) || excerpt.includes(queryLower) || category.includes(queryLower);
            });
        }
        return [];
    };

    var renderData = function renderData(data) {
        if (data.length) {
            var items = data.map(function (item) {
                return generateSearchItem(item);
            });
            searchResults.innerHTML = items.join("");
            resultText.innerHTML = data.length + " result(s) found";
        } else {
            resultMsg("No result found...");
        }
    };

    var searchRequest = function searchRequest(query) {
        if (!query || query.length <= 2) {
            resultMsg("Write minimum 3 characters to search...");
            return;
        }
        callCallback("searching", query);
        toggleElm(loader, true);

        // check the url has already query params
        var hasQueryParams = settings.searchUrl.indexOf("?") !== -1;
        var searchUrl = "" + settings.searchUrl + (hasQueryParams ? "&" : "?") + settings.searchKey + "=" + query;

        fetch(searchUrl, {}).then(function (response) {
            return response.json();
        }).then(function (data) {
            callCallback("searched", data);
            toggleElm(loader, false);
            toggleElm(resultText, true);
            renderData(settings.transform(data));
        }).catch(function (error) {
            callCallback("error", error);
            resultMsg("No result found...");
            toggleElm(resultText, false);
        });
    };

    var triggerSearch = function triggerSearch(value) {
        if (settings.searchUrl) {
            searchRequest(value);
        } else {
            renderData(searchData(value));
            toggleElm(loader, false);
            toggleElm(resultText, true);
        }
    };

    var initialize = function initialize() {
        searchInput.addEventListener("input", debounce(function (event) {
            triggerSearch(event.target.value);
        }, 1000));
        closeModal.addEventListener("click", closeSearchModal);

        if (settings.keyboardShortcuts) {
            document.addEventListener("keydown", function (event) {
                var isOpen = container.style.display !== "none";
                if (event.key === "Escape" && isOpen) {
                    event.preventDefault();
                    closeSearchModal();
                    return;
                }
                if (
                // The `Cmd+K` shortcut both opens and closes the modal.
                event.key === "k" && (event.metaKey || event.ctrlKey) ||
                // The `/` shortcut opens but doesn't close the modal because it's a character.
                !isEditingContent(event) && event.key === "/" && !isOpen) {
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
        isOpened: function isOpened() {
            return container.style.display !== "none";
        },

        /**
         * Open the search modal
         * @returns {void}
         * @example
         * searchModal.open();
         */
        open: function open() {
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
        init: initialize
    };
};
// window.SearchModal = SearchModal;
exports.default = SearchModal;

/***/ })
/******/ ]);