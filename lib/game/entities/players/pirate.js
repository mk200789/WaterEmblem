/**
 *  pirate.js
 *  -----
 *  Friendly assisting units.
 */

ig.module(
    'game.entities.players.pirate'
)
.requires(
    'game.entities.abstractities.base_player'
)
.defines(function() {
    "use strict";

    ig.global.EntityPirate = ig.global.EntityBase_player.extend({
        name: 'Dart',

        level: 1,
        health_max: 10,
        stat: {
            atk: 6,
            mag: 5,
            def: 3,
            res: 5,
            spd: 5,
            luk: 5,
            mov: 4
        },

        animSheet: new ig.AnimationSheet('media/tilesets/players/pirate.png', 32, 32),

        init: function(x, y, settings) {
            this.parent(x, y, settings);
            this.addAnim('idle', 0.28, [0, 1, 2]);
            this.addAnim('left', 0.28, [15, 16, 17]);
            this.addAnim('right', 0.28, [22, 23, 24]);
            this.addAnim('down', 0.28, [5, 6, 7, 8]);
            this.addAnim('up', 0.28, [10, 11, 12, 13]);
            this.addAnim('attack', 0.28, [20]);
        }
    })
});