import * as express from "express";
import { createTextSpanFromBounds } from "typescript";
import DB from "../db";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    let blogs = await DB.Blogs.all();
    res.json(blogs);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.get("/:id", async (req: express.Request, res: express.Response) => {
  try {
    const id: number = Number(req.params.id);
    let blog = await DB.Blogs.one(id);
    res.json(blog)[0];
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

router.post("/", async (req: express.Request, res: express.Response) => {
  const blog = req.body;
  try {
    const author = await DB.Authors.newAuthor(blog.name, blog.email);
    const post = await DB.Blogs.post(blog.title, blog.content, author.insertId);
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
    res.json(
      await DB.Blogs.update(req.body.title, req.body.content, req.body.id)
    );
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
