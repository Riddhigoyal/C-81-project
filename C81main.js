canvas= document.getElementById("my_canvas");
ctx=canvas.getContext("2d");

color="green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=3;
ctx.arc(200,200,40,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    radius=document.getElementById("radius").value;
    width_of_line=document.getElementById("lineWidth").value;
    console.log (color);
    mousex=e.clientX-canvas.offsetLeft;
    mousey=e.clientY-canvas.offsetTop;
    console.log("x="+mousex+"y="+mousey);
    circle(mousex,mousey);

}
function circle(mousex,mousey){
   ctx.beginPath();
   ctx.strokeStyle=color;
   ctx.lineWidth=width_of_line;
   ctx.arc(mousex,mousey,radius,0,2*Math.PI);
   ctx.stroke();

}

function cleararea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
