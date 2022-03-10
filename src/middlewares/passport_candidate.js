const passport = require('passport');
const jwtStrategy = require('passport-jwt').Strategy;
const localStrategy = require('passport-local').Strategy;
const {
  ExtractJwt
} = require('passport-jwt');
const candidateModel = require('../models/candidate.model');
const {
  JWT_SECRET
} = require('../configs')


passport.use(new jwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken('Authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    const candidate = await candidateModel.findById(payload.sub);

    if (!candidate) return done(null, false);
    done(null, candidate);
  } catch (error) {
    done(error, false);
  }
}));

passport.use(new localStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  try {
    console.log('object');
    const candidate = await candidateModel.findOne({
      email
    });
    if (!candidate) return done(null, false);
    const isCorrectPassword = await candidate.isValidPassword(password);
    if (!isCorrectPassword) return done(null, false);
    done(null, candidate);
  } catch (error) {
    done(error, false);
  }
}))