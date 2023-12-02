import React, { useEffect, useState } from "react";
import AllMember from "./AllMember/AllMember";
import ChartInfo from "./ChartInfo/ChartInfo";

const Home = () => {
  const [users, setUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/user");
        const data = await response.json();
        setLoading(false);
        setUser(data.slice(0, 10));
      } catch (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(users);

  return (
    <div className="flex">
      <div className="chart  lg:w-[25%] w-full bg-white">
        <ChartInfo />
      </div>
      <div className="member hidden lg:block w-full lg:w-[75%] min-h-screen  bg-[#DDDDDD] px-2 lg:px-6 py-5">
        <AllMember users={users} loading={loading} />
      </div>
    </div>
  );
};

export default Home;
