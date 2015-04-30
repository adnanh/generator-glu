'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Page name'
    });

    this.log('Creating page: ' + changeCase.pascal(this.name) + '.');
  },

  writing: function () {
    this.fs.copyTpl(
        this.templatePath('pageView.js'),
        this.destinationPath('src/pages/'+changeCase.camel(this.name)+'/'+changeCase.pascal(this.name)+'View.js'),
        {
          pageName: changeCase.pascal(this.name)
        }
    );

    this.fs.copyTpl(
        this.templatePath('pageViewController.js'),
        this.destinationPath('src/pages/'+changeCase.camel(this.name)+'/'+changeCase.pascal(this.name)+'ViewController.js'),
        {
          pageName: changeCase.pascal(this.name)
        }
    );
  }
});
