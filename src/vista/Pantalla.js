import React, {Component} from 'react'
import Agente from './Agente'
import Casillas from './Casillas'
import Sensores from './Sensores'
import { evaluarS1, evaluarS2, evaluarS3,evaluarS4,evaluarS5,evaluarS6,evaluarS7,evaluarS8} from '../logica/exploracion'
import { colorearcamino, colorearmeta, colorearobstaculo, crearentorno, crearmuros } from '../logica/calculosentorno'


export default class Pantalla extends Component{
    constructor(props){
        super(props)
        this.state={
            //sensores
            s1: false, s2: false, s3: false, s4: false, s5: false, s6: false, s7: false, s8: false,

            tablero: [],//configura el tablero o entorno
            agente_p: {x:1, y:1},//posición de nuestro agente, por defecto en 1,1
            obstac: '',//dónde poner el obstáculo #de casilla 
            meta: ''//dónde poner la meta #de casilla
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


        this.explorarentorno = this.explorarentorno.bind(this)

    }


    
    async irameta(){
        const {agente_p,meta,tablero} = this.state
        
        const casilla = parseInt(meta)    
        let x = null 
        let y = null
        
        var ax = agente_p.x
        var ay = agente_p.y
        
        //obtenemos las propiedades de la casilla meta (id,x,y,obs,meta,visitado)
        const entablero = tablero.find(element => element.id === casilla)
        //extraemos a x , y respectivamente
        x = entablero.x
        y = entablero.y
        
        //console.log('Meta está en: '+x+', '+y)        
        //console.log('Agente está en: '+ax+', '+ay)                
        //meta arriba o a la derecha
        while(ax < x || ay < y){
            let difx = x-ax
            let dify = y-ay
            console.log('Diferencia x: ',difx,'Diferencia y: ',dify)
            await this.sleep(500)
            console.log('Diferencias o distancia: '+difx,dify)
            //cuando la diferencia de x es mayor a la de y
            if(difx>dify){
                //mover en eje x                
                this.caminareste()
            }
            //cuando la diferencia de y es mayor a la de x
            else{
                //mover en eje y                
                this.caminarnorte()
            }

            //actualizamos valores, a dónde llegó el agente?
            ax = agente_p.x
            ay = agente_p.y
            //pintamos el camino recorrido
            this.pasos()
            this.explorarentorno()
        }
        //meta abajo o a la izquierda
        while(ax > x || ay > y){
            let difx = ax-x
            let dify = ay-y
            console.log('Diferencia x: ',difx,'Diferencia y: ',dify)
            await this.sleep(500)
            console.log('Diferencias o distancia: '+difx,dify)
            //cuando la diferencia de x es mayor a la de y
            if(difx>dify){
                //mover en eje x                
                this.caminaroeste()
                
            }
            //cuando la diferencia de y es mayor a la de x
            else{
                //mover en eje y                
                this.caminarsur()                 
            }

            //actualizamos valores, a dónde llegó el agente?
            ax = agente_p.x
            ay = agente_p.y
            //pintamos el camino recorrido
            this.pasos()
            this.explorarentorno()
        }        


    }

    render(){
        const {
            tablero, 
            objetivo, 
            meta, 
            agente_p,
            s1,s2,s3,s4,s5,s6,s7,s8
        } = this.state
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


                <button 
                    onClick={this.explorarentorno}
                    style={{position:'fixed',top:'75%',right:'2%'}}
                >explorar entorno</button>
                
                
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
                        <Sensores 
                            s1={s1}
                            s2={s2} 
                            s3={s3} 
                            s4={s4} 
                            s5={s5}
                            s6={s6}
                            s7={s7}
                            s8={s8}
                        />
                    </>}                
            </>
        )
    }


    llenartablero(){
        const arr = crearentorno()
        this.setState({tablero: arr});        
    }        

    definirobs(){
        const {tablero, obstac} = this.state        
        const ajuste = colorearobstaculo({tablero, obstac})
        this.setState({tablero: ajuste})        
    }

    crearmuralla(){        
        const {tablero} = this.state
        const muralla = crearmuros({tablero})
        this.setState({tablero: muralla})
    }

    definirmeta(){        
        const {tablero, meta} = this.state
        const ajuste = colorearmeta({tablero, meta})
        this.setState({tablero: ajuste})        
    }

    caminarnorte(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.y++        
        this.setState({agente_p: movimiento})
    }

    caminarsur(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.y--        
        this.setState({agente_p: movimiento})
    }

    caminareste(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.x++        
        this.setState({agente_p: movimiento})
    }

    caminaroeste(){
        const {agente_p} = this.state
        let movimiento = agente_p
        movimiento.x--        
        this.setState({agente_p: movimiento})
    }

    pasos(){
        const {agente_p,tablero} = this.state
        const ajuste = colorearcamino({agente_p,tablero})       
        this.setState({tablero: ajuste})

    }

    async explorarentorno(){
        const{agente_p, tablero} = this.state

        //Evaluar todas las casillas, para saber si hay obstáculo
        const estadoS1 = await evaluarS1({agente_p, tablero})
        const estadoS2 = await evaluarS2({agente_p, tablero})
        const estadoS3 = await evaluarS3({agente_p, tablero})
        const estadoS4 = await evaluarS4({agente_p, tablero})
        const estadoS5 = await evaluarS5({agente_p, tablero})
        const estadoS6 = await evaluarS6({agente_p, tablero})
        const estadoS7 = await evaluarS7({agente_p, tablero})
        const estadoS8 = await evaluarS8({agente_p, tablero})
                
        this.setState({
            s1: estadoS1,
            s2: estadoS2,
            s3: estadoS3,
            s4: estadoS4,
            s5: estadoS5,
            s6: estadoS6,
            s7: estadoS7,
            s8: estadoS8})
    }

    objetivocambio(e){
        const{value} = e.target
        this.setState({obstac: value})
    }

    metacambio(e){
        const{value} = e.target
        this.setState({meta: value})
    }

    sleep(milliseconds){
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

}