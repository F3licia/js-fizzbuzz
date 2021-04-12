//crea numeri da 1 a 100 con un ciclo for
for (var i = 1; i <= 100; i++) 

    if ((i % 3 === 0) && (i % 5 === 0)) {   //trova multipli di 3 e 5
        console.log("Fizz Buzz")  

    }else if (i % 3 === 0) {                //trova multipli di 3
        console.log("Fizz") 

    } else if (i % 5 === 0) {               //trova multipli di 5
        console.log("Buzz") 

    }else if ((i % 3 !== 0) && (i % 5 !== 0)) {    //numeri restanti
        console.log(i) 
    }





