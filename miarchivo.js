class Alumno {
    constructor (nombre, nota1, nota2, nota3) {
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
    }
}

function Promedio () {
var nt1 = $("#nota1");
var nt2 = $("#nota2");
var nt3 = $("#nota3");
var promedio = (parseFloat(nt1)+parseFloat(nt2)+parseFloat(nt3))/3;
alert("Su promedio es: "+ promedio)  
}


let arrayAlumnos = [];
let miFormulario = document.querySelector("#formulario");
let inputNombre = document.querySelector("#iNombre");

let INombre = miFormulario.children[1].value;
let nota1 = miFormulario.children[3].value;
let nota2 = miFormulario.children[5].value;
let nota3 = miFormulario.children[7].value;

let contenedor = document.querySelector("#alumnoIngresado")
let displayTodos = document.querySelector("#displayTodos");
let parrafos = displayTodos.getElementsByTagName("p");
let bandera = false;

miFormulario.addEventListener("submit", agregarAlumnos);
btnMostrar.addEventListener('click', MostrarTodosAlumnos);

inputNombre.focus();

function validarForm() {
    INombre = miFormulario.children[1].value;
    nota1 = miFormulario.children[3].value;
    nota2 = miFormulario.children[5].value;
    nota3 = miFormulario.children[7].value;
    console.log(INombre);
    console.log(nota1);
    console.log(nota2);
    console.log(nota3);

    if ((INombre == "") || (INombre.length < 3) || ((nota1 == "") || (parseInt(nota1) <= 0)) || ((nota2 == "") || (parseInt(nota2) <= 0)) || ((nota3 == "") || (parseInt(nota3) <= 0))) {    
        let alerta2 = "<p>¡ERROR! - Debe completar todos los campos en blanco para continuar</p>";
        $("#alerta2").html(alerta2);
        $("#alerta1").hide(); 
        $("#alerta2").show();
        inputNombre.focus();
        bandera = false;
    } else {
            bandera = true;
            let alerta1 = "<p>Alumno ingresado correctamente!</p>";
            $("#alerta1").html(alerta1);
            $("#alerta1").show(); 
            $("#alerta2").hide();
            localStorage.setItem("datos_formulario", JSON.stringify([INombre, nota1, nota2, nota3]));
            ;
        }
    }


function agregarAlumnos(e) {
    e.preventDefault();
    validarForm();
    if (bandera == true) {
        let opcion = confirm("¿Esta seguro que quiere agregar al Alumno?");
        if (opcion == true) {
            let formulario = e.target
            arrayAlumnos.push(new Alumno(INombre, nota1, nota2, nota3));
        } else {
            alert('No se agregara el alumno');
        }
    miFormulario.children[1].value = '';
    miFormulario.children[3].value = '';
    miFormulario.children[5].value = '';
    miFormulario.children[7].value = '';
    contenedor.innerHTML = '';
    AgregarAlDom();
    inputNombre.focus();
    } else {
        inputNombre.focus();
    }
}

function AgregarAlDom() {
    contenedor.innerHTML = ` <h3><strong> Ultimo alumno ingresado: </strong></h3>
    <p><strong> Nombre: </strong> ${INombre}</p>
        <p><strong> Nota del primer trimestre: </strong> ${nota1}</p>
        <p><strong> Nota del segundo trimestre: </strong> ${nota2}</p>
        <p><strong> Nota del tercer trimestre: </strong> ${nota3}</p>
        <hr> `;
}

function MostrarTodosAlumnos (e) {
    e.preventDefault();
    let i = 0;
    displayTodos.innerHTML = '<h3> Lista de Alumnos:</h3>';
    for (const alumno of arrayAlumnos) {
        displayTodos.innerHTML += `
        <p><strong> Nombre: </strong> ${alumno.nombre}</p>
        <p><strong> Nota del primer trimestre: </strong> ${alumno.nota1}</p>
        <p><strong> Nota del segundo trimestre: </strong> ${alumno.nota2}</p>
        <p><strong> Nota del tecer trimestre: </strong> ${alumno.nota3}</p>
        <hr> `;
    }
}


function Promedio() { 
    var nt1 = document.getElementById('nota1').value; 
    var nt2 = document.getElementById('nota2').value; 
    var nt3 = document.getElementById('nota3').value; 
    var promedio = (parseFloat(nt1)+parseFloat(nt2)+parseFloat(nt3))/3; document.getElementById('promedio').innerHTML = "Su promedio es: " + promedio ; 

    alert("Su promedio es: "+ promedio)

    if (promedio >= 7){
                alert("Estas aprobado:)");
            }
            else if (promedio <= 6){
                alert("Estas desaprobado:(");
            }

}

// jquery:
function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    $("#INombre").val() = datos[0]; 
    $("#nota1").val() = datos[1];
    $("#nota2").val() = datos[2];
    $("#nota3").val() = datos[3];
}

// Animaciones

$("h1").animate({  
                     opacity:'0.6',},
                     2000,           
                    );

$("form").fadeOut("slow", function(){
$("form").fadeIn(1000);
}); 

