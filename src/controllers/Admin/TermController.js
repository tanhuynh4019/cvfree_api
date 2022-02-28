const termService = require('../../services/term.service');
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
       const check = await termService.create(req.body);
       if (check) {
           res.status(200).json({
               message: termService.GetMessage()
           })
       } else {
           res.status(404).json({
               error: termService.GetError()
           })
       }
   }
    // Edit a tearm
    static async editTerm(req, res, next) {
        const check = await termService.edit(req.params.id, req.body);
        if (check) {
            res.status(200).json({
                message: termService.GetMessage()
            })
        } else {
            res.status(404).json({
                error: termService.GetError()
            })
        }
    }
    // Delete a tearm
    static async deleteTerm(req, res, next) {
       const check = await termService.delete(req.params.id);
       if (check) {
           res.status(200).json({
               message: termService.GetMessage()
           })
       } else {
           res.status(404).json({
               error: termService.GetError()
           })
       }
    }
}