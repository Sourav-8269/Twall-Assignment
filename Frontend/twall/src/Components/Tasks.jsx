import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios"
import "../Styles/Tasks.css"

const Tasks = () => {
  const [data,setData]=useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/task")
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  }, []);

  return (
    <Box mt={["20%", "15%", "8%"]}>
      <Box w="80%" m="auto">
        <Heading size="lg" as="h1" fontWeight="" textAlign={"left"} mb="3%">
          Sprint 28 March - 5 April{" "}
        </Heading>
      </Box>
      <table>
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Status</th>
            <th>Edit Task</th>
            <th>Delete Task</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.length > 0 &&
            data.map((el) => (
              <tr key={el._id}>
                <td>{el.title}</td>
                <td>{el.description}</td>
                <td
                  style={{
                    backgroundColor: `${el.status ? "green" : "#ECC94B"}`,
                    color: "white",
                  }}
                >
                  {el.status ? "Done" : "Pending"}
                </td>
                <td
                  style={{
                    backgroundColor: "#1da1f2",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                //   onClick={() => navigate(`/edit/${el._id}`)}
                >
                  Edit
                </td>
                <td
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                //   onClick={() => handleDelete(el._id)}
                >
                  Delete
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </Box>
  );
};

export default Tasks;
