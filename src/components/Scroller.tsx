import { useEffect, useState } from 'react';

const ScrollTopView = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const scrollHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (showTopBtn) {
    return (
      <a onClick={scrollHandler} className="scroll-top btn-hover">
        <em className="lni lni-chevron-up"></em>
      </a>
    );
  }
  return <></>;
};

export default ScrollTopView;
