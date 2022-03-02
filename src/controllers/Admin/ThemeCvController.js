const themeCvService = require('../../services/theme_cv.service');
module.exports = class ThemeCvController {
    static async getAllThemeCv(req, res)
    {
        const roleReq = req.query.role;
        const themeCvs = await themeCvService.getAll(roleReq);
        res.status(200).json(themeCvs);
    }
    static async createThemeCv(req, res) {
        const check = await themeCvService.create(req.body);
        if (check)
        {
            res.status(200).json({
                message: themeCvService.getMessage()
            })
        }
        else {
            res.status(404).json({
                error: themeCvService.getError()
            })
        }
    }
}