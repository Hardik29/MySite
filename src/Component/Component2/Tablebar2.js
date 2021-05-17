import React, { useState } from "react";
import Subheader2 from "./Subheader2";

function Tablebar2(props) {
  const [state, setstate] = useState(true)
  return (
    <div>
      <Subheader2 clickhandle={props.clickhandle} />
      <div className="ml-64 mr-6 mt-8">
        <table class="table-fixed text-left mr-2">
          <thead>
            <tr className="bg-gray-200 text-base shadow-md">
              <th className="w-2/5 p-3 pl-11">Deparment/Role Name</th>
              <th className="w-1/5 p-1 pl-5">Acess Level</th>
              <th className="w-1/5 p-1 text-center">Summary</th>
              <th className="w-1/5 p-1 text-center">last Updated</th>
              <th className="w-1/5 p-1"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-sm font-thin shadow-md">
              <td className=" p-3 pl-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Budget
              </td>
              <td>
                <div className="bg-green-100 text-green-500 border-green-500 border-2 rounded-full h-6 w-32 text-center ">
                  All Acess
                </div>
              </td>
              <td className="text-center">View|Create|Edit|Delete</td>
              <td className="text-center">1 min ago</td>
              <td className="pr-4">
                <div className="rounded-full bg-green-500 border-2 h-4 w-8 "><div className="rounded-full bg-white h-3 w-3 ml-4"></div></div>
              </td>
            </tr>
            <tr className="text-sm font-thin shadow-md">
              <td className={`p-3 pl-3  ${state ? " " : "h-60"} flex items-center justify-items-end`}>
                {state ? <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  onClick={() => setstate(!state)}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 m-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setstate(!state)}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>}
                Bidding
              </td>
              <td>
                <div className={`bg-gary-100  ${state ? "visible" : "invisible"}  text-gray-200 border-gray-200 border-2 rounded-full h-6 w-32 text-center `}>
                  No Acess
                </div>
              </td>
              <td className="text-center">-</td>
              <td className="text-center">1 min ago</td>
              <td className="pr-4">
                <div className="rounded-full bg-gray-200 border-2 h-4 w-8"><div className="rounded-full bg-white h-3 w-3"></div></div>
              </td>
            </tr>
            <tr className="text-sm font-thin shadow-md">
              <td className=" p-3 pl-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Vendor Petrol
              </td>
              <td>
                <div className="bg-red-100 text-red-500 border-red-500 border-2 rounded-full h-6 w-32 text-center ">
                  restricted Acess
                </div>
              </td>
              <td className="text-center">View|Create</td>
              <td className="text-center">1 min ago</td>
              <td className="pr-4">
                <div className="rounded-full bg-green-500 border-2 h-4 w-8 "><div className="rounded-full bg-white h-3 w-3 ml-4"></div></div>
              </td>
            </tr>
            <tr className="text-sm font-thin shadow-md">
              <td className=" p-3 pl-3 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 m-2 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Purchase order/Work order
              </td>
              <td>
                <div className="bg-red-100 text-red-500 border-red-500 border-2 rounded-full h-6 w-32 text-center ">
                  restricted Acess
                </div>
              </td>
              <td className="text-center">View|Create</td>
              <td className="text-center">1 min ago</td>
              <td className="pr-4">
                <div className="rounded-full bg-green-500 border-2 h-4 w-8 "><div className="rounded-full bg-white h-3 w-3 ml-4"></div></div>
              </td>
            </tr>
          </tbody>
        </table>
        {!state ? <div className="absolute -mt-52 ml-10 text-sm">All Acpect in biding process
        <div className="ml-10">Acess Control
        <div>
              <input
                type="radio"
                value="All Acess"
              />
          All Acess
          </div>
            <div>
              <input
                type="radio"
                value="All Acesss"
              />
          Restricted Acess
          </div>
          </div>
          <div></div>
          </div> 
        : " "}
      </div>

    </div>
  );
}

export default Tablebar2;
