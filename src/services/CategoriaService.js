import axios from "axios";

const CATEGORIA_BASE_URL = "http://localhost:8080/api/categorias";

class CategoriaService {
  saveCategoria(categoria) {
    return axios.post(CATEGORIA_BASE_URL, categoria);
  }
}

export default new CategoriaService;