const usuarios = document.querySelector("#Usuarios");

async function fetchApi() {
    const url = "http://localhost:3001/usuarios";
    const respuesta = await fetch(url);
    const data = await respuesta.json();  // Cambié el nombre de la variable aquí

    for (const usuario of data.usuarios) {
        const div = document.createElement("div");
        const nombre = document.createElement("h3");
        const apellido = document.createElement("p");
        const edad = document.createElement("p");

        nombre.textContent = usuario.nombre;
        apellido.textContent = usuario.apellido;
        edad.textContent = usuario.edad;

        div.classList.add("usuario");

        div.appendChild(nombre);
        div.appendChild(apellido);
        div.appendChild(edad);

        usuarios.appendChild(div);
    }
}

fetchApi()