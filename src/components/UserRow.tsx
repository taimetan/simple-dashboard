// UserRow.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import type { User } from "@/lib/data";

interface UserRowProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}

const UserRow: React.FC<UserRowProps> = ({ user, onEdit, onDelete }) => {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-3 px-4">
        <img
          src="https://github.com/shadcn.png"
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
        <button
          className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
          onClick={() => onEdit(user)}
        >
          <FontAwesomeIcon icon={faPen} />
        </button>
        <button
          className="bg-red-500 text-white px-3 py-1 rounded"
          onClick={() => onDelete(user.id)}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
