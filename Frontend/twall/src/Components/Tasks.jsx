import React, { useEffect } from "react";
import { Box, Divider, HStack, SimpleGrid, Text, Tooltip, useToast } from "@chakra-ui/react";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, getData } from "../Redux/App/action";
import EditTask from "./EditTask";

const Tasks = () => {
  const data=useSelector((store)=>store.data);
  const dispatch=useDispatch();
  const toast=useToast();

  useEffect(() => {
    dispatch(getData());
  }, []);

  // Deleting Data from Backend

  const handleDelete=(id)=>{
    dispatch(deleteData(id))
    .then(()=>{
      dispatch(getData());
      toast({
        title: 'Deleted Task Successfully',
        status: "success",
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    })
    .catch(()=>{
      toast({
        title: 'Something Went Wrong',
        status: "warning",
        duration: 2000,
        isClosable: true,
        position:"top"
      })
    })
  }

  return (
    <Box mt={["20%", "15%", "8%"]}>
      {/* Previous width={["60%","80%"]} for below Box */}
      <Box width="80%" m="auto">
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
                bg={el.status ? "#68D391" : "#4299E1"}
              >
                {/* <Heading>{el.title}</Heading> */}
                <Text fontFamily="sans-serif" fontSize={["25px", "30px"]}>
                  {el.title}
                </Text>
                <Divider/>
                <Text fontFamily="sans-serif" fontSize={"20px"} mt="2%" >
                  {el.description}
                </Text>
                <Text
                  fontFamily="sans-serif"
                  fontSize={"20px"}
                  // color={el.status ? "" : "#F56565"}
                >
                  Status : {el.status ? "Completed" : "Not Completed"}
                </Text>
                <HStack mt="2%" p="3%" justifyContent="space-between">
                  <EditTask el={el} />
                  <Tooltip
                    label="Delete Task"
                    hasArrow
                    placement="bottom-start"
                  >
                    <DeleteIcon cursor="pointer" boxSize={6} onClick={()=>handleDelete(el._id)} />
                  </Tooltip>
                  {!el.status && (
                    <Tooltip
                      label="Completed"
                      hasArrow
                      placement="bottom-start"
                    >
                      <CheckIcon cursor="pointer" boxSize={6} />
                    </Tooltip>
                  )}
                  {el.status && (
                    <Tooltip
                      label="Not Completed"
                      hasArrow
                      placement="bottom-start"
                    >
                      <CloseIcon cursor="pointer" boxSize={6} />
                    </Tooltip>
                  )}
                </HStack>
              </Box>
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Tasks;
