import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 px-4 text-center">
      <h1 className="text-7xl font-bold text-[#00796B] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="bg-[#00796B] hover:bg-[#17554d] text-white px-6 py-3 rounded-md transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
