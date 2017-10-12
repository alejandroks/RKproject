
function MainIndexControl(options) {
    var selfRef = this;
    var counteiner = options.counteiner;
    this.transportService = new TransportService();

    selfRef.MainIndexControlCreateMenuTopControl();
    selfRef.iframeSizeSet();
    createMenuUl({Text:"TestMenuUL"});
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

        var rightButtonMenu = document.getElementById('buttonRightMenu');
        var leftButtonMenu = document.getElementById('buttonMenuLeft');

        leftButtonMenu.onclick = function OnClickButton() {
            leftButtonMenu.style.width = 17 +'%';
            rightButtonMenu.style.width = 12 +'%';
            lineOneRight.style.width = '0';
            lineTwoLeft.style.width = '0';
           animate({
                duration:1000,
                timing:function(timeFaction){
                return timeFaction;
                 },
                draw:function(progress){
                    lineOneLeft.style.width = progress * 100 +'%';

                    lineTwoRight.style.width = progress * 100 +'%';




                    if(progress==1){
                        parentLineOne.style.background = '#3BA1E4';
                        parentLineTwo.style.background = '#3BA1E4';
                        lineOneLeft.style.width = '0';
                        lineTwoRight.style.width = '0';

                    }
                }
            });
            };

        rightButtonMenu.onclick = function OnClickButton(){
            rightButtonMenu.style.width = 17 +'%';
            leftButtonMenu.style.width = 12 +'%';
            lineTwoLeft.style.width = '0';
            lineOneRight.style.width = '0';
            animate({
                duration:1000,
                timing:function(timeFaction){
                    return timeFaction;
                },
                draw:function(progress){
                    lineOneRight.style.width = progress * 100 +'%';
                    lineTwoLeft.style.width = progress * 100 +'%';



                    if(progress==1){
                        parentLineOne.style.background = '#8FCBF2';
                        parentLineTwo.style.background = '#8FCBF2';
                        lineOneRight.style.width = '0';
                        lineTwoLeft.style.width = '0';
                    }
                }
            });
        };
    },
    MainControlMenu: function () {

    },
    MainControlAnimationStartPlay: function () {

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
        var progress = options.timing(timeFraction)
        options.draw(progress);
        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    });
}
function createMenuUl(options){
    var menuUlParent = document.getElementById('menu');
    var ul = document.createElement('ul');
    var li = document.createElement('li');
    li.innerHTML = options.Text;
    ul.appendChild(li);
    menuUlParent.appendChild(ul);
}