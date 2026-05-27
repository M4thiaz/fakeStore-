const produtosDiv = document.getElementById('produtos');

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


function loginEnviar() {
    let usernameInput = document.getElementById("input1").value
    let passwordInput = document.getElementById("input2").value
    let result = document.querySelector("#areaTxt")

    fetch("https://fakestoreapi.com/users")

        .then(response => response.json())
        .then(users => {

            const usuarioEncontrado = users.find(users => {
                return (users.username === usernameInput && users.password === passwordInput);
            })

            if (usuarioEncontrado) {
                result.textContent = (`Bem-Vindo(a) ${usernameInput}.`)

                document.body.classList.add("fade-out");

                setTimeout(() => {
                    window.location.href = "index.html";
                }, 1000);



            }
            else {
                result.textContent = "Invalid Password or username!"
            }


        })
}

let btnLogin = document.querySelector("#btnLoginSubmit")
btnLogin.addEventListener("click", loginEnviar)

