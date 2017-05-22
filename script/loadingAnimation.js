
window.onload=function(){
    var firstLine =document.getElementById("expand");
    var secondLine =document.getElementById("expand2");
    var buttonLeft = document.getElementById("buttonMenuLeft");
    var buttonRigth= document.getElementById("buttonRightMenu");
    var LoadingLineBot=document.getElementById("LoadingLineBot");

    buttonLeft.onclick=function ButtonClick(){
        firstLine.style.display = "block";
        secondLine.style.display = "block";
    };
    buttonRigth.onclick=function ButtonClick(){
        firstLine.style.display = "block";
        secondLine.style.display = "block";
        secondLine.id="expand2_otherAnimation";
        secondLine.style.webkitAnimationPlayState="running";

    };
    var sizeElement=document.getElementsByTagName('iframe')[0];
    var s=sizeElement.contentWindow.document.body.scrollHeight;
    var center=document.getElementById('innerCenter');
   //alert(getComputedStyle(sizeElement).height);
    center.style.height=s;
};