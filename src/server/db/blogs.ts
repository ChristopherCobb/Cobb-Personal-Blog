import { Connection } from "./index";
import { Query } from "./index";

export const all = async () => {
  return new Promise((resolve, reject) => {
    Connection.query(
      `SELECT blogs.*, authors.name from blogs join authors on authors.id = blogs.authorid`,
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

export const one = async (id: number) => {
  return new Promise((resolve, reject) => {
    Connection.query(
      `select a.*, b.* from blogs b inner join authors a on a.id = b.authorid where b.id = ?`,
      [id],
      (err, results) => {
        if (err) {
          return reject(err);
        }
        resolve(results);
      }
    );
  });
};

const post = (title: string, content: string, authorid: number) =>
  Query(`INSERT INTO Blogs (title, content, authorid) VALUE (?, ?, ?);`, [
    title,
    content,
    Number(authorid),
  ]);

const update = (content: string, id: string) =>
  Query(`UPDATE Blogs SET content = ? WHERE id = ?;`, [content, id]);

const destroy = (id: number) => Query('DELETE FROM Blogs WHERE id = ?', [id]);

export default {
  all,
  one,
  post,
  update,
  destroy,
};
