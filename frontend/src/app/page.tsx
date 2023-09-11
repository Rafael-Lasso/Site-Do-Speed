import React, { Suspense } from "react";
import SharinganLoading from "./loading";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="contentNotices"></div>
    </>
  );
}
