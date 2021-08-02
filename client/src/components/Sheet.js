import React, { useState } from "react";
import Card from "./Card";
import Footer from "./Footer";

const Sheet = () => {
  const [topic] = useState([
    "Array",
    "Hashing",
    "Linked List",
    "Two Pointer",
    "Greedy",
    "Recursion & BackTracking",
    "Binary Search",
    "Bit Manipulation",
    "Stack & Queue",
    "String",
    "Binary Tree",
    "Binary Search Tree",
    "Mixed Questions",
    "Graph",
    "Dynamic Programming",
  ]);

  return (
    <div className="body">
      <div className="container">
        <div className="sheet_heading">
          <h1>SDE SHEET By Striver</h1>
        </div>
        <div className="outer_block">
          <div className="block_collection">
            {topic.map((t) => (
              <Card key={t} topic={t} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Sheet;
