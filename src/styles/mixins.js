import styled from 'styled-components';

export const CenterViewport = styled.div`
  display: flex;
  justify-content: center;
`;

export const disableHighlight = `
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -o-user-select: none;
  user-select: none;
`;

export const transition = `
  transition: all 400ms cubic-bezier(0.83, 0, 0.17, 1);
`;

export function easeInOutQuint(x) {
  return x < 0.5 ? 16 * Math.pow(x, 5) : 1 - Math.pow(-2 * x + 2, 5) / 2;
}

export function alpha(color, opacity) {
  const opacities = Object.freeze({
    1: '1a', 2: '33', 3: '4d',
    4: '66', 5: '80', 6: '99',
    7: 'b3', 8: 'cc', 9: 'e6',
  });
  return `${color[0] === '#' ? color : `#${color}`}${opacities[opacity] || ''}`;
}
