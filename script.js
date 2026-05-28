const produtosDiv = document.getElementById('produtos');

if(produtosDiv){
fetch("https://fakestoreapi.com/products")
    .then(response => response.json())
    .then(items => {

        produtosDiv.innerHTML = items.map(items => `
                <div class="card">
                    <img src="${items.image}" alt="${items.title}">
                    <h2>${items.title}</h2>
                    <p>$ ${items.price}</p>
                    <p>${items.category}</p>
                    <button>Add to Cart</button>

                </div>
                `
        ).join("");
    })
    .catch(erro => {
        console.log("Erro ao processar dados: ", erro);
    })
}


function loginEnviar() {
    let usernameInput = document.getElementById("input1").value
    let passwordInput = document.getElementById("input2").value
    let result = document.querySelector("#areaTxt")
    let t1 = document.querySelector("#t1")

    fetch("https://fakestoreapi.com/users")

        .then(response => response.json())
        .then(users => {

            const usuarioEncontrado = users.find(users => {
                return (users.username === usernameInput && users.password === passwordInput);
            })

            if (usuarioEncontrado) {
                
                document.body.classList.add("fade-out");
                result.textContent = ""
                t1.innerHTML += `${usernameInput}!`
                
                setTimeout(() => {
                    window.location.href = "index.html";}, 1000);
            }
            else {
                result.textContent = "Invalid Password or username!"
            }


        })
}

let btnLogin = document.querySelector("#btnLoginSubmit")
btnLogin?.addEventListener("click", loginEnviar)

