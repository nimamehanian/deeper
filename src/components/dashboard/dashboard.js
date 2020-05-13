import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { $darkBg } from 'styles/colors';
import { transition } from 'styles/mixins';

import Sidebar from 'components/sidebar/sidebar';
import { UserContext } from 'components/userProvider/userProvider';

const DashboardWrapper = styled.div`
  background: ${$darkBg};
  font-size: 32px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  padding-left: 8px;
  z-index: 1;
  transform: ${({ isSidebarOpen }) => `translate3d(${isSidebarOpen ? 232 : 0}px, 0px, 0px)`};
  ${transition}
  span {
    cursor: pointer;
  }
`;

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Sidebar />
      <DashboardWrapper isSidebarOpen={isSidebarOpen}>
        <span onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          Welcome, {currentUser.email}!
        </span>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
