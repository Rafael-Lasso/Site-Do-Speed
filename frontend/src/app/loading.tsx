"use client";

import "./styles/loading.css";

export default function SharinganLoading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="container-preloading-website">
      <div className="sharingon">
        <div className="ring">
          <div className="to"></div>
          <div className="to"></div>
          <div className="to"></div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}
