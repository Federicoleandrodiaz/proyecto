alert("Bienvenido a nuestra tienda")

// Pedir nombre del cliente y el monto a pagar
 let cliente = prompt('Por favor ingrese el nombre del cliente').toUpperCase()
 let montoCompra = Number(prompt('Por favor ingrese el monto de la compra'))
 let cantidadCuotas = Number(prompt('Por favor ingrese las cuotas a pagar'))


if (montoCompra <= 200){
    if (cantidadCuotas == 3)

    cantidadCuotas = cantidadCuotas / 3

    console.log("sus cuotas son de "+ cantidadCuotas)
    
    if (montoCompra <= 500){
      if (cantidadCuotas == 6)
      cantidadCuotas = cantidadCuotas / 6
    
      console.log("sus cuotas son de "+ cantidadCuotas)

    }
    
    let cuotas = Number(prompt("Ingrese las cuotas con interes"))

    else if (montoCompra => 500 && cantidadCuotas > cuotas)
        if(cuotas > 6 ){
            cantidadCuotas = (cantidadCuotas * 1.25) / cuotas

        }
        console.log ("su monto de cuotas es "+ cantidadCuotas)


}

