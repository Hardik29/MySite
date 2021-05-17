import React from "react";

function Subheader2(props) {
  return (
    <div className="flex items-center ml-64 mr-6 mt-10">
     <div onClick={props.clickhandle} className=" cursor-pointer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 mr-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10 19l-7-7m0 0l7-7m-7 7h18"
        />
      </svg>
      </div>
      <span className="">  Manegment Team</span>
      <div className="ml-6 space-x-2 flex items-center text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      </div>
      <div className=" flex items-center space-x-4 mt-20 -ml-44">
                <div className="flex items-center border-mysite-boldblue text-mysite-boldblue border-b-4 rounded-sm">
                    <span className="mr-1 text-xs">Permision</span>
                </div>
                <span className="bg-gray-200 text-gray-200 text-sm">|</span>
                <div className="flex items-center ">
                    <span className="mr-1 text-xs">Approval Marix</span>
                </div>
            </div>
    </div>
  );
}

export default Subheader2;
