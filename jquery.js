jQuery(document).ready(function(){

    const $pseudo = $('#pseudo');
    const $mdp = $('#mdp');
    const $confirmation = $('#confirmation');
    const $mail = $('#mail');
    const $reset = $('#rafraichir');
    const $erreur = $('#erreur');
    const $champ = $('.champ');
    const $envoi = $('#envoi')

    
    $champ.keyup(function(){

        if($(this).val().length < 5){ //si la chaine de caractere dans le champ est inferieur a 5...
            $(this).css({  //mettre le bord et la couleur du texte en rouge
                borderColor : 'red',
                color: 'red'
            });
        }else{
            $(this).css({ //si tout est bon on met tout en vert
                borderColor: 'green',
                color:'green'
            })
        }
    })


    $confirmation.keyup(function(){
        if($(this).val()!= $mdp.val() ){ //si $confirmation est differente de $mdp..
            $(this).css({ //mettre le bord et la couleur du texte en rouge
                borderColor:"red",
                color:"red"
            })
        }else{
            $(this).css({ //sinon tout mettre en vert
                borderColor: 'green',
                color:'green'
            })
        }
    })

    function verifier(champ){
        if(champ.val() == ""){//si le champ est vide...
            $erreur.css('display', 'block'); //on affiche le message d'erreur
            champ.css({
                borderColor:"red",
                color:'red'
            });

        }
    }

    $envoi.click(function(e){
        e.preventDefault(); //on annule la fonction par defaut du bouton d'envoi
        
        //puis on lance la fonction de verificaion sur tous mes champs:
        verifier($pseudo);
        verifier($mdp);
        verifier($confirmation);
        verifier($mail);
    })

    $reset.click(function(){ //on remet le style des champs comme on l'avait définit dans le css
        $champ.css({
            borderColor: '#ccc',
            color:"#555"
        });
        $erreur.css('display', "none");
    });


    
    
 });
 

