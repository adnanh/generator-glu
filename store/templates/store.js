import GLU from 'glu.js';
// import <%= storeName %>Actions from '/actions/<%= storeName %>Actions';

class <%= storeName %>Store extends GLU.Store {
    constructor() {
        super();

        /*
        // listen for actions

        this.bindActions(
            <%= storeName %>Actions.ACTION, this.actionHandler, [],
            <%= storeName %>Actions.ACTION_2, this.actionTwoHandler, []
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

export default new <%= storeName %>Store();
