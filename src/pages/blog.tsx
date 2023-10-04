import React, { useState } from 'react';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';
import firstImage from '../../public/img/hero/1_j6TaV7aTIeTEH_z4o0MozA.jpg';
import secondImage from '../../public/img/hero/1602186250-GettyImages-1150199386.jpg';
import thirdImage from '../../public/img/hero/image.png';
import fourthImage from '../../public/img/hero/membership_orig.jpg';
import fifthImage from '../../public/img/hero/teamwork-in-the-workplace-rh.jpg';
import sixthImage from '../../public/img/hero/new-hero.jpg';

const BlogPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const blogs = [
    {
      title:
        'Revolutionizing Scientific Publishing: A Monetization Paradigm for Reviewers and Authors',
      content: `In the rapidly evolving landscape of scientific publishing, traditional models are being challenged 
        by innovative approaches that seek to benefit both reviewers and authors. This paradigm shift not only enhances
         the quality of research but also addresses the financial concerns of both stakeholders. In this blog post,
         we will explore how revolutionary scientific publishing can monetize both reviewers and authors, driving 
         organic growth and fostering collaboration within the research community. ...`,
      image: firstImage,
    },
    {
      title:
        'Empowering Scientific Publishing: Monetizing Reviewers and Authors for a New Era of Discovery',
      content: `In the ever-evolving realm of scientific publishing, innovation is paving the way for a revolutionary
        approach that benefits both the reviewers who uphold research quality and the authors who drive discovery. 
        This paradigm shift not only elevates the standard of published work but also acknowledges the invaluable contributions 
        of those involved. In this blog post, we delve into the concept of monetizing both reviewers and authors in the context
        of groundbreaking scientific publishing.`,
      image: secondImage,
    },
    {
      title:
        'Blockchain and Smart Contracts: Transforming Scientific Publishing with Monetization and Integrity',
      content: `In the rapidly evolving landscape of scientific publishing, traditional models are being challenged by innovative approaches that seek to benefit both reviewers and authors. This paradigm shift not only enhances the quality of research but also addresses the financial concerns of both stakeholders. In this blog post, we will explore how revolutionary scientific publishing can monetize both reviewers and authors, driving organic growth and fostering collaboration within the research community. ...`,
      image: thirdImage,
    },
    {
      title:
        'Elevating Scholarly Publishing: Harnessing AI to Match Papers, Editors, Reviewers, and Optimize Content Discovery',
      content: `In the rapidly evolving landscape of scientific publishing, traditional models are being challenged by innovative approaches that seek to benefit both reviewers and authors. This paradigm shift not only enhances the quality of research but also addresses the financial concerns of both stakeholders. In this blog post, we will explore how revolutionary scientific publishing can monetize both reviewers and authors, driving organic growth and fostering collaboration within the research community. ...`,
      image: fourthImage,
    },
    {
      title:
        'Blockchain and Smart Contracts: Transforming Scientific Publishing with Monetization and Integrity',
      content: `In the rapidly evolving landscape of scientific publishing, traditional models are being challenged by innovative approaches that seek to benefit both reviewers and authors. This paradigm shift not only enhances the quality of research but also addresses the financial concerns of both stakeholders. In this blog post, we will explore how revolutionary scientific publishing can monetize both reviewers and authors, driving organic growth and fostering collaboration within the research community. ...`,
      image: fifthImage,
    },
    {
      title:
        'Elevating Scholarly Publishing: Harnessing AI to Match Papers, Editors, Reviewers, and Optimize Content Discovery',
      content: `In the rapidly evolving landscape of scientific publishing, traditional models are being challenged by innovative approaches that seek to benefit both reviewers and authors. This paradigm shift not only enhances the quality of research but also addresses the financial concerns of both stakeholders. In this blog post, we will explore how revolutionary scientific publishing can monetize both reviewers and authors, driving organic growth and fostering collaboration within the research community. ...`,
      image: sixthImage,
    },
  ];

  const handleShowModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Decentralized Scientific Publishing'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <Navbar />
      {/* <!-- ========================= hero-section start ========================= --> */}
      {/* ... other sections above */}
      <div className="container mt-150">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4" key={index}>
              <div className="card mb-5">
                <div className="card-body">
                  <div
                    className="hero-img wow fadeInUp mb-5"
                    data-wow-delay=".5s"
                    style={{
                      borderRadius: '20px', // Add border radius
                      overflow: 'hidden', // Ensure the image follows the border radius
                      filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3))', // Add a fade effect
                    }}
                  >
                    <Image
                      src={blog.image}
                      layout="responsive"
                      width={851}
                      height={601}
                      alt="Publishing Hero Image"
                    />
                  </div>
                  <h5 className="card-title mb-3">{blog.title}</h5>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleShowModal(blog.content)}
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="modal" style={{ display: 'block' }}>
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="close"
                    onClick={() => setShowModal(false)}
                  >
                    &times;
                  </button>
                </div>
                <div className="modal-body">
                  <p>{modalContent}</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
};

export default BlogPage;
