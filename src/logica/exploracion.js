export const evaluarS1 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay
    s1x--
    s1y++
    
    const casillaS1 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS1?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS1?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS1?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
    
}


export const evaluarS2 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1y++
    
    const casillaS2 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS2?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS2?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS2?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}


export const evaluarS3 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++
    s1y++
    
    const casillaS3 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS3?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS3?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS3?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}

export const evaluarS4 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++    
    
    const casillaS4 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS4?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS4?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS4?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}

export const evaluarS5 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++
    s1y--
    
    const casillaS5 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS5?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS5?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS5?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}

export const evaluarS6 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay        
    s1y--
    
    const casillaS6 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS6?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS6?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS6?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}

export const evaluarS7 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x--
    s1y--

    const casillaS7 = tablero.find(element => element.x===s1x && element.y===s1y)    
    var state = ''
    if(casillaS7?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS7?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS7?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}

export const evaluarS8 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x--    
    
    const casillaS8 = tablero.find(element => element.x===s1x && element.y===s1y)
    var state = ''
    if(casillaS8?.meta === true){
        state = 'meta'
        return state
    }
    if(casillaS8?.obs === true){
        state = 'obst'
        return state
    }
    if(casillaS8?.visitado === true){
        state = 'visi'
        return state
    }
    else{
        state = 'vaci'
        return state
    }
}