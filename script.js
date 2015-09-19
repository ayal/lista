var lista = {list: [
    {name: 'hi', tags: '', text: ''},
    {name: 'hello', tags: '', text: ''}
]};

var Lista = React.createClass({
  getInitialState: function() {
    return {term: ''};
  },
  componentDidMount: function() {

  },
  componentWillUnmount: function() {

  },
    search:function(e) {
        this.setState({term: e.target.value});
    },
render: function() {
    var that = this;
    var lista = _.map(lista.list,
                       function(x){
                           if (x.name.match(that.state.term) ||
                               x.tags.match(that.state.term) ||
                               x.text.match(that.state.term)) {
                               return (
                                       <li>
                                       <div>
                                       {x.name}
                                   </div>
                                       </li>
                               );
                           }
                           return null;
                       });

    return (
<div className="lista">
  <div>
    <input type="text" placeholde="search" onChange={this.search} value={this.state.term}/>
  </div>
  <ul>
    {lista}
  </ul>
</div>
    );
}
});
