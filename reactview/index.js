'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'React view name'
        });

        this.log('Creating react view: ' + changeCase.pascal(this.name) + '.');
    },
    writing: function () {
        this.destinationRoot(this.env.cwd);

        this.fs.copyTpl(
            this.templatePath('componentViewReact.js'),
            this.destinationPath(changeCase.pascal(this.name) + 'ViewReact.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );
    }
});
