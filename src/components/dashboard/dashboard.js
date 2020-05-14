import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { $darkBg } from 'styles/colors';
import { transition } from 'styles/mixins';

import Sidebar from 'components/sidebar/sidebar';
import Hamburger from 'components/hamburger/hamburger';
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
`;

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  // e.g., currentUser.email, etc.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <Hamburger isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <Sidebar />
      <DashboardWrapper isSidebarOpen={isSidebarOpen}>
      </DashboardWrapper>
    </>
  );
}

export default Dashboard;
