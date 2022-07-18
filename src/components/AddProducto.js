import React from 'react'

function AddProducto() {
    return (
        <div className="flex max-w-2xl shadow border-b mx-auto">
            <div className="px-8 py-8">
                <div className="text-2xl tracking-wide">
                    <h1>Add New Product</h1>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600" text-sm font-normal>Product Name</label>
                    <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900">Select an option</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                        <option selected>Choose a country</option>
                        <option value="Graphics Cards">Graphics Cards</option>
                        <option value="Processors">Processors</option>
                        <option value="Monitors">Monitors</option>
                    </select>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600" text-sm font-normal>Stock</label>
                    <input type="email" className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4">
                    <label className="block text-gray-600" text-sm font-normal>Price</label>
                    <input type="text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
                </div>
                <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                    <button className="rounded text-white font-semibold bg-green-500 hover:bg-green-700 py-2 px-6">Save</button>
                    <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-700 py-2 px-6">Clear</button>
                </div>
            </div>
        </div>
    )
}

export default AddProducto;