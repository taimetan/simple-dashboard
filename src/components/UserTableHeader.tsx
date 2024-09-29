// UserTableHeader.tsx
import React from "react";

const UserTableHeader: React.FC = () => {
  return (
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
  );
};

export default UserTableHeader;
