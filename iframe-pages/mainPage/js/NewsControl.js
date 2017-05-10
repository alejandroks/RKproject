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
        var divBoxNews = document.createElement('div');
        divBoxNews.className = "NewsBox";
        var ElementNews = this.NewsElementCreate();
        divBoxNews.appendChild(ElementNews);
        counteiner.appendChild(divBoxNews);

    },
    NewsElementCreate: function () {
        var data = this.getData();
        var newsElement = document.createElement('div');
        newsElement.className = "news-element";
        if (data != null && data != undefined) {
            return newsElement;
        }
        newsElement.className="exeptionNews";
        newsElement.innerHTML="Новых Новостей нет, иди нахуй"
        return newsElement;
    },
    getData: function () {
        // var content = { name: "Alex", url: "IMAGE" };
        // var data = [content, content, content];
        var data;
        return data;
    },
    GetElement: function (id) {
        return document.getElementById(id);
    }
}