export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  handleShow = filter => {
    this.setState({ filter })
  }

  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
        <input className="toggle-all"
      type="checkbox"
      checked={completedCount === todos.length}
      onChange={actions.completeAll} />
    )
    }
  }

  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
      activeCount={activeCount}
      filter={filter}
      onClearCompleted={this.handleClearCompleted}
      onShow={this.handleShow} />
    )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
        todo.completed ? count + 1 : count,
      0
    )

    return (
      <section className="main">
      {this.renderToggleAll(completedCount)}
  <ul className="todo-list">
      {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
  )}
  </ul>
    {this.renderFooter(completedCount)}
  </section>
  )
  }
}