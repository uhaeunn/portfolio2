import './ScrollToTop.css'
import { useEffect, useState } from 'react';

function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    show && (
      <button className = 'topbutton' onClick={scrollToTop} style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
        ⬆ Go To Top
      </button>
    )
  );
}

export default ScrollToTop;
