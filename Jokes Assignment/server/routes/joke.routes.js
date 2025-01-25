const JokeController = require('../controllers/joke.controller');

module.exports = (app) => {
    // Retrieve all jokes
    app.get('/api/jokes', JokeController.findAllJokes);

    // Create a new joke
    app.post('/api/jokes', JokeController.createNewJoke);

    // Retrieve a single joke by ID
    app.get('/api/jokes/:id', JokeController.findOneSingleJoke);

    // Update an existing joke by ID
    app.patch('/api/jokes/:id', JokeController.updateExistingJoke);

    // Delete a joke by ID
    app.delete('/api/jokes/:id', JokeController.deleteAnExistingJoke);
};