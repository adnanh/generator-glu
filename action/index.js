'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Action name'
        });

        this.log('Creating Actions and ActionCreator for: ' + this.name + '.');
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('actions.js'),
            this.destinationPath('src/actions/' + changeCase.pascal(this.name) + 'Actions.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );

        this.fs.copyTpl(
            this.templatePath('actionCreator.js'),
            this.destinationPath('src/actions/' + changeCase.pascal(this.name) + 'ActionCreator.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );
    }
});
