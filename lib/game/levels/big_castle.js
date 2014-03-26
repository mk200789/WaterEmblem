ig.module( 'game.levels.big_castle' )
.requires( 'impact.image','game.entities.misc.enemy_spawner' )
.defines(function(){
LevelBig_castle=/*JSON[*/{"entities":[{"type":"EntityEnemy_spawner","x":320,"y":384,"settings":{"size":{"x":352,"y":160}}}],"layer":[{"name":"terrain","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/terrain.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0],[0,8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,8,8,8,0],[0,8,8,8,8,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,8,8,8,0],[0,8,8,8,8,8,8,0,8,8,8,8,0,0,0,0,0,0,0,8,8,8,8,0,8,8,8,8,8,0],[0,8,8,8,8,8,8,0,8,8,8,8,0,0,0,0,0,0,0,8,8,8,8,0,8,8,8,8,8,0],[0,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,0],[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0],[0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,0],[0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,8,8,8,8,8,8,8,8,8,8,8,8,8,0,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,0,0,8,8,8,8,8,8,8,8,8,8,8,0,0,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,8,8,8,8,8,8,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,8,8,8,8,8,8,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,8,8,8,8,8,0,0,0,0,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,0,1,1,1,1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1,1,1,1,1,0,8,8,8,8,8,0,1,1,1,1,1,1,1,1,1,1,1],[0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],[8,8,8,8,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,8,8,8,8],[8,8,8,8,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,8,8,8,8],[8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8,8,8,8,8,8,8,8],[8,8,8,8,8,8,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,8,8,8,8,8,8],[8,8,8,8,8,8,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,8,8,8,8,8,8],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0]]},{"name":"fg1","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/castle3.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"fg2","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/castle4.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[68,69,116,116,116,116,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,116,20,21,116,116],[84,85,116,116,116,116,116,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,116,36,37,116,4],[0,0,0,0,0,104,105,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,0,0,0,0,20],[0,0,0,0,0,120,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,116,0,0,0,0,36],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64],[64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64],[0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0],[0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,64,64,64,64,64,64,64,64,64,64,64,64,0,0,0,0,0,0,0,0,0]]},{"name":"fg3","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/Castle6.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,53,7,7,7,7,7,7,234,235,236,7,7,7,7,7,7,54,0,0,0,0,0,0],[0,0,0,0,0,0,0,23,0,0,0,0,0,0,26,27,28,0,0,0,0,0,0,24,0,0,0,0,0,0],[53,7,7,7,7,54,0,23,0,0,0,0,0,0,42,43,44,0,0,0,0,0,0,24,0,53,7,7,7,54],[23,0,0,0,0,23,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,24,0,23,0,0,0,24],[23,0,0,0,0,69,7,33,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,33,7,70,0,0,0,24],[23,0,0,0,0,0,0,49,17,19,19,18,33,7,7,7,7,7,33,17,19,19,18,49,0,0,0,0,0,24],[23,0,0,0,0,0,0,232,17,19,19,18,49,116,117,118,118,119,49,17,19,19,18,233,0,0,0,0,0,24],[23,0,0,0,0,0,0,52,0,0,0,0,232,132,133,134,134,135,233,0,0,0,0,52,0,0,0,0,0,24],[23,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,24],[23,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,24],[69,7,7,7,7,7,7,7,54,0,0,0,0,0,0,0,0,0,0,0,0,0,53,7,7,7,7,7,7,70],[100,101,102,103,104,105,100,101,23,0,0,0,0,0,0,0,0,0,0,0,0,0,23,100,101,100,101,100,101,100],[116,117,118,119,120,121,116,117,23,0,0,0,0,0,0,0,0,0,0,0,0,0,23,116,117,116,117,116,117,116],[132,133,134,135,136,137,132,133,23,0,0,0,0,0,0,0,0,0,0,0,0,0,23,132,133,132,133,132,133,132],[0,0,0,0,0,0,0,0,69,54,0,0,0,0,0,0,0,0,0,0,0,53,70,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,69,7,7,54,0,0,0,0,0,53,7,7,70,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,33,17,19,19,19,18,33,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,200,17,19,19,19,18,200,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,216,17,19,19,19,18,216,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,232,17,19,19,19,18,232,0,0,0,0,0,0,0,0,0,0,0],[7,7,7,7,54,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,53,7,7,7,7],[0,0,0,0,23,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,23,0,0,0,0],[0,0,0,0,69,7,7,7,54,0,0,0,0,0,0,0,0,0,0,0,0,53,7,7,7,70,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,53,7,70,0,0,0,0,0,0,0,0,0,0,0,0,69,7,54,0,0,0,0,0,0],[0,0,0,0,0,0,23,116,33,0,0,0,0,0,0,0,0,0,0,0,0,33,117,23,0,0,0,0,0,0],[69,7,7,7,7,7,70,132,200,0,0,0,0,0,0,0,0,0,0,0,0,200,133,69,7,7,7,7,7,7],[116,117,116,117,116,117,116,117,216,0,0,0,0,0,0,0,0,0,0,0,0,216,116,117,116,117,116,117,116,117],[132,133,132,133,132,133,132,133,232,0,0,0,0,0,0,0,0,0,0,0,0,232,132,133,132,133,132,133,132,133]]},{"name":"fg4","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/dark_castle1.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,0,0,0,70,71,0,131],[0,0,70,71,0,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,102,103,0,0],[0,0,102,103,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131],[0,0,131,0,0,0,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,131,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,70,71,0,0,0,0,0,0,0,0,0,0,0,0,70,71,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,102,103,0,0,0,0,0,0,0,0,0,0,0,0,102,103,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,131,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"fg5","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"media/tilesets/dark_castle2.png","repeat":false,"preRender":false,"distance":"1","tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,231,167,167,167,167,167,0,0,0,167,167,167,167,167,232,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,138,139,139,139,139,139,139,139,139,139,139,139,139,139,140,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,138,139,139,139,139,139,139,139,139,139,139,139,139,139,140,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,263,199,199,199,199,199,199,199,199,199,199,199,199,199,264,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]]},{"name":"collision","width":30,"height":32,"linkWithCollision":false,"visible":1,"tilesetName":"","repeat":false,"preRender":false,"distance":1,"tilesize":32,"foreground":false,"data":[[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0],[1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1],[1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1],[1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1],[1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1],[1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0],[1,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],[1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],[1,1,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1],[0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]]}]}/*]JSON*/;
LevelBig_castleResources=[new ig.Image('media/tilesets/terrain.png'), new ig.Image('media/tilesets/castle3.png'), new ig.Image('media/tilesets/castle4.png'), new ig.Image('media/tilesets/Castle6.png'), new ig.Image('media/tilesets/dark_castle1.png'), new ig.Image('media/tilesets/dark_castle2.png')];
});