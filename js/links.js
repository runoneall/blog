function xhrGet(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", CORS_DRIVER + url, true);
    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(new Error(`HTTP Error: ${xhr.status}`));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network Error"));
    };
    xhr.send();
  });
}

async function putRss(linkItemsArea, rssLinkItems) {
  if (rssLinkItems.length === 0) {
    return;
  }
  linkItemsArea.innerHTML += `<div id="links-rss"><h2>近期更新</h2><div></div></div>`;
  const rssItemsArea = linkItemsArea.querySelector("#links-rss div:last-child");
  for (const rssLinkItem of rssLinkItems) {
    xhrGet(rssLinkItem)
      .then((xmlString) => {
        const xmlStringParser = new DOMParser();
        const xmlDoc = xmlStringParser.parseFromString(xmlString, "text/xml");
        atomFeed = xmlDoc.getElementsByTagName("feed");
        rssFeed = xmlDoc.getElementsByTagName("rss");
        if (atomFeed.length > 0) {
          const blogName =
            atomFeed[0].getElementsByTagName("title")[0].textContent;
          const ulItem = document.createElement("ul");
          rssItemsArea.appendChild(ulItem);
          ulItem.innerHTML += `<h3>${blogName}:</h3>`;
          const first10Items = [
            ...atomFeed[0].getElementsByTagName("entry"),
          ].slice(0, 10);
          first10Items.forEach((item) => {
            const blog_title =
              item.getElementsByTagName("title")[0].textContent;
            const blog_link = item
              .getElementsByTagName("link")[0]
              .getAttribute("href");
            ulItem.innerHTML += `<li><a href="${blog_link}" target="_blank">${blog_title}</a></li>`;
          });
        } else if (rssFeed.length > 0) {
          const blogName =
            rssFeed[0].getElementsByTagName("title")[0].textContent;
          const ulItem = document.createElement("ul");
          rssItemsArea.appendChild(ulItem);
          ulItem.innerHTML += `<h3>${blogName}:</h3>`;
          const first10Items = [
            ...rssFeed[0].getElementsByTagName("item"),
          ].slice(0, 10);
          first10Items.forEach((item) => {
            const blog_title =
              item.getElementsByTagName("title")[0].textContent;
            const blog_link = item.getElementsByTagName("link")[0].textContent;
            ulItem.innerHTML += `<li><a href="${blog_link}" target="_blank">${blog_title}</a></li>`;
          });
        } else {
          console.log("Unknown feed type " + rssLinkItem);
        }
      })
      .catch(() => {});
  }
}

function putLinks(link_json) {
  const linkJson = JSON.parse(link_json);
  const linkItemsArea = document.getElementById("linkItemsArea");
  let linkItemsHTML = "";
  let rssLinkItems = [];
  for (const linkItem of linkJson) {
    linkItemsHTML += `<div class="link-item"><img class="link-item-avatar" src="${linkItem.avatar}"><div class="link-item-content"><a href="${linkItem.url}" target="_blank"><h2>${linkItem.title}</h2></a><p>${linkItem.description}</p></div></div>`;
    if (linkItem.rss) {
      rssLinkItems.push(linkItem.rss);
    }
  }
  linkItemsArea.innerHTML = linkItemsHTML;
  if (rssLinkItems.length === 0 || CORS_DRIVER === "") {
    return;
  }
  setTimeout(() => putRss(linkItemsArea, rssLinkItems), 0);
}
