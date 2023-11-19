scene.setBackgroundColor(7)
let playerOne = sprites.create(assets.image`ballSoccer`, SpriteKind.Player)
let screenWidth = scene.screenWidth()
let screenHeight = scene.screenHeight()
forever(function () {
    controller.moveSprite(playerOne)
})
