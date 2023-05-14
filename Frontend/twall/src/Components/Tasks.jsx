import React, { useEffect } from "react";
import { Box, Container, Heading,HStack, SimpleGrid, Text, Tooltip, useColorMode } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import "../Styles/Tasks.css";
import {CheckIcon, CloseIcon, DeleteIcon, EditIcon} from "@chakra-ui/icons";

const Tasks = () => {
  const [data, setData] = useState([]);
  const { colorMode, toggleColorMode } = useColorMode();

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
      <Box width="80%" m="auto" border="0px solid red">
        <SimpleGrid
          minChildWidth="250px"
          spacing="40px"
          marginTop="30px"
          textAlign="center"
        >
          {data.length > 0 &&
            data.map((el) => (
              <Box
              color="white"
                key={el._id}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                borderRadius="25px"
                padding="10%"
                textAlign="left"
                bg={el.status?"#68D391":"#4299E1"}
              >
                {/* <Heading>{el.title}</Heading> */}
                <Text
                  fontFamily="sans-serif"
                  fontSize={["25px", "30px"]}
                >
                  {el.title}
                </Text>
                <Text fontFamily="sans-serif" fontSize={"20px"}>
                  - {el.description}
                </Text>
                <Text fontFamily="sans-serif" fontSize={"20px"} color={el.status?"":"#F56565"} >
                  Status : {el.status?"Completed":"Not Completed"}
                </Text>
                <HStack mt="2%" p="3%" justifyContent="space-between"  >
                  <Tooltip label="Edit Task" hasArrow placement='bottom-start'>
                    <EditIcon cursor="pointer" boxSize={6}/>
                  </Tooltip>
                  <Tooltip label="Delete Task" hasArrow placement='bottom-start'>
                    <DeleteIcon cursor="pointer" boxSize={6}/>
                  </Tooltip>
                  {!el.status&&<Tooltip label="Completed" hasArrow placement='bottom-start'>
                    <CheckIcon cursor="pointer" boxSize={6}/>
                  </Tooltip>}
                  {el.status&&<Tooltip label="Not Completed" hasArrow placement='bottom-start'>
                    <CloseIcon cursor="pointer" boxSize={6}/>
                  </Tooltip>}
                </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Tasks;
