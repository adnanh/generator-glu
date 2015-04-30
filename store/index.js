'use strict';
var yeoman = require('yeoman-generator');
var changeCase = require('change-case');

module.exports = yeoman.generators.Base.extend({
  initializing: function () {
    this.argument('name', {
      required: true,
      type: String,
      desc: 'Store name'
    });

    this.log('Creating store: ' + changeCase.pascal(this.name) + '.');
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('store.js'),
      this.destinationPath('src/stores/'+changeCase.pascal(this.name)+'Store.js'),
      {
          storeName: changeCase.pascal(this.name)
      }
    );
  }
});
