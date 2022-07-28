import { React, useState } from 'react';
import { MdExpandLess } from 'react-icons/md';
import { useSpring, animated } from '@react-spring/web';

import './../Style/Accordion.css';
function Accordion(props) {
  const [open, setOpen] = useState(false);
  //toggle accordion function
  let toggleHandler = (e) => {
    //switch state
    setOpen(!open);
  };
  //conditional styling
  const styles = {
    //if open is true, show content
    accordionTitle: {
      color: open ? 'rgb(236, 240, 36)' : '#fff',
    },
  };
  //open animation with react spring
  const openAnimation = useSpring({
    from: { opacity: '0', maxHeight: '60px' },
    to: { opacity: '1', maxHeight: open ? '100%' : '60px' },
    config: { duration: '100' },
  });
  //rotate animation
  const iconAnimation = useSpring({
    from: {
      transform: 'rotate(0deg)',
      color: '#ffff',
    },
    to: {
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      color: open ? 'rgb(236, 240, 36)' : '#fff',
    },
    config: { duration: '120' },
  });
  return (
    <animated.div className="accordion__item" style={openAnimation}>
      <div className="accordion__header" onClick={toggleHandler}>
        <div className="accordion__icon">{props.icon}</div>
        <h4 style={styles.accordionTitle}>{props.title}</h4>
        <animated.i style={iconAnimation}>
          <MdExpandLess />
        </animated.i>
      </div>
      <div className="accordion__content">{props.text}</div>
    </animated.div>
  );
}
export default Accordion;
