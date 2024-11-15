document.querySelector('.elemento').classList.add('visivel');
// Variáveis globais para controlar o estado do fundo
var fundoUsandoImagem = false;

function alternarFundo() {
    // Pegue os elementos de vídeo e o body
    var video = document.getElementById("video-fundo");
    var body = document.body;

    // Verifique se estamos atualmente usando uma imagem
    if (fundoUsandoImagem) {
        // Se estivermos usando uma imagem, mostre o vídeo novamente
        video.style.display = "block"; // Exibe o vídeo
        body.style.backgroundImage = ""; // Remove a imagem de fundo
        body.style.opacity = 0; // Faz o fundo desaparecer

        // Após 1 segundo (tempo da transição), mostre o vídeo de volta
        setTimeout(function() {
            body.style.opacity = 1; // Torna o fundo visível novamente
        }, 1000);

    } else {
        // Se estivermos usando o vídeo, altere para a imagem
        video.style.display = "none"; // Esconde o vídeo
        var novaImagem = "https://img.freepik.com/free-vector/beautiful-gradient-spring-landscape_23-2148448598.jpg?t=st=1731534096~exp=1731537696~hmac=54fd8296463bf28af356fff89a1a859233ab18e5480ce30d7a68b091392d98f9&w=740";
        body.style.backgroundImage = `url(${novaImagem})`; // Define a imagem de fundo
        body.style.backgroundSize = "cover"; // Faz a imagem cobrir toda a tela
        body.style.backgroundPosition = "center"; // Centraliza a imagem

        // Inicia a transição de opacidade para a imagem
        body.style.opacity = 0; // Inicialmente invisível
        setTimeout(function() {
            body.style.opacity = 1; // Torna a imagem visível
        }, 100); // Atraso para iniciar a transição de opacidade
    }

    // Alterna o estado
    fundoUsandoImagem = !fundoUsandoImagem;
}
