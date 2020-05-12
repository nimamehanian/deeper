import React from 'react';
import styled from 'styled-components';
import { $gold } from 'styles/colors';
import { alpha } from 'styles/mixins';

import { disableHighlight } from 'styles/mixins';

const SidebarWrapper = styled.div`
  position absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  background: ${alpha($gold, 8)};
  box-shadow: inset -9px 0 12px -9px rgba(0, 0, 0, 1);
  width: 61.8%;
  z-index: -1;
  max-width: 232px;
  overflow: hidden;
  ${disableHighlight}
`;

// Make sidebar link height 48px

function Sidebar() {
  return (
    <SidebarWrapper>

    </SidebarWrapper>
  );
}

export default Sidebar;
