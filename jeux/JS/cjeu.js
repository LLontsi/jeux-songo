class songo{
    constructor( nom_joueur1,nom_joueur2, joueur1=[],joueur2=[]) {
        this.nom_joueur1=nom_joueur1;
        this.nom_joueur2=nom_joueur2;
        this.joueur1=joueur1;
        this.joueur2=joueur2;
        this.score1=0;
        this.score2=0;
        this.tour=1;
        this.terminer=0;
    }
}
/*s est une variable de type class songo*/
function commencer(s)
{
    for (i = 0; i < 7; i++)
    {
        s.joueur1[i] = 5;
        s.joueur2[i] = 5;
    }
    s.score1 = 0;
    s.score2 = 0;
    s.tour = 1;
}

function decoration( s) // affichage de la disposition du songo a l ecran
{
    console.log("\n\n");
    console.log("=================================================================\n");
    console.log("*                SCORE {} :{}  \t   {} :{}                     *\n".format(s.nom_joueur1, s.score1, s.nom_joueur2, s.score2));
    console.log("=================================================================\n");
    console.log("TOUR DE JEU:{}\n", (s.tour == 1 ? s.nom_joueur1 : s.nom_joueur2));
    console.log("=================================================================\n\n");
    console.log("({})1      ({})2      ({})3      ({})4      ({})5      ({})6      ({})7  \n\n".format( s.joueur1[0], s.joueur1[1], s.joueur1[2], s.joueur1[3], s.joueur1[4], s.joueur1[5], s.joueur1[6]));
    console.log(" ----------------------------------------------------------------  \n\n");
    console.log("({})1      ({})2      ({})3      ({})4      ({})5      ({})6      ({})7  \n".format(s.joueur2[6], s.joueur2[5], s.joueur2[4], s.joueur2[3], s.joueur2[2], s.joueur2[1], s.joueur2[0]));
    console.log("=================================================================\n");
}

function joueur1_joue(s, troue_jouer) // distribution des graines du joueur 1 et prise du joueur 1
{

    nb_graine = s.joueur1[troue_jouer];
    nb_graine1 = s.joueur1[troue_jouer];
    troue_gene = troue_jouer;
    i, a, b, troue_final, nb_graine14, score_avant;
    s.joueur1[troue_jouer] = 0;
    joueur1_0 = s.joueur1[0];
    troue_gene++;
    // petite prise pour le cas de 14 graines
    if (nb_graine == 14)
    {
        s.joueur2[0]--;
        s.score1++;
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
            s.joueur1[troue_gene]++;
            troue_gene++;
            nb_graine--;
        }
        else
        {
            s.joueur2[troue_gene - 7]++;
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

        if (((s.joueur1[troue_final] == 2)) || ((s.joueur1[troue_final] == 3)) || ((s.joueur1[troue_final] == 4)))
        {

            s.score2 = s.score2 + s.joueur1[troue_final];
            s.joueur1[troue_final] = 0;
            for (i = troue_final - 1; i >= 0; i--)
            {
                if (((s.joueur1[i] == 2)) || ((s.joueur1[i] == 3)) || ((s.joueur1[i] == 4)))
                {
                    s.score2 = s.score2 + s.joueur1[i];
                    s.joueur1[i] = 0;
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

function joueur2_joue(s, troue_jouer2)
{
    nb_graine = s.joueur2[troue_jouer2];
    troue_gene = troue_jouer2;
    i, a, b, troue_final;
    nb_graine14;
    nb_graine1 = nb_graine;
    s.joueur2[troue_jouer2] = 0;
    troue_gene++;
    oueur2_0 = s.joueur2[0];
    // petite prise pour le cas de 14 graines
    if (nb_graine == 14)
    {
        s.joueur1[0]--;
        s.score2++;
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
            s.joueur2[troue_gene]++;
            troue_gene++;
            nb_graine--;
        }
        else
        {
            s.joueur1[troue_gene - 7]++;
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

        if (((s.joueur1[troue_final] == 2)) || ((s.joueur1[troue_final] == 3)) || ((s.joueur1[troue_final] == 4)))
        {

            s.score2 = s.score2 + s.joueur1[troue_final];
            s.joueur1[troue_final] = 0;
            for (i = troue_final - 1; i >= 0; i--)
            {
                if (((s.joueur1[i] == 2)) || ((s.joueur1[i] == 3)) || ((s.joueur1[i] == 4)))
                {
                    s.score2 = s.score2 + s.joueur1[i];
                    s.joueur1[i] = 0;
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

// permet au joueur 1 d entrer sont coup et verifie certaine regles et verfie si le jeux n est pas fini
function tour_joueur1(s)
{
    i = 7;
    a, c, troue_jouer;
    // verifie si le jeu est fini
    if (s.joueur2[0] + s.joueur2[2] + s.joueur2[3] + s.joueur2[4] + s.joueur2[5] + s.joueur2[6] == 0)
    {
        while (s.joueur1[7 - i] < i)
        {
            i--;
        }
        if ((i == 0))
        {
            s.terminer = 1; // 1 jeu fini

            return;
        }
        if ((s.score2 >= 35) || (s.score1 >= 35))
        {
            s.terminer = 1; // 1 jeu fini

            return;
        }
    }
    // permet au joueur de jouer son coup
    troue_jouer=parseInt(prompt("\n%s VEUILLEZ JOUER VOTRE COUP:\t", s.nom_joueur1));
    while ((troue_jouer < 1) || (troue_jouer > 7))
    {
        troue_jouer=parseInt(prompt("\nVEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 7:\t"));
    }
    while (s.joueur1[troue_jouer - 1] == 0)
    {
        troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
    }
    // verifi une regle
    if ((s.joueur1[6] == 1) && (troue_jouer == 7))
    {
        while ((troue_jouer < 1) || (troue_jouer > 6))
        {
            troue_jouer=parseInt(prompt("\nCECI EST INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 6:\t"));

            while (s.joueur1[troue_jouer - 1] == 0)

            {
                troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
            }
        }
    }
    a = 0;
    // oblige l utilisateur a jouer sa case ayant le plus de graine
    if (s.joueur2[0] + s.joueur2[2] + s.joueur2[3] + s.joueur2[4] + s.joueur2[5] + s.joueur2[6] == 0)
    {
        for (i = 0; i < 7; i++)
        {
            if ((i == 0) || (c < s.joueur1[i]))
            {
                c = s.joueur1[i];
                a = i;
            }
        }
        while (troue_jouer != a + 1)
        {
            troue_jouer=parseInt(prompt("\nCHICHE! JOUER VOTRE CASE AYANT LE PLUS DE GRAINE:\t"));
        }
    }
    // verifie une regle
     score_avant;
     joueur1_6 = s.joueur1[6];
    score_avant = s.score1;
    joueur1_joue(s, troue_jouer - 1);
    if ((troue_jouer == 7) && (joueur1_6 == 2))
    {
        while ((score_avant == s.score1) && (troue_jouer == 7))
        {
            s.joueur2[0] -= 1;
            s.joueur2[1] -= 1;
            s.joueur1[6] += 2;
            while ((troue_jouer < 1) || (troue_jouer > 6))
            {
                troue_jouer=parseInt(prompt("\nCECI EST UN INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 6:\t"));

                while (s.joueur1[troue_jouer - 1] == 0)

                {
                    troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
                }
            }
        }
        joueur1_joue(s, troue_jouer - 1);
    }
}

function tour_joueur2(s)
{
    i = 7;
    a, c, troue_jouer;
    // verifie si le jeu est fini
    if (s.joueur1[0] + s.joueur1[2] + s.joueur1[3] + s.joueur1[4] + s.joueur1[5] + s.joueur1[6] == 0)
    {
        while (s.joueur1[7 - i] < i)
        {
            i--;
        }
        if ((i == 0))
        {
            s.terminer = 1; // 1 jeu fini

            return;
        }
        if ((s.score2 >= 35) || (s.score1 >= 35))
        {
            s.terminer = 1; // 1 jeu fini

            return;
        }
    }
    // permet au joueur de jouer son coup
    troue_jouer=parseInt(prompt("\n%s VEUILLEZ JOUER VOTRE COUP:\t", s.nom_joueur1));
    while ((troue_jouer < 1) || (troue_jouer > 7))
    {
        troue_jouer=parseInt(prompt("\nVEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 7:\t"));
    }
    while (s.joueur2[troue_jouer - 1] == 0)
    {
        troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
    }
    // verifi une regle
    if ((s.joueur2[6] == 1) && (troue_jouer == 7))
    {
        while ((troue_jouer < 1) || (troue_jouer > 6))
        {
            troue_jouer=parseInt(prompt("\nCECI EST INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 1 ET 6:\t"));

            while (s.joueur2[troue_jouer - 1] == 0)

            {
                troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
            }
        }
    }
    a = 0;
    // oblige l utilisateur a jouer sa case ayant le plus de graine
    if (s.joueur1[0] + s.joueur1[2] + s.joueur1[3] + s.joueur1[4] + s.joueur1[5] + s.joueur1[6] == 0)
    {
        for (i = 0; i < 7; i++)
        {
            if ((i == 0) || (c < s.joueur2[i]))
            {
                c = s.joueur2[i];
                a = i;
            }
        }
        while (troue_jouer != a + 1)
        {
            troue_jouer=parseInt(prompt("\nCHICHE! JOUER VOTRE CASE AYANT LE PLUS DE GRAINE:\t"));
        }
    }
    // verifie une regle
    score_initial = s.score2;
     joueur2_6 = s.joueur2[6];
    joueur2_joue(s, 7 - troue_jouer);
    if ((troue_jouer == 1) && (joueur2_6 == 2))
    {
        while ((score_initial == s.score2) && (troue_jouer == 1))
        {
            s.joueur1[0] = s.joueur1[0] - 1;
            s.joueur1[1] = s.joueur1[1] - 1;
            s.joueur2[6] = s.joueur2[6] + 2;
            while ((troue_jouer < 2) || (troue_jouer > 7))
            {
                troue_jouer=parseInt(prompt("\nCECI EST UN INTERDIT VEUILLEZ ENTREZ UN NOMBRE COMPRIS ENTRE 2 ET 7:\t"));

                while (s.joueur[7 - troue_jouer] == 0)
                {
                    troue_jouer=parseInt(prompt("\nVEUILLER JOUER UNE CASE NON VIDE:\t"));
                    
                }
            }
        }
        joueur2_joue(s, 7 - troue_jouer);
    }
}

function affiche_gagnant(s)
{
    if (s.score1 > s.score2)
    {
        console.log("LE GAGNANT EST  %s FELICITATION", s.nom_joueur1);
    }
    else if (s.score1 < s.score2)
    {
        console.log("LE GAGNANT EST  %s FELICITATION", s.nom_joueur2);
    }
    else
    {
        console.log("FELICITATIONS A VOUS 2 :JEUX EGAL");
    }
}

cas;
joueur1= [0,0,0,0,0,0,0];
joueur2= [0,0,0,0,0,0,0];
document.write("\nBIENVENUE AU JEU DU SONGO\n");
nom_joueur1=parseString(prompt("NOM JOUEUR 1:\t"));
nom_joueur2=parseString(prompt("NOM JOUEUR 2:\t"));
s = new songo(nom_joueur1,nom_joueur2,joueur1,joueur2)
commencer(s);
decoration(s);
s.terminer = 0;
while (s.terminer == 0)
{
    tour_joueur1(s);
    decoration(s);
    if (s.terminer == 0)
    {
        tour_joueur2(s);
        decoration(s);
    }
}
affiche_gagnant(s);



