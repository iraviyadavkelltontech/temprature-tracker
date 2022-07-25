import React from "react";
import { Routes, Route } from "react-router-dom";
import { Register } from "./modules/register";
import { AnagramComponent } from "./modules/anagramtest";
import { TempTrackerComponent } from "./modules/tempTracker";
const Main = () => {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/anagram-test" element={<AnagramComponent />} />
      <Route path="/temp-tracker" element={<TempTrackerComponent />} />
    </Routes>
  );
};
export default Main;
