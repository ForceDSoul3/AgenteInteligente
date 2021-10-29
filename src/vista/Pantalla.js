import React, {Component} from 'react'
import Agente from './Agente'
import Casillas from './Casillas'

export default class Pantalla extends Component{
    constructor(props){
        super(props)
        this.state={
            s1: false,//sensores
            s2: false,
            s3: false,
            s4: false,
            s5: false,
            s6: false,
            s7: false,
            s8: false,

            tablero: [],//configura el tablero o entorno
            agente_p: {x:1,y:1},//posición de nuestro agente
            obstac: '',//donde poner el obstáculo
            meta: ''
        }
        this.llenartablero = this.llenartablero.bind(this)
        
        this.definirobs = this.definirobs.bind(this)
        this.definirmeta = this.definirmeta.bind(this)
        
        this.crearmuralla = this.crearmuralla.bind(this)
        
        this.objetivocambio = this.objetivocambio.bind(this)
        this.metacambio = this.metacambio.bind(this)

        this.caminarnorte = this.caminarnorte.bind(this)
        this.caminarsur = this.caminarsur.bind(this)
        this.caminareste = this.caminareste.bind(this)
        this.caminaroeste = this.caminaroeste.bind(this)

        this.irameta = this.irameta.bind(this)
        this.sleep = this.sleep.bind(this)
        this.pasos = this.pasos.bind(this)

    }

    async sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

    objetivocambio(e){
        const{value} = e.target
        this.setState({obstac: value})
    }

    metacambio(e){
        const{value} = e.target
        this.setState({meta: value})//sería bueno definir coordenadas
    }

    llenartablero(){
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
        this.setState({tablero: arr});        
    }        

    definirobs(){
        const {tablero, obstac} = this.state        
        const casilla = parseInt(obstac)
        let ajuste = []        
        ajuste = tablero
        for(let i=0; i<=399; i++){
            if(ajuste[i].id===casilla){
                ajuste[i].obs = true
            }
        }
        this.setState({tablero: ajuste})        
    }

    crearmuralla(){
        let muralla = []
        const {tablero} = this.state
        muralla = tablero
        for(let i=0; i<=399; i++){
            if(muralla[i].x === 0 || muralla[i].y === 0 || muralla[i].x===19 || muralla[i].y===19){
                muralla[i].obs = true
                
            }
        }
        this.setState({tablero: muralla})
    }

    definirmeta(){        
        const {tablero,meta} = this.state
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
        this.setState({tablero: ajuste})        
    }

    caminarnorte(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.y++
        console.log(movimiento)
        this.setState({agente_p: movimiento})
    }
    caminarsur(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.y--
        console.log(movimiento)
        this.setState({agente_p: movimiento})
    }
    caminareste(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.x++
        console.log(movimiento)
        this.setState({agente_p: movimiento})
    }
    caminaroeste(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.x--
        console.log(movimiento)
        this.setState({agente_p: movimiento})
    }

    pasos(){
        const {agente_p,tablero} = this.state
        let ax = agente_p.x
        let ay = agente_p.y
        let ajuste = []
        ajuste = tablero
        for(let i=0; i<=399; i++){
            if(ajuste[i].x === ax && ajuste[i].y === ay){
                ajuste[i].visitado = true
            }
        }
        this.setState({tablero: ajuste})

    }

    irameta(){
        const {agente_p,meta,tablero} = this.state
        const casilla = parseInt(meta)
        let x = null 
        let y = null
        let ax = agente_p.x
        let ay = agente_p.y
        let ajuste = []
        ajuste = tablero
        for(let i=0; i<=399; i++){
            if(ajuste[i].id===casilla){
                x = ajuste[i].x
                y = ajuste[i].y
            }
        }
        console.log('Meta está en: '+x+', '+y)        
        console.log('Agente está en: '+ax+', '+ay)        
        while(ax < x || ay < y){
            let difx = x-ax
            let dify = y-ay
            console.log('Diferencias o distancia: '+difx,dify)
            if(difx>dify){
                //mover en eje x
                if(x>ax){
                    this.caminareste()
                }
            }
            else{
                //mover en eje y
                if(y>ay){
                    this.caminarnorte()
                }
            }
            ax = agente_p.x
            ay = agente_p.y
            this.pasos()
            this.forceUpdate()            
        }        


    }

    render(){
        const {tablero, objetivo, meta, agente_p} = this.state
        const x = (agente_p.x)
        const y = (agente_p.y)
        return(
            <>
                <button 
                    onClick={this.llenartablero}
                    style={{position:'fixed',top:'10%',right:'2%'}}
                >llenar tablero</button>                
                <input type='number' style={{position:'fixed',top:'17%',right:'2%'}} value={objetivo} onChange={this.objetivocambio} placeholder='insertar obstáculo # de casilla'/>
                <button 
                    onClick={this.definirobs}
                    style={{position:'fixed',top:'21%',right:'2%'}}
                >colocar obs</button>                
                <input type='number' style={{position:'fixed',top:'27%',right:'2%'}} value={meta} onChange={this.metacambio} placeholder='definir meta # casilla'/>
                <button 
                    onClick={this.definirmeta}
                    style={{position:'fixed',top:'31%',right:'2%'}}
                >colocar meta</button>                
                <button 
                    onClick={this.crearmuralla}
                    style={{position:'fixed',top:'41%',right:'2%'}}
                >crear muralla</button>


                <button 
                    onClick={this.caminarnorte}
                    style={{position:'fixed',top:'48%',right:'6%'}}
                >ir norte</button>                
                <button 
                    onClick={this.caminarsur}
                    style={{position:'fixed',top:'61%',right:'6%'}}
                >ir sur</button>           
                <button 
                    onClick={this.caminareste}
                    style={{position:'fixed',top:'54%',right:'2%'}}
                >ir este</button>           
                <button 
                    onClick={this.caminaroeste}
                    style={{position:'fixed',top:'54%',right:'10%'}}
                >ir oeste</button>           

                <button 
                    onClick={this.irameta}
                    style={{position:'fixed',top:'70%',right:'2%'}}
                >ir a meta</button>
                
                
                {   
                    tablero.length>0 && 
                    <>
                    <div 
                        style={{
                            width:'80%',
                            display:'grid',
                            gridTemplateColumns:'repeat(20, 1fr)',
                            gridAutoRows:'20',                            
                        }}
                    >
                        <Casillas tablero={tablero}/>
                    </div>
                        <Agente x={x} y={y}/>
                    </>}                
            </>
        )
    }
}

//bottom:'112px',
//left:'56px',