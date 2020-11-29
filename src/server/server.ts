import * as express from "express";
import routes from "./routes";
import * as path from "path";
import * as passport from "passport";
import "./middleware/localstrategy";
import "./middleware/bearerstrategy";

const app = express();

app.use(passport.initialize());

app.use(express.json());

app.use(routes);
app.use(express.static("public"));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
