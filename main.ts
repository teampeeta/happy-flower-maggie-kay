let projectile: Sprite = null
scene.setBackgroundColor(8)
effects.starField.startScreenEffect()
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
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ..............fffc..............
        ..............fbddcc............
        ..ccc.........ffbddbc...........
        ..cbbc.........fcbbccf..........
        ...cbdc.......ffccccccfffffff...
        ...fbdc....fffcbbbbbbbbbbbbbcff.
        ....fbdc.ffcccbbbbbbcbbbbbbbbbcf
        ....fcdffcccccbbbcbcbbbffbbbbcbf
        ....fcbbccccccbbbcbcbbbff1111bbf
        ...fcbbccccccccbbbcbb11111111bf.
        ...fbbfffcccccccbbbb11bc33cccf..
        ..fbbf..cbdbcccccbbb111c131cf...
        ..fff....cbdddddccbbc111c33f....
        ..........ccbddccbbdf1111ff.....
        ............ccfbbbdfccccc.......
        ..............fffff.............
        `, mySprite2, randint(-25, 700), randint(-25, 25))
    projectile.lifespan = 3000
    projectile.startEffect(effects.fire)
    if (projectile.vx < 0) {
        projectile.image.flipX()
    }
})
