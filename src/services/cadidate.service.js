const candidateModel = require("../models/candidate.model");

module.exports = class TermService {
    // GetAllCandidates
    static getAll() {
        const candidate = candidateModel.find();
        return candidate;
    }
    // Login
    // Create
    static create(candidate) {
        if (!this.isValid(candidate)) {
            return false;
        }
        candidateModel.create(candidate);
        this.SetMassage(`Đăng ký tài khoản [${candidate.fullName}] thành công!`);
        return true;
    }
    // Edit
    static edit(id, candidate) {
        if (!this.isValid(candidate)) {
            return false;
        }
        const candidateNew = candidateModel.findByIdAndUpdate(id, candidate).then(value => {
            value.dateEdit = Date.now();
            value.save();
            return true;
        });
        this.SetMassage(`Sửa tài khoản [${candidate.fullName}] thành công!`);
        return candidateNew;
    }
    // Delete
    static delete(id) {
        if (id == null) {
            this.SetError();
            return false;
        }
        const candidate = candidateModel.findByIdAndDelete(id).then();
        this.SetMassage(`Xóa tài khoản thành công!`);
        return candidate;
    }
    // Get by id
    static getByID(id) {
        const candidate = candidateModel.findById(id);
        return candidate;
    }
    // isValid
    static isValid(candidate) {
        console.log(candidate);
        if (candidate.email == '' || candidate.email == undefined || candidate.email == null) {
            this.SetError('Email không được bỏ trống!');
            return false;
        }
        if (candidate.password == '' || candidate.password == undefined || candidate.password == null) {
            this.SetError('Mật khẩu không được bỏ trống!');
            return false;
        }
        if (candidate.fullName == '' || candidate.fullName == undefined || candidate.fullName == null) {
            this.SetError('Họ và tên không được bỏ trống!');
            return false;
        }
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(candidate.email)) {
            this.SetError('Email không đúng dịnh dạng!');
            return false;
        }
        if (candidate.email.length >= 100) {
            this.SetError('Email vượt quá số lượng ký tự cho phép!');
            return false;
        }
        if (candidate.password.length >= 100) {
            this.SetError('Mật khẩu vượt quá số lượng ký tự cho phép!');
            return false;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(candidate.password)) {
            this.SetError('Mật khẩu tối thiểu tám ký tự, ít nhất một ký tự hoa, một ký tự viết thường, một số và một ký tự đặc biệt!');
            return false;
        }
        if (candidate.fullName.length >= 50) {
            this.SetError('Họ và tên vượt quá số lượng ký tự cho phép!');
            return false;
        }
        if (candidate.fullName.length <= 5) {
            this.SetError('Họ và tên phải trên 5 ký tự!');
            return false;
        }
        return true;
    }
    // Get/Set Error
    static GetError() {
        return this.massage;
    }
    static SetError(massage) {
        this.massage = massage;
    }
    // Get/Set message
    static GetMassage() {
        return this.massage;
    }
    static SetMassage(massage) {
        this.massage = massage;
    }
}