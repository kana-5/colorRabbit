window.onload = function(){
    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var color = "#fff";
    ctx.fillStyle = color;//塗りつぶし色を決定
    ctx.fillRect(50,50,200,200);//塗りつぶし

}

function change(){

    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var color = document.getElementById("color").value;
    //ここは値が渡せてるかの確認用
    //confirm(color);
    
    ctx.fillStyle = color;
    ctx.fillRect(50,50,200,200);
    
}