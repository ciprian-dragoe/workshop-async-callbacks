export function generateBoard(board) {
    return `<li>${board.title}</li><button id="board-${board.id}">add card</button>`
}