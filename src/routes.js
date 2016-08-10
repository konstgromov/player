module.exports = {
    path: "/",
    component: require("components/App"),
    childRoutes: [
        {
            path: "/login",
            component: require("components/Login")
        }, {
            path: "*",
            component: require("components/NotFound")
        }
    ]
};