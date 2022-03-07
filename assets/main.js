//codigo para ingresar los datos 
const form = document.getElementById("formularioDisco");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     let formularioDiscoData = new DiscoDato(form);
//     let formularioTableRef = ducument.getElementById("formularioTable");
//     let newFormularioRowRef = formularioTableRef.insertRow(-1);
    
//     let  newTypeCellRef = newFormularioRowRef.insertCell(0);
//     newTypeCellRef.textContent = formularioDiscoData.get("id")

//     newTypeCellRef = newFormularioRowRef.insertCell(1);
//     newTypeCellRef.textContent = formularioDiscoData.get("nombre")

//     newTypeCellRef = newFormularioRowRef.insertCell(2);
//     newTypeCellRef.textContent = formularioDiscoData.get("precio")

//     newTypeCellRef = newFormularioRowRef.insertCell(3);
//     newTypeCellRef.textContent = formularioDiscoData.get("año")

// })



function llenarDatos(){

    function Disco(id, nombre, precio, año) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.año = año;
    }

    var idLlenarDatos = document.getElementById("id").value;
    var nombreLlenarDatos = document.getElementById("nombre").value;
    var precioLlenarDatos = document.getElementById("precio").value;
    var añoLlenarDatos = document.getElementById("año").value;

    nuevoIngreso = new Disco(idLlenarDatos, nombreLlenarDatos, precioLlenarDatos,añoLlenarDatos);
    registrar();
}

var Datos = [];
//codigo para agregar datos a la tabla 
function registrar(){
    Datos.push(nuevoIngreso);
    document.getElementById("tabla").innerHTML += '' + nuevoIngreso.id '' + nuevoIngreso.nombre '' + nuevoIngreso.precio '' + nuevoIngreso.año '';
}


