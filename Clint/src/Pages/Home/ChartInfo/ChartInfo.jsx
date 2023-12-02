import React from "react";

const ChartInfo = () => {
  return (
    <div>
      {/* Titel */}
      <div>
        <h2 className="text-2xl font-semibold mx-4 my-6">Chart</h2>
      </div>

      {/* Group List */}
      <div className="groupList">
        {/* A;l member */}
        <div className="mx-3 p-3 shadow border-b hover:bg-slate-50 flex items-center space-x-3">
          <img
            className="h-10 w-10 border-2 rounded-full "
            src="https://cdn3.iconfinder.com/data/icons/business-avatar/179/Untitled-2-512.png"
            alt=""
          />
          <div className="groupTitel">
            <h3 className="font-semibold text-lg">All Member</h3>
            <p className="text-xs">Create new group here.</p>
          </div>

          <div></div>
        </div>

        <h4 className="font-semibold mx-4 mt-6">All Groups</h4>

        {/* new group */}
        <div className="singleGroupContainer mt-2">
          <div className="mx-3 p-3 shadow border-b hover:bg-slate-50 flex items-center space-x-3">
            <img
              className="h-9 w-10 border-2 rounded-full "
              src="https://i.ibb.co/P6fMqdK/images.jpg"
              alt=""
            />
            <div className="groupTitel">
              <h3 className="font-semibold text-lg">Team Hr Group</h3>
              <p className="text-xs">View more details.</p>
            </div>

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartInfo;
