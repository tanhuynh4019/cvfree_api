const routeCandidateTerm = require('../routers/candidates/term.router');
const routeAdminEmployer = require('../routers/admin/employer.router');
const routeAdminTerm = require('../routers/admin/term.router');
const routeEmployer = require('../routers/employers/employer.router');
module.exports = function route(app) {
    //api
    app.get('/', (req, res) => {
            res.send('Home api!')
        })
        // candidates

    app.use(routeCandidateTerm);
    //admin
    app.use(routeAdminTerm);
    app.use(routeAdminEmployer);
    //employees
    app.use(routeEmployer);
}