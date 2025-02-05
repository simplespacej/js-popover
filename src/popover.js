class Popover {
    constructor(button, title, content) {
        this.button = button;
        this.title = title;
        this.content = content;
        this.popover = null;

        this.button.addEventListener('click', () => this.toggle());
    }

    createPopover() {
        const popover = document.createElement('div');
        popover.classList.add('popover');
        popover.innerHTML = `
            <div class="popover-header">${this.title}</div>
            <div class="popover-body">${this.content}</div>
        `;
        document.body.appendChild(popover);
        this.popover = popover;
        this.positionPopover();
    }

    positionPopover() {
        const rect = this.button.getBoundingClientRect();
        const popoverRect = this.popover.getBoundingClientRect();

        this.popover.style.top = `${rect.top - popoverRect.height - 10}px`;
        this.popover.style.left = `${rect.left + rect.width / 2 - popoverRect.width / 2}px`;
    }

    toggle() {
        if (this.popover) {
            this.popover.remove();
            this.popover = null;
        } else {
            this.createPopover();
        }
    }
}

export default Popover;
