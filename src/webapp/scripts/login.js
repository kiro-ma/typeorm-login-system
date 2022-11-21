function helloWorld() {
    document.querySelector("h1").innerText = "Olá, Mundo!";
}

async function efetuarLogin() {
    var email = document.getElementById('uname').value
    var senha = document.getElementById('psw').value

    const response = await fetch('/Users/' + email)

    if (response.status != 201) {
        alert("Usuário não encontrado")
    } else {
        var usuario = await response.json()
        var validarUsuario = await (await fetch('Users/' + email + '/' + senha)).json()

        if (validarUsuario) {
            if (usuario["superuser"]) { location.replace('/index_superuser') } else { location.replace('/index') }

            var userAtual = { 'name': usuario["name"], 'email': usuario["email"] };

            // Put the object into storage
            localStorage.setItem('userAtual', JSON.stringify(userAtual));
            
            // Retrieve the object from storage
            //var retrievedObject = localStorage.getItem('testObject');

            //console.log('retrievedObject: ', JSON.parse(retrievedObject));

        } else { alert("Senha incorreta!") }
    }
}