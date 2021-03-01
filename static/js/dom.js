// It uses data_handler.js to visualize elements
import { dataHandler } from "./data_handler.js";
import { generateBoard } from './htmlGenerator.js'

export let dom = {
    init: function () {
        // This function should run once, when the page is loaded.
    },
    loadBoards: function () {
        let start = new Date()
        // retrieves boards and makes showBoards called
        console.log(getElapsedTime(), "[loadBoards] start of function")
        dataHandler.getBoards(function(boards){
            console.log(getElapsedTime(), "[loadBoards] callback start execution")
            console.log(getElapsedTime(), "[loadBoards] parameter (boards): ")
            console.log(boards)
            dom.showBoards(boards);
        });
    },
    showBoards: function (boards) {
        let boardsContainer = document.querySelector('#boards');

        for(let board of boards) {
            let newBoard = generateBoard(board)
            boardsContainer.innerHTML += newBoard // purposely mistaken
            // boardsContainer.insertAdjacentHTML("beforeend", newBoard)
            document.getElementById(`board-${board.id}`).addEventListener("click", () => {
                console.log(`add card for board with id: ${board.id}`)
            })
        }
    },
    loadCards: function (boardId) {
        // retrieves cards and makes showCards called
    },
    showCards: function (cards) {
        // shows the cards of a board
        // it adds necessary event listeners also
    },
    // here comes more features
};
