/* 
El siguiente código lo podrás usar para renderizar en tu front el footer 
donde están ubicados los botones de filtro, de tu aplicación
*/
function displayFooter() {
  let page = `

      <footer class="footer">

        <span class="todo-count"><strong>${countPend()}</strong> pendiente(s)</span>

        <ul class="filters">
          <li>
<<<<<<< HEAD
            <a class="selected filtro" href="#/" onclick="showAll()">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active" onclick="showPend()">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed" onclick="showComp()">Completados</a>
          </li>
        </ul>
        <button class="clear-completed" onclick="borrarCompletados()" id="clear-completed">Borrar completados</button>
=======
            <a class="selected filtro" href="#/">Todos</a>
          </li>
          <li>
            <a class="filtro" href="#/active">Pendientes</a>
          </li>
          <li>
            <a class="filtro" href="#/completed">Completados</a>
          </li>
        </ul>
        <button class="clear-completed">Borrar completados</button>
>>>>>>> 6bfcadf412fa9f854d9b17dffa18ef8263263c99
      </footer>
    `
  document.querySelector('.footer').innerHTML = page
}
