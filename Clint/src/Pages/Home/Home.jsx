import React from "react";
import AllMember from "./AllMember/AllMember";
import ChartInfo from "./ChartInfo/ChartInfo";

const Home = () => {
  return (
    <div className="flex">
      <div className="chart lg:w-[25%] w-full bg-white">
        <ChartInfo />
      </div>
      <div className="member hidden lg:block w-full lg:w-[75%] h-screen bg-[#DDDDDD] px-2 lg:px-6 py-5">
        <AllMember />
      </div>
    </div>
  );
};

export default Home;
