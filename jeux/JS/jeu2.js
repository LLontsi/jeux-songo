class songo{
    constructor( nom_joueur1) {
        this.nom_joueur1=nom_joueur1;
        this.nom_joueur2="machine";
        this.tab1=document.querySelectorAll(".c1"); 
        this.tabConsole2=document.querySelectorAll(".s1"); 
        this.joueur1=[5,5,5,5,5,5,5];
        this.joueur2=[5,5,5,5,5,5,5];
        this.score1=0;
        this.score2=0;
        this.tour=1;
        this.terminer=0;
        this.jeuinit(this);
    }
    jeuinit(This){
        for(var i = 0; i < 7; i++){
            
            this.tab1[i].onclick = function(e){
                This.draw();
                //This.increment(e.target.id - 1);
                var a=parseInt(e.target.id - 1)
                This.tour_joueur1(a);
                This.draw();
                This.tour_joueur2();
                This.draw();
                while (this.terminer == 0)
                {
                    This.tour_joueur1(e.target.id - 1);
                    
                    This.draw();
                    if (this.terminer == 0)
                    {
                        This.tour_joueur2();
                        This.draw();
                    }
                }
                //This.affiche_gagnant();
                
            }
        }
    }
    increment(indice){
        console.log(this.joueur1);
        for (var i = indice; i< 7; i++ ){
            this.joueur1[i]++;
        }
        console.log(this.joueur1);
    }
    draw(){
        for (var i = 0; i < 7; i++){
            console.log("draw");
            this.tab1[i].value =  this.joueur1[i];
            //this.tabConsole2[i].value =  this.joueur2[i];
            console.log(this.joueur1)
        }
    }
    /*s est une variable de type class songo*/
    commencer()
    {
        for (i = 0; i < 7; i++)
        {
            this.joueur1[i] = 5;
            this.joueur2[i] = 5;
        }
        this.score1 = 0;
        this.score2 = 0;
        this.tour = 1;
    }
    /*jeu(){
        for(let i = 0; i< 7; i++ ){
            this.joueur1[i].onclick = function(e){
                joueur2_joue()
                let indice = parseInt(e.target.id);
            }
        }
    }*/
    joueur1_joue(idj) // distribution des graines du joueur 1 et prise du joueur 1
    { 
        var troue_jouer=idj
        var nb_graine = this.joueur1[troue_jouer];
        var nb_graine1 = this.joueur1[troue_jouer];
        var troue_gene = troue_jouer;
        var i, a, b, troue_final, nb_graine14, score_avant;
        this.joueur1[troue_jouer] = 0;
        var joueur2_0 = this.joueur1[0];
        troue_gene++;
        // petite prise pour le cas de 14 graines
        if (nb_graine == 14)
        {
            this.joueur2[0]--;
            this.score1++;
        }
        // distribution des graines
        while (nb_graine != 0)
        {
            if (troue_gene == 14)
            {
                troue_gene = 0;
            }
            if (troue_gene == troue_jouer)
            {
                troue_gene = 7;
            }

            if (troue_gene < 7)
            {
                this.joueur1[troue_gene]++;
                troue_gene++;
                nb_graine--;
            }
            else
            {
                this.joueur2[troue_gene - 7]++;
                troue_gene++;
                nb_graine--;
            }
        }
        troue_final = troue_jouer;
        a = 0;
        b = 0;
        if (nb_graine1 == 14)
        {
            nb_graine1 = nb_graine1 - 1;
        }
        for (i = 1; i <= nb_graine1; i++)
        {
            troue_final++;
            if (troue_final > 6)
            {
                troue_final = 0;
                a++;
            }
            if ((troue_final == troue_jouer) && (a > 1) && (a > b + 1))
            {
                troue_final = 0;
                b++;
            }
        }
        // gere la prise

        if (((a % 2 == 0) && (b % 2 != 0) && (nb_graine1 != 13)) || ((a % 2 != 0) && (b % 2 == 0)) || ((joueur2_0 == 13) && (troue_jouer2 == 0)))
        {

            if (((this.joueur1[troue_final] == 2)) || ((this.joueur1[troue_final] == 3)) || ((this.joueur1[troue_final] == 4)))
            {

                this.score2 = this.score2 + this.joueur1[troue_final];
                this.joueur1[troue_final] = 0;
                for (i = troue_final - 1; i >= 0; i--)
                {
                    if (((this.joueur1[i] == 2)) || ((this.joueur1[i] == 3)) || ((this.joueur1[i] == 4)))
                    {
                        this.score2 = this.score2 + this.joueur1[i];
                        this.joueur1[i] = 0;
                    }
                    else
                    {
                        i = -1;
                    }
                }
            }
        }

        // passe le tour au joueur 1
        s.tour = 1;
   }
   joueur2_joue(troue_jouer2)
   {
        var nb_graine = this.joueur2[troue_jouer2];
        var troue_gene = troue_jouer2;
        var i, a, b, troue_final;
        var nb_graine14;
        var nb_graine1 = nb_graine;
        this.joueur2[troue_jouer2] = 0;
        troue_gene++;
        var joueur2_0 = this.joueur2[0];
        // petite prise pour le cas de 14 graines
        if (nb_graine == 14)
        {
            this.joueur1[0]--;
            this.score2++;
        }
        // distribution des graines
        while (nb_graine != 0)
        {
            if (troue_gene == 14)
            {
                troue_gene = 0;
            }
            if (troue_gene == troue_jouer2)
            {
                troue_gene = 7;
            }

            if (troue_gene < 7)
            {
                this.joueur2[troue_gene]++;
                troue_gene++;
                nb_graine--;
            }
            else
            {
                this.joueur1[troue_gene - 7]++;
                troue_gene++;
                nb_graine--;
            }
        }
        // boucle pour determiner le trou final
        troue_final = troue_jouer2;
        a = 0;
        b = 0;

        if (nb_graine1 == 14)
        {
            nb_graine1 = nb_graine1 - 1;
        }

        for (i = 1; i <= nb_graine1; i++)
        {
            troue_final++;
            if (troue_final > 6)
            {
                troue_final = 0;
                a++;
            }
            if ((troue_final == troue_jouer2) && (a > 1) && (a > b + 1))
            {
                troue_final = 0;
                b++;
            }
        }

        // gere la prise

        if (((a % 2 == 0) && (b % 2 != 0) && (nb_graine1 != 13)) || ((a % 2 != 0) && (b % 2 == 0)) || ((joueur2_0 == 13) && (troue_jouer2 == 0)))
        {

            if (((this.joueur1[troue_final] == 2)) || ((this.joueur1[troue_final] == 3)) || ((this.joueur1[troue_final] == 4)))
            {

                this.score2 = this.score2 + this.joueur1[troue_final];
                this.joueur1[troue_final] = 0;
                for (i = troue_final - 1; i >= 0; i--)
                {
                    if (((this.joueur1[i] == 2)) || ((this.joueur1[i] == 3)) || ((this.joueur1[i] == 4)))
                    {
                        this.score2 = this.score2 + this.joueur1[i];
                        this.joueur1[i] = 0;
                    }
                    else
                    {
                        i = -1;
                    }
                }
            }
        }

        // passe le tour au joueur 1
        s.tour = 1;
        console.log(this.joueur1)
    }
   // permet au joueur 1 d entrer sont coup et verifie certaine regles et verfie si le jeux n est pas fini
    tour_joueur1(troue) 
    {
       console.log(this.joueur1)
       console.log(this.joueur2)
       let i = 7;
       var a, c;
        // verifie si le jeu est fini
        if (this.joueur2[0] + this.joueur2[2] + this.joueur2[3] + this.joueur2[4] + this.joueur2[5] + this.joueur2[6] == 0)
        {
            while (this.joueur1[7 - i] < i)
            {
                i--;
            }
            if ((i == 0))
            {
                this.terminer = 1; // 1 jeu fini

                return;
            }
            if ((this.score2 >= 35) || (this.score1 >= 35))
            {
                this.terminer = 1; // 1 jeu fini

                return;
            }
        }
        // permet au joueur de jouer son coup
        
        var troue_jouer=troue;
        while ((troue_jouer < 1) || (troue_jouer > 7))
        {
            alert("\nVEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 7:\t");
            troue_jouer=troue;
        }
        while (this.joueur1[troue_jouer - 1] == 0)
        {
            alert("\nVEUILLER JOUER UNE CASE NON VIDE:\t");
            troue_jouer=troue;
        }
        // verifi une regle
        if ((this.joueur1[6] == 1) && (troue_jouer == 7))
        {
            while ((troue_jouer < 1) || (troue_jouer > 6))
            {
                alert("\nCECI EST INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 6:\t");
                troue_jouer=troue;

                while (this.joueur1[troue_jouer - 1] == 0)

                {
                    alert("\nVEUILLER JOUER UNE CASE NON VIDE:\t");
                    troue_jouer=troue;
                }
            }
        }
        a = 0;
        // oblige l utilisateur a jouer sa case ayant le plus de graine
        if (this.joueur2[0] + this.joueur2[2] + this.joueur2[3] + this.joueur2[4] + this.joueur2[5] + this.joueur2[6] == 0)
        {
            for (i = 0; i < 7; i++)
            {
                if ((i == 0) || (c < this.joueur1[i]))
                {
                    c = this.joueur1[i];
                    a = i;
                }
            }
            while (troue_jouer != a + 1)
            {
                alert("\nCHICHE! JOUER VOTRE CASE AYANT LE PLUS DE GRAINE:\t");
                troue_jouer=troue;
            }
        }
        // verifie une regle
        var score_avant;
        var joueur1_6 = this.joueur1[6];
        var score_avant = this.score1;
        this.joueur1_joue( troue_jouer - 1);
        if ((troue_jouer == 7) && (joueur1_6 == 2))
        {
            while ((score_avant == this.score1) && (troue_jouer == 7))
            {
                this.joueur2[0] -= 1;
                this.joueur2[1] -= 1;
                this.joueur1[6] += 2;
                while ((troue_jouer < 1) || (troue_jouer > 6))
                {
                    alert("\nCECI EST UN INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 6:\t");
                    troue_jouer=troue;
                    while (this.joueur1[troue_jouer - 1] == 0)

                    {
                        alert("\nVEUILLER JOUER UNE CASE NON VIDE:\t");
                        troue_jouer=troue;
                    }
                }
            }
            joueur1_joue(troue_jouer - 1);
        }
        console.log(this.joueur1)
        console.log(this.joueur2)
   }

    // permet au joueur 2 d entrer sont coup et verifie certaine regles et verfie si le jeux n est pas fini
     tour_joueur2()
    {
        var i = 7;
        var a, c, troue_jouer;
        // verifie si le jeu est fini
        if (this.joueur1[0] + this.joueur1[2] + this.joueur1[3] + this.joueur1[4] + this.joueur1[5] + this.joueur1[6] == 0)
        {
            while (this.joueur1[7 - i] < i)
            {
                i--;
            }
            if ((i == 0))
            {
                this.terminer = 1; // 1 jeu fini

                return;
            }
            if ((this.score2 >= 35) || (this.score1 >= 35))
            {
                this.terminer = 1; // 1 jeu fini

                return;
            }
        }
        // permet au joueur de jouer son coup
        troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
        while ((troue_jouer < 1) || (troue_jouer > 7))
        {
            troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
        }
        while (this.joueur2[troue_jouer - 1] == 0)
        {
            troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
        }
        // verifi une regle
        if ((this.joueur2[6] == 1) && (troue_jouer == 7))
        {
            while ((troue_jouer < 1) || (troue_jouer > 6))
            {
                troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);

                while (this.joueur2[troue_jouer - 1] == 0)

                {
                    troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
                }
            }
        }
        a = 0;
        // oblige l utilisateur a jouer sa case ayant le plus de graine
        if (this.joueur1[0] + this.joueur1[2] + this.joueur1[3] + this.joueur1[4] + this.joueur1[5] + this.joueur1[6] == 0)
        {
            for (i = 0; i < 7; i++)
            {
                if ((i == 0) || (c < this.joueur2[i]))
                {
                    c = this.joueur2[i];
                    a = i;
                }
            }
            while (troue_jouer != a + 1)
            {
                troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
            }
        }
        // verifie une regle
        var score_initial = this.score2;
        var joueur2_6 = this.joueur2[6];
        this.joueur2_joue(s, 7 - troue_jouer);
        if ((troue_jouer == 1) && (joueur2_6 == 2))
        {
            while ((score_initial == this.score2) && (troue_jouer == 1))
            {
                this.joueur1[0] = joueur1[0] - 1;
                this.joueur1[1] = joueur1[1] - 1;
                this.joueur2[6] = joueur2[6] + 2;
                while ((troue_jouer < 2) || (troue_jouer > 7))
                {
                    troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);

                    while (this.joueur[7 - troue_jouer] == 0)
                    {
                        troue_jouer=Math.round(Math.random(0, 6) * (6 - 1) + 0);
                        
                    }
                }
            }
            joueur2_joue(s, 7 - troue_jouer);
        }
    }

    affiche_gagnant()
    {
        if (this.score1 > this.score2)
        {
            alert("LE GAGNANT EST",this.nom_joueur1, "FELICITATION");
        }
        else if (this.score1 < this.score2)
        {
            alert("LE GAGNANT EST",this.nom_joueur2, "FELICITATION");
        }
        else
        {
            alert("FELICITATIONS A VOUS 2 :JEUX EGAL");
        }
    }
}
 
var s = new songo("lontsi");
s.jeuinit();
