const accountModel = require('../../models/candidate.model');
const candidateModel = require('../../models/candidate.model');
const {
  JWT_SECRET
} = require('../../configs')
var jwt = require('jsonwebtoken');
const {
  validateParam,
  validateBody,
  schemas
} = require('../../common/validate.common');

// endcode
const endcodedToken = (candaidateID) => {
  return jwt.sign({
    name: 'Tan Huynh',
    sub: candaidateID,
    iat: new Date().getTime(),
    exp: new Date().setDate(new Date().getDate() + 3)
  }, JWT_SECRET)
}

module.exports = class AccountController {
  static async secret(req, res, next) {
    res.status(200).json({resource: true})
  }

  static async signIn(req, res, next) {
    try {
      const validate = validateBody(schemas.authCandidateSignInSchema, req);
      if (validate.error) {
        res.status(404).json(validate.error);
      } else {
        res.status(200).json({
          message: 'Thành công!'
        });
      }
    } catch (error) {
      res.status(404).json(validate.error);
    }
  }

  static async signUp(req, res, next) {
    try {
      const validate = validateBody(schemas.authCandidateSignUpSchema, req);
      if (validate.error) {
        res.status(404).json(validate.error);
      } else {
        const candidate = req.body;

        // Kiểm tra tồn tại email
        const foundEmail = await candidateModel.findOne({
          email: candidate.email
        });
        if (foundEmail) return res.status(403).json({
          error: 'Email này đã được sử dụng'
        })

        const candidateNew = await accountModel.create(candidate);
        // encode
        const token = endcodedToken(candidateNew._id);

        res.setHeader('Authorization', token);
        res.status(201).json({
          success: true
        });
      }
    } catch (error) {
      res.status(404).json(error);
    }
  }
}