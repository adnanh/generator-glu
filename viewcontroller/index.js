'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.argument('name', {
            required: true,
            type: String,
            desc: 'GLU viewcontroller name'
        });

        this.log('Creating GLU viewcontroller: ' + changeCase.pascal(this.name) + '.');
    },
    writing: function () {
        this.destinationRoot(this.env.cwd);

        this.fs.copyTpl(
            this.templatePath('componentViewController.js'),
            this.destinationPath(changeCase.pascal(this.name) + 'ViewController.js'),
            {
                name: changeCase.pascal(this.name)
            }
        );
    }
});
