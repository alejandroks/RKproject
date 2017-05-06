/**
 * Created by Administrator on 05.05.2017.
 */
function NewsControl(options){
var selfref= this;
    selfref.counteiner = options.counteiner;
    selfref.NewsCreate();
}
NewsControl.prototype={
    constructor:NewsControl,
    NewsCreate:function(){
        var counteiner= this.counteiner;
        var divBoxNews = document.createElement('div');
        divBoxNews.className = "NewsBox";
        var table=this.TableCreate();
        divBoxNews.appendChild(table);
        counteiner.appendChild(divBoxNews);

    },
    TableCreate: function(){
        var table = document.createElement('table');
        table.cellPadding=20;
        table.cellSpacing=20;
        var data= this.getData();
        var content;
        for(var i=0;i<data.length;i++){
            var tr = document.createElement('tr');
            for(content in data[i]){
                var td =document.createElement('td');
                    td.className="ForImgTable";
                tr.appendChild(td);
                var m = content;
                td.innerHTML=content;
            }
            table.appendChild(tr);
        }
        return table;
    },
    getData:function(){
        var content={name:"Alex",url:"IMAGE"};
        var data=[content,content,content];
      return data;
    },
    GetElement:function(id){
       return document.getElementById(id);
    }
}