const Agente = ({x,y}) =>{
    const left = (x*50)+'px'
    const bottom = (y*50+52)+'px'
    return(
        <>
            <div style={{
                    width:'50px',
                    height:'50px',
                    borderStyle:'solid',
                    borderWidth: 'thin',
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