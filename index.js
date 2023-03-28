// 1. Crear un objeto express que exprese la biblioteca express
const express=require('express');

// 2. Crear un objeto que represente nuestra aplicación
const app= express();
app.use(express.json());

//Definir los puntos de (entrypoint)entrada(URL) en donde va a responder la Api
//http://localhost:3000   =====> http://localhost:3000/sumar ruta de la Api
app.get(
    '/sumar',
    //Se requiere dos objetos: uno representando la petición y el otro la respusta en la función de callback
    (req,res)=>{
        //Procesamiento de la petición
        console.log("Alguein está en la ruta sumar");
        res.json(req.body);
    }
);

app.post(
    '/restar',
    (req,res)=>{

        const {numero_uno, numero_dos}=req.body;
        /*const uno=req.body.numero_uno;
        const dos=req.body.numero_dos;*/
        const resultado= numero_uno-numero_dos;
        res.json(resultado);
    }
);

//¿cómo queda la ruta para dividir?

app.post(
    '/divir',
    (req,res)=>{
        let resultado;
        try{
            const {numero_uno, numero_dos}=req.body;
            resultado= numero_uno/numero_dos;
        }catch(error){
            //Gestionar el error
            resultado=error;
        }
        res.json(resultado);
    }
);

//"3". Crear un servicio para escuchar peticiones

app.listen(
    3000,
    ()=>{
        console.log("Servidor ejecutándose en el puerto 3000 con éxito")
    }
);







