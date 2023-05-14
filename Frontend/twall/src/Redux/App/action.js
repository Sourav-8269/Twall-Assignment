import { useDispatch } from "react-redux";
import * as types from "./actionTypes";
import axios from "axios";

const getRequest=()=>{
    return {
        type:types.GET_REQUEST
    }
}

const getSuccess=(token)=>{
    return {
        type:types.GET_SUCCESS,
        payload:token
    }
}

const getError=()=>{
    return {
        type:types.GET_ERROR
    }
}

const PostRequest=()=>{
    return {
        type:types.POST_REQUEST
    }
}

const PostSuccess=()=>{
    return {
        type:types.POST_SUCCESS,
    }
}

const PostError=()=>{
    return {
        type:types.POST_ERROR
    }
}

const updateRequest=()=>{
    return {
        type:types.UPDATE_REQUEST
    }
}

const updateSuccess=()=>{
    return {
        type:types.UPDATE_SUCCESS,
    }
}

const updateError=()=>{
    return {
        type:types.UPDATE_ERROR
    }
}

const deleteRequest=()=>{
    return {
        type:types.DELETE_REQUEST
    }
}

const deleteSuccess=()=>{
    return {
        type:types.DELETE_SUCCESS,
    }
}

const deleteError=()=>{
    return {
        type:types.DELETE_ERROR
    }
}

const searchRequest=()=>{
    return {
        type:types.SEARCH_REQUEST
    }
}

const searchSuccess=(payload)=>{
    return {
        type:types.SEARCH_SUCCESS,
        payload
    }
}

const searchError=()=>{
    return {
        type:types.SEARCH_ERROR
    }
}

// Get Data form backend

const getData=()=>(dispatch)=>{
    dispatch(getRequest())
    axios.get(`http://localhost:8080/task`)
    .then((res)=>{
        dispatch(getSuccess(res.data))
    })
    .catch((err)=>dispatch(getError()))
}

// Adding Data 

const addData=(payload)=>(dispatch)=>{
    dispatch(PostRequest())
    return axios.post(`http://localhost:8080/task/add`,payload)
    .then((res)=>{
        dispatch(PostSuccess())
    })
    .catch((err)=>dispatch(PostError()))
}

// Deleting Data from backend

const deleteData=(id)=>(dispatch)=>{
    dispatch(deleteRequest());
    return axios.delete(`http://localhost:8080/task/delete/${id}`)
    .then((res)=>{
       dispatch(deleteSuccess());
    })
    .catch((err)=>dispatch(deleteError()))
}

// Updating Data using patch request

const updateData=(id,payload)=>(dispatch)=>{
    dispatch(updateRequest());
    return axios.patch(`http://localhost:8080/task/edit/${id}`,payload)
    .then((res)=>{
        dispatch(updateSuccess());
    })
    .catch((err)=>dispatch(updateError()))
}

export {getData,deleteData,addData,updateData}