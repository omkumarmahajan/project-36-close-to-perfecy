class Form{
    constructor (){

    }



    display(){
        var tittle = createElement('h2')
        tittle.html("CAR RACING GAME") 
        tittle.position(130,0)

        var input = createInput("WRITE YOUR NAME")
        input.position(130,160)

        var button = createButton('PLAY')
        button.position(250,200)

        button.mousePressed(function (){
            input.hide();
            button.hide();

            var name = input.value()  
            var greetting = createElement('h3')
            greetting.position(130,160)
            greetting.html("HELL0,WELCOME TO CAR RACING GAME" + name   )   
        })  
    }
}