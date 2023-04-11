


//codigo de interaccion 
function valorSeleccionado() {
    
    let USDBAR = 391
    let USDAR = 220.25
    let EUAR = 238.42
    let Conversion = 0
   
    

    selectedValue = document.getElementById('moneda').value;

   do{
  
let numero = parseInt(document.getElementById('numero').value)
 
 
  
   if (document.getElementById('_dolar_blue_').selected) {
       Conversion = numero / USDBAR
        
        document.getElementById('conversion').innerText = " = USD$" + Conversion.toFixed(2);
      
      
       
    } 
    else if (document.getElementById('_dolar_').selected) {
      
Conversion = numero / USDAR
       document.getElementById('conversion').innerText = " = USD$" + Conversion.toFixed(2);
      
        
 
    }
    else if (document.getElementById('_euro_').selected) {
        
             Conversion = numero / EUAR
        document.getElementById('conversion').innerText = " = EU$" + Conversion.toFixed(2);
      
        
       
    
    

    }
     
}while(numero == "" || numero >= 0)

//si no se selecciona moneda
if (document.getElementById('select').selected) {
       
    document.getElementById('conversion').innerText = "Debes seleccionar una moneda" ;

} 


if (numero == "" || numero <=0){
    
    alert('Debes ingresar al menos un numero');
    
}
}







