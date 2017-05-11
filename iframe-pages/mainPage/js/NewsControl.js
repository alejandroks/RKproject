/**
 * Created by Administrator on 05.05.2017.
 */
function NewsControl(options) {
    var selfref = this;
    selfref.counteiner = options.counteiner;
    selfref.NewsCreate();
}
NewsControl.prototype = {
    constructor: NewsControl,
    NewsCreate: function () {
        var counteiner = this.counteiner;
        var newsBlock = this.NewsElementCreate();
        counteiner.appendChild(newsBlock);
    },
    NewsElementCreate: function () {
        var data = this.getData();
        var newsBlock = document.createElement('div');
        newsBlock.className = "NewsBlock";
        if (data) {
            for (var i = 0; i < data.length; i++) {
                var newsRow = document.createElement('div');
                newsRow.className = "NewsRow";

                var dataItem = data[i];
                var elemNews = document.createElement("div");
                elemNews.className = "newsCell";

                elemNews.onclick = function () {
                    this.classList.toggle("expanded");
                }

                elemNews.appendChild(document.createTextNode(dataItem.name));
                newsRow.appendChild(elemNews);

                var elemNews = document.createElement("div");
                elemNews.className = "newsCell";

                var newsImg = elemNews.appendChild(document.createElement('img'));
                newsImg.className = "news-url";
                newsImg.setAttribute("url", dataItem.url);

                newsRow.appendChild(elemNews);
                newsBlock.appendChild(newsRow);
            }

            return newsBlock;
        }
        newsBlock.className = "exeptionNews";
        newsBlock.innerHTML = "Новых Новостей нет, иди нахуй";
        return newsBlock;
    },
    getData: function () {
        var content = { name: "AlexAlexAlexAlexAlexAlexAlexAlexAlex Alex Alex Alex Alex Alex Alex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex AlexAlex Alex Alex Alex Alex ", url: "IMAGE" };
        var data = [content, content, content];
        return data;
    }
}