var gameState=0,playerCount,form,player,game,database;
var allPlayers,car1,car2,car3,car4,cars;
function setup(){
    createCanvas(displayWidth-20,displayHeight-20)
    database=firebase.database()
    game=new Game()
    game.getState()
    game.start()
}
function draw(){
    if(playerCount===4){
        state=1
        game.update(state)
    }
    if(gameState===1){
        clear()
        game.play();
        
    }
}

