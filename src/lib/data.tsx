export type User = {
  id: string;
  name: string;
  avatar: string;
  email: string;
  address: string;
  phoneNumber: string;
  salary: string;
  createdAt: string;
};

export const fetchData = async () => {
  const res = await fetch(
    "https://66f90b652a683ce97310bbb9.mockapi.io/api/v1/users"
  );
  const data = await res.json();
  return data;
};
export const deleteUser = async (id: string) => {
  const res = await fetch(
    `https://66f90b652a683ce97310bbb9.mockapi.io/api/v1/users/${id}`,
    {
      method: "DELETE",
    }
  );
  return res.json();
};
export const updateUser = async (user: User) => {
  const res = await fetch(
    `https://66f90b652a683ce97310bbb9.mockapi.io/api/v1/users/${user.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );
  return res.json();
};
