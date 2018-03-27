$('div').hide();
$('#winner').hide();
var chiffre_mystere = Math.floor(Math.random()* 11);
var i = 1;
$('.resultat').replaceWith("",chiffre_mystere);
// console.log(chiffre_mystere);

$('#bouton').click(function verif()
{
    var value_champ =$('#champ_reponse').val();
    //On recache les div pour "réinitialiser" les divs affichées.
    $('div').hide();
    if (value_champ<chiffre_mystere)
    {
        $('#plus').show();
        i++;
    }
    else if (value_champ>chiffre_mystere)
    {
        $('#moins').show();
        i++;
    }
    else
    {
        $('#win').show();
        $('#bouton').hide();
        $('#winner').show();
        $('#coeur1').hide();
        $('#coeur2').hide();
        $('#coeur3').hide();
    }

    if (i==2)
    {
        $('#coeur1').hide();
    }
    if (i==3)
    {
        $('#coeur2').hide();
    }
    if (i>3)
    {
        $('#bouton').hide();
        $('#coeur3').hide();
        $('#lose').show();
    }
});

$('.reload').click(function rechargement()
{
    location.reload();
});
