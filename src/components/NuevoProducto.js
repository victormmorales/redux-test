import React, { useState } from "react";
import { crearNuevoProductoAction } from "../actions/productoAction";
import { useDispatch, useSelector } from "react-redux";

export default function NuevoProducto() {
  //state del componente
  const [nombre, guardarNombre] = useState("");
  const [precio, guardarPrecio] = useState(0);

  const dispatch = useDispatch();

  //manda llamar action de productoAction (la funcion que queremos utilizar en esta accion)
  const agregarProducto = (producto) => dispatch(crearNuevoProductoAction());

  //usuario hace submit

  const submitNuevoProducto = (e) => {
    e.preventDefault();

    //validar form
    if (nombre.trim() === "" || precio === 0) {
      return;
    }

    //si no hay errores

    //crear nuevo producto
    agregarProducto({
      nombre,
      precio,
    });
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>

            <form onSubmit={submitNuevoProducto}>
              <div className="form-group">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre del Producto"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => guardarNombre(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Precio</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio del Producto"
                  name="precio"
                  value={precio}
                  onChange={(e) => guardarPrecio(Number(e.target.value))}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
