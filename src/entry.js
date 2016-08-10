require("normalize.css");
require("styles/main.less");

const React = require("react"),
      ReactDOM = require("react-dom"),
      { Router, browserHistory } = require("react-router"),
      routes = require("routes");

document.addEventListener("DOMContentLoaded", function () {
    ReactDOM.render(
        <Router history={browserHistory} routes={routes} />,
        document.querySelector("#container")
    );
});