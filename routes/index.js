const Router = require("express").Router();
const apiRoutes = require("./apiRoutes");
const authRoutes = require("../authentication/authRoutes");
const passport = require("../authentication/passport");

Router.use("/api", passport.authenticate("jwt", { session: false }), apiRoutes);
Router.use("/auth", authRoutes);

module.exports = Router;