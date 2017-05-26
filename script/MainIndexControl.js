
function MainIndexControl(options){
    var selfRef = this;
    var counteiner=options.counteiner;
    selfRef.MainIndexControlCreateMenuTopControl();
    selfRef.IframeSizeSet();
}
MainIndexControl.prototype={
    constructor: MainIndexControl,
    MainIndexControlCreateMenuTopControl:function(){
        var leftButtonMenu = $('#buttonMenuLeft');
        leftButtonMenu.click(function OnClickButton(){
        this.MenuShow(leftButtonMenu);
    })
    },
    MenuShow: function(menuControlObj){

    }
    ,
    MainControlAnimationMenu: function(){

    },
    MainControlAnimationStartPlay: function(){

    },
    IframeSizeSet: function(){
        var iframe= $('#mainIframe').contents();
        var newsBlockParentIframe = $('#innerCenter');
        var iframeSize=iframe.find('body').height();
        newsBlockParentIframe.height(iframeSize);
        if( iframe.find('.newsCellText')){
            iframe.find('.newsCellText').click(function(){
                var iframeSize=iframe.find('body').height();
                newsBlockParentIframe.height(iframeSize);
            })
        }
    }
};