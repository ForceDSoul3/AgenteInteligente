
const Casillas =({tablero})=>{        
    return(<>
        {tablero.map?.((casilla)=>(            
            <div 
                key={casilla.id}
                style={{
                    width:'50px',
                    height:'50px',
                    borderStyle:'solid',
                    borderWidth: 'thin',
                    position: 'relative',                    
                    color:  casilla.isAgente === true ? 'green' : 
                            casilla.meta     === true ? 'seagreen' : 
                            casilla.obs      === true ? 'red' : 
                            casilla.visitado === true ? 'plum' : 'blue' 
                }}
            >{casilla.id+' x:'+casilla.x+', y:'+casilla.y}</div>
            ))
        }
    </>)
    
}

export default Casillas