import axios from "axios";

const EMPLEADO_API_BASE_URL = "http://localhost:8080/api/empleados";

class EmpleadoService {
  saveEmpleado(empleado) {
    return axios.post(EMPLEADO_API_BASE_URL, empleado);
  }
}

export default new EmpleadoService();
