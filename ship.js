Ship.prototype = Object.create(Phaser.Sprite.prototype);

Ship.prototype.constructor = Ship;

function Ship(game, x, y) {
	
    Phaser.Sprite.call(this, game, x, y, 'ship');
    
    this.scale.set(0.5, 0.5);
    this.anchor.setTo(0.5, 0.5);
    
    game.physics.enable(this, Phaser.Physics.ARCADE);
    
    game.add.existing(this);
    
    this.cursors = game.input.keyboard.createCursorKeys();

    wasd = {
        up: game.input.keyboard.addKey(Phaser.Keyboard.W),
        down: game.input.keyboard.addKey(Phaser.Keyboard.S),
        left: game.input.keyboard.addKey(Phaser.Keyboard.A),
        right: game.input.keyboard.addKey(Phaser.Keyboard.D),
    };

}

function updateShip() {
	var mX = game.input.mousePointer.x;
    var mY = game.input.mousePointer.y;
    
    ship.angle = Math.atan2(ship.position.x - mX, ship.position.y - mY)  * -57.2957795;

    if (wasd.up.isDown) {
        ship.y -= 3;
    }
    if (wasd.down.isDown) {
        ship.y += 3;
    }
    if (wasd.left.isDown) {
        ship.x -= 3;
    }
    if (wasd.right.isDown) {
        ship.x += 3;
    }
}

