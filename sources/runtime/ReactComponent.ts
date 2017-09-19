interface ReactComponent<Props> {
    componentWillReceiveProps : Props => ()
    render : Props => ReactElement
}