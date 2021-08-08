setTimeout(function() {
    console.log("raster");
    raster = new Raster("boardImg");

    raster.scale(0.5);

    // Move the raster to the center of the view
    raster.position = view.center;
    raster.sendToBack();
}, 1000);

function onMouseDown(event) {
    raster.scale(0.1);
}

var myPath;

function onMouseDown(event) {
    // The mouse was clicked, so let's put a newly created Path into
    // myPath, give it the color black and add the location as the
    // path's first segment.

    myPath = new Path();
    myPath.strokeColor = "black";
    myPath.strokeWidth = 10;
    myPath.add(event.point);
}

function onMouseDrag(event) {
    // The mouse was released, so we add the new location as the end
    // segment of the line.
    var paintToggled = document.querySelector("#paintToggler").checked;
    if (paintToggled) myPath.add(event.point);
}
console.log("End of paperjs");
