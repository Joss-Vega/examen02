

var nombres = document.getElementById("nombres");
var correo = document.getElementById("correo");
var telefono = document.getElementById("telefono");

function agregar(){
    resp.innerHTML= ""
    +"<ul><li> Nombres :"+nombres.value+"</li></ul>"
    +"<ul><li> Correo :"+correo.value+"</li></ul>"
    +"<ul><li> telefono :"+telefono.value+"</li></ul>";;
}

function onFormAgregar(){
    var formData = readFormData();
    insertNewRecord(formData);
}
function readFormData(){
    var formData = {};
    formData["nombres"] = document.getElementById("nombres").value;
    formData["correo"] = document.getElementById("correo").value;
    formData["telefono"] = document.getElementById("telefono").value;
    
    return formData;

    
}
function mensaje(){
    var x = parseInt(document.getElementById("numero").value);
    var boton = document.getElementById("botoncito");
    boton.classList.add("boton2");
    document.getElementById("resultado").value = Math.sqrt(x);
   
    var ndiv = document.createElement("div");    
    var ntext = document.createTextNode("Este es un nuevo elemento");
    ndiv.appendChild(ntext);

    var b1 = document.createElement("button");
    var txtboton = document.createTextNode("Nuevo Boton");
    b1.appendChild(txtboton);

    var prueba = document.getElementById("prueba");

    document.body.insertBefore(b1, prueba);

    b1.classList.add("boton");

    
}
