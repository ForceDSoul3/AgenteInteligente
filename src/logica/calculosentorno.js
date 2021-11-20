
//FILL ARRAY THAT REPRESENTS TH ENVIROMENT INCLUDES THE DEFAULT OBSTACLES ON 0X 0Y AND MAX X Y
export const crearentorno = () => {
    //BY DEFAULT AND RULES, OUR AGENT IS IN 1,1
    const x = 1
    const y = 1

    //WE INITIALIZE THE ARRAY FOR OUR OBJECTS(400 objects)
    let arr = [];
    var id = 400;
    for(let i=19;i>=0;i--){
        //Needed to fill ids in the desired order, from right to left, up to down
        id=id-20;
        for(let j=0;j<20;j++){
            //SETS THE AGENT IN 1,1 by default
            if(j === x && i === y){
                arr.push({'id':id,'x':j,'y':i,'obs':false,'meta':false,'visitado':false,'isAgente': true});
                id++;
            }
            //TO ALL X0 && Y0, X19 && Y19, set to obstacle, to create default walls
            else if(j === 0 || i === 0 || j ===19 || i === 19){
                arr.push({'id':id,'x':j,'y':i,'obs':true,'meta':false,'visitado':false,'isAgente': false});
                id++;
            }
            //FOR EVERY ELSE OBJECT IN THE ARRAY WE SET ALL THE STATES ON FALSE
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
    //EXTRACT THE X AND Y COORDS
    let ax = agente_p.x
    let ay = agente_p.y

    //WE START WORKING WITH THE OBJECTS ARRAY
    let cleanAgente = []
    cleanAgente = tablero
    //WE NEED TO WALK OVER ALL THE OBJECTS TO AVOID DUPLICATE REPRESENTATIONS 
    //OF THE AGENT
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
    //EXTRACT THE DATA FROM THE INPUT, CONTAINS AN ID
    const casilla = parseInt(meta)

    //WE START WORKING WITH THE ARRAY OF OBJECTS
    let ajuste = []
    ajuste = tablero

    //WE WALK OVER ALL THE ARRAY TO FIND A MATCH IN THE ID
    for(let i=0; i<=399; i++){
        if(ajuste[i].id===casilla){
            ajuste[i].meta = true            
        }
        //TO DELETE ANY OTHER DEFINITION OF THE "meta"
        //AVOID DUPLICATED GOALS
        else{
            ajuste[i].meta = false
        }
    }
    return(ajuste)
}




//INSERTS AND OBSTACLE
export const colorearobstaculo = ({tablero, obstac}) =>{
    //EXTRACT THE DATA FROM THE INPUT, CONTAINS AN ID
    const casilla = parseInt(obstac)        
    //WE USE THE FINDINDEX FUNCTION TO FIND THE DESIRED OBJECT
    const elementsCoord = tablero.findIndex(element => element.id === casilla)
    //WE MAKE A COPY OF THE ENVIROMENT
    let ajuste = [...tablero]
    //UPDATE THE ELEMENT FINDED
    ajuste[elementsCoord] = {...ajuste[elementsCoord], obs: true}
    return(ajuste)
}


