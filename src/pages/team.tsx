import Image from 'next/image';
import Navbar from '../components/Navbar';
import Avatar from '../../public/img/avatar.png';
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
      <Navbar />
      <section id="home" className="other-main-sections">
        <div className="container">
          <main role="main">
            <section className="jumbotron text-center">
              <div className="container">
                <h1 className="jumbotron-heading">SCIN Team</h1>
              </div>
            </section>
            <div
              className="row justify-content-around py-5"
              style={{ textAlign: 'center' }}
            >
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <Image
                      src={Avatar}
                      className="card-img-top"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="avatar-image-filler"
                      priority
                    />
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="col">
                <div className="row justify-content-center">
                  <div className="col-4">
                    <Image
                      src={Avatar}
                      className="card-img-top"
                      layout="responsive"
                      width={100}
                      height={100}
                      alt="avatar-image-filler"
                      priority
                    />
                  </div>
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </main>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
