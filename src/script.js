const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const audio = document.getElementById('audio');
const divCpu = document.getElementById('divCpu');
const divUser = document.getElementById('divUser');
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}


audio.addEventListener('ended', () => {
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

const placarBtn = document.getElementById('placarBtn'); //Menu placar
let mostrarPlacar = true;

placarBtn.addEventListener('click', () => {
    if (mostrarPlacar) {
        placar.style.display = 'none';
    } else {
        placar.style.display = 'block';
    }
    mostrarPlacar = !mostrarPlacar;
});
