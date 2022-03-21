controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    basketball.throwDart()
})
function court (bool: boolean) {
    if (!(coach >= 18)) {
    	
    } else {
    	
    }
}
let defense: Sprite = null
let basketball: Dart = null
let coach = 0
game.splash("Welcome Coach!")
coach = game.askForNumber("How old are you?", 2)
basketball = darts.create(img`
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
game.onUpdateInterval(10000, function () {
    defense = sprites.createProjectileFromSide(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . e e e e e e . . . . . . 
        . . . . d d d d d d . . . . . . 
        . d . . d f d d f d . . d . . . 
        . d . . d d 1 1 d d . . d . . . 
        . d d d 2 2 2 2 2 2 d d d . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . 2 2 2 2 . . . . . . . 
        . . . . . d . . d . . . . . . . 
        . . . . . d . . d . . . . . . . 
        . . . . . d . . d . . . . . . . 
        . . . f f f . . f f f . . . . . 
        `, 20, randint(-20, 20))
    defense.y = randint(10, 150)
})
