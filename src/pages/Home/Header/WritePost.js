import React from "react";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import { useSelector } from "react-redux";

function WritePost() {
    const navigate = useNavigate();
    const account = useSelector((state) => state.account);
    const isAuthenticated = !!account.user;
  
    const handleClick = () => {
      if (isAuthenticated) {
        navigate('/post/new');
      } else {
        navigate('/login');
      }
    };
  
    return (
      <Button variant="contained" color="primary" onClick={handleClick}>
        Novo Post
      </Button>
    );
  }
  
  export default WritePost;