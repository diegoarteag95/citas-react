const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {
  const { nombreMascota, nombrePropietario, email, fechaAlta, sintomas, id } =
    paciente;

  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar el paciente?");
    if (respuesta) {
      eliminarPaciente(id);
    }
  };

  return (
    <div className="mt-3 bg-white shadow-md px-5 py-10 rounded-xl mx-5 ">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Mascota:{" "}
        <span className="font-normal normal-case">{nombreMascota}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre Propietario:{" "}
        <span className="font-normal normal-case">{nombrePropietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: <span className="font-normal normal-case">{fechaAlta}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas: <span className="font-normal normal-case">{sintomas}</span>
      </p>

      <div className="flex justify-between mt-5">
        <button
          type="button"
          onClick={() => setPaciente(paciente)}
          className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
        >
          Editar
        </button>
        <button
          type="button"
          className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;
