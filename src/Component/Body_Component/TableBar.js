import React from "react";
import Subheaderbar from './Subheaderbar'
function TableBar(props) {
    return (
        <div >
             <Subheaderbar/>
             <div className="ml-64 mr-6 mt-10">
            <table class="table-auto text-left mr-2">
                <thead>
                    <tr className="bg-gray-200 text-base shadow-md">
                        <th className="w-2/5 p-3 pl-11">Deparment/Role Name</th>
                        <th className="w-1/5 p-1 pl-5">Acess Level</th>
                        <th className="w-1/5 p-1 text-center">No. of members</th>
                        <th className="w-1/5 p-1 text-center">last Updated</th>
                        <th className="w-1/5 p-1" ></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="text-sm font-thin shadow-md cursor-pointer hover:shadow-lg" onClick={props.clickhandle} >
                        <td className=" p-3 pl-3 flex items-center"><span class="rounded-full h-4 w-4  border-2 border-gray-300 m-2"></span>Mangement Team</td>
                        <td><div className="bg-green-100 text-green-500  border-green-500 border-2 rounded-full h-6 w-32 text-center ">All Acess</div></td>
                        <td className="text-center">4</td>
                        <td className="text-center">1 min ago</td>
                        <td className="pr-4">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </td>
                    </tr>
                    <tr className="text-sm font-thin shadow-md">
                        <td className=" p-3 pl-3 flex items-center"><span class="rounded-full h-4 w-4  border-2 border-gray-300 m-2"></span>Procurrent Team</td>
                        <td><div className="bg-red-100 text-red-500 border-red-500 border-2 rounded-full h-6 w-32 text-center ">Restriected Acess</div></td>
                        <td className="text-center">8</td>
                        <td className="text-center">1 min ago</td>
                        <td className="pr-4">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </td>
                    </tr> 
                    <tr className="text-sm font-thin shadow-md">
                        <td className=" p-3 pl-3 flex items-center"><span class="rounded-full h-4 w-4  border-2 border-gray-300 m-2"></span>Project Team</td>
                        <td><div className="bg-red-100 text-red-500  border-red-500 border-2 rounded-full h-6 w-32 text-center ">Restriected Acess</div></td>
                        <td className="text-center">16</td>
                        <td className="text-center">1 min ago</td>
                        <td className="pr-4">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </td>
                    </tr> 
                    <tr className="text-sm font-thin shadow-md">
                        <td className=" p-3 pl-3 flex items-center"><span class="rounded-full h-4 w-4  border-2 border-gray-300 m-2"></span>IT Team</td>
                        <td><div className="bg-red-100 text-red-500 border-red-500 border-2 rounded-full h-6 w-32 text-center ">Restriected Acess</div></td>
                        <td className="text-center">4</td>
                        <td className="text-center">1 min ago</td>
                        <td className="pr-4">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </td>
                    </tr> 
                    <tr className="text-sm font-thin shadow-md cursor-pointer hover:shadow-lg">
                        <td className=" p-3 pl-3 flex items-center"><span class="rounded-full h-4 w-4  border-2 border-gray-300 m-2"></span>Super Admin</td>
                        <td><div className="bg-green-100 text-green-500 border-green-500 border-2 rounded-full h-6 w-32 text-center ">All Acess</div></td>
                        <td className="text-center">16</td>
                        <td className="text-center">1 min ago</td>
                        <td className="pr-4">
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
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        </td>
                    </tr> 
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default TableBar;
