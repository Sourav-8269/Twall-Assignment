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
  ModalContent,
  Select,
  Tooltip,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import {  getData,updateData } from "../Redux/App/action";
import { EditIcon } from "@chakra-ui/icons";

const EditTask = ({el}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const dispatch = useDispatch();
  const toast = useToast();

  const [task, settask] = useState(el.title||"");
  const [description, setdescription] = useState(el.description||"");
  const [status,setstatus]=useState(el.status||false);
  // const [singleTask,setSingleTask]=useState({title:"",description:"",status:false});

  // Adding Data to backend

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && description ) {
      const payload = { title: task, description, status: status=="true"?true:false };
      if (payload) {
        dispatch(updateData(el._id,payload)).then(() => {
          dispatch(getData());
          toast({
            title: "Updated Task Successfully",
            status: "success",
            duration: 2000,
            isClosable: true,
            position: "top",
          });
          onClose();
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
      {/* <Button >Add Task</Button> */}
      <Tooltip label="Edit Task" hasArrow placement="bottom-start">
        <EditIcon cursor="pointer" boxSize={6} onClick={onOpen} />
      </Tooltip>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Task</ModalHeader>
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
            <FormControl mt={4}>
              <FormLabel>Status</FormLabel>
              <Select variant="filled" placeholder="Select Status" value={status} onChange={(e)=>setstatus(e.target.value)} >
                <option value={true}>Completed</option>
                <option value={false}>Not Completed</option>
              </Select>
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
export default EditTask;
