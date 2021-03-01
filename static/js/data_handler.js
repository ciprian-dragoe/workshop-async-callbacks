// this object contains the functions which handle the data and its reading/writing
// feel free to extend and change to fit your needs

// (watch out: when you would like to use a property/function of an object from the
// object itself then you must use the 'this' keyword before. For example: 'this._data' below)
export let dataHandler = {
    _data: {}, // it is a "cache for all data received: boards, cards and statuses. It is not accessed from outside.
    _api_get: function (url, callback) {
        // it is not called from outside
        // loads data from API, parses it and calls the callback with it
        console.log(getElapsedTime(), "[_api_get] start of function")
        console.log(getElapsedTime(), "[_api_get] parameter (url):")
        console.log(url)
        console.log(getElapsedTime(), "[_api_get] parameter (callback):")
        console.log(Function.prototype.toString.call(callback))
        console.log(getElapsedTime(), "[_api_get] start async fetch")
        fetch(url, {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(response => {
            console.log(getElapsedTime(), "[_api_get] async 1st response")
            console.log(response)
            if (response.status !== 200) {
                alert("server is too busy")
            }
            return response.json()
        })  // parse the response as JSON
        .then(json_response => {
            console.log(getElapsedTime(), "[_api_get] async 2nd response")
            console.log(json_response)
            console.log(getElapsedTime(), "[_api_get] invoke callback")
            console.log(Function.prototype.toString.call(callback))
            return callback(json_response)
        });  // Call the `callback` with the returned object
    },
    _api_post: function (url, data, callback) {
        // it is not called from outside
        // sends the data to the API, and calls callback function
    },
    init: function () {
    },
    getBoards: function (callback) {
        // the boards are retrieved and then the callback function is called with the boards
        console.log(getElapsedTime(), "[getBoards] start of function")
        console.log(getElapsedTime(), "[getBoards] parameter (callback):")
        console.log(Function.prototype.toString.call(callback))
        // Here we use an arrow function to keep the value of 'this' on dataHandler.
        //    if we would use function(){...} here, the value of 'this' would change.
        this._api_get('/get-boards', (response) => {
            console.log(getElapsedTime(), "[getBoards] callback start execution")
            console.log(getElapsedTime(), "[getBoards] parameter (response):")
            console.log(response)
            console.log(getElapsedTime(), "[getBoards] invoke callback")
            console.log(Function.prototype.toString.call(callback))
            callback(response);
        });
    },
    getBoard: function (boardId, callback) {
        // the board is retrieved and then the callback function is called with the board
    },
    getStatuses: function (callback) {
        // the statuses are retrieved and then the callback function is called with the statuses
    },
    getStatus: function (statusId, callback) {
        // the status is retrieved and then the callback function is called with the status
    },
    getCardsByBoardId: function (boardId, callback) {
        // the cards are retrieved and then the callback function is called with the cards
    },
    getCard: function (cardId, callback) {
        // the card is retrieved and then the callback function is called with the card
    },
    createNewBoard: function (boardTitle, callback) {
        // creates new board, saves it and calls the callback function with its data
    },
    createNewCard: function (cardTitle, boardId, statusId, callback) {
        // creates new card, saves it and calls the callback function with its data
    }
    // here comes more features
};
