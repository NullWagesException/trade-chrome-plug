$(function(){

    let className = document.getElementsByClassName("ebase-frame-header-inner");
    console.log(className);
    className[0].innerHTML = className[0].innerHTML += '<button id="zf1" type="button" class="layui-btn">一个标准的按钮</button>\n';

    let element = document.getElementById("zf1");
    element.onclick = function () {
        let header = document.getElementsByClassName("oui-card-header");
        console.log(header);
        let html = header[1].innerHTML;
        console.log(html);
        header[1].innerHTML = html + "<button style='float: right' type=\"button\" class=\"layui-btn\">一个标准的按钮</button>\n";

    }

})