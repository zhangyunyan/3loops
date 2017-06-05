$(function () {
    var EnvList = document.getElementById('EnvList');
    var innerEnvList = document.getElementById('innerEnvList');
    var btn=document.getElementById('btnLR');
    var pre=document.getElementById('pre');
    var next=document.getElementById('next');
    var num = 0;
    function gd() {
        num=num+260;
        console.log(num);
        if (num > 0) {
            num = -780
        }
        innerEnvList.style.left = num + 'px'
    }
    function gdL() {
        num=num-260;
        console.log(num);
        if (num < -780) {
            num = 0
        }
        innerEnvList.style.left = num + 'px'
    }
    $(next).click(function () {
        gdL();
    })
    $(pre).click(function () {
        gd();
    })
})