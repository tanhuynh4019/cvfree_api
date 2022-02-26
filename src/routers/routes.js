const routeCandidateTerm = require('../routers/candidates/term.router');
const routeAdminTerm = require('../routers/admin/term.router');

module.exports = function route(app) {
    //api
    app.get('/', (req, res) => {
        res.send('Home api!')
    })
    // candidates

    app.use(routeCandidateTerm);
    //admin
    app.use(routeAdminTerm);
    //employees
}