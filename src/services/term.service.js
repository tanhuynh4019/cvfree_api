const termCommon = require('../common/term.common');
const {
    textType
} = require('../common/term.common');
const modelTerm = require('../models/term.model');
module.exports = class TermService {
    // Get all status
    static getAll(type) {
        return modelTerm.find({
            type: type
        }).sort([
            ['name', 'ascending']
        ]);
    }
    // Find id
    // Create
    static create(term) {
        if (!this.IsValid(term)) {
            return false;
        }
        modelTerm.create(term);
        this.SetMessage(`Tạo ${textType(term.type)} [${term.name}] thành công!`);
        return true;
    }
    // Edit
    static edit(id, term)
    {
        if (!this.IsValid(term)) {
            return false;
        }
        const termNew = modelTerm.findByIdAndUpdate(id, term).then(value => {
            value.dateEdit = Date.now();
            value.save();
            return true;
        });
        this.SetMessage(`Sửa ${textType(term.type)} thành [${term.name}] thành công!`);
        return termNew;
    }
    //Delete
    static delete(id) {
        if (id === null) {
            return false;
        }

        const term = modelTerm.findByIdAndDelete(id).then();
        this.SetMessage(`Xóa thành công`);
        return term;
    }
    // isValid
    static IsValid(term) {
        if (term.type === null || term.type === undefined || term.type === '') {
            this.SetError('Vui lòng chọn loại chuyên mục!')
            return false;
        }

        if (Number(term.type) == 0) {+
            this.SetError('Vui lòng chọn đúng loại danh mục đang tồn tại!');
            return false;
        }

        if (term.name === null || term.name === undefined || term.name === '') {
            this.SetError('Tên chuyên mục không được bỏ trống!');
            return false;
        }

        if (term.name.length > 150) {
            this.SetError('Tên chuyên mục vượt quá số ký tự cho phép!');
            return false;
        }
        return true;
    }

    static GetError() {
        return this.message;
    }

    static SetError(message) {
        this.message = message;
    }

    static GetMessage() {
        return this.message;
    }

    static SetMessage(message) {
        this.message = message;
    }
}