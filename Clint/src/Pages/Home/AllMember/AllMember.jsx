import React from "react";
import Loader from "../../../Components/ErrorPage/Loader/Loader";

const AllMember = ({ users, loading }) => {
  const userData = users;

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

      {/* User Card */}

      {loading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 px-2 lg:px-0">
            {userData?.map((user, index) => (
              <div key={index} className="card w-full bg-base-100 shadow-xl">
                <figure>
                  <img
                    className="h-16 w-16 mt-3 rounded-full border"
                    src={user?.avatar}
                    alt="Shoes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Name: {user?.first_name} {user?.last_name}{" "}
                  </h2>
                  <p className="text-xs ">
                    <span className="font-semibold">Email:</span> {user?.email}
                  </p>
                  <p className="text-xs ">
                    {" "}
                    <span className="font-semibold">Gender:</span>{" "}
                    {user?.gender}
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold">Domain:</span>{" "}
                    {user?.domain}
                  </p>
                  <p className="text-xs ">
                    <span className="font-semibold">Available:</span>{" "}
                    {user?.available ? "Available" : "Unavailable"}
                  </p>

                  <div className="btnAdd">
                    {user?.available ? (
                      <p className="bg-[#26a69a] text-center text-white mt-3 py-2 cursor-pointer hover:bg-green-500">
                        Add Group
                      </p>
                    ) : (
                      <p className="bg-red-500 text-center text-white mt-3 py-2 cursor-not-allowed ">
                        Unavailable
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllMember;
