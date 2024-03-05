/*Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos,
si son iguales devolver un String «son iguales».


function numeroMayor(uno, dos, tres){
    if (uno > dos && uno > tres){
        console.log(uno);
    }
    else if(dos > uno && dos > tres){
        console.log(dos);
    }
    else if (tres > uno && tres > dos){
        console.log(tres);
    }else{
        console.log("Los numeros son iguales");
    }

}

numeroMayor(100,100,80)


Escriba una función con el nombre de esVocal() que tome un carácter , devuelva True si es vocal 
(no importa si es mayúscula o minúscula), y devuelva False en caso contrario.



function esVocal(caracter){
    if (caracter == "a"|| caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u"){
        console.log("es vocal");
    }else if (caracter == "A"|| caracter == "E" || caracter == "I" || caracter == "O" || caracter == "U"){
        console.log("es vocal");
    }else{
        console.log("no es vocal");
    }
        

}

esVocal("U")



const sumar = (numeroU, numeroD) =>{
    let total = numeroU + numeroD;
    console.log(total);
}
sumar(50,5);

const multiplicar = (u,d) =>{
    total = u * d;
    console.log(total);
}
multiplicar(50,5);

const dividir = (a,b) =>{
    total = a / b;
    console.log(total);
}
dividir(50,5);




const restar = (un, dos) =>{

    let total  = un - dos;
    console.log(total);

}
restar(10,5);
*/