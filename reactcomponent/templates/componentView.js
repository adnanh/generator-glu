import GLU from 'glu.js';
import React from 'react';
import <%= name %>ViewReact from './<%= name %>ViewReact';
import <%= name %>ViewEvents from './<%= name %>ViewEvents';

class <%= name %>View extends GLU.View {
    constructor(root, selector) {
        super(root, selector);
    }

    onViewRender() {
        let onDoneRendering = () => {
            // invoke GLU sub view's render here
        };
        React.render(
            <<%= name %>ViewReact view={this}/>, this.el, onDoneRendering);
    }

    destroy() {
        React.unmountComponentAtNode(this.el);
    }
}
export default <%= name %>View;
