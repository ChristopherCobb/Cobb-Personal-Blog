import * as express from "express";
import blogsRouter from "./blogs"


let router = express.Router();

router.use("/blogs",blogsRouter);

export default router;
