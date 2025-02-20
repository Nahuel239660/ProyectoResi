import passport from 'passport';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { getUserById } from './services/userServices';

if (!process.env.JWT_SECRET) {
  throw new Error('JWT_SECRET is not defined');
}

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    const user = getUserById(jwt_payload.id);
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  })
);

export default passport;
