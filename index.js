const memebutton=document.querySelector(".Generate-Meme");
const memeimage=document.querySelector(".meme-generator img");
const loadingtitle=document.querySelector(".meme-title");
const memeauthor=document.querySelector(".meme-author");

const upadateDetails =(url,title,author)=>{
    memeimage.setAttribute("src",url );
    loadingtitle.innerHTML=title;
    memeauthor.innerHTML=`Meme by ${author}`;
};

const generatememe =()=> {
    fetch("https://meme-api.herokuapp.com/gimme/wholesomememes")
    .then(response => response.json())
    .then(data=>{
        upadateDetails(data.url, data.title,data.author)
    });

};

memebutton.addEventListener("click",generatememe)
generatememe();