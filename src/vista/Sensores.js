
const Sensores =({s1,s2,s3,s4,s5,s6,s7,s8})=>{
    return(
        <>
            <div style={{position:'fixed',top:'80%',right:'10%', width:'10px', height:'10px', color: s1==='obst' ? 'red' : s1==='meta' ? 'green' : s1==='visi' ? 'pink': 'blue'}}>s1</div>
            
            <div style={{position:'fixed',top:'80%',right:'7%', width:'10px', height:'10px', color: s2==='obst' ? 'red' : s2==='meta' ? 'green' : s2==='visi' ? 'pink': 'blue'}}>s2</div>
            
            <div style={{position:'fixed',top:'80%',right:'4%', width:'10px', height:'10px', color: s3==='obst' ? 'red' : s3==='meta' ? 'green' : s3==='visi' ? 'pink': 'blue'}}>s3</div>

            <div style={{position:'fixed',top:'85%',right:'10%', width:'10px', height:'10px', color: s8==='obst' ? 'red' : s8==='meta' ? 'green' : s8==='visi' ? 'pink': 'blue'}}>s8</div>
            
            <div style={{position:'fixed',top:'85%',right:'4%',width:'10px', height:'10px', color: s4==='obst' ? 'red' : s4==='meta' ? 'green' : s4==='visi' ? 'pink': 'blue'}}>s4</div>

            <div style={{position:'fixed',top:'90%',right:'10%', width:'10px', height:'10px', color: s7==='obst' ? 'red' : s7==='meta' ? 'green' : s7==='visi' ? 'pink': 'blue'}}>s7</div>

            <div style={{position:'fixed',top:'90%',right:'7%', width:'10px', height:'10px', color: s6==='obst' ? 'red' : s6==='meta' ? 'green' : s6==='visi' ? 'pink': 'blue'}}>s6</div>
            
            <div style={{position:'fixed',top:'90%',right:'4%', width:'10px', height:'10px', color: s5==='obst' ? 'red' : s5==='meta' ? 'green' : s5==='visi' ? 'pink': 'blue'}}>s5</div>
            
            
            
            
            
            
        </>
    )

}

export default Sensores