const candidateService = require('../../services/cadidate.service');
module.exports = class CandidateController {
    // Fetch all candidate (status)
    static async fetchAllCandidate(req, res, next) {
        const candidate = await candidateService.getAll();
        res.status(200).json(candidate);
    }
    // Fetch by ID candidate
    static async fetchByIDCandidate(req, res, next) {
        const candidate = await candidateService.getByID(req.params.id);
        res.status(200).json(candidate);
    }
    // Create a candidate
    static async createCandidate(req, res, next) {
        const check = await candidateService.create(req.body);
        if (check) {
            res.status(200).json({
                message: candidateService.GetMassage()
            });
        } else {
            res.status(404).json({
                error: candidateService.GetError()
            });
        }
    }
    // Edit a candidate
    static async editCandidate(req, res, next) {
        const check = await candidateService.edit(req.params.id, req.body);
        if (check) {
            res.status(200).json({
                message: candidateService.GetMassage()
            });
        } else {
            res.status(404).json({
                error: candidateService.GetError()
            });
        }
    }
    // Delete a candidate
    static async deleteCandidate(req, res, next) {
        const check = await candidateService.delete(req.params.id);
        if (check) {
            res.status(200).json({
                message: candidateService.GetMassage()
            });
        } else {
            res.status(404).json({
                error: candidateService.GetError()
            });
        }
    }
}