import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";
import { PiArrowCounterClockwiseFill } from "react-icons/pi";
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  role: z.string().min(1, "Role is required"),
  status: z.string().min(1, "Status is required"),
  teams: z.array(z.string()).min(1, "At least one team is required"),
});

export default function AddMemberForm({ onClose, onSubmit }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "Olivia Rhye",
      email: "oliviarhye@email.com",
      role: "Product Designer",
      status: "Active",
      teams: ["Design", "Product", "Marketing", "Finance"],
    },
  });

  React.useEffect(() => {
    const subscription = watch(() => handleFormChange());
    return () => subscription.unsubscribe();
  }, [watch]);

  const [selectedTeams, setSelectedTeams] = useState([
    "Design",
    "Product",
    "Marketing",
    "Finance",
  ]);
  const [isFormModified, setIsFormModified] = useState(false);
  const teamOptions = [
    "Design",
    "Product",
    "Marketing",
    "Finance",
    "Development",
    "QA",
    "Management",
  ];
  const roleOptions = [
    "Product Designer",
    "UI Designer",
    "Frontend Developer",
    "Backend Developer",
  ];
  const statusOptions = ["Active", "Inactive"];
  const handleTeamSelect = (team) => {
    if (!selectedTeams.includes(team)) {
      setSelectedTeams([...selectedTeams, team]);
      handleFormChange();
    }
  };

  const handleTeamRemove = (team) => {
    setSelectedTeams(selectedTeams.filter((t) => t !== team));
    handleFormChange();
  };
  const handleFormChange = () => {
    if (!isFormModified) {
      setIsFormModified(true);
    }
  };
  return (
    <div className="w-full h-full z-50 fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center overflow-y-auto">
      <div className="bg-white w-[50%] rounded-lg my-8 shadow-lg overflow-hidden ">
        <div className="flex justify-between items-center p-4 ">
          <h2 className="text-2xl font-semibold">Edit Profile</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 ">
          <div className="flex justify-center mb-6">
            <div className="relative flex flex-col items-center gap-5">
              <img
                src="https://i.pravatar.cc/150?img=5"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />

              <div className="absolute-bottom-2 flex left-1/2 transform-translate-x-1/2 space-x-2">
                <button
                  type="button"
                  className="bg-slate-50 flex items-center justify-center gap-2 0 border border-gray-300  font-bold px-3 p-2 rounded-md text-sm "
                >
                  <PiArrowCounterClockwiseFill className="text-xl" />
                  CHANGE PHOTO
                </button>
                <button
                  type="button"
                  className="bg-slate-50 flex items-center justify-center gap-2 text-gray-700 border border-gray-300 px-3 font-bold py-1 rounded-md text-sm "
                >
                  {" "}
                  <MdDeleteOutline className="text-xl" />
                  REMOVE PHOTO
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-bold  mb-1">Name</label>
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      className=" text-gray-900 text-lg  w-full p-3 border-2 border-b-black rounded-md"
                    />
                  )}
                />
              </div>

              <div>
                <label className="block text-md font-bold  mb-1">Email</label>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="email"
                      className=" text-gray-900 text-lg  w-full p-3 border-2 border-b-black rounded-md"
                    />
                  )}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-md font-bold  mb-1">Role</label>
                <Controller
                  name="role"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className=" text-gray-900 text-lg  w-full p-3 border-2 border-b-black rounded-md"
                    >
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>
                          {role}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>

              <div>
                <label className="block text-md font-bold  mb-1">Status</label>
                <Controller
                  name="status"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className=" text-gray-900 text-lg w-full p-3 border-2 border-b-black rounded-md"
                    >
                      {statusOptions.map((status) => (
                        <option key={status} value={status}>
                          {status}
                        </option>
                      ))}
                    </select>
                  )}
                />
              </div>
            </div>

            <div>
              <label className="block text-md font-medium text-gray-600 mb-1">
                Teams
              </label>
              <Controller
                name="teams"
                control={control}
                render={({ field }) => (
                  <div className="relative">
                    <div className="flex flex-wrap gap-2 p-2 border rounded-md">
                      {selectedTeams.map((team) => (
                        <span
                          key={team}
                          className=" text-[#6941c6] px-2 py-1 rounded-md flex items-center"
                        >
                          {team}
                          <button
                            type="button"
                            onClick={() => handleTeamRemove(team)}
                            className="ml-1"
                          >
                            <IoMdClose />
                          </button>
                        </span>
                      ))}
                    </div>
                    <select
                      {...field}
                      className="w-full p-2 border rounded-md mt-2"
                      onChange={(e) => {
                        handleTeamSelect(e.target.value);
                        field.onChange(selectedTeams);
                      }}
                      value=""
                    >
                      <option value="" disabled>
                        Select a team
                      </option>
                      {teamOptions.map((team) => (
                        <option key={team} value={team}>
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-md font-bold bg-white hover:bg-gray-50"
            >
              CANCEL
            </button>
            <button
              type="submit"
              className={`px-6 py-2 rounded-md text-md font-bold ${
                isFormModified
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-gray-100 text-gray-300 hover:bg-gray-200"
              }`}
            >
              SAVE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
