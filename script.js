//definidr valor ticket
const valorTicket=200;

//defino descuentos
let descuentoEstudiante=0.8;
let descuentoTrainee=0.5;
let descuentoJunior=0.15;

const cantidad=document.querySelector('#cantidad');
const categoria=document.querySelector('#categoria');
const botonCalcular=document.querySelector('#calcular');
const botonRest=document.querySelector('#reset');
const totalP=document.querySelector('#totalP');

//calcular el total
function totalAPagar(){
    let pagar=parseInt(cantidad.value)*valorTicket;
    if (categoria.value == 2){
        pagar=pagar-(pagar * descuentoEstudiante)
    }
    else if (categoria.value == 3){
        pagar=pagar-(pagar * descuentoTrainee);
            } else if (categoria.value == 4){
                pagar=pagar-(pagar * descuentoJunior);
            }
       totalP.innerHTML = 'Total a pagar: $ ${pagar}';
    }
    botonCalcular.addEventListener('clic', totalAPagar);
   function rese(){
    totalP.innerHTML = 'Total a pagar : ';
   cantidad.value = 0;
   
}
    botonRest.addEventListener('clic',rese);
