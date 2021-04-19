class Game{
    constructor(){}
    getState(){
        var gameStateRef=database.ref("gameState")
        gameStateRef.on("value",function (data){
         gameState=data.val()
        })
    }

        async start(){
        if(gameState===0){
            player=new Player()
            var playerCountRef=await database.ref("playerCount").once("value")
            if(playerCountRef.exists()){
               playerCount=playerCountRef.val();
                player.getCount()
            }
            
            form=new Form()
            form.display();
    
        }
        car1=createSprite(200,200)
        car2=createSprite(400,200)
        car3=createSprite(600,200)
        car4=createSprite(800,200)
        cars=[car1,car2,car3,car4]
    }
    update(state){
        database.ref("/").update({
            gameState:state
        })
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
       /*  textSize(30)
        text("Game Start",120,100)
 */
        if(allPlayers!==undefined){
           /*  var display_position=130
            for(var plr in allPlayers){
               // display_position=display_position+20
               display_position+=40
               text(allPlayers[plr].name,120,display_position) */
               var carC=0;
               var x, y;
               for(var plr in allPlayers){
                   carC=carC+1
                   x=x+200;
                   y=displayHeight-allPlayers[plr].distance;
                   cars[carC-4].x=x;
                   cars[carC-4].y=y;
                   if(carC===player.index){
                       cars[carC-4].shapeColor="blue"
                       camera.position.x=displayWidth/2;
                       camera.position.y=car[carC-4].y
                   }
               }
            }
            if(keyIsDown("up")&player.index!==null){
                player.distance+=20
                player.update()
            }
            drawSprites();
        }
    }
