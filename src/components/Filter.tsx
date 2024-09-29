"use client";

import React from "react";

const Filter = ({ filter, setFilter, currentData = [] }: any) => {
  return (
    <div>
      {/* Các phần tử khác trong filter */}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            {/* Các tiêu đề cột khác */}
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? (
            currentData.map((user: any) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                {/* Các cột khác */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={2}>Không có dữ liệu</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Filter;
