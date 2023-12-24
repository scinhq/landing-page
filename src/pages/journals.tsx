import React from 'react';
import SEO from '../components/seo';
import MainNavbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

import backgroundImg from '../../public/img/journal/coming.png';

const Journals = () => {
  return (
    <>
      <SEO
        title={'SCIN Journals'}
        siteTitle={'SCIN Pricing Model'}
        description={
          'Explore a wide range of scientific journals coming soon to SCIN.'
        }
      />
      <MainNavbar />
      <section
        className="d-flex align-items-center justify-content-center"
        style={{
          position: 'relative',
          minHeight: '80vh',
          backgroundImage: `url(${backgroundImg.src})`,
          backgroundSize: 'cover',
          padding: '40px',
          borderRadius: '5px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.05)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        ></div>
        <div
          className="container mt-5 pb-5"
          style={{ position: 'relative', zIndex: 1 }}
        >
          <h1 className="text-center mb-4" style={{ color: '#fff' }}>
            SCIN Journals - Coming Soon
          </h1>
          <div
            className="text-styling"
            style={{ color: '#fff', fontSize: '1rem' }}
          >
            We are excited to introduce our collection of scientific journals on
            SCIN. Stay tuned as we curate a range of journals covering various
            scientific disciplines.
          </div>
        </div>
      </section>

      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>
      <ScrollTopView />
    </>
  );
};

export default Journals;
