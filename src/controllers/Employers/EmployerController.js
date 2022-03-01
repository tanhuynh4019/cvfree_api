const employerService = require('../../services/employer.service');
const employerModel = require('../../models/Employer/EmployerModel');
module.exports = class EmployerController {
    // Login Employer
    static async loginEmloyer(req, res, next) {
        res.status(200).json({
            email: req.body.email,
            password: req.body.password
        })
    }

    // SignUp Employer
    static async signUpEmployer(req, res, next) {
        const check = await employerService.create(req.body);
        if (check) {
            res.status(200).json({
                message: employerService.getMessage()
            })
        } else {
            res.status(404).json({ error: employerService.getError() })
        }
    }

    // Get by id
    static async getById(req, res, next) {
        const employer = await employerService.getByID(req.params.id);
        res.status(200).json(employer)
    }

}