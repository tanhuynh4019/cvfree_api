const employerService = require('../../services/employer.service');
const employerModel = require('../../models/Employer/EmployerModel');

module.exports = class EmployerController {
    // Get All
    static async fetchAllEmployer(req, res, next) {
        const employer = await employerService.getAll();
        res.status(200).json(employer);
    }

    // GetByID
    static async getByID(req, res, next) {
        const employer = await employerService.getByID();
        res.status(200).json(employer);
    }

    // Create
    static async createEmployer(req, res, next) {
        const check = await employerService.create(req.body);
        if (check) {
            res.status(200).json({
                message: employerService.getMessage()
            });
        } else {
            res.status(404).json({
                error: employerService.getError()
            });
        }
    }

    // Delete
    static async deleteEmployer(req, res, next) {
        const employer = await employerService.delete(req.params.id);
        if (employer) {
            res.status(200).json({
                message: employerService.getMessage()
            });
        } else {
            res.status(404).json({
                error: 'Không tìm thấy dữ liệu'
            });
        }
    }

    // Edit
    static async editEmployer(req, res, next) {
        console.log('adadadad');
        const check = await employerService.edit(req.params.id, req.body);
        if (check) {
            res.status(200).json({
                message: employerService.getMessage()
            });
        } else {
            res.status(404).json({
                error: employerService.getError()
            });
        }
    }
}