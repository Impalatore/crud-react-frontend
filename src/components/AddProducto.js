import React, { useState } from "react";
import ProductoService from "../services/ProductoService";

const AddProducto = () => {
  const [producto, setProducto] = useState({
    id: "",
    nombre: "",
    precio: "",
    stock: "",
    estado: "",
  });

  const handleChange = (p) => {
    const value = p.target.value;
    setProducto({ ...producto, [p.target.name]: value });
  };

  const saveProducto = (p) => {
    p.preventDefault();
    ProductoService.saveProducto(producto)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const limpiar = (p) => {
    p.preventDefault();
    setProducto({
      id: "",
      nombre: "",
      categoria: "",
      precio: "",
      stock: "",
      estado: "",
    });
  };




  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
      <div className="px-8 py-8">
        <div className="text-2xl tracking-wide">
          <h1>Agregar Nuevo Producto</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Nombre del Producto
          </label>
          <input
            type="text"
            name="nombre"
            value={producto.nombre}
            onChange={(p) => handleChange(p)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label
            for="categoria"
            class="block mb-2 text-sm font-medium text-gray-900"
          >
            Categoría
          </label>
          <select
            name="categoria"
            value={producto.categoria}
            onChange={(p) => handleChange(p)}
            id="categoria"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Elige una categoria</option>
            <option value="Tarjetas Gráficas">Tarjetas Gráficas</option>
            <option value="Procesadores">Procesadores</option>
            <option value="Monitores">Monitorse</option>
          </select>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Stock
          </label>
          <input
            type="number"
            name="stock"
            value={producto.stock}
            onChange={(p) => handleChange(p)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600" text-sm font-normal>
            Precio
          </label>
          <input
            type="text"
            name="precio"
            value={producto.precio}
            onChange={(p) => handleChange(p)}
            className="h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button onClick={saveProducto} className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6">
            Guardar
          </button>
          <button onClick={limpiar} className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProducto;
