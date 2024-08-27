import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const FilterPopup = ({ onClose }) => {
  const [selectedRoles, setSelectedRoles] = useState([]);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [expandedSection, setExpandedSection] = useState(null);

  const roles = [
    "Product Designer",
    "Product Manager",
    "Frontend Developer",
    "Backend Developer",
  ];
  const teams = ["Design", "Product", "Marketing"];

  const handleRoleToggle = (role) => {
    setSelectedRoles((prev) =>
      prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role]
    );
  };

  const handleTeamToggle = (team) => {
    setSelectedTeams((prev) =>
      prev.includes(team) ? prev.filter((t) => t !== team) : [...prev, team]
    );
  };

  return (
    <div className="absolute right-0 top-12 w-64 bg-white border rounded-lg shadow-lg p-4 z-50">
      <h3 className="text-lg flex  items-center justify-between font-semibold mb-2 border-b-2">
        Filters <IoIosArrowUp className="text-gray-500 text-[0.9rem]" />
      </h3>

      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            setExpandedSection(expandedSection === "roles" ? null : "roles")
          }
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 w-[17px] h-[20px]"
              checked={expandedSection === "roles"}
              onChange={(e) => {
                e.stopPropagation();
                setExpandedSection(
                  expandedSection === "roles" ? null : "roles"
                );
              }}
            />
            <h4 className="font-medium">Roles</h4>
          </div>
          {expandedSection === "roles" ? (
            <IoIosArrowUp className="text-gray-500 text-[0.9rem]" />
          ) : (
            <IoIosArrowDown className="text-gray-500 text-[0.9rem]" />
          )}
        </div>
        {expandedSection === "roles" && (
          <div className="mt-2 space-y-2 ml-6">
            {roles.map((role) => (
              <label key={role} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedRoles.includes(role)}
                  onChange={() => handleRoleToggle(role)}
                />
                {role}
              </label>
            ))}
          </div>
        )}
      </div>

      <div className="mb-4">
        <div
          className="flex items-center justify-between cursor-pointer"
          onClick={() =>
            setExpandedSection(expandedSection === "teams" ? null : "teams")
          }
        >
          <div className="flex items-center">
            <input
              type="checkbox"
              className="mr-2 w-[17px] h-[20px]"
              checked={expandedSection === "teams"}
              onChange={(e) => {
                e.stopPropagation();
                setExpandedSection(
                  expandedSection === "teams" ? null : "teams"
                );
              }}
            />
            <h4 className="font-medium">Teams</h4>
          </div>
          {expandedSection === "teams" ? (
            <IoIosArrowUp className="text-gray-500 text-[0.9rem]" />
          ) : (
            <IoIosArrowDown className="text-gray-500 text-[0.9rem]" />
          )}
        </div>
        {expandedSection === "teams" && (
          <div className="mt-2 space-y-2 ml-6">
            {teams.map((team) => (
              <label key={team} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selectedTeams.includes(team)}
                  onChange={() => handleTeamToggle(team)}
                />
                {team}
              </label>
            ))}
          </div>
        )}
      </div>

      <button
        className="w-full bg-[#6941c6] text-white py-2 rounded-md"
        onClick={onClose}
      >
        SELECT
      </button>
    </div>
  );
};

export default FilterPopup;
