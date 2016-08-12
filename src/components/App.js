const React = require("react"),
      { Link } = require("react-router");

class App extends React.Component {
    render() {
        const buttonsData = [
            { path: "/", text: "Home" },
            { path: "/registration", text: "Registration" },
            { path: "/login", text: "Login" }
        ];

        const buttons = buttonsData.map(({ path, text }, i) => {
            const buttonProps = {
                key: i,
                to: path,
                className: "menu__button",
                activeClassName: "menu__button_active",
                onlyActiveOnIndex: true
            };

            return <Link {...buttonProps}>{text}</Link>
        });

        return (
            <div>
                <div className="menu">{buttons}</div>
                <div className="content">{this.props.children}</div>
            </div>
        );
    }
}

App.contextTypes = {
    router: React.PropTypes.object.isRequired
};

module.exports = App;