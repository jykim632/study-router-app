import { NavLink } from "react-router";

export default function Home() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <h1 className="text-4xl font-bold">Welcome to Reservation</h1>
      <p className="mt-4 text-lg">
        This is the home page of the reservation system.
      </p>

      <div>
        <NavLink
          to="/design/dashboard"
          className="mt-4 inline-block rounded bg-blue-500 px-4 py-2 text-white"
        >
          Go to Dashboard
        </NavLink>
      </div>
    </div>
  );
}
