db.estrella.deleteOne()
        db.estrella.insertOne(
        {
                nombre:"sol",
               
        tipo: {
                Categoria:"estrella" , 
                estado: "gaseoso" 
        },
                
        descripcion: {

                dia: 24.47,
                campomagnetico: true  , 
                dis_ua:  0 , 
                edadMA: 4603 , 
                nSatelites: 0, 
                satelites: ["ninguno"],
                atmosfera: ["he", "h"],
                temperaturasuperficieºC: 6000 ,
                temperaturanucleoºC:  15000000 ,
                gravedad: 274,
                zonahabitable: false 
        }
                     
        })

db.cuerpos.deleteMany({})

db.cuerpos.insertMany([

{
        nombre:"mercurio",
        
tipo:{
        
                Categoria: "planeta", 
                estado: "rocoso"
},
        
descripcion:{
        
                dia: 56.84, 
                campomagnetico: true  , 
                dis_ua: 0.72 , 
                edadMA: 4503 , 
                nSatelites: 0, 
                satelites:["ninguno"]
},
        
componentesQuimicos:{ 
                atmosfera: ["o2", "n2", "co2"],
                superficie: ["h2o", "ar"]
},
        temperaturaGC: 167 ,
        gravedad: 3.7,
        zonahabitable: false            
},
        
{
nombre:"venus",      
tipo:{             
                Categoria:"planeta", 
                estado: "rocoso"
},          
descripcion: {           
                dia: 243.02, 
                campomagnetico: true , 
                dis_ua:  0.39 , 
                edadMA: 4503 , 
                nSatelites: 0, 
                satelites: ["ninguno"]
},      
componentesQuimicos:{
                atmosfera: ["co2", "n2,"] ,
                superficie: ["so2", "h2o", "ar", "ne"] 
},
        temperaturaGC: 720 ,
        gravedad: 8.87,
        zonahabitable: false       
},    
{
        nombre:"tierra",  
        tipo:{
                Categoria:"planeta",  
                estado: "rocoso"
},      
descripcion:{
        dia: 1.00,
        campomagnetico: true , 
        dis_ua: 1.00 , 
        edadMA: 4500 , 
        nSatelites: 1, 
        satelites: ["Luna"]
},
        
componentesQuimicos:{
                atmosfera: ["o2", "n2", "co2 "]  ,
                superficie: ["h2o", "ar"] 
},
                temperaturaGC: 15 ,
                gravedad: 9.807,
                zonahabitable: true             
},    
{
                nombre:"marte", 
tipo: {   
        
                Categoria:"planeta",
                estado: "rocoso"
},
             
descripcion:{
        
                dia: 1.03 , 
                campomagnetico: false , 
                dis_ua: 1.52 , 
                edadMA: 4603 , 
                nSatelites: 2, 
                satelites: ["Fobos", "Deimos"]
},
        
componentesQuimicos:{
        
                atmosfera: ["co2", "n2", "ar "] ,
                superficie: ["mg", "fe", "h2o", "ar"] 
},
                temperaturaGC:  -50 ,
                gravedad: 3.721,
                zonahabitable: true
         
},
{
        nombre: "jupiter",
        temperaturaGC: -121.15,
        gravedad: 24.79,
        zonahabitable: false,
        tipo: {
                Categoria: "planeta",
                estado: "gaseoso" 
        },
        descripcion:{
                dia: 0.41,
                campomagnetico: true, 
                dis_ua: 5.20, 
                edadMA: 4603, 
                nSatelites: 60, 
                satelites: ["Europa", "Ganimedes", "Io", "Calisto", "Amaltea", "Himalia", "Carm", "MaS"]
        },
        componentesQuimicos: {
                atmosfera: ["co2", "n2", "ar" ],
                superficie: ["ch4", "nh3", "h2o", "c2h6"] 
        }
},
{
    nombre:"saturno",
    temperaturaGC:  -130.15,
    gravedad: 10.44,
    zonahabitable: false,
tipo:{
    Categoria:"planeta",
    estado: "gaseoso" 
},
descripcion:{     
    dia: 0.45,
    campomagnetico: true , 
    dis_ua:  9.54 , 
    edadMA: 4503 , 
    nSatelites: 82, 
    satelites: ["Titan", "Encelado", "Mimas", "Tetis", "Dione", "Japeto", "Pan", "Hiperion", "MAS"]
},     
componentesQuimicos:{     
    atmosfera: ["h", "he "] ,
    superficie: ["ch4", "nh3", "h2h", "c2h6"] 
}
},

{
    nombre: "urano", 
    temperaturaGC: -121.15,
    gravedad: 8.85,
    zonahabitable: false,

tipo:{

    Categoria: "planeta",
    estado: "gaseoso"
},

descripcion:{

    dia: 0.72,
    campomagnetico: true, 
    dis_ua:  19.22, 
    edadMA: 4503, 
    nSatelites: 27, 
    satelites: ["Umbriel", "Titania", "Miranda", "Oberón", "Ariel", "Puck", "Cresida", "MAS"]
},
    
componentesQuimicos:{
    
    atmosfera: ["co2", "n2", "ar"] ,
    superficie: ["ch4", "nh3", "h2o", "c2h6"]
}
},

{
    nombre:"neptuno", 
    temperaturaGC:  -182,
    gravedad: 11.15,
    zonahabitable: false,
    
tipo:{
    
    Categoria: "planeta",
    estado: "gaseoso" 
},

descripcion:{

    dia: 0.67,
    campomagnetico: true, 
    dis_ua:  30.06, 
    edadMA: 4503, 
    nSatelites: 14, 
    satelites: ["Triton" , "Nereida", "Talasa", "Proteo", "Despina", "Neso", "Galatea", "Halimede", "Laomedeia","Larisa", "Sao" ]
},
    
componentesQuimicos:{
    
    atmosfera:[ "h", "he" ],
    superficie: ["ch4", "nh3", "c2h6"] 
}
},      
{
                nombre:"pluton",
        
tipo:{
        
                Categoria: "planeta enano", 
                estado: "rocoso"
},
        
descripcion:{
        
                dia: 6.00, 
                campomagnetico: false  , 
                dis_ua:  39.48 , 
                edadMA: 4460 , 
                nSatelites: 1,
                satelites: ["caronte"]
},
        
componentesQuimicos:{
        
                atmosfera: ["n", "ch4 "],
                superficie: ["h2o", "ch4"]
},
                temperaturaGC:  -223 ,
                gravedad: 0.6 ,
                zonahabitable: false
        
             
},
        
{
                nombre:"ceres",
        
tipo:{
        
                Categoria:"planeta enano",  
                estado: "rocoso"
},
        
descripcion:{
        
                dia: 0.9, 
                campomagnetico: false  , 
                dis_ua:  2.8 , 
                edadMA: 4460 , 
                nSatelites: 0, 
                satelites: ["ninguno"]
},
        
componentesQuimicos:{
        
                atmosfera: ["no"],
                superficie: ["h2o", "co32"]
},
                temperaturaGC: -38 ,
                gravedad: 0.27 ,
                zonahabitable: true 
        
}])


db.sondas.deleteMany({})
db.sondas.insertMany([
{
        nombre:"Voyager 2",
        Categoria: "sonda espacial", 
        agencia: "NASA", 
        lanzamiento: new Date("1977-08-20"), 
        destino: ["Urano", "Neptuno"]  , 
        dis_ua:  95 , 
        estadoActivo: false
        
},
{
        nombre:"Voyager 1",
        Categoria:"sonda espacial", 
        agencia: "NASA", 
        lanzamiento: new Date("<1977-09-0512:56:00 >"), 
        destino: ["Urano", "Neptuno"]  , 
        dis_ua:  95 , 
        estadoActivo: true
       
}])
