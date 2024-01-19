const $usuarios = document.querySelector("#usuarios");
const form = document.querySelector("#form");
const url = "http://localhost:3001/usuarios";
const btnSubmit = document.querySelector("#btn-submit");
let editing = false;
let userId;

async function fetchApi() {
    const query = await fetch(url);
    const usuarios = await query.json();  // Cambié el nombre de la variable aquí

    for (const usuario of usuarios.usuarios) {
        const $div = document.createElement("div");
        const $nombre = document.createElement("h3");
        const $apellido = document.createElement("p");
        const $edad = document.createElement("p");
        const borrar = document.createElement("button");
        const editar = document.createElement("button");

        $nombre.textContent = usuario.nombre;
        $apellido.textContent = usuario.apellido;
        $edad.textContent = usuario.edad;
        borrar.textContent = "Borrar";
        editar.textContent = "Editar";

        $div.classList.add("usuario");
        borrar.classList.add("borrar");
        editar.classList.add("editar")

        //Evento del botón eliminar
        borrar.addEventListener("click", async () => {
            const options = {
                method: "DELETE",
                headers:{
                    "Content-Type": 'application/json',
                    "Accept": 'application/json'
                }
            }

            const query = await fetch(`${url}/${usuario._id}`, options);
            const res  = await query.json()

            console.log(res);
            location.reload();
        });

        //Evento del botón editar
        editar.addEventListener("click", () =>{
            editing = true;
            userId = usuario._id;

            document.querySelector('#nombre').value = usuario.nombre; 
            document.querySelector('#apellido').value = usuario.apellido;
            document.querySelector('#edad').value = usuario.edad;
            document.querySelector('#fecha_nacimiento').value = usuario.fecha_nacimiento;

            btnSubmit.textContent = "Editar";
        });

        $div.appendChild($nombre);
        $div.appendChild($apellido);
        $div.appendChild($edad);
        $div.appendChild(borrar);
        $div.appendChild(editar);

        $usuarios.appendChild($div);
    }
}

fetchApi();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const edad = document.querySelector('#edad').value;
    const fechaNacimiento = document.querySelector('#fecha_nacimiento').value;


    async function crearUsuario(){
        const options = {
            method: "POST",
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({nombre, apellido, edad, fechaNacimiento})
        }

        const query = await fetch(url, options);
        const res = await query.json();

        console.log(res);
        location.reload();
    }

    async function editarUsuario() {
        const options = {
            method: "PUT",
            headers:{
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            body: JSON.stringify({nombre, apellido, edad, fechaNacimiento})
        }

        const query = await fetch(`${url}/${userId}`, options);
        const res = await query.json();

        console.log(res);
        location.reload();
    }

    if(editing){
        editarUsuario();
    }else{
        crearUsuario();
    }
    
});
