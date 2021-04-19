class Form{
    constructor(){
        this.input=createInput("name")
        this.button=createButton("log in")
        this.greeting=createElement("h3")
    }
    display(){
        var title=createElement("h2")
        title.html("car racing game")
        title.position(displayWidth/2,displayHeight/2-100) 

        
        this.input.position(displayWidth/2,displayHeight/2-20)
        this.button.position(displayWidth/2+40,displayHeight/2+30)

        this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name=this.input.value()
        this.greeting.html("hello "+player.name)
        this.greeting.position(displayWidth/2,displayHeight/2)
        
        playerCount=playerCount+1
        player.index=playerCount
        player.update()
        player.updateCount(playerCount)
    })
}
    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
    }
}
