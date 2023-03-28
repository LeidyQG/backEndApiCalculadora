//1. Crear un objeto express
const express=require('express');

//2. Crear un objeto que represente nuestra aplicación
const app= express();

app.use(express.json());

//Definir los entry point de la API
//Definir la ruta (la url) en dónde va a responder nuestra API
// http://localhost:3000 =====> http://localhost:3000/api/sumar


app.get(
    '/api/sumar',
    //Se requieren dos objetos: uno representando la petición
    //un objeto representando la respuesta
    (req, res)=>{
        console.log("Alguien está conectándose a la ruta sumar");        
        res.json(req.body);
    }
);

app.post(
    '/api/restar',
    (req, res)=>{
        const {numero_1, numero_2}= req.body;
        const resultado=numero_1-numero_2;        
        res.json(resultado);
    }
);

//¿Cómo queda la ruta para dividir?

app.post(
    '/api/dividir',
    (req,res)=>{
        let resultado;
        
        try{
            const {numero_1, numero_2}= req.body;           
            resultado=numero_1/numero_2;   

        }catch(error){
            //Gestionar el error
            resultado=error;
        }
        
        res.json(resultado);
    }
)



//3. Crear un servicio para escuchar peticiones
app.listen(
    3001,
    ()=>{
      console.log("Servidor ejecutándose en el puerto 3001 con éxito");
    }
);