music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004300004000800011d0c001000011b1400180001191c002000011924002800011d2c003000011b3400380001193c0040000119`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(7)
let playerOne = sprites.create(assets.image`ballSoccer`, SpriteKind.Player)
let screenWidth = scene.screenWidth()
let screenHeight = scene.screenHeight()
forever(function () {
    controller.moveSprite(playerOne)
})
