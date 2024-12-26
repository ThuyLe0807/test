import React from "react";
import styled from "styled-components";
import "./App.css";
import Sidebar from "./component/Sidebar";
import Header from "./component/Header";
import CheckinScreen from "./screen/CheckinScreen";

// Styled components
const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const SidebarContainer = styled.div`
  flex-shrink: 0;
  width: 200px; /* Chiều rộng cố định cho Sidebar */
`;

const MainContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <AppContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <MainContent>
        <Header />
        <CheckinScreen />
      </MainContent>
    </AppContainer>
  );
}

export default App;
