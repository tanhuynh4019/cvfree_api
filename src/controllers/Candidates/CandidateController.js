const candidateService = require('../../services/cadidate.service');
module.exports = class CandidateController {
    // Fetch by ID candidate
    static async fetchByIDCandidate(req, res, next) {
        const candidate = await candidateService.getByID(req.params.id);
        res.status(200).json(candidate);
    }
    // Login a Candidate
    static async loginCandidate(req, res) {
        res.status(200).json({
            email: req.body.email,
            password: req.body.password
        });
    }
    // SignUp a Candidate
    static async singUpCandidate(req, res) {
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
}