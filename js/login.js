const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden" //string
const USERNAME_KEY = "username" // 여러번 반복 작성 할 때 쓰면 좋음

function  onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME); //css hidden
    const username = loginInput.value; // form이 submit되면 input으로 부터 정보 받
    localStorage.setItem("USERNAME_KEY", username); // 저장, 값
    // greeting.innerHTML = "안녕하세요" + username + "님";
    paintGreetings(username);
}

function paintGreetings(username){
    greeting.innerHTML = `안녕하세요 ${username} 님`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY"); //유저정보가 있으면 받아서 사용함

if(savedUsername === null){ //유저정보가 없다면 null반환
    loginForm.classList.remove(HIDDEN_CLASSNAME); 
    loginForm.addEventListener("submit", onLoginSubmit); //정보없으면 form의 submit을 기다림
}else{
    paintGreetings(savedUsername);
}
