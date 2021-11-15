
/* La NASA quiere comprobar que la base de datos esta actualizada y pluton se encuentra
 en la categoria de planeta enano
*/
db.cuerpos.find({nombre: "pluton" }).pretty()

                  

/* Se quiere enviar un rover a los planetas que cumplan con las siguientes caracteristicas:
que el planeta sea rocoso, que contenga agua(h20) en la superficie para analizarla y que la gravedad sea igual o menor a la gravedad terrestre(9.807) ya que su tecnologia 
no esta preparada para resistir una gravedad mayor*/
db.cuerpos.find({$and:[
    {$or:[ 
      {"tipo.estado":"rocoso"},
      {"componentesQuimicos.superficie":"h20"},
    ]},
    {gravedad:{$lte:9.807}}
]}).pretty()


/* Muestra la sonda de la NASA que este inactiva*/
db.sondas.find( { $and: [ { agencia:"NASA"  }, { estadoActivo: false } ] } )


/* Cuenta los cuerpos que no tienen el campo "zonahabitable" */
db.cuerpos.find( 
  { zonahabitable: { $exists: true
  }, 
    zonahabitable:1 
  }
  ).count()


/* Se quiere hacer un recuento de los planetas almacenados en la base de datos, excluyendo a la tierra*/
db.cuerpos.find( { nombre: { $exists: true, $ne: "tierra"}}).count()



/* Muestra aquellos planetas en los que la temperatura media sea mayor que -50 y menor que 25*/
db.cuerpos.find({ temperaturaGC: {$gte:-50, $lte:25} }).pretty()
/* *esto es un $and aplicado al mismo campo*/



/* Actualizar la llegada de las dos sondas a urano y neptuno*/   
db.sondas.update(
  { nombre: "voyager 1" },
  {
    $set: { llegada: "urano" },
    $setOnInsert: { dateAdded: new Date("1979-03-05") }
  },
  { upsert: true }
)

db.sondas.update(
  { nombre: "voyager 2" },
  {
    $set: { llegada: "neptuno" },
    $setOnInsert: { dateAdded: new Date("1980-11-12") }
  },
  { upsert: true }
)



/* Muestra los datos del planeta al que pertenece el satelite Fobos*/
db.cuerpos.find( { "descripcion.satelites": { $regex: /Fobos/ } } ).pretty()

/*Crea un indexado de la temperatura del sol*/
db.estrella.createIndex(
  {
    temperaturasuperficieºC: 6000,
    temperaturanucleoºC: 15000000
  }
)

/* Se quiere enviar a un grupo de astronautas a otro planeta o planeta enano para ello el planeta debe de ser rocoso, con una gravedad igual o menor que la terrestre
con agua en la superficie y co2 en la atmosfera ya que a partir de estos compuestos podemos generar oxigeno. Y por supuesto con una temperatura de entre -50 y 20 grados
y que se encuentre en la zona habitable*/


