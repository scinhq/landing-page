import SEO from '../components/seo';
import Link from 'next/link';
import MainNavbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckToSlot } from '@fortawesome/free-solid-svg-icons';

const ThankYou = () => {
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
      <section id="tracking" className="tracking-section mt-100 mb-100">
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center custom-thank-you-page">
            <FontAwesomeIcon
              icon={faCheckToSlot}
              className="check-icon-style"
            />
            <div style={{ width: '75%' }}>
              <h1 className="mb-40">Thank You for Joining Our Waitlist!</h1>
              <div style={{ fontSize: '22px', marginBottom: '10px' }}>
                Your interest means a lot, and we're excited to have you on
                board.
              </div>
              <div className="mb-60">
                Rest easy; you're officially on the waitlist, and when we
                launch, you'll be the first to know. Expect an email with all
                the details on joining and publishing with us.
              </div>
              <div className="mb-40 mt-30">
                <Link href="/team" passHref>
                  <a className="btn btn-primary btn-lg" data-wow-delay=".6s">
                    Learn More
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
};

export default ThankYou;
