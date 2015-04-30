'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var done = this.async();

        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the extraordinary ' + chalk.red('glu') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'projectName',
            message: 'What is the name of your project:',
            default: this.appname
        }];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;
            done();
        }.bind(this));
    },

    writing: {
        app: function () {
            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                {
                    projectName: this.props.projectName
                }
            );
            this.fs.copyTpl(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json'),
                {
                    projectName: this.props.projectName
                }
            );

            this.fs.copyTpl(
                this.templatePath('template.html'),
                this.destinationPath('template.html'),
                {
                    projectName: this.props.projectName
                }
            );

            this.fs.copy(
                this.templatePath('_gitignore'),
                this.destinationPath('.gitignore')
            );

            this.fs.copy(
                this.templatePath('_eslintrc'),
                this.destinationPath('.eslintrc')
            );

            this.fs.copy(
                this.templatePath('_yo-rc.json'),
                this.destinationPath('.yo-rc.json')
            );

            this.fs.copy(
                this.templatePath('Gruntfile.js'),
                this.destinationPath('Gruntfile.js')
            );

            // create project directory tree
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('assets/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('demo/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/actions/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/stores/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/pages/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/components/.gitkeep')
            );
            this.fs.copy(
                this.templatePath('gitkeep'),
                this.destinationPath('src/apis/.gitkeep')
            );
        },

        projectfiles: function () {
            this.fs.copy(
                this.templatePath('app.js'),
                this.destinationPath('src/app.js')
            );

            this.fs.copy(
                this.templatePath('appConfig.js'),
                this.destinationPath('src/appConfig.js')
            );

            this.fs.copy(
                this.templatePath('routes.js'),
                this.destinationPath('src/routes.js')
            );

            this.fs.copyTpl(
                this.templatePath('config.json'),
                this.destinationPath('src/config.json'),
                {
                    projectName: this.props.projectName
                }
            );
        }
    },

    install: function () {
        this.installDependencies();
    }
});
