const {
    textType
} = require('../common/term.common');
const modelThemeCv = require('../models/theme_cv.model');
module.exports = class ThemeCvService {
    // Get all
    static GetAll(role) {
        let themeCvs = null;
        if (role == 'admin') {
            themeCvs = modelThemeCv.find({
                bin: false
            });
        } else {
            themeCvs = modelThemeCv.find({
                bin: false,
                isActive: true
            });
        }
        return themeCvs;
    }
    //Findby id 
    static findByID(id) {
        const themeCvsById = modelThemeCv.findById(id).then();
        return themeCvsById;
    }
    // Create
    static Create(themeCv) {
        if (!isValid(themeCv)) {
            return false;
        }
        modelThemeCv.create(themeCv);
        this.GetMessage(`Thêm theme [${themeCv.name}] thành công`);
        return true;
    }
    //Edit
    static Edit(id, themeCv) {
        if (!isValid(themeCv)) {
            return false;
        }

        if (id == null) {
            return false;
        }
        themeCv.dateEdit = Date.now();
        const themeCvEdit = modelThemeCv.findByIdAndUpdate(id, themeCv).then();
        return themeCvEdit;
    }
    //Delete 
    static Delete(id) {
        if (id == null) {
            return false;
        }
        const themeCvDelete = modelThemeCv.findByIdAndDelete(id).then();
        return themeCvDelete;

    }
    // isValid
    static IsValid(themeCv) {
        if (themeCv.name == '' || themeCv.name == undefined || themeCv.name == null) {
            this.setMessage('Tên theme không được để trống');
            return false;
        }

        if (themeCv.name.length > 250) {
            this.setMessage("Tên theme vượt quá ký tự cho phép");
            return false;
        }

        if (themeCv.isActive != true || themeCv.isActive != false) {
            this.setMessage('Hoạt động phải là công khai hay chỉ mình tôi, không được thay đổi hình thức!');
            return false;
        }

        if (themeCv.type == '' || themeCv.type == undefined || themeCv.type == null) {
            this.setMessage('Vui lòng chọn các hình thức cho theme!');
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