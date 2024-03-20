const api_url = "https://api.quotable.io/random";

const quote = document.getElementById('quote');
const author = document.getElementById('author');
async function getQuote(url){
   const response = await fetch(url);  // fetch always returns the data in string format
   var data = await response.json();   // so to convert this data  into json we use .json() method
//    console.log(data);
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

getQuote(api_url);


let btn1 = document.querySelector('#new-quote');

btn1.addEventListener('click',function(){
    getQuote(api_url);
})

let btn2 = document.querySelector('#tweet');

btn2.addEventListener('click',function(){
     tweet();
})

function tweet(){
    window.open("https://twitter.com/intent/tweet?text=" + quote.innerHTML + "----by" + "   "+ author.innerHTML ,"Tweet Window","width=600,height=300");
}