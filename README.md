# generator-glu
> [Yeoman](http://yeoman.io) generator


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

To install generator-glu from npm, run:

```bash
npm install -g generator-glu
```

### App generator
This command will bootstrap the current directory for GLU project...
```bash
yo glu
```

### Subgenerators
*Note:* If you didn't use `yo glu` command, you have to place the `.yo-rc.json` file with the following content
```json
{
    "generator-glu": {}
}
```
in the project root directory, in order for subgenerators to work properly.


#### Action
```bash
yo glu:action name
```

Executing the command will create the following files:
```
   create src/actions/NameActions.js
   create src/actions/NameActionCreator.js
```

#### Api
```bash
yo glu:api name
```

Executing the command will create the following files:
```
   create src/apis/NameApi.js
```

#### Component
```bash
yo glu:component name
```

Executing the command will create the following files:
```
   create src/components/name/NameView.js
   create src/components/name/NameViewController.js
   create src/components/name/NameViewEvents.js
```

#### Component with React view (React Component) 
```bash
yo glu:reactcomponent name
```

Executing the command will create the following files:
```
   create src/components/name/NameView.js
   create src/components/name/NameViewController.js
   create src/components/name/NameViewEvents.js
   create src/components/name/NameViewReact.js
```

#### Page
```bash
yo glu:page name
```

Executing the command will create the following files:
```
   create src/pages/name/NameView.js
   create src/pages/name/NameViewController.js
```

#### Store
```bash
yo glu:store name
```

Executing the command will create the following files:
```
   create src/stores/NameStore.js
```

#### View
```bash
yo glu:view name
```

Executing the command will create the following files:
```
   create NameView.js
```

#### React view
```bash
yo glu:reactview name
```

Executing the command will create the following files:
```
   create NameViewReact.js
```

#### View controller
```bash
yo glu:viewcontroller name
```

Executing the command will create the following files:
```
   create NameViewController.js
```

#### View events
```bash
yo glu:viewevents name
```

Executing the command will create the following files:
```
   create NameViewEvents.js
```

## License

MIT
# generator-glu
