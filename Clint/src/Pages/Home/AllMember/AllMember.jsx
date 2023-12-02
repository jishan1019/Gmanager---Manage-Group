import React from "react";

const AllMember = () => {
  return (
    <div>
      {/* Searchbar */}
      <div className="searchFilterContainer flex justify-between items-center gap-2">
        <div className="search flex items-center w-[75%] lg:w-[87%]">
          <input
            className="w-full py-[8.5px] px-4 border-black border"
            type="text"
            name=""
            id=""
            placeholder="Enter clints name"
          />

          <button className="bgPrimary text-white py-[9.5px] px-3">
            Search
          </button>
        </div>

        <select className="select select-info w-[30%] lg:w-[13%]">
          <option disabled selected>
            Filter
          </option>
          <option>Domain</option>
          <option>Gender</option>
          <option>Availability</option>
        </select>
      </div>
    </div>
  );
};

export default AllMember;
