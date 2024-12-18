import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function NotFound() {
  usePageTitle("Página no Encontrada");
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <h1 className="text-6xl font-bold text-primary-dark mb-4">404</h1>
      <p className="text-2xl text-gray-600 mb-8">Página no encontrada</p>
      <p className="text-lg text-gray-500 mb-8">
        Lo sentimos, la página que estás buscando no existe.
      </p>
      <Link
        to="/"
        className="bg-secondary text-white px-4 py-2 rounded-none border border-primary-dark font-semibold hover:bg-secondary-dark transition duration-300"
      >
        Volver al Inicio
      </Link>
    </div>
  );
}

export default NotFound;
