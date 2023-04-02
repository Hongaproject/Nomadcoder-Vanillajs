const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //원래는 1초를 쉬고 출력을 해주지만 호출시키면 바로 나옴
setInterval(getClock, 1000); // 1초마다 실행시켜주세요.
