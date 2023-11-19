music.play(music.create_song(hex("""
        0078000408020100001c00010a006400f401640000040000000000000000000000000005000004300004000800011d0c001000011b1400180001191c002000011924002800011d2c003000011b3400380001193c0040000119
    """)),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
scene.set_background_color(7)
playerOne = sprites.create(assets.image("""
    ballSoccer
"""), SpriteKind.player)
screenWidth = scene.screen_width()
screenHeight = scene.screen_height()

def on_forever():
    controller.move_sprite(playerOne)
forever(on_forever)
