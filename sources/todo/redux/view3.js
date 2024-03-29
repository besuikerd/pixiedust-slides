export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render() {
    const { todo, completeTodo, deleteTodo } = this.props

    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.text}
      editing={this.state.editing}
      onSave={(text) => this.handleSave(todo.id, text)} />
    )
    } else {
      element = (
        <div className="view">
        <input className="toggle"
      type="checkbox"
      checked={todo.completed}
      onChange={() => completeTodo(todo.id)} />
    <label onDoubleClick={this.handleDoubleClick}>
      {todo.text}
    </label>
      <button className="destroy"
      onClick={() => deleteTodo(todo.id)} />
    </div>
    )
    }

    return (
      <li className={classnames({
      completed: todo.completed,
      editing: this.state.editing
  })}>
    {element}
  </li>
  )
  }
}

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return (
      <header className="header">
      <h1>todos</h1>
      <TodoTextInput newTodo
    onSave={this.handleSave}
    placeholder="What needs to be done?" />
      </header>
  )
  }
}