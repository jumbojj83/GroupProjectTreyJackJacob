function court (bool: boolean) {
    if (!(coach >= 18)) {
    	
    } else {
    	
    }
}
let defense: Sprite = null
let coach = 0
game.splash("Welcome Coach!")
coach = game.askForNumber("How old are you?", 2)
let basketball = darts.create(img`
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 f 4 4 4 4 4 f 4 4 4 4 4 
    4 4 . f f f . f . . f . f . 4 4 
    4 4 . f . f . f . f f . f . 4 4 
    4 4 1 1 . f . f . f . . f . 4 4 
    4 4 . 1 1 f 1 f . f . . f . 4 4 
    4 4 . f . f f 1 f f 1 1 1 1 1 4 
    4 4 . f . . f 1 f 1 . . f . 4 4 
    4 4 1 1 1 1 f 1 f 1 1 1 1 1 4 4 
    4 4 . f . 1 1 f . . 1 . f . 4 4 
    4 4 . f 1 1 . f f . . 1 f . 4 4 
    4 4 . 1 1 . f f f f . 1 1 . 4 4 
    4 4 . 1 . f f f . f f . 1 1 4 4 
    4 4 1 f f f . f . . f f f 1 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
    `, SpriteKind.Player)
basketball.setTrace()
basketball.controlWithArrowKeys()
let net = sprites.create(img`
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
    2 2 2 2 . . . . . . . . . 2 2 2 
    2 2 2 . . . . . . . . . . . . 2 
    2 2 . . . . . . . . . . . . . 2 
    2 2 1 . . . . . . . . . 8 . . 2 
    2 . 1 . 8 8 . . 1 . . 1 8 8 . 2 
    2 1 1 . 8 . . . 1 . . 1 . 8 . 2 
    2 1 . . 8 . . . 1 . . 1 . 8 2 2 
    1 2 2 8 8 . . . 1 . . 1 . 2 2 2 
    1 2 2 2 2 2 2 2 2 2 2 2 2 2 8 2 
    1 . . 8 . . . . 1 . . 1 . . 8 8 
    1 . 8 8 . . . . 1 . . . 1 . . 8 
    1 . 8 . . . . 1 1 . . . 1 . . 8 
    1 . 8 . . . . 1 . . . . 1 . . 8 
    1 . 8 . . . . 1 . . . . . 1 . 8 
    `, SpriteKind.Player)
net.setPosition(150, 50)
game.onUpdateInterval(5000, function () {
    defense = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, 50, 50)
})
