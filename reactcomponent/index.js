'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'Component name'
        });

        this.log('Creating component: ' + changeCase.pascal(this.name) + '.');
    },

    writing: function () {
        this.fs.copyTpl(
            this.templatePath('componentView.js'),
            this.destinationPath('src/components/' + changeCase.camel(this.name) + '/' + changeCase.pascal(this.name) + 'View.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );

        this.fs.copyTpl(
            this.templatePath('componentViewController.js'),
            this.destinationPath('src/components/' + changeCase.camel(this.name) + '/' + changeCase.pascal(this.name) + 'ViewController.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );

        this.fs.copyTpl(
            this.templatePath('componentViewEvents.js'),
            this.destinationPath('src/components/' + changeCase.camel(this.name) + '/' + changeCase.pascal(this.name) + 'ViewEvents.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );

        this.fs.copyTpl(
            this.templatePath('componentViewReact.js'),
            this.destinationPath('src/components/' + changeCase.camel(this.name) + '/' + changeCase.pascal(this.name) + 'ViewReact.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );
    }
});
