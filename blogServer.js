import express from "express";
import bodyParser from "body-parser";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
const API_URL = "http://localhost:4000";

app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/HTML/home.html", (req, res) => {
  res.sendFile(__dirname + "/HTML/home.html");
})


// Route to render the blog page
app.get("/", async (req, res) => {
    try {
      const response = await axios.get(`${API_URL}/posts`);
      console.log(response);
      res.render("blog.ejs", { posts: response.data });
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  });

  // Route to blog page by title
  app.get("/read", async (req, res) => {
    try{
      const response = await axios.get(`${API_URL}/read`);
      console.log(response);
      res.render("readblog.ejs");
    } catch (error) {
      res.status(500).json({ message: "Error fetching posts" });
    }
  })


  app.listen(port, () => {
    console.log(`Backend server is running on http://localhost:${port}`);
  });