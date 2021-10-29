export const colorearcamino = ({agente_p,tablero}) =>{
    let ax = agente_p.x
    let ay = agente_p.y
    
    //obtenemos la casilla donde está posicionado el ajente
    const elementsCoord = tablero.findIndex(element => element.x === ax && element.y === ay)
    //creamos copia del tablero
    let ajuste = [...tablero]
    //actualizamos tablero con valor visitado true a la casilla donde se encontró el agente
    ajuste[elementsCoord] = {...ajuste[elementsCoord], visitado: true} 
    return(ajuste)
}

export const colorearmeta = ({tablero, meta}) =>{
    const casilla = parseInt(meta)
    let ajuste = []
    ajuste = tablero
    for(let i=0; i<=399; i++){
        if(ajuste[i].id===casilla){
            ajuste[i].meta = true  
            ajuste[i].obs = false              
        }
        else{
            ajuste[i].meta = false
        }
    }
    return(ajuste)
}

export const crearmuros = ({tablero}) =>{
    let muralla = []
    muralla = tablero
    for(let i=0; i<=399; i++){
        if(muralla[i].x === 0 || muralla[i].y === 0 || muralla[i].x===19 || muralla[i].y===19){
            muralla[i].obs = true                
        }
    }
    return(muralla)
}

export const colorearobstaculo = ({tablero, obstac}) =>{
    const casilla = parseInt(obstac)
    
    //obtenemos la casilla donde está posicionado el ajente
    const elementsCoord = tablero.findIndex(element => element.id === casilla)
    //creamos copia del tablero
    let ajuste = [...tablero]
    //actualizamos tablero con valor visitado true a la casilla donde se encontró el agente
    ajuste[elementsCoord] = {...ajuste[elementsCoord], obs: true}
    return(ajuste)
}


export const crearentorno = () =>{
    let arr = [];
    var id = 400;        
    for(let i=19;i>=0;i--){
        id=id-20;
        for(let j=0;j<20;j++){
            arr.push({'id':id,'x':j,'y':i,'obs':false,'meta':false,'visitado':false});
            id++;
        }
        id=id-20;            
    }
    return(arr)
}