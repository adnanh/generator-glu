import GLU from 'glu.js';
import <%= name %>ViewEvents from './<%= name %>ViewEvents';

class <%= name %>ViewController extends GLU.ViewController {
    constructor(view) {
        super(view);
    }

    destroy() {
    }
}

export default <%= name %>ViewController;
