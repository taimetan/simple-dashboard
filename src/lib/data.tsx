type Users = {
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
