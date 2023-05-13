import React, { useEffect } from "react";
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import "../Styles/Tasks.css";

const Tasks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/task")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box mt={["20%", "15%", "8%"]}>
      {/* Previous width={["60%","80%"]} for below Box */}
      <Box width="80%" m="auto" border="0px solid red" >
        <SimpleGrid
          minChildWidth="250px"
          spacing="40px"
          marginTop="30px"
          textAlign="center"
        >
          {data.length > 0 &&
            data.map((el) => (
              <Box boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius="25px" padding="10%" textAlign="left">
                <Heading>{el.title}</Heading>
                <Text>{el.description}</Text>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Tasks;
