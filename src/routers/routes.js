const routeCandidateTerm = require('../routers/candidates/term.router');
const routerCandidateCandidate = require('../routers/candidates/candidate.router');
const routeAdminTerm = require('../routers/admin/term.router');
const routerAdminCandidate = require('../routers/admin/candidate.router');

module.exports = function route(app) {
    //api
    app.get('/', (req, res) => {
        res.send('Home api!')
    })
    // candidates

    app.use(routeCandidateTerm);
    app.use(routerCandidateCandidate);
    //admin
    app.use(routeAdminTerm);
    app.use(routerAdminCandidate);
    //employees
}