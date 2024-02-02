const socketio = require("socket.io")(1337);
module.exports.updatequestssocket = function(p1, p2) {
    socketio.emit("quest", {
        quest: `${global.questtitle}`,
        progress: `${p1} / ${p2}`,
        date: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
    });
}

module.exports.updatechecklistsocket = function(i, e) {
    setTimeout(() => {
        socketio.emit("checklist", {
            name: i,
            status: e,
        });
    }, 3000);
}

module.exports.updateerrorsocket = function(eyl) {
    setTimeout(() => {
        socketio.emit("errors", {
            error: eyl,
        });
    }, 3100);
}