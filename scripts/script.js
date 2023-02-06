const aleatorio = (min,max)=>Math.floor(min+(max-min)*Math.random())

const nombres = "abcdefghijklmnopq".split("")

const numeros = Array.from({length:10}, ()=>aleatorio(0,10))

const LONGITUD = 20
const personas = Array.from({length:LONGITUD}, ()=>{
                                        return   { [nombre:nombres[aleatorio(0,nombres.length-1)],
                                            edad:aleatorio(1,100)}
                                        }
                                        )