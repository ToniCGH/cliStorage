const fs = require("fs");

const addMovie = (movieObj) => {
    try {
        const stringObj = JSON.stringify(movieObj);
        fs.writeFileSync('./storage.json', stringObj)
    } catch (error) {
        console.log(error);
    }
};

const listMovies = () => {
    try {
        const jsonList = fs.readFileSync('/storage.json');
        const listParser = JSON.parse(jsonList);
        console.log(listParser);
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addMovie, listMovies };