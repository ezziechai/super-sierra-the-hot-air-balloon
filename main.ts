namespace SpriteKind {
    export const Background = SpriteKind.create()
    export const Mountain = SpriteKind.create()
}
function spawnSomething (roll: number) {
    if (roll <= 2) {
        createSaucer()
    } else if (roll <= 6) {
        createTree()
    } else if (roll <= 24) {
        createCloud()
    } else if (roll <= 40) {
        createBird()
    }
}
function createSaucer () {
    if (Math.percentChance(50)) {
        saucerSpeed = 40
    } else {
        saucerSpeed = -40
    }
    saucer = sprites.createProjectileFromSide(img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fa9b9bb9bb9bb9bb9b9af
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `, saucerSpeed, 0)
    animation.runImageAnimation(
    saucer,
    flyingSaucer,
    500,
    false
    )
    saucer.y = randint(10, scene.screenHeight() - 10)
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.startEffect(effects.fire)
    balloon.ay = -50
    balloon.setImage(balloonInflated)
})
function createAnimationArrays () {
    flyingSaucer = [img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fa9b9bb9bb9bb9bb9b9af
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `, img`
        .........fff.........
        .......ff888ff.......
        ......f8888998f......
        .....f888888998f.....
        ....f888a8a88998f....
        ...ff88888888898ff...
        ..fdddddddddddddddf..
        .fbbbbbbbbbbbbbbbbbf.
        fab4b44b44b44b44b4baf
        .facccccccccccccccaf.
        ..faacccccccccccaaf..
        ...ffaacccccccaaff...
        .....fffffffffff.....
        .....f999999999f.....
        ......fffffffff......
        `]
    birdGoingLeft = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f 
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f . 
        . f f f 8 8 8 f 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . . 
        . f 8 f 8 8 8 8 8 f 8 f 8 8 8 f . 
        f 4 5 8 8 8 8 8 8 8 f 8 8 8 8 f . 
        f 5 5 5 8 8 f 8 8 8 8 f 8 8 f . . 
        . f f f 8 8 8 f 8 8 8 8 f 8 f . . 
        . . . . f f a f f 8 8 8 8 f f . . 
        . . . . . . . . f 8 8 8 f . . . . 
        . . . . . . . . . f 8 8 f . . . . 
        . . . . . . . . . . f f . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f . . . . . . . . . 
        . . f 8 8 8 8 f f f f . f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 8 8 f f 8 f 
        f 5 5 5 8 8 f 8 8 8 8 8 8 8 f . 
        . f f f 8 8 8 f 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . f f . . . 
        . . . . . . . . . . f 8 8 f . . 
        . . . f f f f . f f 8 8 8 f . . 
        . . f 8 8 8 8 f f 8 8 8 f f f . 
        . f 8 f 8 8 8 8 8 8 8 f 8 8 8 f 
        f 4 5 8 8 8 8 8 8 8 f 8 f f 8 f 
        f 5 5 5 8 8 8 8 8 f 8 8 8 8 f . 
        . f f f 8 8 8 8 8 8 8 8 8 8 f . 
        . . . . f f f f f 8 8 8 f f . . 
        . . . . . . . . f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
    birdGoingRight = [
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 f 8 8 8 8 8 f 8 f . 
        f 8 8 8 8 f 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 f 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 f 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 8 f f f f . . . . 
        . . . f 8 8 8 f . . . . . . . . 
        . . . f 8 8 f . . . . . . . . . 
        . . . . f f . . . . . . . . . . 
        `,
    img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . f f f f . . . 
        . f f f . f f f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 8 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 8 8 8 f 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 f 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,
    img`
        . . . f f . . . . . . . . . . . 
        . . f 8 8 f . . . . . . . . . . 
        . . f 8 8 8 f f . f f f f . . . 
        . f f f 8 8 8 f f 8 8 8 8 f . . 
        f 8 8 8 f 8 8 8 8 8 8 8 f 8 f . 
        f 8 f f 8 f 8 8 8 8 8 8 8 5 4 f 
        . f 8 8 8 8 f 8 8 8 8 8 5 5 5 f 
        . f 8 8 8 8 8 8 8 8 8 8 f f f . 
        . . f f 8 8 8 f f f f f . . . . 
        . . . . f f f f . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `
    ]
}
controller.anyButton.onEvent(ControllerButtonEvent.Released, function () {
    balloon.ay = 50
    balloon.setImage(balloonDeflated)
    effects.clearParticles(balloon)
})
function createBird () {
    if (Math.percentChance(50)) {
        saucerSpeed = 20
        chosenAnimation = birdGoingRight
    } else {
        saucerSpeed = -20
        chosenAnimation = birdGoingLeft
    }
    bird = sprites.createProjectileFromSide(birdGoingLeft._pickRandom(), saucerSpeed, 0)
    animation.runImageAnimation(
    bird,
    chosenAnimation,
    100,
    true
    )
    bird.y = randint(12, scene.screenHeight() - 0)
}
function createCloud () {
    cloudImages = [img`
        ..................1111...............
        ................11111111.............
        ...............1111111111............
        ..............11111111111....11111...
        ..............111111111111.11111111..
        .............11111111111111111111111.
        ........11111111111111111111111111111
        .......111111111111111111111111111111
        1111111111111111111111111111111111111
        .111111111111111111111111111111111111
        .......111111111111111111111111111111
        .......................1111111111111.
        `, img`
        . . . 1 1 1 1 . . . 1 1 . . . . . . . . 
        . . 1 1 1 1 1 1 . 1 1 1 1 . . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . 
        . 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 1 . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . 
        `, img`
        ............111111...........
        ..........111111111..........
        .........11111111111.........
        ........1111111111111........
        ........1111111111111........
        ........11111111111111.......
        ....111111111111111111111111.
        ...11111111111111111111111111
        ..111111111111111111111111111
        ..111111111111111111111111111
        11111111111111111111111111111
        .11111111111111111111.1.1111.
        1........11111111111.....11..
        11111111111111...............
        `]
    cloud = sprites.createProjectileFromSide(cloudImages[randint(0, cloudImages.length - 1)], -5, 0)
    cloud.z = -10
    cloud.setFlag(SpriteFlag.Ghost, true)
    cloud.y = randint(0, scene.screenHeight() * 0.6)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    sprite.sayText("OW!", 500, false)
})
function placeMountain (leftPosition: number) {
    lastCreatedMountain = sprites.create(mountains[randint(0, 1)], SpriteKind.Mountain)
    lastCreatedMountain.left = leftPosition
    lastCreatedMountain.bottom = scene.screenHeight()
    lastCreatedMountain.z = -15
    lastCreatedMountain.setFlag(SpriteFlag.Ghost, true)
    lastCreatedMountain.setFlag(SpriteFlag.AutoDestroy, true)
}
function createTree () {
    tree = sprites.createProjectileFromSide(img`
        . . . . . . . c c . . . . . . . 
        . . . . c c c 6 5 c 6 6 . . . . 
        . . . . c 6 c 5 5 c 7 6 . . . . 
        . . . 6 c c 7 5 5 7 c 6 6 . . . 
        . . c c 7 7 7 7 7 5 7 7 c 6 . . 
        . 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
        c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
        c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
        . c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
        . c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
        . c c c c 7 7 6 f 7 7 c c c c . 
        . . . . c 7 c f f c 7 c . . . . 
        . . . . . 6 f e e e c . . . . . 
        . . . . . e e e d e e . . . . . 
        `, -10, 0)
    tree.z = -5
    tree.bottom = scene.screenHeight()
    tree.setFlag(SpriteFlag.Ghost, true)
}
let nearGroundCount = 0
let cloud: Sprite = null
let cloudImages: Image[] = []
let bird: Sprite = null
let birdGoingRight: Image[] = []
let birdGoingLeft: Image[] = []
let flyingSaucer: Image[] = []
let lastCreatedMountain: Sprite = null
let mountains: Image[] = []
let balloon: Sprite = null
let balloonInflated: Image = null
let balloonDeflated: Image = null
let saucerSpeed = 0
let chosenAnimation: Image[] = []
let saucer: Sprite = null
let tree: Sprite = null
chosenAnimation = []
tree = null
saucerSpeed = 0
saucer = null
balloonDeflated = img`
    ...................
    ...................
    .......fffff.......
    .....ff22222ff.....
    ....f222222442f....
    ...f22222222442f...
    ..feeeeeeeeeeeeef..
    .feee3eeee3eeeeeef.
    .feee3eeee3eeeeeef.
    .fddd3dddd3ddddddf.
    .fddddddddd3dddddf.
    .fdddddddddddddddf.
    ..fdddd3ddd3ddddf..
    ..fddddd333dddddf..
    ...ffdddddddddff...
    ....ffffdddffff....
    .....f.fffff.f.....
    .....f.......f.....
    .....f.......f.....
    ......f.....f......
    ......f.....f......
    .......f...f.......
    .......f.2.f.......
    ......fffffff......
    .....fcccccccf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fcbaaabcf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fccaaaccf.....
    ......fcccccf......
    .......fffff.......
    `
balloonInflated = img`
    ...................
    ......fffffff......
    ....ff2222222ff....
    ...f22222222442f...
    ..feeeeeeeeeeeeef..
    .feeeeeeeeeeeeeeef.
    feee3eeeeee3eeeeeef
    fddd3dddddd3ddddddf
    fddd3dddddd3ddddddf
    fdddd3dddddd3dddddf
    fdddddddddddddddddf
    fdddddddddddddddddf
    .fdddd3ddddd3ddddf.
    .fddddd33333dddddf.
    ..ffdddddddddddff..
    ....ffffdddffff....
    .....f.fffff.f.....
    .....f.......f.....
    .....f.......f.....
    ......f.....f......
    ......f.....f......
    .......f...f.......
    .......f.2.f.......
    ......fffffff......
    .....fcccccccf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fcbaaabcf.....
    .....fcbbbbbcf.....
    .....fcabbbacf.....
    .....fccaaaccf.....
    ......fcccccf......
    .......fffff.......
    `
balloon = sprites.create(balloonDeflated, SpriteKind.Player)
balloon.ay = 35
balloon.vy = 100
balloon.setFlag(SpriteFlag.StayInScreen, true)
music.setVolume(0)
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(9)
createAnimationArrays()
mountains = [img`
    ......................333333........................3333........................
    ...................333333333333...................3333333333....................
    ................333333333333333333..............3333333333333333................
    .............33333333333333333333333.........333333333333333333333333...........
    ..........333333333333333333333333333......333333333333333333333333333333.......
    ........3333333333333333333333333333333..33333333333333333333333333bb33333333...
    ......333333333bb3333333333333333b33333b3333333333333333333333333bbbb333333333..
    ....333333333333b33333333333333333b333bb3333333333333333333333bbbbbbbb333333333.
    ..3333333333333bbb33b3333333333b33bbbbbbbb3b33333333333333b3bbbbbbbbbb3333333333
    3333333333333333bb33b3333333333bbbbbbbbbbbbb33333333333333bbbbbbbbbbbbb3333b3333
    3333333333333b33bbbbbb33b3b3bbbbbbbbbbbbbbbbb333333333b33bbbbbbbbbbbbbbbb33b3333
    333333333333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3b333333bbbbbbbbbbbcbbbbbbbbbb3bb3
    333333b33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb333bbbbbbbbbcbbbcccbbbbbbbbb3b33
    333b33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcbbcccccbccbbbbbbbbbb33
    333bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccbccbbbbbbbbbb
    33bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbccbbbbbbcb
    cbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbccccccccccccbcccccccccccccbcbbcc
    cccbcbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcbbcccbccccccccccccccccccbcccccccccccccbccccc
    cccccbbcbbbbbbbbbbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccccccccccbbcccc
    ccccccccbcbcbbbbbbbbbbbbbbbbbbcbcccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccbbcbbbbcbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccbcbcbbbbbbcbcccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccbcccccccccccccccccbcbbcccccccccbcccccccccccccccccccccccccccccccccccccccccccc
    ccccccbcccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccc
    ccccbcccbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, img`
    ....................3...........................................................
    ....................3...........................................................
    ...................333..........................................................
    ...................3333.........................................................
    ..................333333........................................................
    ..................33333333......................................................
    .................33333333333....................................................
    ................33333333333333..................................................
    ...............3333333333333333.......................3.........................
    ..............333333333333333333...................33333........................
    .............33333333333333333333...............333333333333....................
    ...........33333333333333333333333............3333333333333333..................
    ..........3333333333333333333333333..........3333333333333333333................
    ........3333333333333333333333333333.......3333333333333333333b333..............
    .....33333333333333333333333333333333...333333333333333333333bbb3333..........3.
    .33333333333333333333333333333333333333333333333333333333333bbbbb33333......3333
    33333333333333333333333333333333333333333333333333333333333333b33333333333333333
    333333333333333333333333333333333b333333333333333333333333333bb33333333333333333
    333333333333333333333333333333b3bbb3b3333333333333333333333bbbbb333333333b333333
    333333333333b33333333333333333bbbbbbb3333333333333333333bbbbbbbbb33333333bb33333
    333333333b33b33b33b333333b33bbbbbbbbbb333333333333bbbbbbbbbbbbbbb33333333bbb3333
    33333333bbbbbbbbbbbb3b333bbbbbbbbbbbbbb33333333bbbbbbbbbbbbbbbbbbb333333bbbb33b3
    3333b3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb3333bbbbbbbbbbbbbbbbbbbbbbb3b3bbbbbbbbb
    c333bbbbbbbbbbbbbbbbbbbbbbbbbbbcbcbbbbbbbbb3bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbc
    cccbbbbbbbbbbbbbbbbbbbbbbbbbcbbccccbbbbbbbbbbbbbbbbbbbbcbbbbbbbbbbbbbbbbbbbcbbcc
    ccccbbbbbbbbbbbbbbbbbbbbbbbccccccbccbcbcbbbbbbbbbbbcbbccbbbbbbbbbbbbbbbbbbbcbccc
    ccccccbcbbbbbbbbbbbbbbbbbccccccccccccccccbbbbbbbcbbcccccccbcbbbbbbbbbbbbbcbccccc
    ccccccccbcbbbbbccbbbbbbcccccccccccccccccccccbcbcccccccccccccbbcbbbbbbbbbbccccccc
    cbccccccccbbcbccccbbcbcccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccbcc
    cccccccccccccbbccbbbcccccbcbcccccccccccccccccccccccccccbccccbccccccccccccccccccc
    ccccccccccccccccccccccccccbcbcccccccccccccccccccccccbccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccc
    ccccccbcbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccc
    ccccccccbcbccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccccccc
    ccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `]
let sun = sprites.create(img`
    ......................................................................444444444444444...........................................................................
    ..............................................................444444444444444444444444444444444.................................................................
    ........................................................44444444444444444444555555444444444444444444444.........................................................
    .....................................................444444444444444444444555555555544444444444444444444444444444...............................................
    ..................................................44444444444444444444445555555555555544444444444444444444444444444.............................................
    ...............................................44444444444444444444444455555555555555554444444444444444444444444444444444444....................................
    .......................................4444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444........................
    .................................444444444444444444444444444444444444455555555555555555544444444444444444444444444444444444444444444444444444444................
    .........................44444444444444444444444444444444444444444444455555555555555555544444444444444444444444444444444444444444444444444444444444444444.......
    44444.......444444444444444444444444444444444444444444444444444444444555555555555555555554444444444444444444444444444444444444444444444444444444444444444444....
    444444444444444444444444444444444444444444444444444444444444444444444555555555555555555554444444444444444444444444444444444444444444444444444444444444444444444.
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444445555555555555555555544444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444555555555555555555444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444455555555555555554444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444445555555555555544444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444455555555554444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444555555444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    4444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
    `, SpriteKind.Background)
sun.bottom = 100
sun.z = -20
sun.setFlag(SpriteFlag.Ghost, true)
placeMountain(0)
placeMountain(lastCreatedMountain.right)
game.setDialogCursor(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd11111111df......
    ......fd11111111df......
    ......fddd1111dddf......
    ......fbdbfddfbdbf......
    ......fcdcf11fcdcf......
    .......fb111111bf.......
    ......fffcdb1bdffff.....
    ....fc111cbfbfc111cf....
    ....f1b1b1ffff1b1b1f....
    ....fbfbffffffbfbfbf....
    .........ffffff.........
    ...........fff..........
    ........................
    ........................
    ........................
    ........................
    `)
game.showLongText("Hello! It's me, Sierra. I've been turned into a balloon, so can you help me avoid the birds and UFOs to help me survive? By the way, press any button to activate the burner. Good luck!", DialogLayout.Center)
for (let index = 0; index <= 1; index++) {
    spawnSomething(randint(0, 40))
}
game.onUpdate(function () {
    balloon.vy = Math.constrain(balloon.vy, -25, 25)
    info.changeScoreBy(1)
})
game.onUpdateInterval(750, function () {
    spawnSomething(randint(0, 50))
})
forever(function () {
    nearGroundCount = -1
    while (balloon.bottom >= scene.screenHeight() - 1) {
        balloon.say("Help me!")
        nearGroundCount += 1
        if (nearGroundCount > 25) {
            info.changeLifeBy(-1)
            nearGroundCount = -20
        }
        pause(25)
    }
})
forever(function () {
    music.playMelody("C5 A B G A F G E ", 120)
})
forever(function () {
    if (info.score() >= 5000) {
        game.over(true)
    }
})
game.onUpdateInterval(200, function () {
    for (let value of sprites.allOfKind(SpriteKind.Mountain)) {
        value.x += -1
    }
    if (lastCreatedMountain.right < scene.screenWidth()) {
        placeMountain(lastCreatedMountain.right)
    }
})
