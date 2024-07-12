import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var currentTime = new Date()

let posts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 4,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 5,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 6,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 7,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
  {
    id: 8,
    title: "Lorem ipsum dolor sit amet",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
    date: currentTime,
  },
]



let lastID = 6;

app.get("/posts", (req, res) => {
    console.log(posts);
    res.json(posts);
  });

  app.get("/posts/:title", (req, res) => {
    const post = posts.find((p) => p.title === parseInt(req.params.title));
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  });


app.listen(port, () => {
    console.log(`Blog-API is running at http://localhost:${port}`);
  });