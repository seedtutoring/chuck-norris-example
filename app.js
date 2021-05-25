const form = document.querySelector('#form');
const jokeElement = document.querySelector('#joke');
const category = document.querySelector('#category');

const getJoke = (e) => {
    jokeElement.textContent = 'Generating...';
    fetch(`https://api.chucknorris.io/jokes/random?category=${category.value}`)
        .then((res) => res.json())
        .then((data) => (jokeElement.textContent = data.value))
        .catch((err) => (jokeElement.textContent = err));

    e.preventDefault();
};

form.addEventListener('submit', getJoke);
