var isMobile = navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i
);

{
    const board = document.querySelector(".board--container");

    // for (i = 0; i < 100; i++) {
    //     var square = document.createElement("div");
    //     var dimension = screen.height / 10 + "px";
    //     square.id = "square" + i;
    //     square.style.border = "1px solid white";
    //     square.style.width = "1in";
    //     square.style.height = "1in";
    //     board.appendChild(square);
    // }

    var fullscreenBtn = document.querySelector(".fullscreenBtn");
    var fullscreenOpen = false;

    fullscreenBtn.onclick = () => {
        if (fullscreenOpen) {
            fullscreenOpen = false;
            closeFullscreen();
            function closeFullscreen() {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    /* Firefox */
                    document.mozCancelFullScreen();
                } else if (document.webkitExitFullscreen) {
                    /* Chrome, Safari and Opera */
                    document.webkitExitFullscreen();
                } else if (document.msExitFullscreen) {
                    /* IE/Edge */
                    document.msExitFullscreen();
                }
            }
        } else {
            fullscreenOpen = true;
            openFullscreen(board);
            function openFullscreen(elem) {
                if (elem.requestFullscreen) {
                    elem.requestFullscreen();
                } else if (elem.mozRequestFullScreen) {
                    /* Firefox */
                    elem.mozRequestFullScreen();
                } else if (elem.webkitRequestFullscreen) {
                    /* Chrome, Safari and Opera */
                    elem.webkitRequestFullscreen();
                } else if (elem.msRequestFullscreen) {
                    /* IE/Edge */
                    elem.msRequestFullscreen();
                }
            }
        }
    };
}

{
    // Make the background image  draggable on desktop via mouse
    // dragElement(document.querySelector(".boardImg"));
    // function dragElement(elmnt) {
    //     var pos1 = 0,
    //         pos2 = 0,
    //         pos3 = 0,
    //         pos4 = 0;
    //     if (document.getElementById(elmnt.id + "header")) {
    //         // if present, the header is where you move the DIV from:
    //         document.getElementById(
    //             elmnt.id + "header"
    //         ).onmousedown = dragMouseDown;
    //     } else {
    //         // otherwise, move the DIV from anywhere inside the DIV:
    //         elmnt.onmousedown = dragMouseDown;
    //     }
    //     function dragMouseDown(e) {
    //         e = e || window.event;
    //         e.preventDefault();
    //         // get the mouse cursor position at startup:
    //         pos3 = e.clientX;
    //         pos4 = e.clientY;
    //         document.onmouseup = closeDragElement;
    //         // call a function whenever the cursor moves:
    //         document.onmousemove = elementDrag;
    //     }
    //     function elementDrag(e) {
    //         var paintToggled = document.querySelector("#paintToggler").checked;
    //         if (paintToggled) {
    //         } else {
    //             e = e || window.event;
    //             e.preventDefault();
    //             // calculate the new cursor position:
    //             pos1 = pos3 - e.clientX;
    //             pos2 = pos4 - e.clientY;
    //             pos3 = e.clientX;
    //             pos4 = e.clientY;
    //             // set the element's new position:
    //             elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    //             elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    //         }
    //     }
    //     function closeDragElement() {
    //         // stop moving when mouse button is released:
    //         document.onmouseup = null;
    //         document.onmousemove = null;
    //     }
    // }
    //make image draggable on mobile via touch
    //Had an issue where every time you touch it would reset the position
    // var draggable = document.querySelector(".boardImg");
    // draggable.addEventListener(
    //     "touchmove",
    //     function(event) {
    //         var touch = event.targetTouches[0];
    //         // Place element where the finger is
    //         draggable.style.left = touch.pageX - 25 + "px";
    //         draggable.style.top = touch.pageY - 25 + "px";
    //         event.preventDefault();
    //     },
    //     false
    // );
}

{
    //controls for adjusting the image size and position
    var increaseImgScale = document.querySelector(".increaseScale");
    var decreaseImgScale = document.querySelector(".decreaseScale");
    var boardImg = document.querySelector(".boardImg");

    let increment = 1;
    var done = false;

    increaseImgScale.onmousedown = () => {
        boardImg.style.width = "100%";
        boardImg.style.height = "auto";
        var imgWidth = 100;
        console.log(imgWidth);
        increment += 1;
        boardImg.style.width = 100 + increment + "%";
        // boardImg.style.transform =
        // "scale(" + increment + ") rotate(" + rotateDeg + "deg)";
    };

    decreaseImgScale.onclick = () => {
        boardImg.style.width = "100%";
        boardImg.style.height = "auto";
        var imgWidth = 100;
        console.log(imgWidth);
        increment -= 1;
        boardImg.style.width = 100 + increment + "%";
        // boardImg.style.transform =
        // "scale(" + increment + ") rotate(" + rotateDeg + "deg)";
    };

    var rotateLeft = document.querySelector(".rotateLeft");
    var rotateRight = document.querySelector(".rotateRight");
    var boardImg = document.querySelector(".boardImg");

    let rotateDeg = 0;

    rotateLeft.onclick = () => {
        rotateDeg -= 0.1;

        boardImg.style.transform =
            "scale(" + increment + ") rotate(" + rotateDeg + "deg)";
    };

    rotateRight.onclick = () => {
        rotateDeg += 0.1;

        boardImg.style.transform =
            "scale(" + increment + ") rotate(" + rotateDeg + "deg)";
    };
}

{
    //this is for painting
    const mainBoard = document.querySelector(".board--container");
    const board = document.querySelector(".board--container-image");
    var boardImg = document.querySelector(".boardImg");

    var paintArr = [];
    var paintHistory = [];
    // boardImg.onclick = () => {
    //     var paintToggled = document.querySelector("#paintToggler").checked;

    //     if (paintToggled && !isMobile) {
    //         mainBoard.style.overflow = "hidden"; //fix the board in place while painting
    //         //for desktop
    //         boardImg.onmousedown = () => {
    //             boardImg.onmousemove = () => {
    //                 var mouseX = event.clientX;
    //                 var mouseY = event.clientY;
    //                 var div = document.createElement("div");
    //                 div.style.position = "absolute";
    //                 div.style.top = mouseY - 50 + "px";
    //                 div.style.left = mouseX - 50 + "px";
    //                 div.style.width = "1in";
    //                 div.style.height = "1in";
    //                 div.style.backgroundColor = "black";
    //                 div.style.borderRadius = "50% 50%";
    //                 div.id = paintArr.length;
    //                 paintArr.push(div);
    //                 board.appendChild(div);
    //                 var paintToggled = document.querySelector("#paintToggler")
    //                     .checked;
    //             };
    //         };
    //     }
    // };

    //mobile: ontouchmove for drawing lines

    document.body.ontouchmove = e => {
        var paintToggled = document.querySelector("#paintToggler").checked;

        if (paintToggled) {
            var x = e.touches[0].clientX;
            var y = e.touches[0].clientY;

            ctx.lineTo(x, y);
            ctx.stroke();
        }
    };
    document.body.ontouchstart = e => {
        var paintToggled = document.querySelector("#paintToggler").checked;
        if (paintToggled) {
            ctx.beginPath();
            // ctx.moveTo(e.touches[0].clientX, e.touches[0].clientY);
        }
    };
}

{
    function onFileSelected(event) {
        var selectedFile = event.target.files[0];
        var reader = new FileReader();

        var imgtag = document.querySelector("#boardImg");

        imgtag.style.display = "";
        imgtag.title = selectedFile.name;

        reader.onload = function(event) {
            imgtag.src = event.target.result;
        };

        reader.readAsDataURL(selectedFile);

        var canvas = document.querySelector("#board--canvas");
        ctx = canvas.getContext("2d");
        imgtag.addEventListener("load", e => {
            ctx.drawImage(imgtag, 0, 0);
        });
    }
}

{
    //toggles controls
    var decBtn = document.querySelector(".decreaseScale");
    var incBtn = document.querySelector(".increaseScale");
    var rotLBtn = document.querySelector(".rotateLeft");
    var rotRBtn = document.querySelector(".rotateRight");
    var paintBtn = document.querySelector("#paintToggler");
    var fullScreenBtn = document.querySelector(".fullscreenBtn");
    var ctrlToggle = document.querySelector(".ctrlToggle");

    var controlsShown = true;

    ctrlToggle.onclick = () => {
        if (controlsShown) {
            decBtn.style.display = "none";
            incBtn.style.display = "none";
            rotLBtn.style.display = "none";
            rotRBtn.style.display = "none";
            paintBtn.style.display = "none";
            fullScreenBtn.style.display = "none";
            ctrlToggle.style.width = "5vh";
            ctrlToggle.style.height = "5vh";
            controlsShown = false;
        } else {
            decBtn.style.display = "";
            incBtn.style.display = "";
            rotLBtn.style.display = "";
            rotRBtn.style.display = "";
            paintBtn.style.display = "";
            fullScreenBtn.style.display = "";
            ctrlToggle.style.width = "";
            ctrlToggle.style.height = "";
            controlsShown = true;
        }
    };
}

{
    //learning AJAX
    var btn = document.querySelector("#getBtn");
    var bodyTxt = document.querySelector("#jsonText");
    var info;
    var boardImg = document.querySelector("#boardImg");
    btn.onclick = e => {
        e.preventDefault();
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                info = this.responseText;

                console.log("path: " + info);
                bodyTxt.innerHTML = info;
                boardImg.src = info;
                console.log(boardImg.src);
            }
        };
        xhttp.open("GET", "http://localhost:3000/users", true);
        xhttp.send();
    };

    //load current image from server
    window.onload = () => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                boardImg.src = this.responseText;
                console.log(
                    "ReadyState: " +
                        this.readyState +
                        "\nStatus: " +
                        this.status
                );
            }

            bodyTxt.innerHTML =
                "ReadyState: " + this.readyState + "\nStatus: " + this.status;
        };
        xhttp.open("GET", "http://localhost:3000/boardImage", true);
        xhttp.send();
    };
}

{
    // let postForm = document.querySelector("#postForm");
    // var formData = new FormData(postForm);
    // var postBtn = document.querySelector("#postBtn");
    // postBtn.onclick = e => {
    //     e.preventDefault();
    //     var xhttp = new XMLHttpRequest();
    //     xhttp.open("POST", "http://localhost:3000/users", true);
    //     xhttp.send("This is a test post.");
    // };
}
