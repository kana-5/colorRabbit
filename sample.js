window.onload = function(){
    var can = document.getElementById("canvas");
    var ctx = can.getContext("2d");
    var color = "#fff";

    var count = 0;//アニメーションカウンター
    var timer = setInterval(function(){
        ctx.fillStyle="#fff";//消去時の色
        ctx.clearRect(0,0,300,300);//消す
        ctx.fillStyle = color;//塗りつぶし色を決定
        ctx.fillRect(50,50,200,200);
        count++;
        if(count>200){
            clearInterval(timer);
        }
    },100);

}

function change(color){
    ctx.fillStyle = color;
}