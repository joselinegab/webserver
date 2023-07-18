const http = require('http');

//TODO - Req= lo que está solicitando al webserver y Res= lo que responde el webserver al cliente
http.createServer((req,res)=>{
    // console.log(req);
    
    // res.writeHead(200, {'Content-Type':'application/json'})
    // res.setHeader('Content-Disposition','attachment; filename=lista.csv');
    // res.writeHead(200, {'Content-Type':'application/csv'}); //Archivo delimitado por comas

    // res.write('id, nombre\n');
    // res.write('1, Tommy\n');
    // res.write('2, Joshy\n');
    // res.write('3, Yosho\n');
    // res.write('4, Silver\n');

    // res.write('404 | Page not found');

    // const persona ={
    //     id:1,
    //     nombre:'Joshy'
    // }

    //NOTE - Serializar el objeto para que se pueda mostrar en el archivo de texto
    // res.write(JSON.stringify(persona));
    res.write('Hola mundo xd');
    res.end();
})
.listen(8080);

console.log('Escuchando el puerto',8080);