const React = require("react");

class App extends React.Component {
    render() {
        return (
            <div>
                <input style={{ position: "absolute", top: "20px", left: "20px" }} ref={(input) => {
                    if (input) {
                        input.oninput = () => {
                            this.context.router.push(input.value);
                        };
                    }
                }} type="text" />
                {this.props.children}
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = App;