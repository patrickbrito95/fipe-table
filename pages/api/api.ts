import axios from "axios";

const baseURL = "https://parallelum.com.br/fipe/api/v1/carros/";

const api = axios.create({ baseURL });

export default api;