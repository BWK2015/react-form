var React = require('react');

var NameField = React.createClass({
    getInitialState: function(){
        return {
            value: ""   
        }
    },
    onChange: function(e){
        this.setState(function(prevState, props){
            return {
                value:  e.target.value  
            }
        })  
    },
    render: function(){
        return (
            <input className="form-control" onChange={this.onChange} placeholder={this.props.type + " Name"} value={this.state.value} />
            );
    }
});

module.exports = NameField;