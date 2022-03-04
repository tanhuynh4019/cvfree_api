const themeCvService = require('../../services/theme_cv.service');
module.exports = class ThemeCvController {
    static async getAllThemeCv(req, res) {
        const roleReq = req.query.role;
        const themeCvs = await themeCvService.getAll(roleReq);
        res.status(200).json(themeCvs);
    }
}