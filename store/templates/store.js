import GLU from 'glu.js';

class <%= storeName %> extends GLU.Store {
    constructor() {
        super();

        /*
        // listen for actions

        this.bindActions(
            ExampleActions.ACTION, this.actionHandler, [],
            ExampleActions.ACTION_2, this.actionTwoHandler, []
        );
        */
    }

    /*
    // action handler

    actionHandler(payload) {
        // do something

        // dispatch the store change event
        this.emitChange();
    }
    */
}

export default new <%= storeName %>();
