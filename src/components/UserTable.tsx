// UserTable.tsx
"use client";
import React, { useState, useEffect } from "react";
import { deleteUser, updateUser } from "@/lib/data";
import EditUserModal from "./EditUserModal"; // Import the modal
import type { User } from "@/lib/data"; // Import the User type
import UserRow from "./UserRow"; // Import UserRow
import UserTableHeader from "./UserTableHeader"; // Import UserTableHeader

const UserTable: React.FC<{
  currentData: User[];
  onDataUpdate: () => void;
}> = ({ currentData, onDataUpdate }) => {
  const [users, setUsers] = useState<User[]>(currentData);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setUsers(currentData);
  }, [currentData]);

  const handleDelete = async (id: string) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmation) {
      await deleteUser(id);
      alert(`User with ID ${id} deleted successfully.`);
      onDataUpdate(); // Gọi hàm cập nhật dữ liệu
      setUsers(users.filter((user) => user.id !== id));
    }
  };

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setModalOpen(true);
  };

  const handleSave = async (updatedUser: User) => {
    const response = await updateUser(updatedUser);
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? response : user))
    );
  };

  return (
    <div className="overflow-x-auto rounded">
      <table className="min-w-full bg-white border border-gray-200">
        <UserTableHeader />
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user.id}
              user={user}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <EditUserModal
          user={selectedUser}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
};

export default UserTable;
