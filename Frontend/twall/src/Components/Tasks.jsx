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
      
    </Box>
  );
};

export default Tasks;
