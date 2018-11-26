describe("Battleships", function() {

    beforeEach(function() {
        battleships = new Battleships();
    })

    describe("A function to initiate a game of Battleships", function() {
        it("will set the game in progress to true", function() {
            battleships.toggleGamePlay();
            expect(battleships.gameInProgress).toEqual(true);
        })
    })
})