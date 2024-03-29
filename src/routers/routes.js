const routeCandidateTerm = require('../routers/candidates/term.router');
const routeCandidateThemeCv = require('../routers/candidates/theme_cv.router');
const routeCandidateAccount = require('../routers/candidates/account.router');
const routeAdminTerm = require('../routers/admin/term.router');
const routeAdminThemeCv = require('../routers/admin/theme_cv.router');

module.exports = function route(app) {
    //api
    app.get('/', (req, res) => {
        res.send('Home api!')
    })
    // candidates

    app.use(routeCandidateTerm);
    app.use(routeCandidateThemeCv);
    app.use(routeCandidateAccount);
    //admin
    app.use(routeAdminTerm);
    app.use(routeAdminThemeCv);
    //employees
}