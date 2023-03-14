canvas=new fabric.Canvas(myCanvas)
PlayerX=10
PlayerY=10

Image_Width=30;
Image_Height=30;

Player_Object="";
Block_Image_Object="";

function player_update() {

    fabric.Image.fromURL("player.png", function (Img) {

        Player_Object = Img;

        Player_Object.scaleToWidth(150);
        Player_Object.scaleToHeight(140);
        Player_Object.set({
            left: PlayerX, top:PlayerY,
        });
        canvas.add(Player_Object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img){
 Block_Image_Object = Img;

 Block_Image_Object.scaleToWidth(Image_Width);

 Block_Image_Object.scaleToHeight(Image_Height);
 Block_Image_Object.set({
    top: PlayerY,
    left: PlayerX
 });
 canvas.add(Block_Image_Object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == "80") {
 console.log("Se presiona p + shift ");
 Image_Width = Image_Width + 10;
 Image_Height = Image_Height + 10;

 document.getElementById("Current_Width").innerHTML = Image_Width;

 document.getElementById("Current_Height").innerHTML = Image_Height;
    }
    if (e.shiftKey && keyPressed == "77") {
        console.log("Se presiona m y shift al mismo tiempo");
        Image_Width = Image_Width - 10;
        Image_Height = Image_Height - 10;

        document.getElementById("Current_Width").innerHTML = Image_Width;

        document.getElementById("Current_Height").innerHTML = Image_Height;
    }
    if (keyPressed == "37"){
        left();
        console.log ("left");
    }
    if (keyPressed == " 38"){
        up();
        console.log("up")
    }
    if (keyPressed == "39") {
        right();
        console.log("right");
    }
    if (keyPressed == "40") {
        down();
        console.log("down");
    }
    if (keyPressed == "67") {
        new_image("cloud.jpg");
        console.log("c");
    }
    if (keyPressed == "68") {
        new_image("dark_green.png");
        console.log("d");
    }
    if (keyPressed == "71") {
        new_image("ground.png");
        console.log("g");
}
if (keyPressed == "76") {
    new_image("light_green.png");
    console.log("1");
}
if (keyPressed == "82") {
    new_image("roof.jpg");
    console.log("r");
}
if (keyPressed == "84") {
    new_image("trunk.jpg");
    console.log("t");
}
if (keyPressed == "85") {
    new_image("unique.png");
    console.log("u");
}
if (keyPressed == "87") {
    new_image("wall.jpg");
    console.log("w");
}
if (keyPressed == "89") {
    new_image("yellow_wall.png");
    console.log("y");
}
}
    function up(){
        if(PlayerY >= 0) {
            PlayerY = PlayerY - Image_Height;
            console.log("altura del bloque" + Image_Height);
            console.log("Coordenada" + PlayerX+"/"+ PlayerY);
            canvas.remove(Player_Object);
            player_update();
        }
    }

    function down(){
        if(PlayerY <= 500) {
            PlayerY = PlayerY + Image_Height;
            console.log("altura del bloque" + Image_Height);
            console.log("Coordenada" + PlayerX+"/"+ PlayerY);
            canvas.remove(Player_Object);
            player_update();
        }
    }

    function left(){
        if(PlayerX > 0) {
            PlayerX = PlayerX - Image_Width;
            console.log("ancho del bloque" + Image_Width);
            console.log("Coordenada" + PlayerX+"/"+ PlayerY);
            canvas.remove(Player_Object);
            player_update();
        }
    }

    function right(){
        if(PlayerX <= 850) {
            PlayerX = PlayerX + Image_Width;
            console.log("ancho del bloque" + Image_Width);
            console.log("Coordenada" + PlayerX+"/"+ PlayerY);
            canvas.remove(Player_Object);
            player_update();
        }
    }