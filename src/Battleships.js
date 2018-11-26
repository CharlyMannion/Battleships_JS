function Battleships() {
    this.gameInProgress = false
}

Battleships.prototype.startGame = function() {
    this.gameInProgress = !this.gameInProgress
}