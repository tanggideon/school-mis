import Card from "@/components/cards";
import React from "react";


const cardData = [
  {
    Count: 75,
    Title: "Students"
  },
  {
    Count: 12,
    Title: "Subjects"
  },
  {
    Count: 6,
    Title: "hrs/Week"
  }
]

const DashboardCards = () => {
  return (
    <div className="flex items-center justify-between gap-3">
      {cardData.map((data, index) => (
        <Card key={index} Title={data.Title} Count={data.Count}/>
      ))}
    </div>
  );
};

export default DashboardCards;
