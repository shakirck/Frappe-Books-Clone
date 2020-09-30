import React from "react";
import Navbar from "./Navbar";
import Landing from "./Landing";
import Cartoon from "./Cartoon";
import CardList from "./CardList";
import TabNav from "./TabNav";
import Team from "./Team";
import Download from "./Download";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="Home">
      <Navbar />
      <Landing />
      <Cartoon />
      <CardList />
      <TabNav />
      <Team />
      <Download />
      <Footer />
    </div>
  );
}
