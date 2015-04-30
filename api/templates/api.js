import GLU from 'glu.js';

class <%= name %>Api extends GLU.Api {
    constructor(endpoint) {
        super(endpoint);

        /*
        // create API actions here

        this.createApiActions({
            name: 'getExample',
            method: GLU.Api.Get,
            path: '/Example/{exampleID}',
            credentials: true
        });
        */
    }
}

export default <%= name %>Api;
