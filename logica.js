/* PRIMEIRA PARTE -> INSERE IMAGEM, VERIFICA CLIQUE E ALTERNA ENTRE AS DUAS */


var player = "X";
var numJog = 0;
var audio2 = new Audio("music/rat.mp3");
var audio1 = new Audio("music/coconut.mp3");
var audio3 = new Audio("music/panelavelha.mp3");

document.getElementById("f1").style.display = "none";

function recarregar(){

    location.reload();
    return false;
}

function mudacor(){
    var bg1 = document.getElementById("cor1").value;
   
/*
    var bg2 = document.getElementsByClassName("tabela");
    for (let e = 0; e < bg2.length; e++) {
     
        bg2[e].style.backgroundColor = bg1;
        
    }
 
*/

    document.getElementById("q2").style.backgroundColor = bg1;

    
} 

function checkjogo(id){
    var pc = document.getElementById('cpu').checked;

var opt = verificaSrc(id);

    if(opt == "transp.png"){
        document.getElementById(id).src = "img/" + player + ".gif";

        numJog++;
        
        if(winchek() && player == "X"){
            audio1.play();
            alert("Fim de Jogo!! Vitória das Capybaras!!! ")
            document.getElementById("visivel1").style.display = "block";
            return false;
            location.reload();
        }
        if(winchek() && player == "O"){
            audio2.play();
            alert("Fim de Jogo!! Vitória da RATARIA !!! ")
            document.getElementById("visivel2").style.display = "block";
            return false;
            location.reload();
        }
        if(numJog >= 9){
            audio3.play()
            alert("Fim de Jogo!! Deu Velha :/ ");
            document.getElementById("visivel3").style.display = "block";
            return false;
            location.reload();
        }

        if(player == "X"){
            player = "O";

        }else{
        player = "X";
        }
    }

    if(pc && player == "O"){
        checkjogo(jogoDoPc());
    }

    function jogoDoPc(){
        return 'c' + Math.floor((Math.random() * 9) + 1);
    
    } 
    

}
function verificaSrc(id) {

    var file = document.getElementById(id).src;
    return file.substring(file.length - 10, file.length);
    
}

/* SEGUNDA PARTE -> TESTE DE VITÓRIA */




function winchek(){
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/

    /* Horizontal */ 
    /* C1 C2 C3 */
    if((verificaSrc('c1') == verificaSrc('c2')) &&
     (verificaSrc('c1') == verificaSrc('c3')) && 
     verificaSrc('c1') != "transp.png" ){
        return true;       
    }

    /* C4 C5 C6 */
    if((verificaSrc('c4') == verificaSrc('c5')) &&
     (verificaSrc('c4') == verificaSrc('c6')) && 
     verificaSrc('c4') != "transp.png" ){
        return true;       
    } 

    /* C7 C8 C9 */
    if((verificaSrc('c7') == verificaSrc('c8')) &&
     (verificaSrc('c7') == verificaSrc('c9')) && 
     verificaSrc('c7') != "transp.png" ){
        return true;       
    } 

/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/

    // Vertical  
    /* C1 C4 C7 */
    if((verificaSrc('c1') == verificaSrc('c4')) &&
     (verificaSrc('c1') == verificaSrc('c7')) && 
     verificaSrc('c1') != "transp.png" ){
        return true;       
    }

    /* C2 C5 C8 */
    if((verificaSrc('c2') == verificaSrc('c5')) &&
     (verificaSrc('c2') == verificaSrc('c8')) && 
     verificaSrc('c2') != "transp.png" ){
        return true;       
    } 

    /* C3 C6 C9 */
    if((verificaSrc('c3') == verificaSrc('c6')) &&
     (verificaSrc('c3') == verificaSrc('c9')) && 
     verificaSrc('c3') != "transp.png" ){
        return true;       
    } 
    
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/

/* Lateral */ 
    /* C1 C5 C9 */
    if((verificaSrc('c1') == verificaSrc('c5')) &&
     (verificaSrc('c1') == verificaSrc('c9')) && 
     verificaSrc('c1') != "transp.png" ){
        return true;       
    }

    /* C3 C5 C7 */
    if((verificaSrc('c3') == verificaSrc('c5')) &&
     (verificaSrc('c3') == verificaSrc('c7')) && 
     verificaSrc('c3') != "transp.png" ){
        return true;       
    } 

    
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/
/*<-------------------------------------------------->*/



        return false;
}
