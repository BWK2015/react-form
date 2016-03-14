var React = require('react');
var validator = require('email-validator');

var EmailField = React.createClass({
    getInitialState: function(){
        return {
            valid: true,
            value: ""
        }
    },
    onChange: function(e){
        var val = e.target.value;
        if(!validator.validate(e.target.value)){
            this.setState(function(prevState, props){
                return {
                    valid: false,
                    value: e.target.value
                }
            })   
        } else {
            this.setState(function(prevState, props){
                return {
                    valid: true,
                    value: e.target.value
                }
            })   
        }
    },
    render: function(){
        var FormClass = this.state.valid ? "form-group" : "form-group has-error";
        return (
            <div className={FormClass}>
                <input className="form-control" onChange={this.onChange} placeholder="Email" value={this.state.value} />
            </div>
            )
    }
});

module.exports = EmailField;