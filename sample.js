window.onload = function(){
    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var color = "#fff";
    ctx.fillStyle = color;//塗りつぶし色を決定
    //円形に塗りつぶし
    ctx.arc(150,150,75,0*Math.PI,2*Math.PI,true);
    ctx.fill();

}

function change(){

    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var color = document.getElementById("color").value;
    var mongon = document.getElementById("color").placeholder;
    //ここは値が渡せてるかの確認用
    //confirm(color);
    ctx.fillStyle = color;
    ctx.arc(150,150,75,0*Math.PI,2*Math.PI,true);
    ctx.fill();

    mongon.placeholder = "今の色は".color;

}