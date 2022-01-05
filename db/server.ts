//TODO: se crea la carpeta contenedora de los archivos de la base de datos
//TODO: se crea la clase del servidor y se debe de crear el constructor
import express, {Application} from 'express';
import userRouter from '../routes/catalogopais_routes';

class Server {
 
    private app: Application;
    private port: string;
    //TODO configuracion del endpoint del api
    private apiPaths={
        catalogopais: '/api/catalogopais'
    }

    constructor() {
        this.app = express();
        //TODO || es el operador or
        this.port = process.env.PORT || '3000';

        //TODO: definir mis rutas
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.catalogopais, userRouter);
    }
//TODO: metodo para escuchar el puerto
    listen(){
        this.app.listen(this.port, () => {
            console.log('Server on port', this.port);
        });
    }
}

export default Server;