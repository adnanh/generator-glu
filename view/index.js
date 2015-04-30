'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'GLU view name'
        });

        this.log('Creating GLU view: ' + changeCase.pascal(this.name) + '.');
    },
    writing: function () {
        this.destinationRoot(this.env.cwd);

        this.fs.copyTpl(
            this.templatePath('componentView.js'),
            this.destinationPath(changeCase.pascal(this.name) + 'View.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );
    }
});
