var nombre = document.getElementById('nome');
var apellido = document.getElementById('sobrenome');
var correo = document.getElementById('email');
var telefono = document.getElementById('phoneNumber');
error.style.color = 'red';


var form = document.getElementById('formulario');
form.addEventListener('submit', function(event){
  event.preventDefault();
 
var messagemError = [];

if(nome.value === null || nome.value === ''){
  messagemError.push('Ingrese seu Nome por favor');
}
if(sobrenome.value === null || sobrenome.value === ''){
  messagemError.push('Ingrese seu Sobrenome por favor');
}

if(email.value === null || email.value === ''){
  messagemError.push('Ingrese seu Email por favor');
}

if(phoneNumber.value === null || phoneNumber.value === ''){
  messagemError.push('Ingrese seu telefone por favor');
}

error.innerHTML = messagemError.join(',');
});


//**outro codigo do exercicio;

var contenido = document.querySelector('#repositorios')
        fetch('https://api.github.com/users/LuisRuiz54/repos')
            .then(function(response) {
                return response.json()
            })
           
                
                .then(function(data){
                  console.log(data.length)
                   var cont = 0
                   for(cont=0;cont<data.length;cont++){ 
                        
                    
                   contenido.innerHTML +=` 
                        <a href="${data[cont].html_url}" target="blank_">  ${data[cont].name} </a>`
                        
                    }
      })
    







