import React from "react";
import MaterialTable from "@material-table/core";

function Table() {
  let [users, setUsers] = React.useState([]);
  function getData() {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data);
      });
  }

  const columns = [
    {
      title: "ID",
      field: "id",
    },
    {
      title: "First Name",
      field: "first_name",
    },
    {
      title: "Last Name",
      field: "last_name",
    },
    {
      title: "Email ID",
      field: "email",
    },
    {
      title: "Avatar",
      field: "avatar",
    },
  ];

  getData();

  return (
    <div className="Section">
      <h1 align="center">Table Component</h1>
      <h1 align="center">User Data</h1>
      <MaterialTable title="User Data" data={users} columns={columns} />
    </div>
  );
}

export default Table;
