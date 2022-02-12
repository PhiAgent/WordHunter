import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import EndButtons from "./EndButtons";
import SolutionWords from "./Solution";


const LastPage = () => {

  return (
    <div className="endGame">
      <SolutionWords/>
      <EndButtons/>
    </div>
  )
};

export default LastPage;