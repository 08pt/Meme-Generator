const generateMemeBtn = document.querySelector(
  ".meme-generator .generate-meme-btn"
);
const memeImage = document.querySelector(".meme-generator img");
const memeTitle = document.querySelector("meme-generator .meme-title");
const memeAuthor = document.querySelector("meme-generator .meme-author");

const updateDetails = (url, title, author) => {
  memeImage.setAttribute("src", url);
  memeTitle.innerHTML = title;
  memeAuthor.innerHTML = author;
};
// generateMeme()
const generateMeme = () => {
  // we fetch the api using fetch
  fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) => response.json())
    .then((data) => {
      updateDetails(data.url, data.title, data.author);
    });
};
// we add eventListenert when click on btn generateMeme function will call
generateMemeBtn.addEventListener("click", generateMeme);
generateMeme();
