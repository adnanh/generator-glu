import GLU from 'glu.js';

class <%= name %>View extends GLU.View {
    constructor(root, selector) {
        super(root, selector);
    }

    onViewRender() {
        this.el.innerHTML = '<div></div>';
    }

    destroy() {
    }
}

export default <%= name %>View;
