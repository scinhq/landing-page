import Navbar from '../components/Navbar';
import Preloader from '../components/Preloader';
import SEO from '../components/seo';

const TeamPage = () => {
  return (
    <div>
      <SEO
        title={'SCIN'}
        siteTitle={'SCIN Team'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />
      {/* <Preloader /> */}
      <Navbar />
      <section id="home" className="other-main-sections">
        <div className="container">
          <div>Team Page</div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
