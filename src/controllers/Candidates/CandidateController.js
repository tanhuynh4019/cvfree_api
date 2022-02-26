const tearmService = require('../../services/term.service');
module.exports = class TermController {
    // Fetch all tearm (status)
    static async fetchAllTerm(req, res, next) {
        res.status(200).json({
            type: req.params.type
        })
    }
    // Fetch by ID tearm
    static async fetchByIDTerm(req, res, next) {
        res.status(200).json({
            id: req.params.id
        })
    }
}