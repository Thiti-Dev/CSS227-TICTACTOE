var alreadywin = false;


//first start

var player1_name = prompt("โปรดใส่ชื่อผู้เล่น player 1 [ เล่นเป็น X ]");
var player2_name = prompt("โปรดใส่ชื่อผู้เล่น player 2 [ เล่นเป็น O ]");

if (player1_name === null || player2_name === null || player1_name === "" || player2_name === ""){

    alert("โปรดระบุชื่อผู้เล่นให้ถูกต้อง");
    location.reload();
}

//uppdate the  name //
var player1 = document.getElementById("player1_text"),
    player2 = document.getElementById("player2_text");

    player1.innerHTML = player1_name;
    player2.innerHTML = player2_name;

//


var infotext  = document.getElementById("infotext"),
boxes = document.querySelectorAll("#main div"), increaser = 0;
infotext.innerHTML = player1_name + " เริ่มก่อน";












////////////////// FUNCTIONS /////////////////////////////////

function newstart(){
    player1_name = prompt("โปรดใส่ชื่อผู้เล่น player 1 [ เล่นเป็น X ]");
    player2_name = prompt("โปรดใส่ชื่อผู้เล่น player 2 [ เล่นเป็น O ]");
    player1.innerHTML = player1_name;
    player2.innerHTML = player2_name;
    increaser = 0;
    infotext.innerHTML = player1_name + " เริ่มก่อน";
    alreadywin = false;
    restartgame();
}




// set event
for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (this.innerHTML !== "X" && this.innerHTML !== "O" && !alreadywin) {
            if (increaser % 2 === 0) {
                this.innerHTML = "X";
                infotext.innerHTML = player2.innerHTML + " เลือกได้ [ O ]";
                getWinner();
                increaser += 1;
                infotext.style.background = "red";

            } else {
                this.innerHTML = "O";
                infotext.innerHTML = player1.innerHTML + " เลือกได้ [ X ]";
                getWinner();
                increaser += 1;
                infotext.style.background = "blue";
            }
        }

    };
}

function restartgame() {

    for (var i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove("win");
        boxes[i].innerHTML = "";

        var tempholdplayer1 = player1.innerHTML;
        player1.innerHTML = player2.innerHTML;
        player2.innerHTML = tempholdplayer1;

        infotext.innerHTML = player1.innerHTML + " เล่นก่อน";

        infotext.style.fontSize = "25px";
        alreadywin = false;

        increaser = 0;
        infotext.style.background = "rgb(44, 194, 94)";
    }

}

function changeplayer(){
    //location.reload(); // ใช้ไม่ได้แล้วเพราะอัพใน codepen
    newstart();
}


function selectWinnerBoxes(b1, b2, b3) {
    b1.classList.add("win");
    b2.classList.add("win");
    b3.classList.add("win");
    if (b1.innerHTML == "X") {
        infotext.innerHTML = player1.innerHTML + " เป็นผู้ชนะ";
    }
    else {
        infotext.innerHTML = player2.innerHTML + " เป็นผู้ชนะ";
    }
    infotext.style.fontSize = "40px";
    alreadywin = true;
}

function getWinner() {

    var box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4"),
        box5 = document.getElementById("box5"),
        box6 = document.getElementById("box6"),
        box7 = document.getElementById("box7"),
        box8 = document.getElementById("box8"),
        box9 = document.getElementById("box9");

    // get all win type
    if (box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
        selectWinnerBoxes(box1, box2, box3);

    if (box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
        selectWinnerBoxes(box4, box5, box6);

    if (box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box7, box8, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box1, box4, box7);

    if (box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
        selectWinnerBoxes(box2, box5, box8);

    if (box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box3, box6, box9);

    if (box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
        selectWinnerBoxes(box1, box5, box9);

    if (box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
        selectWinnerBoxes(box3, box5, box7);

}