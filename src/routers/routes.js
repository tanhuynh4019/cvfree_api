const routeCandidateTerm = require('../routers/candidates/term.router');
const routeCandidateThemeCv = require('../routers/candidates/theme_cv.router');
const routeAdminTerm = require('../routers/admin/term.router');
const routeAdminThemeCv = require('../routers/admin/theme_cv.router');
const routeAdminTool = require('../routers/admin/tool.router');

module.exports = function route(app) {
    //api
    app.get('/', (req, res) => {
        res.send('Home api!')
    })
    // candidates

    app.use(routeCandidateTerm);
    app.use(routeCandidateThemeCv);
    //admin
    app.use(routeAdminTerm);
    app.use(routeAdminThemeCv);
    app.use(routeAdminTool);
    //employees
}