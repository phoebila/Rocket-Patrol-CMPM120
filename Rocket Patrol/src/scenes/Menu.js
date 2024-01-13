class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene")
    }

    preload() {
        // load images/tile sprites
        this.load.image('rocket', '/Rocket Patrol/assets/rocket.png')
        this.load.image('spaceship', '/Rocket Patrol/assets/spaceship.png')
        this.load.image('starfield', '/Rocket Patrol/assets/starfield.png')
      }

    create() {
        this.add.text(20, 20, "Rocket Patrol Menu")
        this.scene.start("playScene")
      }
}