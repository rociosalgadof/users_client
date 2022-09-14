import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch} from "react-redux";
import { getUsers } from "./actions/users";
import Feed from "./components/home/Feed";
import Profile from "./components/profile/Profile";


export default function App() {
const dispatch = useDispatch();

  useEffect(
    function () {
        dispatch(getUsers());
    },
    [dispatch]
  );

  return (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route exact path="/:userId" element={<Profile/>} />
      </Routes>
  );
}