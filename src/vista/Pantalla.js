import React, { Component } from 'react'
import Casillas from './Casillas'
import Sensores from './Sensores'

import './Styles.css'
import { evaluarS1, evaluarS2, evaluarS3,evaluarS4,evaluarS5,evaluarS6,evaluarS7,evaluarS8} from '../logica/exploracion'
import { colorearagente, colorearcamino, colorearmeta, colorearobstaculo, crearentorno, crearmuros } from '../logica/calculosentorno'

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

            pathlist: [],
            stop: false,
            index: -2
        }
        this.sleep = this.sleep.bind(this)

        this.llenartablero = this.llenartablero.bind(this)

        this.definirobs = this.definirobs.bind(this)
        this.definirmeta = this.definirmeta.bind(this)


        this.objetivocambio = this.objetivocambio.bind(this)
        this.metacambio = this.metacambio.bind(this)

        this.caminarnorte = this.caminarnorte.bind(this)
        this.caminarsur = this.caminarsur.bind(this)
        this.caminareste = this.caminareste.bind(this)
        this.caminaroeste = this.caminaroeste.bind(this)

        this.rules = this.rules.bind(this)
        this.viewupdate = this.viewupdate.bind(this)

        this.start = this.start.bind(this)

    }


    async start() {
        const { stop } = this.state
        let loopstop = stop        //INITIAL STATE

        while (loopstop === false) {
            //CAMBIA LA POSICIÓN DEL AGENTE

            this.explorarentorno()

            await this.sleep(100)
            this.rules()

            ////////////////////////////////////////////////////////////////////////
            //UPDATES THE VIEW, VISUAL STUFF

            await this.sleep(110)
            this.viewupdate()

            const { stop } = this.state
            loopstop = stop //UPDATES THE STOP STATE
        }

        //}
    }

    render() {
        const {
            tablero,
            objetivo,
            meta,
            s1, s2, s3, s4, s5, s6, s7, s8
        } = this.state




        return (
            <>
                <button
                    onClick={this.llenartablero}
                    style={{ position: 'fixed', top: '10%', right: '2%' }}
                >llenar tablero</button>
                <input type='number' style={{ position: 'fixed', top: '17%', right: '2%' }} value={objetivo} onChange={this.objetivocambio} placeholder='insertar obstáculo # de casilla' />
                <button
                    onClick={this.definirobs}
                    style={{ position: 'fixed', top: '21%', right: '2%' }}
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
                    onClick={this.start}
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
        this.setState({ tablero: arr, stop: false, agente_p: { x: 1, y: 1 }, index: -2 });
        //console.log('Antes de pintar agente');
        //this.paintAgente(agente_p,arr)
    }

    definirobs() {
        const { tablero, obstac } = this.state
        const ajuste = colorearobstaculo({ tablero, obstac })
        this.setState({ tablero: ajuste })
    }

    definirmeta() {
        const { tablero, meta } = this.state
        const ajuste = colorearmeta({ tablero, meta })
        this.setState({ tablero: ajuste })
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
        this.setState({ meta: value, stop: false })
    }

    caminarnorte() {
        const { agente_p, pathlist } = this.state
        let updatepath = pathlist
        let movimiento = agente_p
        movimiento.y++
        updatepath.push({ x: movimiento.x, y: movimiento.y })

        this.setState({ agente_p: movimiento, pathlist: updatepath, index: -2 })
        console.log(pathlist)
    }

    caminarsur() {
        const { agente_p, pathlist } = this.state
        let updatepath = pathlist
        let movimiento = agente_p
        movimiento.y--
        updatepath.push({ x: movimiento.x, y: movimiento.y })
        this.setState({ agente_p: movimiento, pathlist: updatepath, index: -2 })
        console.log(pathlist)
    }

    caminareste() {
        const { agente_p, pathlist } = this.state
        let updatepath = pathlist
        let movimiento = agente_p
        movimiento.x++
        updatepath.push({ x: movimiento.x, y: movimiento.y })
        this.setState({ agente_p: movimiento, pathlist: updatepath, index: -2 })
        console.log(pathlist)
    }

    caminaroeste() {
        const { agente_p, pathlist } = this.state
        let updatepath = pathlist
        let movimiento = agente_p
        movimiento.x--
        updatepath.push({ x: movimiento.x, y: movimiento.y })
        this.setState({ agente_p: movimiento, pathlist: updatepath, index: -2 })
        console.log(pathlist)
    }


    sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds))
    }



    rules() {
        const { s1, s2, s3, s4, s5, s6, s7, s8 } = this.state

        let backmove = []
        let backlist = []
        let movimiento = []
        if ((s1 === 'visi' || s1 === 'obst') && (s2 === 'visi' || s2 === 'obst') && (s3 === 'visi' || s3 === 'obst') && (s4 === 'visi' || s4 === 'obst') && (s5 === 'visi' || s5 === 'obst') && (s6 === 'visi' || s6 === 'obst') && (s7 === 'visi' || s7 === 'obst') && (s8 === 'visi' || s8 === 'obst')) {
            const { agente_p, pathlist, index } = this.state
            let minus = index
            movimiento = agente_p //COPY OF THE AGENT POSITION {x:n, y:n}
            //console.log('Movimiento ',movimiento)
            backlist = pathlist //LISTA ENTERA DE PASOS ANTERIORES
            backmove = pathlist.at(minus)  //X ITEM DE LA LISTA, anteriormente visitado
            //console.log('Backmove ',backmove) 
            //cosole.log(pathlist)
            movimiento.x = backmove.x
            movimiento.y = backmove.y
            backlist.push(agente_p)
            //console.log(pathlist)
            minus = minus - 2
            //console.log('minus -2 =',minus)
            //console.log(minus)
            this.setState({ agente_p: movimiento, index: minus, pathlist: backlist })
        }


        //IF "META" IS NEARBY, MOVES TO THE PLACE IT IS///////////////////////////////////////////////////
        //IF IT IS AT NORTH
        if (s2 === 'meta') {
            this.caminarnorte()
            this.setState({ stop: true })
            return
        }
        //IF IT IS AT EAST
        if (s4 === 'meta') {
            this.caminareste()
            this.setState({ stop: true })
            return
        }
        //IF IT IS AT SOUTH
        if (s6 === 'meta') {
            this.caminarsur()
            this.setState({ stop: true })
            return
        }
        //IF IT IS AT WEST
        if (s8 === 'meta') {
            this.caminaroeste()
            this.setState({ stop: true })
            return
        }


        //META NEARBY, AT CORNERS
        //IF NW AND N IS CLEAR
        if (s1 === 'meta' && s2 === 'vaci') {
            this.caminarnorte()
            return
        }
        //IF NW AND W IS CLEAR (AND N WASN'T)
        if (s1 === 'meta' && s8 === 'vaci') {
            this.caminaroeste()
            return
        }
        //IF NE AND N IS CLEAR
        if (s3 === 'meta' && s2 === 'vaci') {
            this.caminarnorte()
            return
        }
        //IF NE AND E IS CLEAR (AND N WASN'T)
        if (s3 === 'meta' && s4 === 'vaci') {
            this.caminareste()
            return
        }
        //IF SE AND E IS CLEAR
        if (s5 === 'meta' && s4 === 'vaci') {
            this.caminareste()
            return
        }
        //IF SE AND S IS CLEAR (AND E WASN'T)
        if (s5 === 'meta' && s6 === 'vaci') {
            this.caminarsur()
            return
        }
        //IF SW AND W IS CLEAR
        if (s7 === 'meta' && s8 === 'vaci') {
            this.caminaroeste()
            return
        }
        //IF SW AND S IS CLEAR (AND W WASN'T)
        if (s7 === 'meta' && s6 === 'vaci') {
            this.caminaroeste()
            return
        }


        if (s2 === 'vaci') {
            this.caminarnorte()
            return
        }
        if (s6 === 'vaci') {
            this.caminarsur()
            return
        }
        if (s8 === 'vaci') {
            this.caminaroeste()
            return
        }
        if (s4 === 'vaci') {
            this.caminareste()
            return
        }



        ////////////////////////////////////////////PATHS AT THE CORNERS///////////////////////////////////////////////
        //WHEN S1 IS CLEAR TO WALK/////////////////////////
        if (s1 === 'vaci' && s2 !== 'obst') {
            this.caminarnorte()
            return
        }
        //ONLY IF N WASN'T CLEAR
        if (s1 === 'vaci' && s8 !== 'obst') {
            this.caminaroeste()
            return
        }

        //WHEN S3 IS CLEAR TO WALK/////////////////////////
        if (s3 === 'vaci' && s2 !== 'obst') {
            this.caminarnorte()
            return
        }
        //ONLY IF N WASN'T CLEAR
        if (s3 === 'vaci' && s4 !== 'obst') {
            this.caminareste()
            return
        }

        //WHEN S5 IS CLEAR TO WALK/////////////////////////
        if (s5 === 'vaci' && s4 !== 'obst') {
            this.caminareste()
            return
        }
        //ONLY IF N WASN'T CLEAR
        if (s5 === 'vaci' && s6 !== 'obst') {
            this.caminarsur()
            return
        }

        //WHEN S7 IS CLEAR TO WALK/////////////////////////
        if (s7 === 'vaci' && s8 !== 'obst') {
            this.caminaroeste()
            return
        }
        //ONLY IF N WASN'T CLEAR
        if (s7 === 'vaci' && s6 !== 'obst') {
            this.caminarsur()
            return
        }

    }

    viewupdate() {
        const { agente_p, tablero } = this.state//collects position of the agent            
        //RECALCULAR CASILLAS VISITADAS Y COLOREAR POS ACTUAL DEL AGENTE
        const recalcular = colorearagente({ agente_p, tablero }) //Updates the enviroment string
        //ACTUALIZAR ENTORNO
        this.setState({ tablero: recalcular }) //Sets the enviroment string into the new state


        //console.log(pathlist)//PRINTS LAST VISITED                        
    }

}