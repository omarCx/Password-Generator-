let passwordInput = document.querySelector('#password');
let generate = document.querySelector('.generate');
let allCheckBoxes = document.querySelectorAll('.check input');
let passlength = document.querySelectorAll('.rng input')[0];
let span =  document.querySelector('.rng span');
let save = document.querySelector(".save")
span.innerHTML = passlength.value
passlength.addEventListener('input', () => span.innerHTML = passlength.value);
let chars = {
    charsCheck: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numsCheck: "1234567890",
    spCheck: "!@#$%^&*_+",
};
generate.onclick = function () { 
    let passwordChars = "";
    let charsCount = passlength.value;
    allCheckBoxes.forEach((box) => {
        if (box.checked) {
           passwordChars += chars[box.id];
        }
    })
    let password = "";
    for (let i = 0; i < charsCount; i++) {
        password += passwordChars[Math.trunc(Math.random() * passwordChars.length)]
    }
    passwordInput.value = password; 
}

let copyButton = document.querySelector('.copy') 
copyButton.addEventListener('click', function () {
    passwordInput.select()
    document.execCommand("copy")
    console.log("copied" + " " + passwordInput.value);
})

let passwords = []

save.addEventListener('click', function () {
    let date = new Date()
    let day = date.getDate()
    let year = date.getFullYear()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let time = `${hour}:${minutes} ${day} ${year}`
    let password = {
        title: 'google',
        passwordCode: passwordInput.value,
        date: time 
    }
    let mySet = new Set()
    mySet.add(password)
    console.log(mySet);
    passwords.push(password)
    localStorage.setItem('passwords', JSON.stringify(passwords))
})

