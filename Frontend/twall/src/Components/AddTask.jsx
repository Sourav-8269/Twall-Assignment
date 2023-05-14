import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Box,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalOverlay,
  FormControl,
  Input,
  ModalFooter,
  FormLabel,
  ModalHeader,
  ModalCloseButton,
  ModalContent
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { addData, getData } from "../Redux/App/action";
import { AddIcon } from "@chakra-ui/icons";

const AddTask = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const [task, settask] = useState("");
  const [description, setdescription] = useState("");

  // Adding Data to backend

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description) {
      const payload = { title:task, description, status:false };
      console.log(payload);
      if (payload) {
        dispatch(addData(payload)).then(() => {
          dispatch(getData());
          toast({
            title: "Added Task Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          onClose();
          settask("");
          setdescription("");
        });
      }
    } else {
      toast({
        position: "top",
        title: "Empty field",
        description: "Please fill all the details.",
        status: "info",
        duration: 2000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <Button onClick={onOpen} leftIcon={<AddIcon/>}>Add Task</Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Task</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Task</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Enter Task"
                value={task}
                onChange={(e) => settask(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
              <Input
                placeholder="Enter Description"
                value={description}
                onChange={(e) => setdescription(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} colorScheme="blue" mr="3%">
              Cancel
            </Button>
            <Button onClick={handleSubmit} colorScheme="green" ml="3%">
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};
export default AddTask;
