class jeu{
    constructor(){
        this.bouttonTab = document.querySelectorAll(".c1");
        this.tabConsole = [5,5,5,5,5];
        this.jeuinit(this);
    }
    jeuinit(This){
        for(var i = 0; i < 5; i++){
            this.bouttonTab[i].onclick = function(e){
                This.draw();
                This.increment(e.target.id - 1);
                This.draw();
            }
        }
    }
    increment(indice){
        console.log(this.tabConsole);
        for (var i = indice; i< 5; i++ ){
            this.tabConsole[i]++;
        }
        console.log(this.tabConsole);
    }
    draw(){
        for (var i = 0; i < 5; i++){
            console.log("draw");
            this.bouttonTab[i].value =  this.tabConsole[i];
        }
    }
}
s= new jeu();
s.jeuinit();