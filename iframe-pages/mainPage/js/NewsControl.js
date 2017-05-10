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
        if (data != null && data != undefined) {
            for(var i = 0; i<data.length;i++){
                var newsRow=document.createElement('div');
                newsRow.className="NewsRow";
                for(var dataIndex in data[i]){
                    var elemNews=document.createElement("div");
                    elemNews.className="newsCells";
                    elemNews.innerHTML=data[i][dataIndex];
                    newsRow.appendChild(elemNews);
                }
                newsBlock.appendChild(newsRow);
            }
            return newsBlock;
        }
        newsBlock.className="exeptionNews";
        newsBlock.innerHTML="Новых Новостей нет, иди нахуй";
        return newsBlock;
    },
    getData: function () {
        var content = { name: "Alex", url: "IMAGE" };
        var data = [content, content, content];
        return data;
    }
}