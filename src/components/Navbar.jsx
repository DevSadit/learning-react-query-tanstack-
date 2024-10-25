import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Link to={"/"} className="font-bold text-xl">Learning Tenstack Query</Link>
      </div>
      <div>
        <ul className="flex justify-between items-center gap-8">
          <Link to={`/get-data`}>get Data</Link>
          <li>post Data</li>
          <li>update Data</li>
          <li>delete Data</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
