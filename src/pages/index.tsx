import Link from 'next/link';
import SEO from '../components/seo';
import Image from 'next/image';
import MainNavbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

export default function Home() {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Decentralized Scientific Publishing'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <MainNavbar />
      {/* <!-- ========================= hero-section start ========================= --> */}
      <section
        id="home"
        style={{
          marginTop: '1rem',
          backgroundColor: '#0F7AB6',
          color: 'white',
        }}
      >
        <div className="container d-flex align-items-center justify-content-center pt-200 pb-200">
          <div className="row align-items-center">
            <div className="hero-content">
              <h1
                className="wow fadeInUp pb-70 hero-title"
                data-wow-delay=".2s"
              >
                {`Welcome to SCIN:`} <br />{' '}
                {`Revolutionizing Scientific Publishing`}
              </h1>
              <h3 className="wow fadeInUp pt-70 pb-50" data-wow-delay=".4s">
                Empowering Authors and Reviewers with Copyright Ownership in
                Peer-Reviewed Publishing!
              </h3>
              <div className="hero-btns wow fadeInUp">
                <div className="row g-3">
                  <div className="col-auto">
                    <Link href="/form" passHref>
                      <a className="btn btn-dark btn-lg" data-wow-delay=".6s">
                        Publish With Us
                      </a>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link href="/team" passHref>
                      <a
                        className="btn btn-outline-light btn-lg"
                        data-wow-delay=".6s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= hero-section end ========================= --> */}
      {/* <!-- ========================= hero-section start ========================= --> */}
      <section
        id="home"
        className="d-flex flex-column align-items-center justify-content-center pt-150 pb-50"
      >
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <div className="flex align-items-center justify-content-center">
            <h1
              className="text-center"
              style={{
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                padding: '10px 0',
                background: '-webkit-linear-gradient(45deg, #0F7AB6, #0d6efd)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Unlocking the Future of Scientific Publishing
            </h1>
            <p
              className="mt-4 lead"
              style={{ marginTop: '2rem' }}
              data-wow-delay=".4s"
            >
              At SCIN, we are rewriting the story of scientific publishing.
              We're not just a startup; we are the future of scholarly
              communication. SCIN, short for Scientific Independence, is the
              groundbreaking platform where knowledge meets rewards. We are more
              than just a publisher; we are a catalyst for change in the
              academic world.
            </p>
          </div>
          <div className="custom-divider mt-100"></div>
        </div>
      </section>
      {/* <!-- ========================= hero-section end ========================= --> */}
      {/* <!-- ========================= tracking-section start ========================= --> */}
      <section id="tracking" className="tracking-section pt-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tracking-content">
                <div
                  className="section-title mb-50"
                  style={{ marginRight: '2rem' }}
                >
                  <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                    Our Mission: Empowering the Scientific Community
                  </h1>
                  <h5
                    className="mb-30 fst-italic wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    Bringing Science to Life, One Discovery at a Time
                  </h5>
                  <div className="text-styling">
                    Our mission is clear: to empower authors, reviewers,
                    editors, and institutions by transforming the way we
                    disseminate scientific knowledge. SCIN is the first platform
                    of its kind, pioneering a revolutionary business model and
                    ecosystem that makes publishing not just a scholarly
                    endeavor but a rewarding one.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  borderRadius: '20px', // Add border radius
                  overflow: 'hidden', // Ensure the image follows the border radius
                  filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3))', // Add a fade effect
                }}
              >
                <Image
                  src="img/hero/1602186250-GettyImages-1150199386.jpg"
                  layout="responsive"
                  width={851}
                  height={601}
                  alt="Publishing Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= tracking-section end ========================= --> */}

      {/* <!-- ========================= search-section start ========================= --> */}
      <section id="tracking" className="tracking-section pt-150 mt-70">
        <div
          className="pt-80 pb-80"
          style={{ backgroundColor: '#0F7AB6', color: 'white' }}
        >
          <div className="container d-flex align-items-center justify-content-center tracking-content">
            <div
              className="section-title mb-50"
              style={{
                marginRight: '2rem',
                paddingLeft: '3rem',
                maxWidth: '60rem',
              }}
            >
              <h1
                className="mb-30 wow fadeInUp"
                style={{ color: 'white' }}
                data-wow-delay=".2s"
              >
                SCIN's Unique Approach
              </h1>
              <h5
                className="mb-30 fst-italic wow fadeInUp"
                style={{ color: 'lightgrey' }}
                data-wow-delay=".2s"
              >
                Your Ideas, Your Rewards
              </h5>
              <div className="text-styling">
                SCIN operates on a simple principle: authors deserve more than
                just recognition; they deserve compensation for their
                contributions. We believe that reviewers, the unsung heroes of
                scientific publishing, also deserve recognition for their
                invaluable service.
              </div>
              <div className="text-styling">
                We offer an enticing proposition to authors and reviewers alike:
                get paid for your work, fueling your passion for discovery while
                contributing to the advancement of human knowledge. When you
                publish or review with SCIN, you are not just building a career;
                you are building a legacy.
              </div>
              <div className="mt-40 wow fadeInUp">
                <div className="row g-3">
                  <div className="col-auto">
                    <Link href="/form" passHref>
                      <a className="btn btn-dark btn-lg" data-wow-delay=".6s">
                        Join Our Waitlist
                      </a>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link href="/team" passHref>
                      <a
                        className="btn btn-outline-light btn-lg"
                        data-wow-delay=".6s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= search-section end ========================= --> */}
      <section id="tracking" className="tracking-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="tracking-content">
                <div
                  className="section-title mb-50"
                  style={{ marginRight: '2rem' }}
                >
                  <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                    Benefits for Libraries and Institutions
                  </h1>
                  <h5
                    className="mb-30 fst-italic wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    Empowering the Knowledge Guardians
                  </h5>
                  <div className="text-styling">
                    Libraries and institutions are the guardians of knowledge.
                    With SCIN, they become co-owners of the content produced by
                    their members who publish with us. This means that not only
                    can institutions support their researchers in new ways, but
                    they also get to participate in the rewards generated by
                    their own intellectual community.
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  borderRadius: '20px', // Add border radius
                  overflow: 'hidden', // Ensure the image follows the border radius
                  filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3))', // Add a fade effect
                }}
              >
                <Image
                  src="/img/hero/image.png"
                  layout="responsive"
                  width={851}
                  height={601}
                  alt="Publishing Hero Image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tracking" className="tracking-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-img wow fadeInUp"
                data-wow-delay=".5s"
                style={{
                  borderRadius: '20px', // Add border radius
                  overflow: 'hidden', // Ensure the image follows the border radius
                  filter: 'drop-shadow(0 0 2rem rgba(0, 0, 0, 0.3))', // Add a fade effect
                }}
              >
                <Image
                  src="/img/hero/teamwork-in-the-workplace-rh.jpg"
                  layout="responsive"
                  width={851}
                  height={601}
                  alt="Publishing Hero Image"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tracking-content">
                <div
                  className="section-title mb-50"
                  style={{ marginLeft: '2rem' }}
                >
                  <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                    Benefits for Journal Owners
                  </h1>
                  <h5
                    className="mb-30 fst-italic wow fadeInUp"
                    data-wow-delay=".2s"
                  >
                    Reducing Costs, Accelerating Progress
                  </h5>
                  <div className="text-styling">
                    For journal owners, SCIN is a game-changer. Our model
                    reduces the financial burden on publishers by providing a
                    sustainable way to pay authors and reviewers. Plus, our
                    efficient system accelerates the turnaround time of the
                    reviewing process, meaning your content gets published
                    faster, reaching a global audience in record time.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tracking" className="tracking-section pt-150 text-center">
        <div className="container d-flex align-items-center justify-content-center">
          <div className="tracking-content">
            <div className="section-title" style={{ maxWidth: '50rem' }}>
              <h1 className="mb-30 wow fadeInUp" data-wow-delay=".2s">
                Transparency and Trust: The SCIN Way
              </h1>
              <h5
                className="mb-30 fst-italic wow fadeInUp"
                style={{ color: 'darkgrey' }}
                data-wow-delay=".2s"
              >
                Smart Contracts for a Smarter Future
              </h5>
              <div className="text-styling">
                SCIN is committed to transparency. We utilize cutting-edge smart
                contracts to ensure that payments are fair, transparent, and
                delivered promptly. With SCIN, you can trust that your work is
                not only valued but rewarded.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="tracking" className="tracking-section pt-40 mt-70">
        <div
          className="pt-80 pb-80"
          style={{ backgroundColor: '#0F7AB6', color: 'white' }}
        >
          <div className="tracking-content container d-flex align-items-center justify-content-center">
            <div
              className="section-title mb-50"
              style={{
                marginRight: '2rem',
                paddingLeft: '3rem',
                maxWidth: '60rem',
              }}
            >
              <h1
                className="mb-30 wow fadeInUp"
                style={{ color: 'white' }}
                data-wow-delay=".2s"
              >
                Join the SCIN Revolution
              </h1>
              <div className="text-styling">
                The time for change is now, and the future of scientific
                publishing is in your hands. Join us in reshaping the landscape
                of academia, where every contributor is celebrated, and every
                institution benefits.
              </div>
              <div className="text-styling">
                Be a part of the SCIN community today. Join our waitlist to be
                among the first to experience the future of scientific
                publishing, where knowledge is power, and rewards await those
                who dare to innovate.
              </div>
              <p>
                Unlock the Future with{' '}
                <span style={{ fontWeight: 'bold' }}>SCIN.</span>
              </p>
              <div className="mt-40 wow fadeInUp">
                <div className="row g-3">
                  <div className="col-auto">
                    <Link href="/form" passHref>
                      <a className="btn btn-dark btn-lg" data-wow-delay=".6s">
                        Join Our Waitlist
                      </a>
                    </Link>
                  </div>
                  <div className="col-auto">
                    <Link href="/team" passHref>
                      <a
                        className="btn btn-outline-light btn-lg"
                        data-wow-delay=".6s"
                      >
                        Learn More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= testimonial-section start ========================= --> */}
      <section id="signup-for-product" className="testimonial-section pt-150">
        <div className="container text-center">
          <h1>Are you intesred in publishing your paper with us?</h1>
          <br />
          <p className="text-center">
            Please sign up and we will get back to you soon.
          </p>
          <div className="row justify-content-center my-4">
            <div className="col-auto">
              <form
                id="subscription-form"
                action="https://formspree.io/f/mknyrgbe"
                method="POST"
              >
                <div className="input-group mb-3">
                  <Link href="/form" passHref>
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      id="subscribe-btn"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
                <p id="my-form-status"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= testimonial-section end ========================= --> */}

      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
}
