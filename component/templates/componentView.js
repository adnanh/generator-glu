import GLU from 'glu.js';
import <%= name %>ViewEvents from './<%= name %>ViewEvents';

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
