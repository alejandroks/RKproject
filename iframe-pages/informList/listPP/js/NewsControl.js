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
        newsBlock.className = "newsBlockRows";
        if (data) {
            for (var elementNumberData = 0; elementNumberData < data.length; elementNumberData++) {
                var dataItem = data[elementNumberData];

                var newsRow = document.createElement('div');
                newsRow.className = "newsRow";


                var elemNewsText = document.createElement("div");
                elemNewsText.className = "newsCellText";

                elemNewsText.onclick = function () {
                    this.classList.toggle("expanded");

                };

                var headNews =document.createElement('div');
                headNews.className="headNews";
                headNews.appendChild(document.createTextNode(dataItem.head));

                var text =document.createElement('div');
                text.className="text";
                text.appendChild(document.createTextNode(dataItem.name));

                elemNewsText.appendChild(headNews);
                elemNewsText.appendChild(text);
                newsRow.appendChild(elemNewsText);

                var elemNewsImg = document.createElement("div");
                elemNewsImg.className = "newsCellImg";

                var newsImg = elemNewsImg.appendChild(document.createElement('img'));
                newsImg.className = "news-url";
                newsImg.setAttribute("url", dataItem.url);


                newsRow.appendChild(elemNewsImg);
                newsBlock.appendChild(newsRow);
            }

            return newsBlock;
        }
        newsBlock.className = "exeptionNews";
        newsBlock.innerHTML = "Новых Новостей нет";
        return newsBlock;
    },
    addToggle: function(){

    },
    getData: function () {
        var content = { name: "Сведения о свободных торговых объектах и складских помещениях предоставляемых в аренду на территории КТУП Минский Раковский кирмаш предлагает более 150 мест торговли и аренды  ", url: "IMAGE",head:"Главноя новость" };
        var data = [content, content, content, content, content, content];
        return data;
    }
};