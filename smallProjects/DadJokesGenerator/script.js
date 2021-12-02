const joke = document.querySelector("#joke");
const button = document.querySelector("button");
const h1 = document.querySelector("#h1");

const getDadJoke = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", config);
    return res.data.joke;
  } catch (error) {
    return "No Jokes Available Sorry 😢";
  }
};

const addNewJoke = async () => {
  const jokeText = await getDadJoke();
  h1.innerText = jokeText;
  const newLi = document.createElement("li");
  newLi.append(jokeText);
  joke.append(newLi);
};

button.addEventListener("click", addNewJoke);
