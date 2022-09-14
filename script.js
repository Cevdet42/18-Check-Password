document.getElementById("show"),addEventListener("click", show);

function show(){

    var password_of_user;
    const PASSWORD = 'Messi'

    password_of_user = document.getElementById('password').value;


    if(password_of_user == PASSWORD)
    document.getElementById('pitcure').style.visibility = 'visible';

    else
    alert('Advice: It`s the GOAT')
}