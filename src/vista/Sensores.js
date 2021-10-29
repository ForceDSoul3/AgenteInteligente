
const Sensores =({s1,s2,s3,s4,s5,s6,s7,s8})=>{
    return(
        <>
            <div style={{position:'fixed',top:'80%',right:'10%', width:'10px', height:'10px', color: s1===true ? 'red' : 'blue'}}>s1</div>
            
            <div style={{position:'fixed',top:'80%',right:'7%', width:'10px', height:'10px', color: s2===true ? 'red' : 'blue'}}>s2</div>
            
            <div style={{position:'fixed',top:'80%',right:'4%', width:'10px', height:'10px', color: s3===true ? 'red' : 'blue'}}>s3</div>

            <div style={{position:'fixed',top:'85%',right:'10%', width:'10px', height:'10px', color: s8===true ? 'red' : 'blue'}}>s8</div>
            
            <div style={{position:'fixed',top:'85%',right:'4%',width:'10px', height:'10px', color: s4===true ? 'red' : 'blue'}}>s4</div>

            <div style={{position:'fixed',top:'90%',right:'10%', width:'10px', height:'10px', color: s7===true ? 'red' : 'blue'}}>s7</div>

            <div style={{position:'fixed',top:'90%',right:'7%', width:'10px', height:'10px', color: s6===true ? 'red' : 'blue'}}>s6</div>
            
            <div style={{position:'fixed',top:'90%',right:'4%', width:'10px', height:'10px', color: s5===true ? 'red' : 'blue'}}>s5</div>
            
            
            
            
            
            
        </>
    )

}

export default Sensores