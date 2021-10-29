
const Casillas =({tablero})=>{        
    return(<>
        {tablero.map?.((casilla)=>(            
            <div 
                key={casilla.id}
                style={{
                    width:'50px',
                    height:'50px',
                    borderStyle:'dotted',
                    position: 'relative',                    
                    color: casilla.meta === true ? 'blueviolet' : casilla.obs === true ? 'red' :  casilla.visitado===true ? 'orange' : 'blue'
                }}
            >{casilla.id+' x:'+casilla.x+', y:'+casilla.y}</div>
            ))
        }
    </>)
    
}

export default Casillas