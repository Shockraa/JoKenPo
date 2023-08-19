const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const audio = document.getElementById('audio');
const divCpu = document.getElementById('divCpu');
const divUser = document.getElementById('divUser')
const score = {
    wins: 0,
    losses: 0,
    ties: 0
}

rock.addEventListener('click', () => {

    audio.play();
    audio.addEventListener('ended', () => {
        const escolha = Math.floor(Math.random() * 3); // 0 - Pedra, 1 - Papel, 2 - Tesoura

        let imagemURL;
        let userimg = 'src/img/rock.png';
        if (escolha === 0) {
            imagemURL = 'src/img/rock.png';
        } else if (escolha === 1) {
            imagemURL = 'src/img/paper.png';
        } else {
            imagemURL = 'src/img/scissors.png';
        }

        divCpu.innerHTML = `<img src="${imagemURL}" alt="Escolha" />`;
        divCpu.style.display = 'block';
        divUser.innerHTML = `<img src="${userimg}" alt="Escolha" />`;
        divUser.style.display = 'block';
        

    });
});

paper.addEventListener('click', () => {

    audio.play();
    audio.addEventListener('ended', () => {
        const escolha = Math.floor(Math.random() * 3); // 0 - Pedra, 1 - Papel, 2 - Tesoura

        let imagemURL;
        let userimg = 'src/img/paper.png';
        if (escolha === 0) {
            imagemURL = 'src/img/rock.png';
        } else if (escolha === 1) {
            imagemURL = 'src/img/paper.png';
        } else {
            imagemURL = 'src/img/scissors.png';
        }

        divCpu.innerHTML = `<img src="${imagemURL}" alt="Escolha" />`;
        divCpu.style.display = 'block';
        divUser.innerHTML = `<img src="${userimg}" alt="Escolha" />`;
        divUser.style.display = 'block';

    });
});

scissors.addEventListener('click', () => {

    audio.play();
    audio.addEventListener('ended', () => {
        const escolha = Math.floor(Math.random() * 3); // 0 - Pedra, 1 - Papel, 2 - Tesoura

        let imagemURL;
        let userimg = 'src/img/scissors.png';
        if (escolha === 0) {
            imagemURL = 'src/img/rock.png';
        } else if (escolha === 1) {
            imagemURL = 'src/img/paper.png';
        } else {
            imagemURL = 'src/img/scissors.png';
        }

        divCpu.innerHTML = `<img src="${imagemURL}" alt="Escolha" />`;
        divCpu.style.display = 'block';
        divUser.innerHTML = `<img src="${userimg}" alt="Escolha" />`;
        divUser.style.display = 'block';

    });
});

const placar = document.getElementById('placar');
const placarBtn = document.getElementById('placarBtn');
let mostrar = true;

placarBtn.addEventListener('click', () => {
  if (mostrar == true) {
    placar.style.display = 'none';
  } else {
    placar.style.display = 'block';
  }
  mostrar = !mostrar;
});