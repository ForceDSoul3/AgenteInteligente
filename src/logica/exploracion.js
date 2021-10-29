export const evaluarS1 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay
    s1x--
    s1y++
    
    const casillaS1 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS1?.obs                
    return(state)
}


export const evaluarS2 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1y++
    
    const casillaS2 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS2?.obs                
    return(state)
}


export const evaluarS3 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++
    s1y++
    
    const casillaS3 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS3?.obs                
    return(state)
}

export const evaluarS4 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++    
    
    const casillaS4 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS4?.obs                
    return(state)
}

export const evaluarS5 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x++
    s1y--
    
    const casillaS5 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS5?.obs                
    return(state)
}

export const evaluarS6 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay        
    s1y--
    
    const casillaS6 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS6?.obs                
    return(state)
}

export const evaluarS7 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x--
    s1y--

    const casillaS7 = tablero.find(element => element.x===s1x && element.y===s1y)    
    const state = casillaS7?.obs
    return(state)
}

export const evaluarS8 = ({agente_p,tablero}) =>{    
    const ax = agente_p.x
    const ay = agente_p.y
            
    let s1x = ax
    let s1y = ay    
    s1x--    
    
    const casillaS8 = tablero.find(element => element.x===s1x && element.y===s1y)
    const state = casillaS8?.obs                
    return(state)
}