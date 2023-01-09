import Directory from "../../components/directory/Directory";
import { Outlet } from "react-router-dom";

import React from "react";

function Home() {
  return (
    <div>
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
