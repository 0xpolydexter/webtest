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
        articles.forEach(function(element,index) {
       
            let news = `<div class="accordion-item">
                        <h2 class="accordion-header" id="heading${index}">   
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                             <u> <b>${index+1} :</b>&nbsp;${element["title"]}</u>
                            </button>
                        </h2>
                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}"
                            data-bs-parent="#newsaccordian">
                            <div class="accordion-body">
                                ${element["content"]}. <a href = "${element['url']}" target = "_blank"> Read more here</a>
                            </div>
                        </div>
                       </div>`;
                       newsHtml += news;
                    });
        newsaccordian.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()



