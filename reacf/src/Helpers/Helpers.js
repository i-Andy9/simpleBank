export function CalcularTotal(c, p) {
  
    let totalPlazo; 
    let totalCantidad; 
    
    if(c <=1000){
        totalCantidad= c* .25
    }else
    if(c>1000 && c<=5000){
        totalCantidad= c*.20
    }else
    if(c>5000 && c<=10000){
        totalCantidad= c*.15
    }else{
        totalCantidad= c*.10
    }
    
    console.log(totalCantidad);

    switch(p){
        case '3': 
        totalPlazo= c * 0.05 
            break
        case '6': 
        totalPlazo= c * .10 
            break
        case '12': 
        totalPlazo= c * .15 
                break
        case '24': 
        totalPlazo= c * .20 
                break     
    } 

    return c+ totalCantidad +totalPlazo
}; 