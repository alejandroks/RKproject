
function MainIndexControl(options) {
    var selfRef = this;
    var counteiner = options.counteiner;
    this.transportService = new TransportService();
    this.menyHolder();
    selfRef.MainIndexControlCreateMenuTopControl();
    selfRef.iframeSizeSet();
    selfRef.MainControlMenu();
    //createMenuUl({Text:"TestMenuUL"});
    this.sendRequest({
        args: {
            'cmdName': 'getData'
        },
        success: function (data) {
            alert(data);
        }
    });
}

MainIndexControl.prototype = {
    constructor: MainIndexControl,
    MainIndexControlCreateMenuTopControl: function () {

        var lineOneLeft = document.getElementById('expand_left');
        var lineOneRight = document.getElementById('expand_right');

        var lineTwoRight = document.getElementById('expand2_right');
        var lineTwoLeft = document.getElementById('expand2_left');

        var parentLineOne = document.getElementById('LoadingLineTop');
        var parentLineTwo = document.getElementById('LoadingLineBot');

        var leftButtonMenu = document.getElementById('buttonMenuLeft');
        var rightButtonMenu = document.getElementById('buttonRightMenu');

        var test = document.getElementsByClassName('btn');




        var menuInformation = document.getElementById('menuInformation');
        var menuServices = document.getElementById('menuServices');

        var menyTextHead = document.getElementById('textInfo');



        leftButtonMenu.onclick = function OnClickButton() {
            test[0].setAttribute("data-type", "diagonal_swipe_left_static");
            test[1].setAttribute("data-type", "diagonal_swipe_right");
            lineOneRight.style.width = '0';
            lineTwoLeft.style.width = '0';

           animate({
                duration:1000,
                timing:function(timeFaction){
                return timeFaction;
                 },
                draw:function(progress){
                    lineOneLeft.style.width = progress * 100 +'%';

                    lineTwoLeft.style.width = progress * 100 +'%';




                    if(progress==1){
                        parentLineOne.style.background = '#26972D';
                        parentLineTwo.style.background = '#26972D';
                        lineOneLeft.style.width = '0';
                        lineTwoLeft.style.width = '0';
                        menuInformation.style.visibility= 'visible';
                        menuServices.style.visibility= 'hidden';
                        menyTextHead.innerHTML = 'Информация';
                    }
                }
            });
            };

        rightButtonMenu.onclick = function OnClickButton(){
            test[1].setAttribute("data-type", "diagonal_swipe_right_static");
            test[0].setAttribute("data-type", "diagonal_swipe_left");
            lineTwoLeft.style.width = '0';
            lineOneRight.style.width = '0';
            animate({
                duration:1000,
                timing:function(timeFaction){
                    return timeFaction;
                },
                draw:function(progress){
                    lineOneRight.style.width = progress * 100 +'%';
                    lineTwoRight.style.width = progress * 100 +'%';



                    if(progress==1){
                        parentLineOne.style.background = '#FFB040';
                        parentLineTwo.style.background = '#FFB040';
                        lineOneRight.style.width = '0';
                        lineTwoRight.style.width = '0';
                        menuInformation.style.visibility= 'hidden';
                        menuServices.style.visibility= 'visible';
                        menyTextHead.innerHTML = 'Услуги';
                    }
                }
            });
        };
    },
    menyHolder: function (){


    var menuJS = document.getElementById('menuUl');
    var menuJSClientHeight = menuJS.clientHeight;

    var inner_header = document.getElementById('innerHeader');
    var inner_headerClientHeight = inner_header.clientHeight;

    window.onscroll  = function(){
        var top = window.pageYOffset || document.documentElement.scrollTop;
        if(top>= inner_headerClientHeight - menuJSClientHeight){
            menuJS.style.position = 'fixed';
            menuJS.style.top = '0';
            menuJS.style.bottom = '';
        }
        if(top< inner_headerClientHeight - menuJSClientHeight){
            menuJS.style.position = 'absolute';
            menuJS.style.top = '';
            menuJS.style.bottom = '0';
        }
    };

},
    iframeSizeSet: function () {
    var iframe = $('#mainIframe').contents();
    var newsBlockParentIframe = $('#innerCenter');
    var iframeSize = iframe.find('body').height();

    newsBlockParentIframe.height(iframeSize);

    if (iframe.find('.newsCellText')) {
        iframe.find('.newsCellText').click(function () {
            var iframeSize = iframe.find('body').height();
            newsBlockParentIframe.height(iframeSize);
        })
    }
},
    iframeSetChenge: function(iframePageSet){
        var self =this;
        var mainIframe = document.getElementById('mainIframe');
        if(iframePageSet.src !== 'null'){
            mainIframe.src = iframePageSet.src;
        }else { console.log('404');}
        mainIframe.onload = function(){
            self.iframeSizeSet();
        };
        delete this.self;

    },


    MainControlMenu: function () {

        var menuInformation = document.getElementById('menuInformation');
        var menuInformationLiList = menuInformation.querySelectorAll('ul > li');

        var menuServices = document.getElementById('menuServices');
        var menuServicesLiList = menuServices.querySelectorAll('ul > li');

        var self = this;
        var listIframeObjInfo = [];

        var inner_head_size = document.getElementById('innerHeader').offsetHeight;

        listIframeObjInfo.push(getIframe('iframe1','admin/index.html'));
        listIframeObjInfo.push(getIframe('iframe2','iframe-pages/mainPage/mainPage.html'));
        listIframeObjInfo.push(getIframe('iframe3','null'));
        listIframeObjInfo.push(getIframe('iframe4','null'));

        for(let i = 0; i<menuInformationLiList.length; i++){
            menuInformationLiList[i].onclick = function(){
                var pageY = window.pageYOffset || document.documentElement.scrollTop;
                if(pageY >inner_head_size+100){
                    window.scrollTo(0,0);
                }
                this.setAttribute('data-type','information');
                removeAllAtribute(this);
                self.iframeSetChenge(listIframeObjInfo[i]);
            };
        }

        var listIframeObjServicec = [];
        listIframeObjServicec.push(getIframe('iframe1','admin/index.html'));
        listIframeObjServicec.push(getIframe('iframe2','null'));
        listIframeObjServicec.push(getIframe('iframe3','null'));
        listIframeObjServicec.push(getIframe('iframe4','iframe-pages/mainPage/mainPage.html'));

        for(let j = 0; j<menuServicesLiList.length; j++){
            menuServicesLiList[j].onclick = function(){
                var pageY = window.pageYOffset || document.documentElement.scrollTop;
                if(pageY >inner_head_size+100){
                    window.scrollTo(0,0);
                }
                this.setAttribute('data-type','serv');
                removeAllAtribute(this);
                self.iframeSetChenge(listIframeObjServicec[j]);
            }
        }

    },



    sendRequest: function (options) {
        var url = 'http://localhost:8888/';
        var args = options.args;
        this.transportService.post(url, args, {
            async: options.async,
            successHandler: function (data) {
                options.success(data);
            },
            errorHandler: options.error,
            completeHandler: function () { }
        });
    }
};

function TransportService() {
    this.request = function (requestType, url, data, async, successHandler, errorHandler, completeHandler) {
        $.ajax({
            async: async,
            type: requestType,
            url: url,
            crossDomain: true,
            contentType: 'application/json',
            data: JSON.stringify(data),
            complete: completeHandler,
            success: function (res) {
                successHandler(res);
            },
            error: function (jqXHR) {
                var errMsg = jqXHR.responseText;
                if (!errMsg || errMsg.length === 0) {
                    errMsg = 'The server is unavailable';
                }
                errorHandler(errMsg, jqXHR.statusText);
            }
        });
    };

    this.post = function (url, data, options) {
        var async = options.async;
        if (!async) {
            async = true;
        }
        var successHandler = options.successHandler;
        if (!successHandler) {
            successHandler = function () { }
        }
        var errorHandler = options.errorHandler;
        if (!errorHandler) {
            errorHandler = function () { }
        }
        var completeHandler = options.completeHandler;
        if (!completeHandler) {
            completeHandler = function () { }
        }

        this.request('POST', url, data, async, successHandler, errorHandler, completeHandler);
    }
}

function animate(options){
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        var timeFraction = (time - start) / options.duration ;
        if (timeFraction > 1) timeFraction = 1;
        var progress = options.timing(timeFraction);
        options.draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}

function removeAllAtribute(active){
    var buttonsMenuUl_li = document.getElementsByClassName('parentMenu');
    var menuUlLi = buttonsMenuUl_li[0].querySelectorAll('ul > li');
    for(var i = 0; i<menuUlLi.length; i++){
        if(menuUlLi[i]!=active){
            menuUlLi[i].removeAttribute('data-type');
        }

    }
}
function  getIframe(iframeName,iframeSrc){
    var iframeObj = {
        name:iframeName,
        src: iframeSrc
    };
    return iframeObj;
    }
delete  MainIndexControl.constructor;
delete  MainIndexControl.MainControlMenu;