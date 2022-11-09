import React, { useEffect } from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch} from "react-redux";
import { getCandidates } from "./actions/candidates";
import Feed from "./components/home/Feed";
import Profile from "./components/profile/Profile";
import Login from "./components/auth/Login"
import CreateUser from "./components/auth/register/CreateUser"
import CreatePassword from "./components/auth/register/CreatePassword";


export default function App() {
const dispatch = useDispatch();

  useEffect(
    function () {
        dispatch(getCandidates());
    },
    [dispatch]
  );

  return (
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/:userId" element={<Profile/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<CreateUser/>}/>
        <Route path="/createPassword" element={<CreatePassword/>}/>
      </Routes>
  );
}