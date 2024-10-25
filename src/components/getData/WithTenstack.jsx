import { useQuery } from "@tanstack/react-query";
import { getUsers } from "../../Api/ApiTen";

const WithTenstack = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });


  if(isLoading) return <p className="text-5xl">Loading</p>
  if(error) return <p className="text-5xl">{error.message}</p>



  return (
    <div>
      <h1 className="font-bold text-3xl text-center">
        Getting the data With Axios & Tenstack
      </h1>
      {data?.map((usr, idx) => (
        <div className="border-4 p-5 my-9" key={idx}>
          <h2>{usr.name}</h2>
          <h2>{usr.email}</h2>
          <h2>{usr.website}</h2>
        </div>
      ))}
    </div>
  );
};

export default WithTenstack;
