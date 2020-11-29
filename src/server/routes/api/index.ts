import * as express from "express";
import * as passport from "passport";
import blogsRouter from "./blogs";

let router = express.Router();

// router.use((req, res, next) => {
//   passport.authenticate("bearer", { session: false }, (err, user, info) => {
//     if (user) req.user = user;
//     return next();
//   })(req, res, next);
// });

router.use((req, res, next) => {
    passport.authenticate(
        "bearer",
        {
            session: false,
        },
        (err, user, info) => {
            // console.log(user)
            if (user) req.user = user;
            return next();
        }
    )(req, res, next);
});


router.use("/blogs", blogsRouter);

export default router;
