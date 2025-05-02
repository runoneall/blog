const searchFrom = document.querySelector('#search');
const searchInput = searchFrom.querySelector('#s');
const mainFrame = document.querySelector('#main');

const articleSearchNotFound = document.createElement('article');
articleSearchNotFound.innerHTML = `<h2 class="post-title">没有找到内容</h2>`;
articleSearchNotFound.style.display = 'none';
mainFrame.appendChild(articleSearchNotFound);

function SearchInit() {
    mainFrame.querySelectorAll('article').forEach(article => {
        article.style.display = 'block';
    })
    articleSearchNotFound.style.display = 'none';

    const targetSearch = location.hash.slice(3)
    if (targetSearch !== '') {
        SearchArticle();
        return;
    }
    searchInput.value = '';
    location.hash = '';
}

SearchInit();

searchFrom.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchValue = decodeURIComponent(searchInput.value).trim();
    SearchInit();
    if (!searchValue) {
        return;
    }
    if (location.pathname !== '/index.html') {
        location.href = '/index.html#s=' + encodeURIComponent(searchValue);
    } else {
        location.hash = '#s=' + encodeURIComponent(searchValue);
    }
})

function SearchArticle() {
    const searchValue = decodeURIComponent(location.hash.slice(3));
    var is_not_found = true;
    const articleList = mainFrame.querySelectorAll('article');
    articleList.forEach(article => {
        if (!article.textContent.toLowerCase().includes(searchValue.toLowerCase())) {
            article.style.display = 'none';
        } else {
            is_not_found = false;
        }
    });
    if (is_not_found) {
        articleSearchNotFound.style.display = 'block';
    }
}

window.addEventListener('hashchange', () => SearchArticle());
window.addEventListener('load', () => SearchArticle());