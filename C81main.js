canvas = document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
color = "orange";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 5;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();
canvas.addEventListener("mousedown",mym);
function mym(e)
{
    x=e.clientX-canvas.offsetLeft;
    y=e.clientY-canvas.offsetTop;gvvvvvvvvvvvvvvvvvv
    circle(x,y);
}
function circle(x,y)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 5;
    ctx.arc(x,y,40,0,2*Math.PI);
    ctx.stroke();  
}
