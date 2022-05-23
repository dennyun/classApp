// Imports
import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Route, Routes } from 'react-router-dom';
import './style-home.css'

import Header from './Header';
import NewPost from '../Post/New';
import Feed from '../Feed';

const useStyles = makeStyles ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar} />
      <main className={classes.main}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/post/new" element={<NewPost />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="*" element={<h1>404!</h1>} />
        </Routes>
      </main>
    </div>
  );
}

export default Home;