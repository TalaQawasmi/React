const AuthorController = require("../controllers/author.controller");
module.exports = (app) => {
    app.get("/api/getAllAuthors", AuthorController.findAllAuthors);
    app.post("/api/createNewAuthor", AuthorController.createAuthor);

}