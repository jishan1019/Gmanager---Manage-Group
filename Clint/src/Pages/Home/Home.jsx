import React from "react";
import AllMember from "./AllMember/AllMember";
import ChartInfo from "./ChartInfo/ChartInfo";

const Home = () => {
  return (
    <div className="flex">
      <div className="chart lg:w-[25%] w-full bg-slate-200">
        <ChartInfo />
      </div>
      <div className="member hidden lg:block w-[75%] bg-slate-300">
        <AllMember />
      </div>
    </div>
  );
};

export default Home;
