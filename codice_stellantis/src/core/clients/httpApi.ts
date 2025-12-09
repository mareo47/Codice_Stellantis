//Client per le chiamate HTTP, utilizzo la libreria axios per eseguire le chiamate.

import axios from 'axios';
const client = axios.create({ baseURL: import.meta.env.BACKEND_URL }); //passo la variabile d'ambiente del backend al client'

export default client;
