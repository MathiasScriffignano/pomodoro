const affichageTravail = document.querySelector('.affichageT');
const affichagePause = document.querySelector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.querySelector('h2');

let checkInterval = false;
let tempsInitial = 1800 ; 
let tempsDeRepose = 300;
let pause = false;
let nbDeCycle = 0;

cycles.innerText = `Nombre de cycles ${nbDeCycle}`


affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
affichagePause.innerText = `${Math.trunc(tempsDeRepose/60)} : ${(tempsDeRepose % 60 < 10) ? `0${tempsDeRepose % 60}` : tempsDeRepose % 60}`;

btnGo.addEventListener('click', ()=>{

    if(checkInterval === false ){
        checkInterval = true;
    

    tempsInitial--;
    affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;

    let timer = setInterval(() => {
        if(pause === false && tempsInitial > 0){
            tempsInitial--;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
        }else if (pause === false && tempsDeRepose === 0 && tempsInitial === 0){
            tempsInitial = 1800;
            tempsDeRepose = 300 ;
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepose/60)} : ${(tempsDeRepose % 60 < 10) ? `0${tempsDeRepose % 60}` : tempsDeRepose % 60}`;
            nbDeCycle ++ ;
            cycles.innerText = `Nombre de cycles ${nbDeCycle}`
        }else if(pause === false && tempsInitial === 0){
            tempsDeRepose -- ;
            affichagePause.innerText = `${Math.trunc(tempsDeRepose/60)} : ${(tempsDeRepose % 60 < 10) ? `0${tempsDeRepose % 60}` : tempsDeRepose % 60}`;
        }
        btnReset.addEventListener('click', ()=> {
            clearInterval(timer);
            checkInterval = false;
            tempsInitial = 1800;
            tempsDeRepose = 300 ; 
            affichageTravail.innerText = `${Math.trunc(tempsInitial/60)} : ${(tempsInitial % 60 < 10) ? `0${tempsInitial % 60}` : tempsInitial % 60}`;
            affichagePause.innerText = `${Math.trunc(tempsDeRepose/60)} : ${(tempsDeRepose % 60 < 10) ? `0${tempsDeRepose % 60}` : tempsDeRepose % 60}`;
        })
        
    }, 1000)
    }else{
        return;
    }

    
})

btnPause.addEventListener('click', () => {
    if (pause === false){
        btnPause.innerText = 'Play'
    }else if (pause === true){
        btnPause.innerText = 'Pause'
    }
    pause = !pause
})
