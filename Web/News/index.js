console.log("this is my index.js");

let apiKey = 'e72e2dcc904b4483a463fc2d1204523d';
//grab news container
let newsaccordian = document.getElementById('newsaccordian');


//create an AJAX GET request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {

        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function(element) {
       
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">   
                            <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                ${element["title"]}
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                ${element["description"]}
                            </div>
                        </div>
                       </div>`
                       newsHtml += news;
                    });
        newsaccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()



