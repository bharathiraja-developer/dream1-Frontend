import axios from "axios";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const { data } = await axios.post(
          "https://dream1-backend.onrender.com/getUsers"
        );
        if (data.success) {
          setData(data.data);
        }
      };
      fetchData();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const formatDateOnly = (isoString) => {
    return isoString.split("T")[0].split("-").reverse().join("-"); // Gets only the date part (YYYY-MM-DD)
  };
  return (
    <div
      className="p-6 bg-black min-h-screen justify-content-center d-flex"
      style={{ marginTop: "60px" }}
    >
      <div className="overflow-x-auto rounded-2xl shadow-md">
        <table
          className="min-w-[600px] w-full text-sm text-white border border-white border-collapse table-auto"
          style={{ width: "100%" }}
        >
          <thead>
            <tr className="bg-black border-b border-white">
              <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide border border-white whitespace-nowrap">
                Name
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide border border-white whitespace-nowrap">
                Mobile
              </th>
              <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide border border-white whitespace-nowrap">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              data.map((item, idx) => (
                <tr
                  key={idx}
                  className={`border-t border-white ${
                    idx % 2 === 0 ? "bg-black" : "bg-gray-900"
                  } hover:bg-gray-800 transition-colors`}
                >
                  <td className="px-4 py-3 border border-white whitespace-nowrap">
                    {item.name}
                  </td>
                  <td className="px-4 py-3 border border-white whitespace-nowrap">
                    {item.mobile}
                  </td>
                  <td className="px-4 py-3 border border-white whitespace-nowrap">
                    {formatDateOnly(item.createdAt)}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="px-6 py-8 text-center text-gray-400">
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
