var React = require('react');
var EmailField = require('./EmailField');
var NameField = require('./NameField')

var LeadCapture = React.createClass({
    onSubmit: function(e){
        console.log(this.refs);
        if(!this.refs.fieldEmail.state.valid){
            alert("Invalid email entry")
        } else {
            var httpBodyRequest = {
                firstName: this.refs.fieldFirstName.state.value,
                lastName: this.refs.fieldLastName.state.value,
                email: this.refs.fieldEmail.state.value
            };
            alert(JSON.stringify(httpBodyRequest));
        }
    },
    render: function(){
        return (
            <div className="col-sm-3">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <NameField type={"First"} ref="fieldFirstName"/>
                        <NameField type={"Last"} ref="fieldLastName" />
                        <EmailField ref="fieldEmail" />
                        <button className="btn btn-primary" onClick={this.onSubmit}>Click Me</button>
                    </div>
                </div>
            </div>
            )
    }
});

module.exports = LeadCapture;