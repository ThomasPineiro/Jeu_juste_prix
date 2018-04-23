//On initialise nos variables, on fais le *10 sur le random pour que le chiffre soit compris en 0 et 9
var chiffre_mystere = Math.floor(Math.random()* 10);
var i = 0;
var musique = document.createElement("audio");
musique.src="sons/remix_pokemon.mp3";
musique.volume=0.5;
musique.autoPlay=false;
musique.preLoad=true;  

//On cache les divs que l'on ne veut pas voir
$('#scene_2, #scene_3').toggle();

$('#btn_debut').click(function()
{
    $('#scene_1, #scene_2').toggle();
});

$('#btn_combat').click(function()
{
    $('#scene_2, #scene_3, .initialisation').toggle();
    musique.play();
});

//Pour afficher le résultat
$('.resultat').replaceWith("",chiffre_mystere);

$('#bouton').click(function verif()
{
    //On récupère la valeur de l'input
    var value_champ =$('#champ_reponse').val();
    i++;

    //Indique si l'on gagne ou pas
    //Cas où chiffre inscrit < chiffre mystère
    if (value_champ<chiffre_mystere)
    {
        $('#plus').show();
        $('#moins').hide();
    }
    //Cas où chiffre inscrit > chiffre mystère
    else if (value_champ>chiffre_mystere)
    {
        $('#moins').show();
        $('#plus').hide();
    }
    //Cas où chiffre inscrit = chiffre mystère
    else if(value_champ=chiffre_mystere)
    {
        //Pour avoir le nombre de tentatives
        $('#tentatives').replaceWith("",i);
        $('#win, #reload').show();
        $('#bouton, #coeurs, .try, .img_mamie, #plus, #moins').hide();
    }

    //Indique le nombre de coeurs restant ainsi que le message à afficher en fonction des vies
    if (i==1 && value_champ != chiffre_mystere)
    {
        $('#coeur1, #3try, #mamie_3, #2try, #mamie_2').toggle();
    }
    if (i==2 && value_champ != chiffre_mystere)
    {
        $('#coeur2, #2try, #mamie_2, #1try, #mamie_1').toggle();
    }
    if (i==3 && value_champ != chiffre_mystere)
    {
        $('#bouton, #coeur3, #lose, #reload, #1try, #mamie_1').toggle();
        $('#plus, #moins').hide();
    }
});

$('#reload').click(function rechargement()
{
    location.reload();
});