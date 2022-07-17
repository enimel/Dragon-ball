//quitar seleccion de imagenes
document.addEventListener('dragstart', function(evt) {
    if (evt.target.tagName == 'IMG') {
      evt.preventDefault();
    }
  });

//Busqueda
// JavaScript code
function search_animal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('nombre');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

document.oncontextmenu = rightClick;
  
        function rightClick(clickEvent) {
            clickEvent.preventDefault();
        }

