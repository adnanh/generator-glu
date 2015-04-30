'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Api name'
    });

    this.log('Creating Api for: ' + this.name + '.');
  },

  writing: function () {
    this.fs.copyTpl(
        this.templatePath('api.js'),
        this.destinationPath('src/apis/' + changeCase.pascal(this.name) + 'Api.js'),
        {
          name: changeCase.pascal(this.name)
        }
    );
  }
});
