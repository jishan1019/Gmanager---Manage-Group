import React, { useEffect, useState } from "react";
import AllMember from "./AllMember/AllMember";
import ChartInfo from "./ChartInfo/ChartInfo";

const Home = () => {
  const [users, setUser] = useState([]);
  const [filterUsers, setFilterUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/user");
        const data = await response.json();
        setLoading(false);
        setUser(data);
        setFilterUser(users);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handelSearch = () => {
    if (clientName === "") {
      return setFilterUser(users);
    }

    const searchUserResult = users.filter(
      (name) =>
        name?.first_name === clientName ||
        name?.last_name === clientName ||
        `${name?.first_name} ${name?.last_name}` === clientName
    );
    setFilterUser(searchUserResult);
    console.log("input is", clientName, searchUserResult);
  };

  const userAction = {
    filterUsers,
    loading,
    setClientName,
    handelSearch,
  };

  console.log(users);

  return (
    <div className="flex">
      <div className="chart  lg:w-[25%] w-full bg-white">
        <ChartInfo />
      </div>
      <div className="member hidden lg:block w-full lg:w-[75%] min-h-screen  bg-[#DDDDDD] px-2 lg:px-6 py-5">
        <AllMember userAction={userAction} />
      </div>
    </div>
  );
};

export default Home;
