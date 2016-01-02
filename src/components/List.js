var React = require('react');
var ListItem = require('./ListItem');

var ingredients = [{"id": 1, "text":"ham"},{"id": 2, "text":"cheese"},{"id": 3, "text":"pickle"}];

var List = React.createClass({
    render: function(){
        var ListItems = ingredients.map(function(item){
            return <ListItem key={item.id} ingredient={item.text} />   
        });
        
        return (
            <ul>
                {ListItems}
            </ul>
            )
    }
});

module.exports = List;