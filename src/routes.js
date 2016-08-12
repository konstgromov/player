module.exports = {
    path: "/",
    component: require("components/App"),
    indexRoute: {
        component: require("components/Playlist")
    },
    childRoutes: [
        {
            path: "/registration",
            component: require("components/Registration")
        }, {
            path: "/login",
            component: require("components/Login")
        }, {
            path: "*",
            component: require("components/NotFound")
        }
    ]
};