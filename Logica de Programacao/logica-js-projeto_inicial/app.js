let numeroSecreto = Math.floor((Math.random()) * 1000 + 1 )
let numeroDoUsuario = prompt()
let tentativas = 0

if(numeroDoUsuario == "") {
    alert("Favor fonecer um número")
    window.location.reload()

} else {
    while(numeroDoUsuario != numeroSecreto) {

        if(numeroDoUsuario == numeroSecreto) {
            tentativas++
            alert(`Número de tentativas: ${tentativas}`)
            break
        }
    
        if(numeroDoUsuario > numeroSecreto) {
            alert(`O número secreto é menor que ${numeroDoUsuario}`)
            numeroDoUsuario = prompt()
            tentativas++
        } else if(numeroDoUsuario < numeroSecreto) {
            alert(`O número secreto é maior que ${numeroDoUsuario}`)
            numeroDoUsuario = prompt()
            tentativas++
        }
       
        
    }
}

