const {
    textType
} = require('../common/term.common');
const modelThemeCv = require('../models/theme_cv.model');
const modelColorThemeCv = require('../models/color_theme_cv');
const modelCategoryThemeCv = require('../models/category_theme_cv');
module.exports = class ThemeCvService {
    // Get all
    static getAll(role) {
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
    static create(themeCv) {
        if (!this.isValid(themeCv)) {
            return false;
        }
        console.log(themeCv);
        modelThemeCv.create(themeCv).then(valueThemeCv => {
            themeCv.arrColor.forEach(valueColorThemeCv => {
                const colorThemeCvNew = {
                    idThemeCv: valueThemeCv._id,
                    color: valueColorThemeCv,
                }
                modelColorThemeCv.create(colorThemeCvNew);
            });

            themeCv.arrCategory.forEach(valueCategoryThemeCv => {
                const categoryThemeCvNew = {
                    idThemeCv: valueThemeCv._id,
                    name: valueCategoryThemeCv
                }
                modelCategoryThemeCv.create(categoryThemeCvNew);
            })
        });

        this.setMessage(`Thêm theme [${themeCv.name}] thành công`);
        return true;
    }
    //Edit
    static edit(id, themeCv) {
        if (!this.isValid(themeCv)) {
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
    static delete(id) {
        if (id == null) {
            return false;
        }
        const themeCvDelete = modelThemeCv.findByIdAndDelete(id).then();
        return themeCvDelete;

    }
    // isValid
    static isValid(themeCv) {
        if (themeCv.name == '' || themeCv.name == undefined || themeCv.name == null) {
            this.setMessage('Tên theme không được để trống');
            return false;
        }

        if (themeCv.name.length > 250) {
            this.setMessage("Tên theme vượt quá ký tự cho phép");
            return false;
        }

        if (themeCv.type == '' || themeCv.type == undefined || themeCv.type == null) {
            this.setMessage('Vui lòng chọn các hình thức cho theme!');
            return false;
        }
        return true;
    }

    static getError() {
        return this.message;
    }

    static setError(message) {
        this.message = message;
    }

    static getMessage() {
        return this.message;
    }

    static setMessage(message) {
        this.message = message;
    }
}