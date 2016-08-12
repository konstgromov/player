const React = require("react");

class Registration extends React.Component {
    render() {
        return (
            <form onSubmit={(event) => event.preventDefault()}>
                <h2>Registration</h2>
                <input type="text" placeholder="E-mail" />
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Password" />
                <button type="submit">Send</button>
            </form>
        );
    }
}

module.exports = Registration;