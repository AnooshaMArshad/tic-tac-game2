let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".Reset-btn");
let newGameBtn = document.querySelector(".new-btn");
let msgContainer = document.querySelector(".msg-container");

let turnO = true; // Player X (false), Player O (true)

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO = true;
    enableButtons();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        box.innerHTML = turnO ? "O" : "X";
        turnO = !turnO;
        box.disabled = true;
        checkWinner();
    });
});

const disableButtons = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    });
};

const enableButtons = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerHTML = "";
    });
};

const showWinner = (winner) => {
    msgContainer.innerHTML = `<h1>Congratulations, winner is ${winner}</h1>`;
    msgContainer.classList.remove("hide");
    disableButtons();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let [a, b, c] = pattern;
        let box1Val = boxes[a].innerHTML;
        let box2Val = boxes[b].innerHTML;
        let box3Val = boxes[c].innerHTML;

        if (box1Val !== "" && box1Val === box2Val && box2Val === box3Val) {
            showWinner(box1Val);
            return;
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
