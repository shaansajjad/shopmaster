import React from "react";
import "../../../css/ShowValues.css";

const ShowValues = ({ name, email, password }) => {
  return (
    <>
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
        <tr>
          <td>{name}</td>
          <td>{email}</td>
          <td>{password}</td>
        </tr>
      </table>
    </>
  );
};

export default ShowValues;
