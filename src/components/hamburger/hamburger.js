import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSpring, animated, interpolate } from 'react-spring';
import { $darkBg, $cream } from 'styles/colors';
// import { easeInOutQuint } from 'styles/mixins';

const Toggler = styled(animated.div)`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 4;
`;

const Bars = styled.div`
  width: 40px;
`;

const Bar = styled(animated.div)`
  display: block;
  height: 2px;
  margin: 6px 4px;
`;

function Hamburger({ isSidebarOpen, setIsSidebarOpen }) {
  const config = { mass: 1, tension: 360, friction: 36 };
  const [{
    background,

    offsetY,
    opacity,

    rotate,

    bar3rotate,
    offsetX,
    bar3offsetY,
  }, setStyles] = useSpring(() => ({
    background: $cream,

    offsetY: 0,
    opacity: 1,

    rotate: 0,

    bar3rotate: 0,
    offsetX: 0,
    bar3offsetY: 0,

    config,
  }));

  // const [{ position }, setPosition] = useSpring(() => ({ position: 0, config: { duration: 400, easing: easeInOutQuint }, }));

  useEffect(() => {
    setStyles(isSidebarOpen ? {
      background: $darkBg,

      offsetY: -10,
      opacity: 0,

      rotate: -315,

      bar3rotate: -45,
      offsetX: 6,
      bar3offsetY: -6,
    } : {
      background: $cream,

      offsetY: 0,
      opacity: 1,

      rotate: 0,
      width: 24,

      bar3rotate: 0,
      offsetX: 0,
      bar3offsetY: 0,
    });
    // setPosition(isSidebarOpen ? { position: 174 } : { position: 0 });
  }, [isSidebarOpen]);

  return (
    <Toggler
      onClick={() => setIsSidebarOpen(x => !x)}
      // style={{ transform: position.interpolate(x => `translate3d(${x}px, 0px, 0px)`) }}
    >
      <Bars>
        {
          [
            {
              background,
              opacity: opacity.interpolate(alpha => Math.round(alpha * 10) / 10),
              transform: offsetY.interpolate(y => `translate3d(0px, ${y}px, 0px)`),
            },
            {
              background,
              transform: rotate.interpolate(r => `rotate(${r}deg)`),
            },
            {
              background,
              transform: interpolate(
                [bar3rotate, offsetX, bar3offsetY],
                // Order matters: rotate, then translate.
                (r, x, y) => `rotate(${r}deg) translate3d(${x}px, ${y}px, 0px)`
              ),
            },
          ].map((style, idx) => <Bar key={`bar_${idx + 1}`} style={style} />)
        }
      </Bars>
    </Toggler>
  );
}

export default Hamburger;
