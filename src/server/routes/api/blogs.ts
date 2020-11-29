import * as express from "express";
import DB from "../../db";
import { RequestHandler} from "express-serve-static-core"
import * as passport from "passport"

const router = express.Router();

// const isAdmin: RequestHandler = (req, res, next) => {
//   if (!req.user || req.user.role !== "admin") {
//     // console.log(req.user)
//     return res.sendStatus(401);
//   } else {
//     return next();
//   }
// };

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    let blogs = await DB.Blogs.all();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get(
  "/:id",
  async (req: express.Request, res: express.Response) => {
    try {
      const id: number = Number(req.params.id);
      let blog = await DB.Blogs.one(id);
      res.json(blog)[0];
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  }
);

router.post("/", async (req: express.Request, res: express.Response) => {
  const blog = req.body;
  try {
    const author = await DB.Authors.newAuthor(blog.name, blog.email);
    // const tags = req.body.tags
    const post = await DB.Blogs.post(blog.title, blog.content, author.insertId);
    // const newBlogTags = await DB.BlogTags.post(post.insertId, tags)
    res.json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
});

// router.put("/:id", async (req: express.Request, res: express.Response) => {
//   try {
//     const id: number = Number(req.params.id);
//     const newBlogTitle = req.body.title
//     const newBlogContent = req.body.content;

//     await DB.Blogs.update(newBlogTitle, newBlogContent, id);

//     res.status(200).send(`Updated Blog ${id}`);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err);
//   }
// });

router.put("/:id", async (req, res) => {
  try {
    console.log(req.body);
    res.send(await DB.Blogs.update(req.body.content, req.params.id));
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    res.json(await DB.Blogs.destroy(parseInt(req.params.id)));
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

export default router;
