const JokeController = require("../controllers/jokes.controller");

module.exports = app => {
    app.get("/api/jokes/", JokeController.getAllJokes);
    app.get("/api/jokes/:id", JokeController.getOneJoke);
    app.get("api/jokes/random", JokeController.randomJoke);
    app.post("/api/jokes/new", JokeController.createNewJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.delete("/api/jokes/delete/:id",JokeController.deleteJoke);
};