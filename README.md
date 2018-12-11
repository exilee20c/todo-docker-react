# todo-docker-react

[![Build Status](https://travis-ci.org/exilee20c/todo-docker-react.svg?branch=master)](https://travis-ci.org/exilee20c/todo-docker-react)
[![npm package][npm-badge]][npm]
[![Coverage Status](https://coveralls.io/repos/github/exilee20c/todo-docker-react/badge.svg?branch=master)](https://coveralls.io/github/exilee20c/todo-docker-react?branch=master)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Ftodo-docker-react.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Ftodo-docker-react?ref=badge_shield)

## USAGE 

My GitHub Page also use todo-docker-react.

![My GitHub Page](https://raw.githubusercontent.com/exilee20c/todo-docker-react/master/public/todo-docker-react.png)]

import as any other react based components.

```javascript
import TodoDocker from "todo-docker-react";
```

```javascript
<TodoDocker title="Notepad"/>
```

and insert above code where you want, and the result may be...

```javascript
class TheContainer extends Component {
  render() {
    return <div>
      <h1>TODO DOCKER REACT rules!</h1>

      <TodoDocker title="Notepad"/>
    </div>
  }
}
```

## PROPS

currently, todo-docker-react (call it, TDR) has 2 props. one is **title**, and another is **storage**.

* **title** is title of ui.
* **storage** is the name of item which localStorage set. (default: _exl_todo)

for examples, below image is localStorage of what uses TDR, without storage props.

![LocalStorage](https://raw.githubusercontent.com/exilee20c/todo-docker-react/master/public/todo-docker-react-ls.png)

because of no storage props, default value *_exl_todo* was set.

If you want other localStorage item name(e.g. my_storage), just set storage props to it. The result may...

```javascript
<TodoDocker title="Notepad" storage="my_storage" />
```

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fexilee20c%2Ftodo-docker-react.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fexilee20c%2Ftodo-docker-react?ref=badge_large)