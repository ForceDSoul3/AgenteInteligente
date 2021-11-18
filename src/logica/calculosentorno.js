
//FILL ARRAY THAT REPRESENTS TH ENVIROMENT INCLUDES THE DEFAULT OBSTACLES ON 0X 0Y AND MAX X Y
export const crearentorno = () => {
    const x = 1
    const y = 1
    let arr = [];
    var id = 400;
    for(let i=19;i>=0;i--){
        id=id-20;
        for(let j=0;j<20;j++){
            if(j === x && i === y){
                arr.push({'id':id,'x':j,'y':i,'obs':false,'meta':false,'visitado':false,'isAgente': true});
                id++;
            }
            else if(j === 0 || i === 0 || j ===19 || i === 19){
                arr.push({'id':id,'x':j,'y':i,'obs':true,'meta':false,'visitado':false,'isAgente': false});
                id++;
            }
            else{
                arr.push({'id':id,'x':j,'y':i,'obs':false,'meta':false,'visitado':false,'isAgente': false});
                id++;
            }            
        }
        id=id-20;            
    }    
    return(arr)
}



//TAKES THE POSITION OF THE AGENT AND PRINTS IT INSIDE THE ENVIROMENT ARRAY
export const colorearagente = ({agente_p,tablero}) => {
    let ax = agente_p.x
    let ay = agente_p.y
    let cleanAgente = []
    cleanAgente = tablero
    for(let i=0; i<=399; i++){
        if(cleanAgente[i].isAgente === true){
            cleanAgente[i].isAgente = false
            cleanAgente[i].visitado = true
        }
        else if(cleanAgente[i].x === ax && cleanAgente[i].y === ay){
            cleanAgente[i].isAgente = true
        }
    }
    const updatedTable = cleanAgente
    
    return(updatedTable)
}

//USED TO SET THE PLACE WHERE THE GOAL IS
export const colorearmeta = ({tablero, meta}) =>{
    const casilla = parseInt(meta)
    let ajuste = []
    ajuste = tablero
    for(let i=0; i<=399; i++){
        if(ajuste[i].id===casilla){
            ajuste[i].meta = true            
        }
        else{
            ajuste[i].meta = false
        }
    }
    return(ajuste)
}




//INSERTS AND OBSTACLE
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


