import React, { Component } from 'react'
// import Agente from './Agente'
import Casillas from './Casillas'
import Sensores from './Sensores'
import { evaluarS1, evaluarS2, evaluarS3, evaluarS4, evaluarS5, evaluarS6, evaluarS7, evaluarS8 } from '../logica/exploracion'
import {
    colorearagente,    
    colorearmeta,
    colorearobstaculo, 
    crearentorno,
} from '../logica/calculosentorno'


export default class Pantalla extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //sensores
            s1: '', s2: '', s3: '', s4: '', s5: '', s6: '', s7: '', s8: '',

            tablero: [],//configura el tablero o entorno
            agente_p: { x: 1, y: 1 },//posición de nuestro agente, por defecto en 1,1
            obstac: '',//dónde poner el obstáculo #de casilla 
            meta: '',//dónde poner la meta #de casilla     
            
            stop:false
        }

        this.llenartablero = this.llenartablero.bind(this)

        this.definirobs = this.definirobs.bind(this)
        this.definirmeta = this.definirmeta.bind(this)
                
        
        this.objetivocambio = this.objetivocambio.bind(this)
        this.metacambio = this.metacambio.bind(this)

        this.caminarnorte = this.caminarnorte.bind(this)
        this.caminarsur = this.caminarsur.bind(this)
        this.caminareste = this.caminareste.bind(this)
        this.caminaroeste = this.caminaroeste.bind(this)

        this.irameta = this.irameta.bind(this)
        this.sleep = this.sleep.bind(this)        

    }

    /*paintAgente(){        
        const {agente_p,tablero} = this.state
        const ajuste = colorearagente({agente_p,tablero})
        this.setState({tablero: ajuste})
        console.log(ajuste);
        console.log(this.state.tablero);
        console.log('Agente pintado');
    }
    
    */
    async irameta() {
        const { tablero, stop } = this.state        
        //CAMBIA LA POSICIÓN DEL AGENTE

        //while (stop === false) {
        this.explorarentorno()

        if (stop === false) {
            setTimeout(() => {
                const { s1, s2, s3, s4, s5, s6, s7, s8, s9 } = this.state
                /*if (s1 === 'meta' || s2 === 'meta' || s3 === 'meta' || s4 === 'meta' || s5 === 'meta' || s6 === 'meta' || s7 === 'meta' || s8 === 'meta') {
                    if (s1 === 'meta' && s2 === 'vaci') {
                        this.caminarnorte()                        
                        return
                    }
                    if (s1 === 'meta' && s8 === 'vaci') {
                        this.caminaroeste()
                        return
                    }
                    if (s2 === 'meta') {
                        this.caminarnorte()
                        this.setState({stop:true})
                        return
                    }
                }*/

                if (s1 === 'obst' || s8 === 'obst' || s1==='visi' || s8 === 'visi') {
                    if(s8 === 'vaci'){
                        this.caminaroeste()
                        return
                    }
                    if (s2 === 'vaci') {
                        this.caminarnorte()
                        return
                    }
                    if (s4 === 'vaci') {
                        this.caminareste()
                        return
                    }
                    if(s6 === 'vaci'){
                        this.caminarsur()
                        return
                    }
                }
                if (s7 === 'obst' || s6 === 'obs' || s7 === 'visi' || s6 === 'visi') {
                    console.log("hay un obstaculo al suroeste")
                    if(s6 === 'vaci'){
                        this.caminarsur()
                        return
                    }
                    if(s8==='vaci'){
                        this.caminaroeste()
                        return
                    }
                    if (s2 === 'vaci') {
                        this.caminarnorte()
                        return
                    }
                    if(s6 === 'vaci'){
                        this.caminarsur()
                        return
                    }
                    if(s4 === 'vaci'){
                        this.caminareste()
                        return
                    }
                }

                if (s4 === 'obst' || s5 === 'obst' || s4 === 'visi' || s5 === 'visi'){
                    if(s4 === 'vaci'){
                        this.caminareste()
                        return
                    }
                    if(s6 === 'vaci'){
                        this.caminarsur()
                        return
                    }
                    if(s8==='vaci'){
                        this.caminaroeste()
                        return
                    }
                    if(s2 === 'vaci'){
                        this.caminarnorte()
                        return
                    }
                }

                
            }, 20)

            setTimeout(() => {
                //Actualizar vista
                const { agente_p } = this.state
                //RECALCULAR CASILLAS VISITADAS Y COLOREAR POS ACTUAL DEL AGENTE
                const recalcular = colorearagente({ agente_p, tablero })
                //ACTUALIZAR ENTORNO
                this.setState({ tablero: recalcular })
    
            }, 50)//Delay necesario para esperar movimiento
            
        }    

        //}
    }

    render() {
        const {
            tablero,
            objetivo, 
            meta,
            //agente_p,
            s1, s2, s3, s4, s5, s6, s7, s8
        } = this.state

        return (
            <>
                <button
                    onClick={this.llenartablero}
                    style={{ position: 'fixed', top: '10%', right: '2%' }}
                >llenar tablero</button>
                <input type='number' style={{position:'fixed',top:'17%',right:'2%'}} value={objetivo} onChange={this.objetivocambio} placeholder='insertar obstáculo # de casilla'/>
                <button 
                    onClick={this.definirobs}
                    style={{position:'fixed',top:'21%',right:'2%'}}
                >colocar obs</button>
                <input type='number' style={{ position: 'fixed', top: '27%', right: '2%' }} value={meta} onChange={this.metacambio} placeholder='definir meta # casilla' />
                <button
                    onClick={this.definirmeta}
                    style={{ position: 'fixed', top: '31%', right: '2%' }}
                >colocar meta</button>
                {/*<button 
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
                >ir oeste</button>     */}

                <button
                    onClick={this.irameta}
                    style={{ position: 'fixed', top: '70%', right: '2%' }}
                >ir a meta</button>


                {
                    tablero.length > 0 &&
                    <>
                        <div
                            style={{
                                width: '1000px',
                                display: 'grid',
                                gridTemplateColumns: 'repeat(20, 1fr)',
                                gridAutoRows: '20',
                            }}
                        >
                            <Casillas tablero={tablero} />
                        </div>
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


    llenartablero() {
        const { agente_p } = this.state
        const arr = crearentorno({ agente_p })
        this.setState({ tablero: arr, stop:false ,agente_p:{x:1,y:1}});
        //console.log('Antes de pintar agente');
        //this.paintAgente(agente_p,arr)
    }

    definirobs(){
        const {tablero, obstac} = this.state        
        const ajuste = colorearobstaculo({tablero, obstac})
        this.setState({tablero: ajuste})        
    }    

    definirmeta() {
        const { tablero, meta } = this.state
        const ajuste = colorearmeta({ tablero, meta })
        this.setState({ tablero: ajuste })
    }

    caminarnorte() {
        const { agente_p } = this.state
        let movimiento = agente_p
        movimiento.y++
        this.setState({ agente_p: movimiento })
    }

    caminarsur() {
        const { agente_p } = this.state
        let movimiento = agente_p
        movimiento.y--
        this.setState({ agente_p: movimiento })
    }

    caminareste() {
        const { agente_p } = this.state
        let movimiento = agente_p
        movimiento.x++
        this.setState({ agente_p: movimiento })
    }

    caminaroeste() {
        const { agente_p } = this.state
        let movimiento = agente_p
        movimiento.x--
        this.setState({ agente_p: movimiento })
    }


    async explorarentorno() {
        const { agente_p, tablero } = this.state

        //Evaluar todas las casillas, para saber si hay obstáculo
        const estadoS1 = evaluarS1({ agente_p, tablero })
        const estadoS2 = evaluarS2({ agente_p, tablero })
        const estadoS3 = evaluarS3({ agente_p, tablero })
        const estadoS4 = evaluarS4({ agente_p, tablero })
        const estadoS5 = evaluarS5({ agente_p, tablero })
        const estadoS6 = evaluarS6({ agente_p, tablero })
        const estadoS7 = evaluarS7({ agente_p, tablero })
        const estadoS8 = evaluarS8({ agente_p, tablero })

        this.setState({
            s1: estadoS1,
            s2: estadoS2,
            s3: estadoS3,
            s4: estadoS4,
            s5: estadoS5,
            s6: estadoS6,
            s7: estadoS7,
            s8: estadoS8
        })
        //const entorno = {s1:estadoS1, s2:estadoS2, s3:estadoS3, s4:estadoS4, s5:estadoS5, s6:estadoS6, s7:estadoS7, s8:estadoS8}
        //return entorno
    }

    objetivocambio(e) {
        const { value } = e.target
        this.setState({ obstac: value })
    }

    metacambio(e) {
        const { value } = e.target
        this.setState({ meta: value })
    }

    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }

}