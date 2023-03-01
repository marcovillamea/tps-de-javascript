
let producto1 = "computadora"
let producto2 = "laptop"
let producto3 = "auriculares" 
let productocarrito = ""

let pregunta = prompt("desea comprar algo si/no")

while(pregunta == "si"){
    
    
    
    
    let preguntausuario = prompt("que desea comprar: \n" + "1 " + producto1 + " 2 " + producto2 + " 3 " + producto3 )

    switch(preguntausuario){
        case "1":
            alert("ustede eligio una compu")
            preguntausuario = producto1
            break;
        case "2":
            alert("usted elegio una laptop")
            preguntausuario = producto2
            break;
        case "3":
            alert("usted eligio unos auriculares")
            preguntausuario = producto3
            break;
        default:
            alert("no eligio ningun producto")
            break;
    }

    productocarrito = productocarrito + " , " +  preguntausuario
    
    pregunta = prompt("tienes: " + productocarrito +  " ,quieres comprar algo mas: si/no")




}