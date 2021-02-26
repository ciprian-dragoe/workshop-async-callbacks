import { dom } from "./dom.js";

// This function is to initialize the application
function init() {
    // init data
    dom.init();
    // loads the boards to the screen
    console.log(getElapsedTime(), "[init] call loadBoards")
    dom.loadBoards();

}

console.log(getElapsedTime() ,"Second <script>")
init();
