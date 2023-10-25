import React from 'react';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';
import Link from 'next/link';

const blogs = [
  {
    title: 'Revolutionizing Scientific Publishing:',
    subTitle: 'A Monetization Paradigm for Reviewers and Authors',
    image: '/img/blog/rsp.png',
  },
  {
    title: 'Empowering Scientific Publishing:',
    subTitle: 'Monetizing Reviewers and Authors for a New Era of Discovery',
    image: '/img/blog/empowering.png',
  },
  {
    title: 'Blockchain and Smart Contracts:',
    subTitle:
      'Transforming Scientific Publishing with Monetization and Integrity',
    image: '/img/blog/smart_contract.png',
  },
  {
    title: 'Elevating Scholarly Publishing:',
    subTitle:
      'Harnessing AI to Match Papers, Editors, Reviewers, and Optimize Content Discovery',
    image: '/img/blog/multiples.png',
  },
  {
    title: 'Smart Ranking System:',
    subTitle:
      'Revolutionizing Scholarly Publishing, Author Evaluation, and Expert Matchmaking',
    image: '/img/blog/ranking_system.png',
  },
];

const BlogPage = () => {
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
      {/* ... other sections above */}
      <div className="container mt-150">
        <div className="row">
          {blogs.map((blog, index) => (
            <div className="col-md-4 d-flex align-items-stretch" key={index}>
              <div className="card mb-5">
                <div className="card-body">
                  <div
                    className="hero-img wow fadeInUp mb-5"
                    data-wow-delay=".5s"
                    style={{
                      borderRadius: '20px',
                      overflow: 'hidden',
                      filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3))',
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
                  <h5 className="card-title mb-1">{blog.title}</h5>
                  <h5 className="card-title mb-3">{blog.subTitle}</h5>
                  <Link
                    href={`/${blog.title.split(' ').join('-').toLowerCase()}`}
                  >
                    <a className="btn btn-primary">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
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
