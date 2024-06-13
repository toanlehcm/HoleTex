import React from "react";
import Header from "../../components/Header";
import Content from '../../components/Content';
import Sidebar from '../../components/Sidebar';
import { AppProvider } from "../../Context/AppContext";

function LearnUseContext() {
  return (
    < >
      <AppProvider>
        <Header />
        <Content />
        <Sidebar />
      </AppProvider>
    </>
  );
}

export default LearnUseContext;
