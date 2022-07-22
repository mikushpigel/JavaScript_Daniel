function handleClick(e,element) {
    console.log(e);
    //שתי דרכים לפנות לדיב
    e.target.innerHTML += "<br>" + e.clientX + ", " + e.clientY;
    element.innerHTML += "<br>" + e.clientX + ", " + e.clientY;
}

function handleInput(e) {
    const userInfo = document.getElementById('userInfo');
    //const userValue = document.getElementById('userValue');
    userInfo.innerHTML = 'you wrote: ' + e.target.value;
    e.target.style.backgroundColor = e.target.value;

}