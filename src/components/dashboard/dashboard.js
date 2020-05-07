import React, { useContext } from 'react';
import styled from 'styled-components';

import { UserContext } from 'components/userProvider/userProvider';

const DashboardWrapper = styled.div`
  font-size: 32px;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

function Dashboard() {
  const { currentUser } = useContext(UserContext);
  return (
    <DashboardWrapper>
      Welcome, {currentUser.email}!
    </DashboardWrapper>
  );
}

export default Dashboard;
