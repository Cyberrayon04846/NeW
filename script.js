// Declaring the main variables
let newscontainer = document.getElementById("newscontainer");
const api = "3537479e19e84c528b25dbb34acd99c9";
let html = "";
// async function to fetch news  with the help of api
async function fetchnews() {
  let response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}` );
  let user = await response.json();
  return user;
}

let news = fetchnews();
// function to show news 
news.then((data) => {
  console.log(data.articles);
  let newsaccodin = data.articles;
  newsaccodin.forEach((element) => {
    console.log(html.length);

    let article = `<div class="box news"  >
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${element.title}</h5>
          <p class="card-text">${element.description}</p>
          <a href="${element.url}" class="btn btn-primary">Read More</a>
        </div>
      </div>
    </div>`;

    html += article;
  });

  newscontainer.innerHTML = html;
});
