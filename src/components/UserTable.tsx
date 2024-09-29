"use client";

import React, { useState } from "react";
import { deleteUser } from "@/lib/data";

const UserTable = ({ currentData }: any) => {
  const [users, setUsers] = useState(currentData);

  const handleDelete = async (id: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmation) {
      await deleteUser(id);
      alert(`User with ID ${id} deleted successfully.`);
      setUsers(users.filter((user: any) => user.id !== id));
    }
  };

  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
              Avatar
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
              ID
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
              Name
            </th>
            <th className="hidden md:table-cell py-3 px-4 text-left text-sm font-medium text-gray-600">
              Email
            </th>
            <th className="hidden lg:table-cell py-3 px-4 text-left text-sm font-medium text-gray-600">
              Address
            </th>
            <th className="hidden lg:table-cell py-3 px-4 text-left text-sm font-medium text-gray-600">
              Phone
            </th>
            <th className="hidden lg:table-cell py-3 px-4 text-left text-sm font-medium text-gray-600">
              Salary
            </th>
            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: any) => (
            <tr key={user.id} className="border-b border-gray-200">
              <td className="py-3 px-4">
                <img
                  src={"https://github.com/shadcn.png"}
                  alt={user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </td>
              <td className="py-3 px-4 text-sm text-gray-700">{user.id}</td>
              <td className="py-3 px-4 text-sm text-gray-700">{user.name}</td>
              <td className="hidden md:table-cell py-3 px-4 text-sm text-gray-700">
                {user.email}
              </td>
              <td className="hidden lg:table-cell py-3 px-4 text-sm text-gray-700">
                {user.address}
              </td>
              <td className="hidden lg:table-cell py-3 px-4 text-sm text-gray-700">
                {user.phoneNumber}
              </td>
              <td className="hidden lg:table-cell py-3 px-4 text-sm text-gray-700">
                ${user.salary}
              </td>
              <td className="py-3 px-4">
                <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
