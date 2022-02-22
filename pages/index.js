import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';

export default function Home() {
  return (
    <div className={''}>
      <Head>
        <meta charset="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>SCIN - Decentralized Scientific Publishing</title>
        <meta
          name="description"
          content="SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work."
        />
        <meta
          name="keywords"
          content="Decentralized Publishign, DePub, Scientist Independence, SCIN, SCIN.io, SCIN.tech"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="img/favicon.svg" />
      </Head>

      {/* <!-- ========================= preloader start ========================= --> */}
      <div className="preloader">
        <div className="loader">
          <div className="ytp-spinner">
            <div className="ytp-spinner-container">
              <div className="ytp-spinner-rotator">
                <div className="ytp-spinner-left">
                  <div className="ytp-spinner-circle"></div>
                </div>
                <div className="ytp-spinner-right">
                  <div className="ytp-spinner-circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- preloader end --> */}
      {/* <!-- ========================= header start ========================= --> */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
                <nav className="navbar navbar-expand-lg">
                  <Link href={''} passHref>
                    <a className="navbar-brand">
                      <img
                        className="logo-1"
                        src="img/logo/logo.png"
                        alt="SCIN Logo"
                      />
                    </a>
                  </Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  ></div>
                  {/* <!-- navbar collapse --> */}
                </nav>
                {/* <!-- navbar --> */}
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- navbar area --> */}
      </header>
      {/* <!-- ========================= header end ========================= --> */}

      {/* <!-- ========================= hero-section start ========================= --> */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content">
                <h1 className="wow fadeInUp" data-wow-delay=".2s">
                  Decentralized Scientific Publishing Platform
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".4s">
                  Promoting Open Access peer-reviewed publishing and leaving the
                  copytright ownership of publications to authors and reviewers.
                </p>
                <div className="hero-btns wow fadeInUp">
                  <div className="row g-3">
                    <div className="col-auto">
                      <Link href="#signup-for-product" passHref>
                        <a
                          className="btn btn-primary btn-lg"
                          data-wow-delay=".6s"
                        >
                          Publish With Us
                        </a>
                      </Link>
                    </div>
                    <div className="col-auto">
                      <Link href="about" passHref>
                        <a
                          className="btn btn-outline-primary btn-lg"
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
            <div className="col-lg-6">
              <div className="hero-img wow fadeInUp" data-wow-delay=".5s">
                <img src="img/hero/hero-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-shape">
          {/* <!-- <img src="img/hero/hero-shape-1.svg" alt="" className="shape shape-1"> --> */}
        </div>
      </section>
      {/* <!-- ========================= hero-section end ========================= --> */}
      {/* <!-- ========================= tracking-section start ========================= --> */}
      <section id="tracking" className="tracking-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-xl-7">
              <div className="tracking-image">
                <img src="img/plan/smart contract.svg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <div className="tracking-content">
                <div className="section-title mb-50">
                  <h1 className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                    Why SCIN?
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    We are on a mission to revolutionize the scientific
                    publishing and empower the authors and researchers to keep
                    the ownership of their work. Authors will have the choice to
                    publish their work as Open Access with lower fees or retain
                    the ownership of their work.
                  </p>
                  <br />
                  <p>
                    This is achieved through our decentralized puyblishing
                    platform which publishes your scientific work as a smart
                    contract.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= tracking-section end ========================= --> */}

      {/* <!-- ========================= search-section start ========================= --> */}
      <section className="search-section pt-150">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6 order-last order-lg-first">
              <div className="search-content">
                <div className="section-title mb-40">
                  <h1 className="mb-40 wow fadeInUp" data-wow-delay=".2s">
                    What SCIN Brings To The Scientific Community?
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay=".4s">
                    SCIN empowers authors/researchers to own their publishing
                    and decide if they want to publish it as open access or earn
                    lifetime royalties on their work. Through our decentralized
                    nature, we are able to provide authors with a platform to
                    publish their work as a smart contract.
                  </p>
                  <br />
                  <p>
                    We are revolutionizing the peer-review publishing by
                    incentivizing reviewers to review the publications with more
                    accountability and responsibility. This is achieved by our
                    unique fair system of distribution of royalties.
                  </p>
                </div>
                <div className="app-info">
                  <div className="single-info">
                    <div className="icon-style color-1">
                      <h6>Open Access</h6>
                    </div>
                    <p className="icon-descr">
                      Promoting Open Access publishing by reducing the
                      publishing costs
                    </p>
                  </div>
                  <div className="single-info">
                    <div className="icon-style color-2">
                      <h6>Copyright Ownership</h6>
                    </div>
                    <p className="icon-descr">
                      Authors will retain the copyright ownership of their work.
                    </p>
                  </div>
                </div>
                <div className="app-info">
                  <div className="single-info">
                    <div className="icon-style color-3">
                      <h6>Royalty Earning</h6>
                    </div>
                    <p className="icon-descr">
                      Collaborators of the publication could choose to earn
                      royalty for their work.
                    </p>
                  </div>
                  <div className="single-info">
                    <div className="icon-style color-1">
                      <h6>Expedited Reviewing</h6>
                    </div>
                    <p className="icon-descr">
                      Incentivized peer-review process to ensure timely and high
                      quality reviews of the manuscript.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-7 col-lg-6">
              <div className="search-img text-lg-right">
                <img src="img/search/search-img.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= search-section end ========================= --> */}

      {/* <!-- ========================= testimonial-section start ========================= --> */}
      <section id="signup-for-product" className="testimonial-section">
        <div className="container text-center">
          <h1>Are you intesred in publishing your paper with us?</h1>
          <br />
          <p>Please sign up and we will get back to you soon.</p>
          <div className="row justify-content-center my-4">
            <div className="col-auto">
              <form
                id="subscription-form"
                action="https://formspree.io/f/mknyrgbe"
                method="POST"
              >
                <div className="input-group mb-3">
                  <button
                    className="btn btn-primary btn-lg"
                    type="button"
                    id="subscribe-btn"
                  >
                    Sign Up
                  </button>
                  <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                </div>
                <p id="my-form-status"></p>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ========================= testimonial-section end ========================= --> */}

      {/* <!-- ========================= footer start ========================= --> */}
      <footer id="footer" className="footer">
        <div className="footer-shape">
          <img
            src="img/footer/footer-shape-1.svg"
            alt=""
            className="shape shape-1"
            width="35%"
            height="auto"
          />
        </div>
        <div className="container">
          <div className="widget-wrapper">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <div className="logo">
                    <a href="index.html">
                      {/* <!-- <img src="img/logo/logo-2.svg" alt="" className="logo-2">  --> */}
                      <img
                        src="img/logo/website-logo.svg"
                        alt=""
                        className="logo-1"
                      />
                    </a>
                  </div>
                  <ul className="socials">
                    {/* <li>
                    <a href="javascript:void(0)">
                      <em className="lni lni-facebook-filled"></em>
                    </a>
                  </li> */}
                    <li>
                      <Link href="https://twitter.com/scinhq" passHref>
                        <a target="_blank">
                          <em className="lni lni-twitter-filled"></em>
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                    <a href="javascript:void(0)">
                      <em className="lni lni-instagram-filled"></em>
                    </a>
                  </li> */}
                    <li>
                      <Link href="https://linkedin.com/company/scinhq" passHref>
                        <a target="_blank">
                          <em className="lni lni-linkedin-original"></em>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-2 col-md-6 col-sm-6 ml-auto">
                <div className="footer-widget">
                  <h3>About SCIN</h3>
                  <ul className="links">
                    <li>
                      <Link
                        href="mailto:armin@scin.io?subject=Book a meeting to discuss SCIN"
                        passHref
                      >
                        <a>Contact Us</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- ========================= footer end ========================= --> */}

      {/* <!-- ========================= JS here ========================= --> */}
      <Script
        src="js/bootstrap.5.0.0.alpha-2-min.js"
        strategy="beforeInteractive"
      />
      <Script src="js/count-up.min.js" strategy="beforeInteractive" />
      <Script src="js/wow.min.js" strategy="beforeInteractive" />
      <Script src="js/main.js" strategy="beforeInteractive" />

      {/* <!-- ========================= scroll-top ========================= --> */}
      <a href="#" className="scroll-top btn-hover">
        <em className="lni lni-chevron-up"></em>
      </a>
    </div>
  );
}
