scene.setBackgroundColor(3)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . f f f f f f . f f f f f f . 
    . f f 3 3 3 3 f f f 3 3 3 3 f f 
    . f 3 3 3 3 3 3 f 3 3 3 3 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 3 3 3 1 1 1 3 3 f 
    . f 3 3 3 3 3 b b b 1 1 1 3 3 f 
    . f 3 3 3 3 b b b b b 3 3 3 3 f 
    . f f 3 3 b b b b b b b 3 3 f f 
    . . f f 3 b b b b b b b 3 f f . 
    . . . f f b b b b b b b f f . . 
    . . . . f f b b b b b f f . . . 
    . . . . . f f b b b f f . . . . 
    . . . . . . f f b f f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite2, 90, 90)
