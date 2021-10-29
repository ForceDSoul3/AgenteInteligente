const Agente = ({x,y}) =>{
    const left = (x*56)+'px'
    const bottom = (y*56+56)+'px'
    return(
        <>
            <div style={{
                    width:'50px',
                    height:'50px',
                    borderStyle:'dotted',
                    color:'#ffffff',
                    position:'relative',
                    bottom: bottom,
                    left: left,
                    zIndex:'20',            
                    backgroundColor:'green'
                }}
                >AGENTE</div>
        </>
    )
}

export default Agente