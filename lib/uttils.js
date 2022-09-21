// function which is create a new element
function createEl(tag, options) {
    const el = document.createElement(tag);

    if (options) {
        for (const key in options) {
            if (options.hasOwnProperty(key)) {
                el[key] = options[key];
            }
        }
    }

    return el;
}

// function which is create a new modal
function createModal(options) {
    const modal = createEl('div', {
        className: 'modal',
        innerHTML: `
            <div class="modal-overlay" data-close="true">
                <div class="modal-window" style="width: ${options.width || '600px'}">
                    <div class="modal-header">
                        <span class="modal-title">${options.title || 'Modal title'}</span>
                        ${options.closable ? `<span class="modal-close" data-close="true">&times;</span>` : ''}
                    </div>
                    <div class="modal-body" data-content>
                        ${options.content || ''}
                    </div>
                </div>
            </div>
        `
    });

    const footer = createEl('div', {
        className: 'modal-footer'
    });

    options.footerButtons.forEach(btn => {
        const $btn = createEl('button', {
            className: 'modal-btn',
            textContent: btn.text,
            onclick: btn.handler || null
        });

        footer.appendChild($btn);
    });

    modal.querySelector('[data-content]').appendChild(footer);

    document.body.appendChild(modal);

    return modal;
}
