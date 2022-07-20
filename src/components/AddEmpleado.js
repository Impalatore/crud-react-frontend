import React, { useState } from "react";
import EmpleadoService from "../services/EmpleadoService";

const AddEmpleado = () => {
  const [empleado, setEmpleado] = useState({
    id: "",
    nombres: "",
    apellidos: "",
    email: "",
    contraseña: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmpleado({ ...empleado, [e.target.name]: value });
  };

  const saveEmpleado = (e) => {
    e.preventDefault();
    EmpleadoService.saveEmpleado(empleado)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const limpiar = (e) => {
    e.preventDefault();
    setEmpleado({
      id: "",
      nombres: "",
      apellidos: "",
      email: "",
      contraseña: "",
    });
  };

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="text-2xl tracking-wide">
          <h1>Agregar Nuevo Empleado</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Nombres
          </label>
          <input
            type="text"
            name="nombres"
            value={empleado.nombres}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Apellidos
          </label>
          <input
            type="text"
            name="apellidos"
            value={empleado.apellidos}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={empleado.email}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Contraseña
          </label>
          <input
            type="password"
            name="contraseña"
            value={empleado.contraseña}
            onChange={(e) => handleChange(e)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            onClick={saveEmpleado}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6"
          >
            Guardar
          </button>
          <button
            onClick={limpiar}
            className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddEmpleado;
