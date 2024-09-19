import React, { useState } from "react";
import Search from "../components/search/Search";
import Cart from "./Cart";

function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Search />
      <br />
      {open && <Cart />}
    </div>
  );
}

export default Home;
