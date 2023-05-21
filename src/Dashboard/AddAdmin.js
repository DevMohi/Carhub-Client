import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AddAdminRow from "./AddAdminRow";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

const AddAdmin = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery("users", () =>
    fetch("https://carhub-server.onrender.com/user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mb-20">
      <h2 className="text-2xl">All Users: {users?.length}</h2>

      <Table className="table w-full">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Name</Th>
            <Th>Role</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <AddAdminRow
              key={user._id}
              refetch={refetch}
              index={index}
              user={user}
            ></AddAdminRow>
          ))}
        </Tbody>
      </Table>
    </div>
  );
};

export default AddAdmin;
