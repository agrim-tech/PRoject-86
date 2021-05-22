var canvas = new fabric.Canvas('myCanvas');
var player_object = "";

function player_update() {
    fabric.Image.fromURL("download.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(250);
        player_object.scaleToHeight(300);
        player_object.set({ top: 40, left: 40 });
        canvas.add(player_object);
    });
}

player_update();