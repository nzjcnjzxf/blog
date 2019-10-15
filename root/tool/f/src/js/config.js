/**
 * 游戏配置
 */
const path = require('path')

const CONFIG = {
  // 小敌机尺寸
  enemySmallSize: {
    width: 54,
    height: 40
  },
  // 大敌机尺寸
  enemyBigSize: {
    width: 130,
    height: 100
  },
  // 默认敌机移动速度
  enemySpeed: 4,
  // 战机尺寸
  planeSize: {
    width: 60,
    height: 45
  },
  // 子弹尺寸
  bulletSize: {
    width: 20,
    height: 20
  },
  // 子弹移动速度
  bulletSpeed: 10,
  resources: {
    images: [
      {
        src: './img/plane_1.png',
        name: 'bluePlaneIcon'
      },
      {
        src: './img/plane_2.png',
        name: 'pinkPlaneIcon'
      },
      {
        src: './img/fire.png',
        name: 'fireIcon'
      },
      {
        src: './img/enemy_big.png',
        name: 'enemyBigIcon'
      },
      {
        src: './img/enemy_small.png',
        name: 'enemySmallIcon'
      },
      {
        src: './img/boom_big.png',
        name: 'enemyBigBoomIcon'
      },
      {
        src: './img/boom_small.png',
        name: 'enemySmallBoomIcon'
      }
    ],
    sounds: [
      {
        src: './sound/biubiubiu.mp3',
        name: 'shootSound'
      },
      {
        src: './sound/music.mp3',
        name: 'gameSound'
      },
      {
        src: './sound/die.mp3',
        name: 'dieSound'
      },
      {
        src: './sound/button.mp3',
        name: 'buttonSound'
      },
      {
        src: './sound/boom.mp3',
        name: 'boomSound'
      }
    ]
  }
}

export default CONFIG
