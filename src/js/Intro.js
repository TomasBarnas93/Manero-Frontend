
export const presentIntro = () => {
    let firstTime  = checkIfFirstTime(); 

    if (firstTime) 
        runIntro();

    
}


export const checkIfFirstTime = () => {
    if (localStorage.getItem('firstTime') === null) {
        localStorage.setItem('firstTime', 'false');
        return true;
    }

    return false;
}

export const runIntro = () => {
    let body = document.querySelector('body');

    let intro = document.createElement('div');
    intro.classList.add('bg-cyan-600','vh-100', 'vw-100');
    
    body.appendChild(intro);



}