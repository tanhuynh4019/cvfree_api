const modelTool = require('../../models/tool.model')
module.exports = class ToolController {
    static async getAll(req, res)
    {
        const tools = await modelTool.find({});
        res.status(200).json(tools);
    }

    static async getById(req, res)
    {
        var id = req.params.id;
        const tool = await modelTool.findById(id);
        res.status(200).json(tool);
    }

    static async create(req, res) {
        var body = req.body;
        await modelTool.create(body);
        res.status(200).json({
            message: "thêm thành công."
        })
    }

    static async edit(req, res) {
        var id = req.params.id;
        var body = req.body;
        const tool = await modelTool.findByIdAndUpdate(id, body).then(value => {
            value.save();
            return true;
        });

        res.status(200).json({
            message: "cập nhật thành công."
        })
    }

    static async delete(req, res){
        var id = req.params.id;
        await modelTool.findByIdAndDelete(id).then();

        res.status(200).json({
            message: "Xóa thành công."
        })
    }
}