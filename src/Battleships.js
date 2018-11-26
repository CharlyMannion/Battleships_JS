function Battleships() {
    this.gameInProgress = false
}

Battleships.prototype.toggleGamePlay = function() {
    this.gameInProgress = !this.gameInProgress
}