function StatmentControl(options){
    var  selfRef = this;
    var counteiner = options.counteiner;
    selfRef.addEventLeftButtonStatementExpandMenu();
}

StatmentControl.prototype ={
    constructor:StatmentControl,
    addEventLeftButtonStatementExpandMenu: function(){
        var buttonLeftExpandMenu = $('#leftButtonStatementExpandMenu');
        var expandMenu=document.getElementById('leftControlMenu');
        buttonLeftExpandMenu.click(function(){
            expandMenu.classList.toggle('expandMenu');
        })
    }
};