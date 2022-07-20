import axios from "axios";

const PRODUCTO_API_BASE_URL = "http://localhost:8080/api/productos";

class ProductoService {
  saveProducto(producto) {
    return axios.post(PRODUCTO_API_BASE_URL, producto);
  }
}

export default new ProductoService();
