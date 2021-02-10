const Joke = require("../models/jokes.model");

module.exports.getAllJokes = (req, res) => {
    Joke.find()
    .then(allTheJokes => res.json({ jokes: allTheJokes }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.getOneJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneJoke => res.json({ joke: oneJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.randomJoke = (req, res) => {
    Joke.aggregate([{$sample: {size:1}}])
    .then(randJoke => res.json({joke: randJoke}))
    .catch(err => res.json({ message: "Something went wrong", error: err }));

};

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then(newlyCreatedJoke => res.json({ joke: newlyCreatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedJoke => res.json({ joke: updatedJoke }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteJoke = (req, res) => {
        Joke.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
