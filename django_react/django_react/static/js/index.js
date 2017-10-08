class Component extends React.Component {

    constructor (){
        super()
        this.state = {
            tv_shows : []
        }
    }

    componentWillMount(){
        var this_ = this

        $.get('http://127.0.0.1:8000/api/tv_show', function (data, status) {
            this_.setState({tv_shows: data})
        })
    }

    render() {
        var data = this.state.tv_shows
        var dataList = data.map(function (object, index) {
            return ( 
                <li className = "list-group-item" key= {index.toString()}>
                    {object.title}
                </li>
            )
        })

        return (
            <div>{dataList}</div>
        )

    }
}

ReactDOM.render(
    <Component />,
    document.getElementById('component')
)