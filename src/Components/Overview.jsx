import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto"; // Import necessary Chart.js components

// Sample data for the chart
const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Monthly Sales",
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "#4A90E2",
      tension: 0.1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    tooltip: {
      callbacks: {
        label: function (context) {
          return context.dataset.label + ": " + context.raw;
        },
      },
    },
  },
};

export default function Overview() {
  return (
    <div className="p-6 bg-white border-2 rounded-lg shadow-md">
      <h1 className="text-[2.50rem] font-bold  text-gray-800 mb-6">
        Welcome, Jane Doe!
      </h1>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-blue-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-blue-700">Total Users</h2>
          <p className="text-2xl font-bold">1,250</p>
        </div>
        <div className="p-4 bg-green-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-green-700">
            Active Projects
          </h2>
          <p className="text-2xl font-bold">42</p>
        </div>
        <div className="p-4 bg-yellow-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold text-yellow-700">
            Pending Tasks
          </h2>
          <p className="text-2xl font-bold">123</p>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Monthly Sales Overview</h2>
        <Line data={data} options={options} />
      </div>

      {/* Recent Activities Section */}
      {/* Recent Activities Section */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="material-icons text-blue-500 mr-2">history</span>
          Recent Activities
        </h2>
        <ul>
          <li className="border-b py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
            <div className="flex items-center">
              <span className="material-icons text-green-500 mr-2">
                check_circle
              </span>
              <span>Completed project A</span>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="border-b py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
            <div className="flex items-center">
              <span className="material-icons text-yellow-500 mr-2">
                play_circle
              </span>
              <span>Started new project B</span>
            </div>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="border-b py-2 flex justify-between items-center hover:bg-gray-100 cursor-pointer transition duration-300 ease-in-out">
            <div className="flex items-center">
              <span className="material-icons text-blue-500 mr-2">group</span>
              <span>Meeting with team C</span>
            </div>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
