import { app } from "./app";
import { Signale } from "signale";

export default class Server {
    private app;
    private log;

    private ApplicationPort = process.env.PORT;

    constructor() {
        this.app = app;
        this.log = new Signale();
    }

    async star() {
        try {
            this.app.listen(this.ApplicationPort, () => this.log.scope('Server').success('Sistema Iniciado Com Sucesso.'));
        } catch (error) {
            this.log.scope('Server').fatal("Não Foi Possivel Iniciar o Servidor.")
        }
    }
}