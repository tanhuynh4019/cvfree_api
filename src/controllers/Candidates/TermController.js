const tearmService = require('../../services/term.service');
module.exports = class TermController {
    // Fetch all tearm (status)
    static async fetchAllTerm(req, res, next) {
        const terms = await tearmService.getAll(req.query.type);
        res.status(200).json(terms);
    }
    // Fetch by ID tearm
    static async fetchByIDTerm(req, res, next) {
        res.status(200).json({
            id: req.params.id
        })
    }
}