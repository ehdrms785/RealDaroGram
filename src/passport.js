import "./env";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { prisma } from "../generated/prisma-client";

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const verifyUser = async (payload, done) => {
  try {
    const user = await prisma.user({ id: payload.id });
    if (user !== null) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
};

export const authenticateJwt = (request, response, next) =>
  passport.authenticate("jwt", { session: false }, (error, user) => {
    if (user) {
      request.user = user;
    }
    next();
  })(request, response, next);

passport.use(new Strategy(jwtOptions, verifyUser));
passport.initialize();
