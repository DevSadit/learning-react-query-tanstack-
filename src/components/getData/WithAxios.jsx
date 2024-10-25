import { useEffect, useState } from "react";
import { getUsers } from "../../Api/Api";

const WithAxios = () => {
  const [users, setUsers] = useState([]);

  const getUserData = async () => {
    try {
      const res = await getUsers();
      res.status === 200 ? setUsers(res.data) : [];
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(users);

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Getting the data through Axios
      </h1>
      {users?.map((user, idx) => (
        <div className="border-4 p-5 my-9" key={idx}>
          <h2>{user.name}</h2>
          <h2>{user.email}</h2>
          <h2>{user.website}</h2>
        </div>
      ))}
    </div>
  );
};

export default WithAxios;
