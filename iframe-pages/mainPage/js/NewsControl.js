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
      for(var i = 0;i<data.length;i++){
          var tr = document.createElement('tr');
          var td =document.createElement('td');
          tr.appendChild(td);
          td.innerHTML=data[i];
          table.appendChild(tr);
      }
        return table;
    },
    getData:function(){
        var data=['132','123','321'];
      return data;
    },
    GetElement:function(id){
       return document.getElementById(id);
    }
}