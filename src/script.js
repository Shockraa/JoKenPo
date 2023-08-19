const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const audio = document.getElementById('audio');
const divCpu = document.getElementById('divCpu');
const divUser = document.getElementById('divUser');
const reset = document.getElementById('reset');
let score = JSON.parse(localStorage.getItem('score')); //Chama localstorage
if (score === null) //Verifica se existe
{
   score = { //Atribui valores iniciais
    wins : 0,
    losses : 0,
    ties : 0,
   }

}
document.getElementById("winsNumber").textContent = "Wins: " + score.wins; //Mostrar na tela 
    document.getElementById("tiesNumber").textContent = "Ties: " + score.ties;
    document.getElementById("lossesNumber").textContent = "Losses: " + score.losses;




audio.addEventListener('ended', () => { //Quando acaba o audio
    const escolha = Math.floor(Math.random() * 3); // 0 - Pedra, 1 - Papel, 2 - Tesoura

    let imagemURL; //Imagem do CPU
    let userimg; //Imagem do usuário


    if (audio.getAttribute('data-escolha') === 'rock') { //Processo para mudar imagem
        userimg = 'src/img/rock.png';
    } else if (audio.getAttribute('data-escolha') === 'paper') {
        userimg = 'src/img/paper.png';
    } else {
        userimg = 'src/img/scissors.png';
    }


    if (escolha === 0) { //Opções
        imagemURL = 'src/img/rock.png';
        if (audio.getAttribute('data-escolha') === 'scissors') {
            score.losses++;
        } else if (audio.getAttribute('data-escolha') === 'paper') {
            score.wins++;
        } else {
            score.ties++;
        }
    } else if (escolha === 1) {
        imagemURL = 'src/img/paper.png';
        if (audio.getAttribute('data-escolha') === 'rock') {
            score.losses++;
        } else if (audio.getAttribute('data-escolha') === 'scissors') {
            score.wins++;
        } else {
            score.ties++;
        }
    } else {
        imagemURL = 'src/img/scissors.png';
        if (audio.getAttribute('data-escolha') === 'paper') {
            score.losses++;
        } else if (audio.getAttribute('data-escolha') === 'rock') {
            score.wins++;
        } else {
            score.ties++;
        }
    }
    localStorage.setItem('score', JSON.stringify(score)); //Guarda no localstorage


    document.getElementById("winsNumber").textContent = "Wins: " + score.wins;
    document.getElementById("tiesNumber").textContent = "Ties: " + score.ties;
    document.getElementById("lossesNumber").textContent = "Losses: " + score.losses;


    divCpu.innerHTML = `<img src="${imagemURL}" alt="Escolha" />`;
    divCpu.style.display = 'block';
    divUser.innerHTML = `<img src="${userimg}" alt="Escolha" />`;
    divUser.style.display = 'block';
});



rock.addEventListener('click', () => { //Opções de escolha
    audio.setAttribute('data-escolha', 'rock');
    audio.play();
});

paper.addEventListener('click', () => {
    audio.setAttribute('data-escolha', 'paper');
    audio.play();
});

scissors.addEventListener('click', () => {
    audio.setAttribute('data-escolha', 'scissors');
    audio.play();
});

reset.addEventListener('click', () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score'); //Faz score ser null para que seja possível resetar os valores 
    document.getElementById("winsNumber").textContent = "Wins: " + score.wins;
    document.getElementById("tiesNumber").textContent = "Ties: " + score.ties;
    document.getElementById("lossesNumber").textContent = "Losses: " + score.losses;
});

const placarBtn = document.getElementById('placarBtn'); //Menu placar
let mostrarPlacar = true;

placarBtn.addEventListener('click', () => {
    if (mostrarPlacar) {
        placar.style.display = 'none';
    } else {
        placar.style.display = 'grid';
    }
    mostrarPlacar = !mostrarPlacar;
});
