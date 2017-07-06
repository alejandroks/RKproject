
function MainIndexControl(options) {
    var selfRef = this;
    var counteiner = options.counteiner;
    this.transportService = new TransportService();

    selfRef.MainIndexControlCreateMenuTopControl();
    selfRef.iframeSizeSet();

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
        var leftButtonMenu = $('#buttonMenuLeft');
        leftButtonMenu.click(function OnClickButton() {
                menuShow(function(timePassed){
                    var lineOne = document.getElementById('expand');
                    var lineTwo = document.getElementById('expand2');
                    lineOne.style.width =  timePassed + 'px';
                    lineTwo.style.width = timePassed + 'px';
                    var i = $('#LoadingLineTop');
                    i.css('background','red');
                },document.getElementById('LoadingLineTop').offsetWidth);
            });
    },
    MainControlAnimationMenu: function () {

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
function menuShow(draw,duration){
    var start = performance.now();

    requestAnimationFrame(function animate(time) {
        // определить, сколько прошло времени с начала анимации
        var timePassed = time - start;

        // возможно небольшое превышение времени, в этом случае зафиксировать конец
        if (timePassed > duration) timePassed = duration;

        // нарисовать состояние анимации в момент timePassed
        draw(timePassed);

        // если время анимации не закончилось - запланировать ещё кадр
        if (timePassed < duration) {
            requestAnimationFrame(animate);
        }

    });
}