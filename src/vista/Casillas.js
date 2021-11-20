
const Casillas =({tablero})=>{        
    return(<>
        {tablero.map?.((casilla)=>(            
            <div key={casilla.id}> 
                <button href="#" className="casilla"
                    style={{
                        width:'50px',
                        height:'50px',
                        position: 'relative',
                        backgroundColor:  casilla.isAgente === true ? 'green' : 
                                        casilla.meta     === true ? 'midnightblue' : 
                                        casilla.obs      === true ? 'red' : 
                                        casilla.visitado === true ? 'plum' : 'white' 
                    }}> {casilla.id+' x:'+casilla.x+', y:'+casilla.y}
                </button>
            </div>
            ))
        }
    </>)
    
}

export default Casillas