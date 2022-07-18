import React from "react";

function AddEmpleado() {
  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="text-2xl tracking-wide">
          <h1>Agregar Nuevo Empleado</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>Nombres</label>
          <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>Apellidos</label>
          <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>Email</label>
          <input type="email" className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>Contraseña</label>
          <input type="password" className="h-10 w-96 border mt-2 px-2 py-2"></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6">Guardar</button>
            <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6">Limpiar</button>
        </div>
      </div>
    </div>
  );
}

export default AddEmpleado;
