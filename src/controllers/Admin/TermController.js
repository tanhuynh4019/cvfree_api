const tearmService = require('../../services/term.service');
module.exports = class TermController {
    // Fetch all tearm (status)
    static async fetchAllTerm(req, res, next) {
        res.status(200).json({})
    }
    // Fetch by ID tearm
    static async fetchByIDTerm(req, res, next) {
        res.status(200).json({
            id: req.params.id
        })
    }
    // Create a tearm
    static async createTerm(req, res, next) {
        res.status(200).json(req.body)
    }
    // Edit a tearm
    static async editTerm(req, res, next) {
        res.status(200).json({
            data: req.body,
            id: req.params.id
        })
    }
    // Delete a tearm
    static async deleteTerm(req, res, next) {
        res.status(200).json({
            id: req.params.id
        })
    }
}