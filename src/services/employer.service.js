const employerModel = require('../models/Employer/EmployerModel');
module.exports = class EmployerService {
    //Get All 
    static getAll() {
        const employer = employerModel.find();
        return employer;
    }

    // Login


    // SignUp
    static create(employer) {
        if (!this.isValid(employer)) {
            return false
        }
        employerModel.create(employer);
        this.setMessage(`Đăng ký tài khoản [${employer.fullname}] thành công`);
        return true;
    }

    // Delete
    static delete(id) {
        const employer = employerModel.findByIdAndDelete(id);
        this.setMessage(`Xoá tài khoản thành công`);
        return employer;
    }

    // Edit
    static edit(id, employer) {
        if (!this.isValid(employer)) {
            return false;
        }
        const newemployer = employerModel.findByIdAndUpdate(id, employer).then(value => {
            value.save();
            return true;
        });
        this.setMessage(`Cập nhật tài khoản [${employer.fullname}] thành công`);
        return newemployer;
    }

    // GetbyID
    static getByID(id) {
        const employer = employerModel.findById(id);
        return employer;
    }

    // Isvaild
    static isValid(employer) {
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const regexPass = /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})/;
        const regexPhone = /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/;
        if (employer.email == '' || employer.email == undefined || employer.email == null) {
            this.setMessage('Email không được phép để trống');
            return false;
        }
        if (!regexEmail.test(employer.email)) {
            this.setMessage('Email sai định dạng');
            return false;
        }
        if (employer.email.length >= 100) {
            this.setMessage('Email không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.password == '' || employer.password == undefined || employer.password == null) {
            this.setMessage('Mật khẩu không được phép để trống');
            return false;
        }
        if (!regexPass.test(employer.password)) {
            this.setMessage('Mật khẩu phải chứa 8 kí tự, ít nhất 1 chữ cái, 1 chữ hoa, 1 số, 1 ký tự đặt biệt');
            return false;
        }
        if (employer.password.length >= 100) {
            this.setMessage('Mật khẩu không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.fullname == '' || employer.fullname == undefined || employer.fullname == null) {
            this.setMessage('Họ và tên không được để trống');
            return false;
        }
        if (employer.fullname.length >= 50) {
            this.setMessage('Họ và tên không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.fullname.length <= 5) {
            this.setMessage('Họ và tên không được dưới 5 ký tự');
            return false;
        }
        if (employer.workPosition == '' || employer.workPosition == undefined || employer.workPosition == null) {
            this.setMessage('Vị trí công tác không được để trống');
            return false;
        }
        if (employer.workPosition.length >= 100) {
            this.setMessage('Vị trí công tác không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.workPosition.length <= 5) {
            this.setMessage('Vị trí công tác không được dưới 5 ký tự');
            return false;
        }
        if (employer.skype == '' || employer.skype == undefined || employer.skype == null) {
            return true;
        }
        if (employer.skype.length >= 1000) {
            this.setMessage('Tài khoản skype không được vượt quá 1000 ký tự');
            return false;
        }
        if (employer.workLocation == '' || employer.workLocation == undefined || employer.workLocation == null) {
            return true;
        }
        if (employer.workLocation.length >= 100) {
            this.setMessage('Khu vực làm việc không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.poorDistrict == '' || employer.poorDistrict == undefined || employer.poorDistrict == null) {
            return true;
        }
        if (employer.poorDistrict.length >= 100) {
            this.setMessage('Quận/Huyện không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.name_company == '' || employer.name_company == undefined || employer.name_company == null) {
            this.setMessage('Tên công ty không được để trống');
            return false;
        }
        if (employer.name_company.length >= 100) {
            this.setMessage('Tên công ty không được vượt quá 100 ký tự');
            return false;
        }
        if (employer.name_company.length <= 5) {
            this.setMessage('Tên công ty không được dưới 5 ký tự');
            return false;
        }
        if (employer.phone == '' || employer.phone == undefined || employer.phone == null) {
            this.setMessage('Số điện thoại không được để trống');
            return false;
        }
        if (!regexPhone.test(employer.phone)) {
            this.setMessage('Số điện thoại không hợp lệ');
            return false;
        }
        return true;
    }

    // GetSetError
    static getError() {
        return this.message;
    }

    static setError(message) {
        this.message = message;
    }

    // GetSetMess
    static getMessage() {
        return this.message;
    }

    static setMessage(message) {
        this.message = message;
    }
}