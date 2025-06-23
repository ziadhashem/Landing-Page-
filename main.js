function createSnow(){
    const container = document.querySelector('.container');
    const span = document.createElement('span');


    span.style.left = Math.random() * innerWidth + 'px';
    container.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, 5000);
}

setInterval(createSnow, 100);


let date = new Date('jul 1, 2030 00:00:00').getTime();


function countDown() {
    let now = new Date().getTime();
    gap = date-now;
    let second = 1000;
    let minutes = second * 60;
    let hours = minutes *60;
    let days = hours*24;

    let d = Math.floor(gap/(days));
    let h = Math.floor(gap%(days)/(hours));
    let m = Math.floor(gap%(hours)/(minutes));
    let s = Math.floor(gap%(minutes)/(second));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
}

setInterval(() => {
    countDown();
}, 1000);
