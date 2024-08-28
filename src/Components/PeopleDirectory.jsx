import React, { useState, useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import peopleData from "./data";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit2 } from "react-icons/fi";
import { CiFilter } from "react-icons/ci";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import FilterPopup from "./FilterPopup";
import AddMemberForm from "./AddMemberForm ";
import DeletePopup from "./DeletePopup";
function PeopleDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [sorting, setSorting] = useState([]);
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    roles: [],
    teams: [],
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    isOpen: false,
    person: null,
  });
  const [isAddMemberFormOpen, setIsAddMemberFormOpen] = useState(false);
  const columns = useMemo(
    () => [
      {
        header: "Name",
        accessorFn: (row) => row.name,
        cell: (info) => (
          <div className="flex items-center">
            <img
              className="h-10 w-10 rounded-full mr-3"
              src={`https://i.pravatar.cc/40?u=${info.row.original.id}`}
              alt=""
            />
            <div>
              <div className="font-medium text-gray-900">{info.getValue()}</div>
              <div className="text-gray-500">@{info.row.original.username}</div>
            </div>
          </div>
        ),
        enableSorting: true,
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => (
          <span className="inline-flex border-2 items-center rounded-lg px-2 py-1 text-xs font-medium text-gray-600">
            <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
            {info.getValue()}
          </span>
        ),
        enableSorting: true,
      },
      {
        header: "Role",
        accessorKey: "role",
      },
      {
        header: "Email address",
        accessorKey: "email",
      },
      {
        header: "Teams",
        accessorKey: "teams",
        cell: (info) => {
          const teams = info.getValue();
          const displayLimit = 3;
          const remainingCount = teams.length - displayLimit;

          return (
            <div className="flex flex-wrap items-center gap-1">
              {teams.slice(0, displayLimit).map((team, index) => {
                let bgColor, textColor, borderColor;
                switch (team.toLowerCase()) {
                  case "design":
                    bgColor = "bg-purple-100";
                    textColor = "text-purple-700";
                    borderColor = "border-purple-200";
                    break;
                  case "product":
                    bgColor = "bg-blue-100";
                    textColor = "text-blue-700";
                    borderColor = "border-blue-200";
                    break;
                  case "marketing":
                    bgColor = "bg-green-100";
                    textColor = "text-green-700";
                    borderColor = "border-green-200";
                    break;
                  default:
                    bgColor = "bg-gray-100";
                    textColor = "text-gray-700";
                    borderColor = "border-gray-200";
                }

                return (
                  <span
                    key={index}
                    className={`px-2.5 py-0.5 rounded-full border ${bgColor} ${textColor} ${borderColor} text-xs font-medium`}
                  >
                    {team}
                  </span>
                );
              })}
              {remainingCount > 0 && (
                <span className="text-xs font-medium border-2 rounded-xl px-2 py-0.5 bg-slate-100">
                  +{remainingCount}
                </span>
              )}
            </div>
          );
        },
      },
    ],
    []
  );

  const table = useReactTable({
    data: peopleData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      globalFilter: searchTerm,
      sorting,
    },
    onGlobalFilterChange: setSearchTerm,
    onSortingChange: setSorting,
  });

  const handleRowClick = (person) => {
    setSelectedPerson(person);
  };

  const closeSidePanel = () => {
    setSelectedPerson(null);
  };
  const handleAddMember = (data) => {
    console.log("New member data:", data);

    setIsAddMemberFormOpen(false);
  };
  const handleDeleteClick = (e, person) => {
    e.stopPropagation();
    setDeleteConfirmation({ isOpen: true, person });
  };

  const handleDeleteConfirm = () => {
    if (deleteConfirmation.person) {
      // Implement actual delete logic here
      console.log("Deleting:", deleteConfirmation.person);
    }
    setDeleteConfirmation({ isOpen: false, person: null });
  };

  return (
    <div className="relative p-6 bg-white border-2 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">
          Team members{" "}
          <span className="bg-slate-50 text-[1rem] font-medium border-2 rounded-3xl text-[#8763dd] px-3">
            100 users
          </span>
        </h2>
        <div className="flex items-center space-x-2">
          <div className="flex items-center border p-2 border-b-black rounded w-[20rem]">
            <input
              type="text"
              placeholder="Search"
              className="flex-grow outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IoMdSearch className="text-2xl text-gray-500" />
          </div>

          <div className="relative">
            <CiFilter
              className="text-3xl text-gray-600 cursor-pointer"
              onClick={() => setIsFilterPopupOpen(!isFilterPopupOpen)}
            />
            {isFilterPopupOpen && (
              <FilterPopup
                onClose={() => setIsFilterPopupOpen(false)}
                onApplyFilters={(filters) => {
                  setSelectedFilters(filters);
                  setIsFilterPopupOpen(false);
                }}
              />
            )}
          </div>
          <button
            className="bg-[#6941c6] text-[0.9rem] text-white font-bold px-4 py-2 rounded"
            onClick={() => setIsAddMemberFormOpen(true)}
          >
            + ADD MEMBER
          </button>
        </div>

        {isAddMemberFormOpen && (
          <AddMemberForm
            onClose={() => setIsAddMemberFormOpen(false)}
            onSubmit={handleAddMember}
          />
        )}
      </div>
      <table className="w-full bg-white  overflow-hidden">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center justify-between cursor-pointer">
                    <span>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </span>
                    {index < 2 && header.column.getCanSort() && (
                      <span className="ml-2">
                        {header.column.getIsSorted() === "asc" ? (
                          <IoIosArrowUp className="text-blue-600 text-[0.9rem]" />
                        ) : header.column.getIsSorted() === "desc" ? (
                          <IoIosArrowDown className="text-blue-600 text-[0.9rem]" />
                        ) : (
                          <div className="flex flex-col">
                            <IoIosArrowUp className="text-gray-400 text-[0.9rem]" />
                            <IoIosArrowDown className="text-gray-400 text-[0.9rem]" />
                          </div>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="relative"
              onClick={() => handleRowClick(row.original)}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-6 py-4 whitespace-nowrap cursor-pointer" >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
              <td className="px-6 py-4 whitespace-nowrap text-right">
                <div className="flex items-center justify-end">
                  <button
                    className="text-[1.25rem] text-gray-500  mr-4 hover:text-gray-700"
                    onClick={(e) => handleDeleteClick(e, row.original)}
                  >
                    <MdDeleteOutline />
                  </button>
                  <button
                    className="text-[1.25rem] text-gray-500  hover:text-gray-700"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleEdit(row.original);
                    }}
                  >
                    <FiEdit2 />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
        <DeletePopup
          isOpen={deleteConfirmation.isOpen}
          onClose={() => setDeleteConfirmation({ isOpen: false, person: null })}
          onConfirm={handleDeleteConfirm}
        />
      </table>
      <div className="mt-4 flex justify-between">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 border rounded"
        >
          Previous
        </button>
        <div className="flex space-x-2">
          {table.getPageOptions().map((page, index) => (
            <button
              key={index}
              onClick={() => table.setPageIndex(page)}
              className={`px-3 py-1 border rounded ${
                table.getState().pagination.pageIndex === page
                  ? "bg-gray-200"
                  : ""
              }`}
            >
              {page + 1}
            </button>
          ))}
        </div>
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 border rounded"
        >
          Next
        </button>
      </div>

      {selectedPerson && (
        <div className="fixed top-0 right-0 z-50 h-full bottom-0 w-[40rem] bg-white shadow-xl overflow-y-auto">
          <div className="bg-[#2a5b7e] text-white p-6 relative">
            <button
              onClick={closeSidePanel}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="flex items-center">
              <img
                className="h-20 w-20 rounded-full mr-4"
                src={`https://i.pravatar.cc/80?u=${selectedPerson.id}`}
                alt=""
              />
              <div>
                <h2 className="text-2xl font-bold">{selectedPerson.name}</h2>
                <p className="text-sm">@{selectedPerson.username}</p>
                <p className="text-sm">{selectedPerson.role}</p>
              </div>
            </div>
          </div>
          <div className="p-6">
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2 bg-gray-100 p-2">
                Personal Information
              </h3>
              <div className="grid grid-cols-2 gap-y-2">
                <p className="font-medium">Date of Birth</p>
                <p>{selectedPerson.dateOfBirth}</p>
                <p className="font-medium">Gender</p>
                <p>{selectedPerson.gender}</p>
                <p className="font-medium">Nationality</p>
                <p>{selectedPerson.nationality}</p>
                <p className="font-medium">Contact no.</p>
                <p>{selectedPerson.contactNo}</p>
                <p className="font-medium">E-mail Address</p>
                <p>{selectedPerson.personalEmail}</p>
                <p className="font-medium">Work email Address</p>
                <p>{selectedPerson.workEmail}</p>
              </div>
            </section>
            <section>
              <h3 className="text-lg font-semibold mb-2 bg-gray-100 p-2">
                Research & Publication
              </h3>
              {selectedPerson.publications.map((pub, index) => (
                <div key={index} className="mb-2">
                  <p className="font-medium">{pub.title}</p>
                  {pub.journal && (
                    <p className="text-sm text-gray-600">
                      Published in {pub.journal} • {pub.year}
                    </p>
                  )}
                  {pub.details && (
                    <p className="text-sm text-gray-600">{pub.details}</p>
                  )}
                </div>
              ))}
              <button className="text-red-600 hover:text-red-800 text-sm mt-2 uppercase font-semibold">
                See publication
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default PeopleDirectory;








// import React, { useState, useMemo, useEffect } from "react";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { MdDeleteOutline } from "react-icons/md";
// import { FiEdit2 } from "react-icons/fi";
// import { CiFilter } from "react-icons/ci";
// import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
// import { IoMdSearch } from "react-icons/io";
// import FilterPopup from "./FilterPopup";
// import AddMemberForm from "./AddMemberForm ";
// import DeletePopup from "./DeletePopup";
// function PeopleDirectory() {
//   const [peopleData, setPeopleData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
// console.log("peopleData :",peopleData)
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedPerson, setSelectedPerson] = useState(null);
//   const [sorting, setSorting] = useState([]);
//   const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
//   const [selectedFilters, setSelectedFilters] = useState({
//     roles: [],
//     teams: [],
//   });
//   const [deleteConfirmation, setDeleteConfirmation] = useState({
//     isOpen: false,
//     person: null,
//   });
//   const [isAddMemberFormOpen, setIsAddMemberFormOpen] = useState(false);

//   useEffect(() => {
//     fetchPeopleData();
//   }, []);

//   const fetchPeopleData = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/getdata");
//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }
//       const data = await response.json();
//       console.log("Data fetched:", data);
//       setPeopleData(data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//       setError(error.message);
//       setIsLoading(false);
//     }
//   };
//   const columns = useMemo(
//     () => [
//       {
//         header: "Name",
//         accessorFn: (row) => row.name,
//         cell: (info) => (
//           <div className="flex items-center">
//             <img
//               className="h-10 w-10 rounded-full mr-3"
//               src={`https://i.pravatar.cc/40?u=${info.row.original.id}`}
//               alt=""
//             />
//             <div>
//               <div className="font-medium text-gray-900">{info.getValue()}</div>
//               <div className="text-gray-500">@{info.row.original.username}</div>
//             </div>
//           </div>
//         ),
//         enableSorting: true,
//       },
//       {
//         header: "Status",
//         accessorKey: "status",
//         cell: (info) => (
//           <span className="inline-flex border-2 items-center rounded-lg px-2 py-1 text-xs font-medium text-gray-600">
//             <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></span>
//             {info.getValue()}
//           </span>
//         ),
//         enableSorting: true,
//       },
//       {
//         header: "Role",
//         accessorKey: "role",
//       },
//       {
//         header: "Email address",
//         accessorFn: (row) => row.workEmail || row.email,
//       },
//       {
//         header: "Teams",
//         accessorKey: "teams",
//         cell: (info) => {
//           const teams = info.getValue();
//           const displayLimit = 3;
//           const remainingCount = teams.length - displayLimit;

//           return (
//             <div className="flex flex-wrap items-center gap-1">
//               {teams.slice(0, displayLimit).map((team, index) => {
//                 let bgColor, textColor, borderColor;
//                 switch (team.toLowerCase()) {
//                   case "design":
//                     bgColor = "bg-purple-100";
//                     textColor = "text-purple-700";
//                     borderColor = "border-purple-200";
//                     break;
//                   case "product":
//                     bgColor = "bg-blue-100";
//                     textColor = "text-blue-700";
//                     borderColor = "border-blue-200";
//                     break;
//                   case "marketing":
//                     bgColor = "bg-green-100";
//                     textColor = "text-green-700";
//                     borderColor = "border-green-200";
//                     break;
//                   default:
//                     bgColor = "bg-gray-100";
//                     textColor = "text-gray-700";
//                     borderColor = "border-gray-200";
//                 }

//                 return (
//                   <span
//                     key={index}
//                     className={`px-2.5 py-0.5 rounded-full border ${bgColor} ${textColor} ${borderColor} text-xs font-medium`}
//                   >
//                     {team}
//                   </span>
//                 );
//               })}
//               {remainingCount > 0 && (
//                 <span className="text-xs font-medium border-2 rounded-xl px-2 py-0.5 bg-slate-100">
//                   +{remainingCount}
//                 </span>
//               )}
//             </div>
//           );
//         },
//       },
//     ],
//     []
//   );

//   const table = useReactTable({
//     data: peopleData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     state: {
//       globalFilter: searchTerm,
//       sorting,
//     },
//     onGlobalFilterChange: setSearchTerm,
//     onSortingChange: setSorting,
//   });
//   console.log("TableData:",table.data)
//   const handleRowClick = (person) => {
//     setSelectedPerson(person);
//   };

//   const closeSidePanel = () => {
//     setSelectedPerson(null);
//   };
//   const handleAddMember = (data) => {
//     console.log("New member data:", data);

//     setIsAddMemberFormOpen(false);
//   };
//   const handleDeleteClick = (e, person) => {
//     e.stopPropagation();
//     setDeleteConfirmation({ isOpen: true, person });
//   };

//   const handleDeleteConfirm = () => {
//     if (deleteConfirmation.person) {
//       // Implement actual delete logic here
//       console.log("Deleting:", deleteConfirmation.person);
//     }
//     setDeleteConfirmation({ isOpen: false, person: null });
//   };


//   return (
//     <div className="relative p-6 bg-white border-2 rounded-lg shadow-md">
//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-medium">
//           Team members{" "}
//           <span className="bg-slate-50 text-[1rem] font-medium border-2 rounded-3xl text-[#8763dd] px-3">
//             100 users
//           </span>
//         </h2>
//         <div className="flex items-center space-x-2">
//           <div className="flex items-center border p-2 border-b-black rounded w-[20rem]">
//             <input
//               type="text"
//               placeholder="Search"
//               className="flex-grow outline-none"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <IoMdSearch className="text-2xl text-gray-500" />
//           </div>

//           <div className="relative">
//             <CiFilter
//               className="text-3xl text-gray-600 cursor-pointer"
//               onClick={() => setIsFilterPopupOpen(!isFilterPopupOpen)}
//             />
//             {isFilterPopupOpen && (
//               <FilterPopup
//                 onClose={() => setIsFilterPopupOpen(false)}
//                 onApplyFilters={(filters) => {
//                   setSelectedFilters(filters);
//                   setIsFilterPopupOpen(false);
//                 }}
//               />
//             )}
//           </div>
//           <button
//             className="bg-[#6941c6] text-[0.9rem] text-white font-bold px-4 py-2 rounded"
//             onClick={() => setIsAddMemberFormOpen(true)}
//           >
//             + ADD MEMBER
//           </button>
//         </div>

//         {isAddMemberFormOpen && (
//           <AddMemberForm
//             onClose={() => setIsAddMemberFormOpen(false)}
//             onSubmit={handleAddMember}
//           />
//         )}
//       </div>
//       <table className="w-full bg-white  overflow-hidden">
//         <thead className="bg-gray-50">
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header, index) => (
//                 <th
//                   key={header.id}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   onClick={header.column.getToggleSortingHandler()}
//                 >
//                   <div className="flex items-center justify-between cursor-pointer">
//                     <span>
//                       {flexRender(
//                         header.column.columnDef.header,
//                         header.getContext()
//                       )}
//                     </span>
//                     {index < 2 && header.column.getCanSort() && (
//                       <span className="ml-2">
//                         {header.column.getIsSorted() === "asc" ? (
//                           <IoIosArrowUp className="text-blue-600 text-[0.9rem]" />
//                         ) : header.column.getIsSorted() === "desc" ? (
//                           <IoIosArrowDown className="text-blue-600 text-[0.9rem]" />
//                         ) : (
//                           <div className="flex flex-col">
//                             <IoIosArrowUp className="text-gray-400 text-[0.9rem]" />
//                             <IoIosArrowDown className="text-gray-400 text-[0.9rem]" />
//                           </div>
//                         )}
//                       </span>
//                     )}
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {table.getRowModel().rows.map((row) => (
//             <tr
//               key={row.id}
//               className="relative"
//               onClick={() => handleRowClick(row.original)}
//             >
//               {row.getVisibleCells().map((cell) => (
//                 <td
//                   key={cell.id}
//                   className="px-6 py-4 whitespace-nowrap cursor-pointer"
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//               <td className="px-6 py-4 whitespace-nowrap text-right">
//                 <div className="flex items-center justify-end">
//                   <button
//                     className="text-[1.25rem] text-gray-500  mr-4 hover:text-gray-700"
//                     onClick={(e) => handleDeleteClick(e, row.original)}
//                   >
//                     <MdDeleteOutline />
//                   </button>
//                   <button
//                     className="text-[1.25rem] text-gray-500  hover:text-gray-700"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       handleEdit(row.original);
//                     }}
//                   >
//                     <FiEdit2 />
//                   </button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//         <DeletePopup
//           isOpen={deleteConfirmation.isOpen}
//           onClose={() => setDeleteConfirmation({ isOpen: false, person: null })}
//           onConfirm={handleDeleteConfirm}
//         />
//       </table>
//       <div className="mt-4 flex justify-between">
//         <button
//           onClick={() => table.previousPage()}
//           disabled={!table.getCanPreviousPage()}
//           className="px-4 py-2 border rounded"
//         >
//           Previous
//         </button>
//         <div className="flex space-x-2">
//           {table.getPageOptions().map((page, index) => (
//             <button
//               key={index}
//               onClick={() => table.setPageIndex(page)}
//               className={`px-3 py-1 border rounded ${
//                 table.getState().pagination.pageIndex === page
//                   ? "bg-gray-200"
//                   : ""
//               }`}
//             >
//               {page + 1}
//             </button>
//           ))}
//         </div>
//         <button
//           onClick={() => table.nextPage()}
//           disabled={!table.getCanNextPage()}
//           className="px-4 py-2 border rounded"
//         >
//           Next
//         </button>
//       </div>

//       {selectedPerson && (
//         <div className="fixed top-0 right-0 z-50 h-full bottom-0 w-[40rem] bg-white shadow-xl overflow-y-auto">
//           <div className="bg-[#2a5b7e] text-white p-6 relative">
//             <button
//               onClick={closeSidePanel}
//               className="absolute top-4 right-4 text-white hover:text-gray-200"
//             >
//               <svg
//                 className="h-6 w-6"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               </svg>
//             </button>
//             <div className="flex items-center">
//               <img
//                 className="h-20 w-20 rounded-full mr-4"
//                 src={`https://i.pravatar.cc/80?u=${selectedPerson.id}`}
//                 alt=""
//               />
//               <div>
//                 <h2 className="text-2xl font-bold">{selectedPerson.name}</h2>
//                 <p className="text-sm">@{selectedPerson.username}</p>
//                 <p className="text-sm">{selectedPerson.role}</p>
//               </div>
//             </div>
//           </div>
//           <div className="p-6">
//             <section className="mb-6">
//               <h3 className="text-lg font-semibold mb-2 bg-gray-100 p-2">
//                 Personal Information
//               </h3>
//               <div className="grid grid-cols-2 gap-y-2">
//                 <p className="font-medium">Date of Birth</p>
//                 <p>{selectedPerson.dateOfBirth}</p>
//                 <p className="font-medium">Gender</p>
//                 <p>{selectedPerson.gender}</p>
//                 <p className="font-medium">Nationality</p>
//                 <p>{selectedPerson.nationality}</p>
//                 <p className="font-medium">Contact no.</p>
//                 <p>{selectedPerson.contactNo}</p>
//                 <p className="font-medium">E-mail Address</p>
//                 <p>{selectedPerson.personalEmail}</p>
//                 <p className="font-medium">Work email Address</p>
//                 <p>{selectedPerson.workEmail}</p>
//               </div>
//             </section>
//             <section>
//               <h3 className="text-lg font-semibold mb-2 bg-gray-100 p-2">
//                 Research & Publication
//               </h3>
//               {selectedPerson.publications.map((pub, index) => (
//                 <div key={index} className="mb-2">
//                   <p className="font-medium">{pub.title}</p>
//                   {pub.journal && (
//                     <p className="text-sm text-gray-600">
//                       Published in {pub.journal} • {pub.year}
//                     </p>
//                   )}
//                   {pub.details && (
//                     <p className="text-sm text-gray-600">{pub.details}</p>
//                   )}
//                 </div>
//               ))}
//               <button className="text-red-600 hover:text-red-800 text-sm mt-2 uppercase font-semibold">
//                 See publication
//               </button>
//             </section>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default PeopleDirectory;
