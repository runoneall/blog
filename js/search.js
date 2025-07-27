const searchForm = document.getElementById("search");
const searchResults = document.getElementById("search-results");
var searchDB = undefined;

function updateDB(searchResults, callback) {
    var isUpdateDB = false;
    const updateDBMsg = document.createElement("p");

    if (!searchDB) {
        isUpdateDB = true;
        updateDBMsg.textContent = "正在加载数据库";
        searchResults.appendChild(updateDBMsg);

        fetch("/search.xml")
            .then((response) => {
                const ok = response.ok;
                const code = response.status;

                if (!ok || code !== 200) {
                    throw new Error(`HTTP Error ${code}`);
                }
                return response.text();
            })
            .then((str) => new DOMParser().parseFromString(str, "text/xml"))
            .then((data) => {
                searchDB = data.getElementsByTagName("entry");
                callback();

                if (isUpdateDB) {
                    updateDBMsg.remove();
                }
            })
            .catch((error) => {
                updateDBMsg.textContent =
                    "无法加载数据库, 从控制台中查看更多信息";
                console.error(error);
            });
    } else {
        callback();
    }
}

function showUnfoundMessage(searchResults) {
    const msg = document.createElement("p");
    msg.textContent = "未找到";
    searchResults.appendChild(msg);
}

function excerpt_clean(html, count = 150, ellipsis = "...") {
    if (!html || typeof html !== "string") return "";
    let text = html.replace(/<[^>]+>/g, "");
    text = text.replace(/\s+/g, " ").trim();
    if (text.length <= count) return text;
    let lastSpace = text.lastIndexOf(" ", count);
    return text.substring(0, lastSpace) + (text.length > count ? ellipsis : "");
}

function buildResultItem(title, url, shortContent) {
    const article = document.createElement("article");
    article.className = "post";
    article.setAttribute("itemscope", "");
    article.setAttribute("itemtype", "http://schema.org/BlogPosting");

    const articlePostTitle = document.createElement("h2");
    articlePostTitle.className = "post-title";
    articlePostTitle.setAttribute("itemprop", "name headline");

    const articlePostTitleLink = document.createElement("a");
    articlePostTitleLink.setAttribute("itemprop", "url");
    articlePostTitleLink.setAttribute("href", url);
    articlePostTitleLink.textContent = title;

    const articlePostContent = document.createElement("div");
    articlePostContent.className = "post-content index-post-content";
    articlePostContent.setAttribute("itemprop", "articleBody");
    articlePostContent.innerHTML = shortContent;

    articlePostTitle.appendChild(articlePostTitleLink);
    article.appendChild(articlePostTitle);
    article.appendChild(articlePostContent);

    return article;
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var isFoundFlag = false;
    searchResults.innerHTML = "";

    const formData = Object.fromEntries(new FormData(this).entries());
    const query = formData.s.toLowerCase();

    if (query.length < 2) {
        showUnfoundMessage(searchResults);
        return;
    }

    updateDB(searchResults, () => {
        for (var i = 0; i < searchDB.length; i++) {
            const item = searchDB[i];

            const title = item.getElementsByTagName("title")[0].textContent;
            const url = item.getElementsByTagName("url")[0].textContent;
            const content = item.getElementsByTagName("content")[0].textContent;

            if (
                title.toLowerCase().includes(query) ||
                content.toLowerCase().includes(query)
            ) {
                isFoundFlag = true;

                const resultItem = buildResultItem(
                    title,
                    url,
                    excerpt_clean(content, parseInt(formData.excerpt_length)),
                );
                searchResults.appendChild(resultItem);
            }
        }

        if (isFoundFlag == false) {
            showUnfoundMessage(searchResults);
            return;
        }
    });
});
