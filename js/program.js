alert("CLIQUE NO FUNDO PRETO!")
var selecao = window.prompt("DIGITE 1, 2 ou 3")

function aumentar() {
    var vilha = document.getElementById("musica_fundo");
    vilha.play();

    const element = document.querySelector('#fundo');
    const style = getComputedStyle(element);
    
    var width_int = parseInt(style.width);
    var height_int = parseInt(style.height);

    var divA = width_int % 10;

    if (divA == 0) {
        var marginal = parseInt(style.margin)
        var k = marginal - 2;
        document.getElementById("fundo").style.margin = (k + "px");

        var reigth = height_int + 5;
        document.getElementById("fundo").style.height = (reigth + "px");

        var uidth = width_int + 5;
        document.getElementById("fundo").style.width = (uidth + "px");

        if (k == 225) {
            vilha.src = "kk.mp3";
            var vies = document.getElementById("vidin");

            if (selecao == "2") {
                vies.src = "videos/video_ff2.mp4"
            } else if (selecao == "3") {
                vies.src = "videos/video_ff3.mp4"
            }

            vies.style.height = "515px";
            vies.style.width = "515px";
            vies.play();
            document.getElementById("fundo").onclick = "bugar()"
        }
    } else {
        var marginal = parseInt(style.margin)
        var k = marginal - 2.5;
        document.getElementById("fundo").style.margin = (k + "px");

        var reigth = height_int + 5;
        document.getElementById("fundo").style.height = (reigth + "px");

        var uidth = width_int + 5;
        document.getElementById("fundo").style.width = (uidth + "px");
    }
}
