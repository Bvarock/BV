namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false, effects.dissolve)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (h.vy == 0) {
        h.vy = -330
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    Actual_lv += 1
    startLevel()
})
function startLevel () {
    if (Actual_lv == 0) {
        tiles.setTilemap(tilemap`level1`)
    } else {
        tiles.setTilemap(tilemap`level3`)
    }
    scene.setBackgroundImage(img`
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbcccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccbbbbbbbbbbbbbbbbb
        bbcbbbbbccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccbbbbbbbbbbcc
        bccccbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbcccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccbbbbbbbccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbbbbbcccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffccccffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffcfffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccffccccccccccccfffffffffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccffffccccccccccfffffffcffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccfccccccccccccfffffffccccccccfffffffcffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccffffcccccccccffffffffffcccccffffffffcffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccfffffccccccccffffffffffffccccfffffffcfffffffffffffffcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccffffffffccccffffffffffffffffccfffffffcffffffffffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcc
        cccccccccccccccccccccccccfffffffffffffffffffffffffffffffffffffcfffffffffffffffffccccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcc
        ccccccccccccccccccccccccffffffffffffffffffffffffffffffffffffffcffffffffffffffffffcccccccccccfffffccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfcc
        cccccccccccccccccccccccfccfffffffffffffcffffffffffffffffffffffcffffffffffffffffffffcccccccccfffcfccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccffc
        cccccccccccccccccccccccfffcffffffffffffcfffffffffffffffffffffffcfffffffffffffffffffffcccccccfffffccccccccccccccccfffccccccccccccccccccccccccccccccccccccccccfffc
        ccccccccccccccccccccccfffffcfffffffffffcfffffffffffffffffffffffcffffffffffffffffffffffffccccfffcfccccccccccccccccffffffcccccccccccfffcccccccccccccccccccccccffff
        fffffffffcccccccccccccffffffccccffffffccffffffffffffffffffffffffccfffffffffffffffffffffffffffffffcffffcccccccccccffffffffcccccffccfcffccccccccccccccccccccccffff
        fffffffffffccccccccccfffffffffffccfffccffffffffffffffffffffffffffcffffccfffffffffffffffffffffffffcffcfcccccccccccfffffffffccccfffcfcccfcccccccccccccccccccccffff
        ffffffffccfffccccccccffffffffffffcffcfffffffffffffffffffffffffffffcccccfcffffffffffffffffffffffffcffffccccccccccfffffffffffccccffffcfffcccccccccccffccccccccffff
        fffffffffcffffccccccfffffffffffffcffccffffffffffffffffffffffffffffffffffcccfffffffffffffffffffffffffffccccccccccfffffffffffffccffffcfffcccccccccccffffccccccfcff
        fffffffffccffffffffffffffffffffffcfffcfffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffcccccccccfffffffffffffffffffcffcccccccccccffffffffcccffff
        ffffffffffcffffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffcccccfffffffffffffffffffffffccccccccccffffffffffffffff
        fffffffffffccffccffffffffffffffffcffffcccfffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccccfffffffffffffffff
        ffffffffffffcffcfffffffffffffffffcffffffcfffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffccccffffcfffcccfffffffffffffffff
        ffffffffffffcffcfffffffffffffffffcccffffcffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffcccccfffffffffffffcffffffffffffffffff
        ffffffffffffcffcffffffffffffffffffffccffcfccffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffcccffffffffffffffffffffffcccccfffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcccccccfffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccccc
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffccffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    scene.setBackgroundColor(12)
    Actual_lv = 0
    h = sprites.create(assets.image`1`, SpriteKind.Player)
    h.ay = 1500
    controller.moveSprite(h, 80, 0)
    scene.cameraFollowSprite(h)
    info.setLife(5)
    for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
        Chest = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            f f f f f f f f f f f f f f f f 
            f f e e e e e 5 5 e e e e e e f 
            f e e e e e e 5 d e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f e e e e e e e e e e e e e e f 
            f f f f f f f f f f f f f f f f 
            `, SpriteKind.Coin)
        animation.runImageAnimation(
        Chest,
        [img`
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . b 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . b b 1 1 1 1 1 1 1 1 1 1 1 . . 
            b b b b 1 1 1 1 1 1 1 1 1 1 1 . 
            b b b b b 1 1 1 1 1 1 1 1 1 1 . 
            b b b b b b 1 1 1 1 1 1 1 1 1 . 
            b b b b b b b 1 1 1 1 1 1 1 1 . 
            b b b b b b b b 1 1 1 1 1 1 1 . 
            b b b b b b b b b 1 1 1 1 1 b . 
            b b b b b b b b b b 1 1 b b b . 
            . b b b b b b b b b b b b b . . 
            . b b b b b b b b b b b b b . . 
            . . b b b b b b b b b b b . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . 1 1 1 1 1 1 1 1 . . . . 
            . . . b 1 1 1 1 1 1 1 1 1 . . . 
            . . . b b 1 1 1 1 1 1 1 1 . . . 
            . . b b b b 1 1 1 1 1 1 1 1 . . 
            . . b b b b b 1 1 1 1 1 1 1 . . 
            . . b b b b b b 1 1 1 1 1 1 . . 
            . . b b b b b b 1 1 1 1 1 1 . . 
            . . b b b b b b 1 1 1 1 1 1 . . 
            . . b b b b b b 1 1 1 1 1 b . . 
            . . b b b b b b b 1 1 b b b . . 
            . . . b b b b b b b b b b . . . 
            . . . b b b b b b b b b b . . . 
            . . . . b b b b b b b b . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . b 1 1 1 1 1 1 1 . . . . 
            . . . . b 1 1 1 1 1 1 1 . . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 b . . . 
            . . . b b b b b 1 1 b b b . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . b 1 1 1 1 1 . . . . . 
            . . . . . b 1 1 1 1 1 . . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 b . . . . 
            . . . . b b b b 1 b b b . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . b b 1 . . . . . . 
            . . . . . . . b b 1 . . . . . . 
            . . . . . . b b b 1 1 . . . . . 
            . . . . . . b b b 1 1 . . . . . 
            . . . . . . b b b 1 1 . . . . . 
            . . . . . . b b b 1 1 . . . . . 
            . . . . . . b b b 1 1 . . . . . 
            . . . . . . b b b 1 b . . . . . 
            . . . . . . b b b b b . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . b b b . . . . . . 
            . . . . . . . . b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 1 1 1 1 . . . . . . 
            . . . . . b 1 1 1 1 1 . . . . . 
            . . . . . b 1 1 1 1 1 . . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b 1 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 1 . . . . 
            . . . . b b b b 1 1 1 b . . . . 
            . . . . b b b b 1 b b b . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . b b b b . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . . . . 1 1 . . . . . . . 
            . . . . . 1 1 1 1 1 1 . . . . . 
            . . . . b 1 1 1 1 1 1 1 . . . . 
            . . . . b 1 1 1 1 1 1 1 . . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b 1 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 1 . . . 
            . . . b b b b 1 1 1 1 1 b . . . 
            . . . b b b b b 1 1 b b b . . . 
            . . . . b b b b b b b b . . . . 
            . . . . b b b b b b b b . . . . 
            . . . . . b b b b b b . . . . . 
            . . . . . . . b b . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `,img`
            . . . . 1 1 1 1 1 1 1 . . . . . 
            . . 1 1 1 1 1 1 1 1 1 1 1 . . . 
            . b 1 1 1 1 1 1 1 1 1 1 1 1 . . 
            . b b 1 1 1 1 1 1 1 1 1 1 1 . . 
            b b b b 1 1 1 1 1 1 1 1 1 1 1 . 
            b b b b b 1 1 1 1 1 1 1 1 1 1 . 
            b b b b b b 1 1 1 1 1 1 1 1 1 . 
            b b b b b b b 1 1 1 1 1 1 1 1 . 
            b b b b b b b b 1 1 1 1 1 1 1 . 
            b b b b b b b b b 1 1 1 1 1 b . 
            b b b b b b b b b b 1 1 b b b . 
            . b b b b b b b b b b b b b . . 
            . b b b b b b b b b b b b b . . 
            . . b b b b b b b b b b b . . . 
            . . . . b b b b b b b . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        100,
        true
        )
        tiles.placeOnTile(Chest, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
    }
    for (let value of tiles.getTilesByType(assets.tile`myTile6`)) {
        _666 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . c c e e e e e . . f f 
            . f f f c c b e e e e e e f f f 
            . . f c c b e e e e e e e e f . 
            . . . f b e e e e e e e e f . . 
            . . f c e e 2 e e e 2 e e e f . 
            . f f c e 2 e e e e e 2 e e f f 
            . f . c e e e 2 e 2 e e e e . f 
            . . . f c e e e e e e e b f . . 
            . . f c c c e e e e e b c c f . 
            . f f f c c c e e e e c c f f f 
            . f f . . c c c c c c c . . f f 
            . f . . . . . . . . . . . . . f 
            . f . . . . . . . . . . . . . f 
            `, SpriteKind.Enemy)
        _666.follow(h, 12)
        tiles.placeOnTile(_666, value)
        tiles.setTileAt(value, assets.tile`myTile6`)
        tiles.placeOnTile(_666, value)
        tiles.setTileAt(value, assets.tile`transparency16`)
        animation.runImageAnimation(
        _666,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . c c e e e e e . . f f 
            . f f f c c b e e e e e e f f f 
            . . f c c b e e e e e e e e f . 
            . . . f b e e e e e e e e f . . 
            . . f c e e 2 e e e 2 e e e f . 
            . f f c e 2 e e e e e 2 e e f f 
            . f . c e e e 2 e 2 e e e e . f 
            . . . f c e e e e e e e b f . . 
            . . f c c c e e e e e b c c f . 
            . f f f c c c e e e e c c f f f 
            . f f . . c c c c c c c . . f f 
            . f . . . . . . . . . . . . . f 
            . f . . . . . . . . . . . . . f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . c c e e e e e . . f f 
            . f f f c c b e e e e e e f f f 
            . . f c c b e e e e e e e e f . 
            . . . f b e e e e e e e e f . . 
            . . f c e e 2 e e e 2 e e e f . 
            . f f c e 2 e e e e e 2 e e f f 
            . f . c e e e 2 e 2 e e e e . f 
            . . . f c e e e e e e e b f . . 
            . . f c c c e e e e e b c c f . 
            . f f f c c c e e e e c c f f f 
            . f f . . c c c c c c c . . f f 
            . f . . . . . . . . . . . . . f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . c c e e e e e . . f f 
            . f f f c c b e e e e e e f f f 
            . . f c c b e e e e e e e e f . 
            . . . f b e e e e e e e e f . . 
            . . f c e e 2 e e e 2 e e e f . 
            . f f c e 2 e e e e e 2 e e f f 
            . f . c e e e 2 e 2 e e e e . f 
            . . . f c e e e e e e e b f . . 
            . . f c c c e e e e e b c c f . 
            . f f f c c c e e e e c c f f f 
            . f f . . c c c c c c c . . f f 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . f f . . c c e e e e e . . f f 
            . f f f c c b e e e e e e f f f 
            . . f c c b e e e e e e e e f . 
            . . . f b e e e e e e e e f . . 
            . . f c e e 2 e e e 2 e e e f . 
            . f f c e 2 e e e e e 2 e e f f 
            . f . c e e e 2 e 2 e e e e . f 
            . . . f c e e e e e e e b f . . 
            . . f c c c e e e e e b c c f . 
            . f f f c c c e e e e c c f f f 
            . f f . . c c c c c c c . . f f 
            . f . . . . . . . . . . . . . f 
            `],
        100,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
    if (h.y < otherSprite.y) {
        info.changeScoreBy(3)
    } else {
    	
    }
})
let Chest: Sprite = null
let Actual_lv = 0
let h: Sprite = null
let _666: Sprite = null
startLevel()
game.onUpdate(function () {
    h.setImage(assets.image`0`)
    if (h.vx < 0) {
        h.image.flipX()
    }
    if (h.vy < 0) {
        h.setImage(img`
            . . . . f f f f f f f . . . . . 
            . . . f f f f f f f f f . . . . 
            . . . f f f f f f f 1 f . . . . 
            . . . f c f d d f f e f . . . . 
            . . . f b d d d b f f f . . . . 
            . . . f c b d d d b f f . . . . 
            . . . . f c b b d c f f . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f d 6 6 6 f 6 b . . . . 
            . . . . f b 6 6 6 f 6 b . . . . 
            . . . . f 8 8 8 8 f . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . . . f f f f f . . . . . . 
            . . . f f f f f f f f . . . . . 
            . . . f f . . . f f f f . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    } else if (h.x % 2 == 0) {
        h.setImage(assets.image`1`)
    }
})
