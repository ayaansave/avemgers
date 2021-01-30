var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

block_image_width = 30;
block_image_height = 30;

var player_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("https://i.postimg.cc/zDwfFdYY/player.png", function(Img) {
	player_object = Img;

	player_object.scaleToWidth(150);
	player_object.scaleToHeight(140);
	player_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(player_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:player_y,
	left:player_x
	});
	canvas.add(block_image_object);

	});

}




window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == "80")
    {
        console.log("p and shift pressed together");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height+ 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && keyPressed == "77")
    {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
	}
	if(keyPressed =="38")
	{
		up();
		console.log("up");
	}
	if(keyPressed =="40")
	{
		down();
		console.log("down");   
	}
	if(keyPressed =="37")
{
    left();
    console.log("left") ;  
}
if(keyPressed =="39")
{
    right();
    console.log("right") ;  
}
if(keyPressed =="65")
{
    new_image("cap_lh.png");
    console.log("a")   ;
}
if(keyPressed =="66")
{
    new_image("hulk_b.png");
    console.log("b")   ;
}
if(keyPressed =="67")
{
    new_image("hulk_f.png");
    console.log("c")   ;
}
if(keyPressed =="68")
{
    new_image("hulk_l.png");
    console.log("d  ")  ; 
}
if(keyPressed =="69")
{
    new_image("hulk_rh.png");
    console.log("e")   ;
}
if(keyPressed =="70")
{
    new_image("ironman_b.png");
    console.log("f")   ;
}
if(keyPressed =="71")
{
    new_image("ironman_f.png");
    console.log("g")   ;
}

if(keyPressed =="72")
{
    new_image("ironman_l.png");
    console.log("h")   ;
}
if(keyPressed =="73")
{
    new_image("ironman_rh.png");
    console.log("i")   ;
}
if(keyPressed =="74")
{
    new_image("spiderman_b.png");
    console.log("j")   ;
}
if(keyPressed =="75")
{
    new_image("spiderman_f.png");
    console.log("k")   ;
}
if(keyPressed =="76")
{
    new_image("spiderman_l.png");
    console.log("l")   ;
}
if(keyPressed =="84")
{
    new_image("spiderman_lh.png");
    console.log("t")   ;
}
if(keyPressed =="78")
{
    new_image("spiderman_rh.png");
    console.log("n")   ;
}
if(keyPressed =="79")
{
    new_image("hulk_lh.png");
    console.log("o")   ;
}
if(keyPressed =="85")
{
    new_image("thor f.jpg");
    console.log("u")   ;
}
if(keyPressed =="81")
{
    new_image("thor_lh.png");
    console.log("q")   ;
}
if(keyPressed =="82")
{
    new_image("thor_rh.png");
    console.log("r")   ;
}
if(keyPressed =="83")
{
    new_image("hulk_l.png");
    console.log("s")   ;
}
if(keyPressed =="90")
{
    new_image("a.png");
    console.log("z")   ;
}
if(keyPressed =="86")
{
    new_image("black panther.jpg");
    console.log("v")   ;
}
if(keyPressed =="89")
{
    new_image("Antman-helmet.jpg");
    console.log("y")   ;
}
}
function up(){
    if(player_y>=0)
    {
        player_y = player_y-block_image_height;
        console.log("block image height = "+block_image_height)
        console.log("when up arrow key is pressed, X = " + player_x+", Y ="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function down(){
    if(player_y <=500){
        player_y = player_y+block_image_height;
        console.log("block image height = " + block_image_height);
        console.log("when down arrow key is pressed,X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){
    if(player_x >0){
        player_x = player_x - block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when left arrow key is pressed,X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){
    if(player_x <=850){
        player_x = player_x + block_image_width;
        console.log("block image width = " + block_image_width);
        console.log("when right arrow key is pressed,X = " + player_x + ",Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}