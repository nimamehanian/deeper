import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { $gold, $cream, $pussy, $charcoal } from 'styles/colors';

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  height: 36px;
  font-size: 18px;
  font-family: 'Canela Med';
  cursor: ${({ isDisabled }) => isDisabled ? 'not-allowed' : 'pointer'};
  color: #fff;
  background: ${({ isDisabled, color }) => isDisabled ? `${color}66` : color};
  box-shadow: 0px 4px 6px rgba(50, 50, 93, 0.11), 0px 1px 3px rgba(0, 0, 0, 0.08);
  transition: all 555ms cubic-bezier(0.165, 0.840, 0.000, 1.115);
  &:hover {
    ${({ isDisabled }) => isDisabled ? '' : `
      box-shadow: 0px 7px 14px rgba(50, 50, 93, 0.11), 0px 3px 6px rgba(0, 0, 0, 0.08);
      transform: translateY(${isDisabled ? '0px' : '-1px'});
    `}
  }
`;

function Button({ onClickHandler, isDisabled, label, color }) {
  return (
    <ButtonWrapper
      onClick={isDisabled ? () => ({}) : onClickHandler}
      isDisabled={isDisabled}
      color={color}
    >
      {label}
    </ButtonWrapper>
  );
}

Button.defaultProps = {
  onClickHandler: () => ({}),
  isDisabled: false,
  label: 'Continue',
  color: $gold,
};

Button.propTypes = {
  onClickHandler: PropTypes.func,
  isDisabled: PropTypes.bool,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default Button;
