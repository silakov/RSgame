'use strict';
const PointJS = require('./point').PointJS;
const constObj = require('./const').constObj;
const man = require('./man.module').man;
const bullets = require('./man.module').bullets;
const hero = require('./man.module').hero;
const background = require('./background').background;

const point = constObj.pjs.vector.point;

const girlDead = constObj.pjs.tiles.newAnimation('img/sprites/girl_dead_120_110_15.png', 120, 110, 15);

const girls = [];
girls.spawner = constObj.pjs.OOP.newTimer(1000, function () {
    girls.push(constObj.game.newAnimationObject({
        animation: constObj.pjs.tiles.newAnimation('img/sprites/girl_70_110_12.png', 70, 110, 12),
        w: 70,
        h: 110,
        x: constObj.pjs.math.random(hero.content.getPosition().x + 900, hero.content.getPosition().x + 1100), // x 1280
        y: 240,
        delay: 3,
        scale: 1,
    }));
});

girls.logic = function () {
    constObj.pjs.OOP.forArr(girls, function (girl, index) {
        if (!girl.dead) {
            girl.draw();
            girl.move(point(-1.3, 0));
        } else {
            girl.setAnimation(girlDead);
            girl.move(point(0, 0));
            girl.y = 270;
            girl.w = 120;
            girl.h = 110;
            girl.dead++;
            girl.drawFrames(0, 14);
        }

        girl.drawStaticBox();
        if (girl.isArrIntersect(bullets) && !girl.dead) {
            girl.dead = 1;
            girl.frame = 0;
            background.countOfGirl++
            console.log('герлы = ' + background.countOfGirl);

            for (let i = 0; i < bullets.length; i++) {
                let bullet = bullets[i];
                if (bullet.isArrIntersect(girls)) {
                    bullets.splice(i, 1);
                };
            }

        };

        if (girl.dead > 30) {
            girls.splice(index,1);
        }

    });
};

exports.girls = girls;
