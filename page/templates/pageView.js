import GLU from 'glu.js';
import React from 'react';

class <%= pageName %>View extends GLU.View {
    constructor(root, selector) {
        super(root, selector);
    }

    onViewRender() {
        let onDoneRendering = () => {
            // invoke sub glu view render methods here
        };
        React.render(
            <div>
            </div>, this.el, onDoneRendering);
    }

    destroy() {
    }
}

export default <%= pageName %>View;
