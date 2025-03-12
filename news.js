fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=24bf61173800452cac9371db5c1ec36e')
    .then(response => response.json())
    .then(jsObject => {
        const articles = jsObject.articles;
        const headerArticle = articles[0];
        renderMainArticle(headerArticle);
        const subArticles = articles.slice(1);
        renderSubArticles(subArticles);
    });

function renderMainArticle(article) {
    const mainImg = document.getElementById('main-news-img');
    const mainLink = document.getElementById('main-news-link');
    const mainDesc = document.getElementById('main-news-desc');

    mainImg.src = article.urlToImage || "";
    mainLink.href = article.url || "#";
    mainLink.textContent = article.title;
    mainDesc.textContent = article.description;
}

function renderSubArticles(articles) {
    for (let i = 0; i < articles.length && i < 9; i++) {
        const article = articles[i];
        const subArticleElement = document.getElementById(`sub${i + 1}-news`);
        const subImg = subArticleElement.querySelector('img');
        const subLink = subArticleElement.querySelector('a');
        const subDesc = subArticleElement.querySelector('p');

        subImg.src = article.urlToImage || "";
        subLink.href = article.url || "#";
        subLink.textContent = article.title;
        subDesc.textContent = article.description;
    }
}
