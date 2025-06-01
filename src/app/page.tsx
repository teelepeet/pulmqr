"use client"
import React, { useEffect, useState } from "react";
import { differenceInDays, addYears } from "date-fns";

export default function Home() {
  const [daysSince, setDaysSince] = useState(0);
  const [daysToNextAnniversary, setDaysToNextAnniversary] = useState(0);
  const [anniversaryNumber, setAnniversaryNumber] = useState(1);

  const targetDate = new Date("2025-05-20");

  useEffect(() => {
    const today = new Date();
    const pastDays = differenceInDays(today, targetDate);
    setDaysSince(pastDays);

    let nextAnniversary = addYears(targetDate, 1);
    let count = 1;
    while (today > nextAnniversary) {
      count++;
      nextAnniversary = addYears(targetDate, count);
    }
    setAnniversaryNumber(count);

    const daysUntilNext = differenceInDays(nextAnniversary, today);
    setDaysToNextAnniversary(daysUntilNext);
  }, []);

  return (
    <div
  className="container d-flex flex-column justify-content-start align-items-center text-center container-body"
  style={{
    backgroundColor: "#fdf6ec",
    color: "#bfa75e",
    fontFamily: "'Georgia', serif",
    minHeight: "100vh",
    paddingTop: "80px",
    paddingBottom: "40px"
  }}
>
  <div className="col-12 col-md-8 mb-4 p-4 rounded shadow" style={{ backgroundColor: "rgba(253,246,236,0.85)" }}>
    <p className="fs-5">"Mul võiks olla sama perekonnanimi nagu sul"</p>
    <h1 className="display-4 fw-bold">{daysSince} päeva on möödunud meie tähtsast päevast</h1>
    <p>  </p>
    <p className="fs-4">
      {daysToNextAnniversary} päeva {anniversaryNumber}. tähtpäevani
    </p>
  </div>
</div>

  );
}
