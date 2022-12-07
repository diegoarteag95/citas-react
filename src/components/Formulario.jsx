import { useState, useEffect } from "react";
import Alerta from "./Alerta";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  //** Declarar useStat */
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombrePropietario, setNombrePropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fechaAlta, setFechaAlta] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [error, setError] = useState(false);
  //** Declarar useStat */

  //** useEffect */
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setNombrePropietario(paciente.nombrePropietario);
      setEmail(paciente.email);
      setFechaAlta(paciente.fechaAlta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);
  //** useEffect */

  //** Funcion generar ID */
  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);
    return random + fecha;
  };
  //** Funcion generar ID */

  const handleSubmit = (e) => {
    e.preventDefault();
    //** Validacion del formulario */
    if (
      [nombreMascota, nombrePropietario, email, fechaAlta, sintomas].includes(
        ""
      )
    ) {
      setError(true);
      return;
    }
    setError(false);

    //** Validacion del formulario */

    //* establecer arreglo de pacientes */
    const objetoPaciente = {
      nombreMascota,
      nombrePropietario,
      email,
      fechaAlta,
      sintomas,
    };

    if (paciente.id) {
      //?Editando registro -----------------------------------------------------------------------------------
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );
      setPacientes(pacientesActualizados);
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]); //? Nuevo registro ---------------------------------------
    }
    //* establecer arreglo de pacientes */

    //** Reiniciar formulario */
    setNombreMascota("");
    setNombrePropietario("");
    setEmail("");
    setFechaAlta("");
    setSintomas("");
    //** Reiniciar formulario */

    setPaciente({});
  };

  return (
    <div className="md:w-1/2 lg:w:2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-4 text-center mb-5">
        Añade Pacientes y{" "}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-9 px-5 mx-5 mb-10"
      >
        {error && <Alerta mensaje="Todos los campos son obligatorios" />}
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase	"
          >
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="text"
            placeholder="Nombre de la Mascota"
            value={nombreMascota} //establece el valor del input al valor de useState
            onChange={(e) => setNombreMascota(e.target.value)} //guarda lo que se escriba en el imput en useState
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase	"
          >
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="text"
            placeholder="Nombre del Propietario"
            value={nombrePropietario}
            onChange={(e) => setNombrePropietario(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase	">
            Email
          </label>
          <input
            id="email"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="email"
            placeholder="Email Contacto Propietario"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="alta" className="block text-gray-700 uppercase	">
            Fecha Alta
          </label>
          <input
            id="alta"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            type="date"
            value={fechaAlta}
            onChange={(e) => setFechaAlta(e.target.value)}
          />
        </div>

        <div className="mb-5">
          <label htmlFor="sintomas" className="block text-gray-700 uppercase	">
            Síntomas
          </label>
          <textarea
            id="sintomas"
            className="border-2 w-full p-2 mt-2 rounded-md placeholder-gray-400"
            placeholder="Describe los Síntomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors "
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
