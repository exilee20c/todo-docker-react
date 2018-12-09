import React, {Component} from 'react'
import {render} from 'react-dom'

import Docker from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>TODO DOCKER REACT rules!</h1>

      <Docker storage="_exl_todo_storage" title="TODO DOCKER REACT"/>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
