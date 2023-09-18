import React, { useState } from "react";
import { motion } from "framer-motion";

const Toggle = ({ move, setMove }) => {
  return (
    <div
      className="toggleContainer"
      style={{ border: move ? "1px solid white" : "1px solid black" }}
    >
      <motion.div
        className="toggleCircle"
        animate={{
          x: move ? 260 : 0,
          backgroundColor: move ? "rgb(255, 255, 0)" : "blue",
        }}
        onClick={() => setMove(!move)}
      ></motion.div>
    </div>
  );
};

export default Toggle;
