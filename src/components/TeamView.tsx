import Image from 'next/image';
import Link from 'next/link';
import FooterView, { SocialMediumInformation } from './Footer';
import { TeamSocialLinks } from './SocialButtons';
import { faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export interface FounderInfoCardProps {
  fullName: string;
  description: string;
  position: string;
  imagePath: any;
  socialMediaLinks: SocialMediumInformation[];
}

const FOUNDERS: FounderInfoCardProps[] = [
  {
    fullName: 'Armin Bodaghkhani',
    description: `Armin, a scientist, engineer, and entrepreneur with a PhD in mechanical engineering, boasts 15+ 
      years of experience. He's excelled in engineering project management and carrier in academia at various
      firms and universities. Armin holds professional engineering credentials, authored 20+ peer-reviewed journal papers,
      managed 15+ industrial projects in Canada, and guided over ten students and engineers. 
      His fervor for research and innovation has steered multiple companies to success, 
      supporting numerous entrepreneurs along the way.`,
    position: 'Co-founder and CEO',
    imagePath: '/img/team/Armin-B&W.png',
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/arminbodaghkh',
        isActive: true,
        faIcon: faXTwitter,
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/arminbodaghkhani',
        isActive: true,
        faIcon: faLinkedin,
      },
    ],
  },
  {
    fullName: 'Ismael Golmaohammadi',
    description: `Ismael is an industrial engineer who is currently pursuing a PhD in 
      international business and strategy at Memorial University, Canada. 
      In addition to his academic achievements, exemplified by his reception of 
      the prestigious Best Paper Award from the Administrative Science Association of Canada, 
      Ismael has fourteen years of industry experience. His diverse professional journey has encompassed 
      roles including Business and Strategy Analyst, Marketing Manager, and Director of Business Development.`,
    position: 'Co-founder and CBDO',
    imagePath: '/img/team/Ismael-B&W.jpg',
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/IsmaelGolm',
        isActive: true,
        faIcon: faXTwitter,
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/igolm',
        isActive: true,
        faIcon: faLinkedin,
      },
    ],
  },
  {
    fullName: 'Masoud Zare',
    description: `Masoud is a computer science student at Memorial University, complemented by a bachelor's degree in business and seven years of marketing experience. Recently, he spent two years as a Full Stack Developer, creating web applications and responsive websites. His unique blend of technical expertise and business insights positions him as an invaluable asset in both tech and multidisciplinary roles.
      Having worked in diverse capacities ranging from marketing roles to pivotal tech positions, Masoud has cultivated a holistic view of projects, ensuring both the functional and aesthetic aspects are in harmony.`,
    position: 'Co-founder and CTO',
    imagePath: '/img/team/Masoud-B&W.jpg',
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/masoudzare18',
        isActive: true,
        faIcon: faXTwitter,
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/masoudzare',
        isActive: true,
        faIcon: faLinkedin,
      },
    ],
  },
];

export default function TeamView() {
  const founderCard = (founderInfo: FounderInfoCardProps) => {
    return (
      <div className="card mb-4 rounded-3 shadow-sm p-3">
        <div className="row justify-content-around">
          <div className="col-4">
            <Image
              src={founderInfo.imagePath}
              className="card-img-top rounded-circle border"
              layout="responsive"
              width={100}
              height={100}
              alt="avatar-image-filler"
              priority
            />
          </div>
        </div>
        <div className="card-body d-flex flex-column">
          <div className="flex-grow-1">
            <h3 className="card-title mb-2 pricing-card-title text-center text-nowrap">
              {founderInfo.fullName}
            </h3>
            <h5 className="text-muted mb-4 fw-light text-center text-nowrap">
              {founderInfo.position}
            </h5>
            <div className="text-muted text-styling">
              {founderInfo.description}
            </div>
          </div>
          {TeamSocialLinks(founderInfo)}
        </div>
      </div>
    );
  };

  return (
    <div className="other-main-sections">
      <section id="tracking">
        <div className="container d-flex justify-content-center align-items-center pb-150">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h1
              className="display-3 mb-40 wow fadeInUp text-center"
              data-wow-delay=".2s"
              style={{
                fontWeight: 'bold', // Bold font-weight
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)', // Subtle text-shadow for depth
                background: '-webkit-linear-gradient(45deg, #0F7AB6, #0d6efd)', // Gradient background
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Revolutionizing Scholarly Publishing
            </h1>

            <h3 className="display-4 mb-4">Our Vision</h3>
            <div className="text-styling text-center px-4">
              SCIN is a technology company that builds a decentralized
              publishing system that enables researchers to publish their
              scientific articles while retaining the copyright ownership of
              their work.
            </div>
          </div>
        </div>
      </section>
      <section
        id="tracking"
        style={{ backgroundColor: '#0F7AB6', color: '#ffffff' }}
      >
        <div className="d-flex align-items-center justify-content-center pt-80 pb-60">
          <div className="container">
            <h2 className="display-6 fw-normal text-center mb-4">
              Our Mission
            </h2>

            <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
              {/* Empowering Authors */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3">Empowering Authors</h4>
                  <div className="text-styling">
                    SCIN is on a mission to support and uplift authors,
                    especially graduate researchers and emerging talents. By
                    providing fair compensation, we aim to ensure authors
                    continue their roles in shaping the future of research.
                  </div>
                </div>
              </div>

              {/* Accelerating the Review Process */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3">Accelerating the Review Process</h4>
                  <div className="text-styling">
                    We are committed to expediting the peer review process. Our
                    approach matches manuscripts with expert reviewers,
                    streamlining evaluation and accelerating groundbreaking
                    research dissemination.
                  </div>
                </div>
              </div>

              {/* Revolutionizing Scholarly Publishing */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3">Revolutionizing Scholarly Publishing</h4>
                  <div className="text-styling">
                    SCIN challenges traditional publishing practices. We
                    introduce a fair income distribution model to create an
                    equitable ecosystem for all collaborators.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container pt-80 pb-80">
        <main>
          <h1 className="display-6 fw-normal text-center mb-40">Our Team</h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
            {FOUNDERS.map((aFounder, index) => {
              return (
                <div
                  key={index}
                  className="col col-md-4 d-flex align-items-stretch"
                >
                  {founderCard(aFounder)}
                </div>
              );
            })}
          </div>
        </main>
      </div>

      <section
        id="commitment"
        style={{ backgroundColor: '#0F7AB6', color: '#ffffff' }}
      >
        <div className="d-flex align-items-center justify-content-center pt-80 pb-80">
          <div className="container">
            <h2 className="display-6 fw-normal text-center mb-4">
              Our Commitment
            </h2>

            <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
              {/* Supporting Emerging Talent */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3 text-nowrap">
                    Supporting Emerging Talent
                  </h4>
                  <div className="text-styling">
                    We are dedicated to supporting emerging talent in academia,
                    including graduate researchers, PhD students, and early
                    career professionals. By recognizing their potential and
                    contributions, we aim to provide them with the resources and
                    encouragement needed to thrive.
                  </div>
                </div>
              </div>

              {/* Open Access Advocates */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3 text-nowrap">Open Access Advocates</h4>
                  <div className="text-styling">
                    SCIN is a staunch advocate for open access. We believe that
                    knowledge should be freely accessible to all. As part of our
                    commitment, we pledge to make all articles published on our
                    platform open access after a 10-year period, promoting
                    widespread access to valuable research.
                  </div>
                </div>
              </div>

              {/* Transparency and Accountability */}
              <div className="col col-md-4 d-flex align-items-stretch">
                <div
                  className="card mb-4 rounded-3 shadow-sm p-3"
                  style={{
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  <h4 className="mb-3 text-nowrap">
                    Transparency and Accountability
                  </h4>
                  <div className="text-styling">
                    Our commitment to transparency extends to every aspect of
                    our operation. We are transparent about our income
                    distribution model, financial projections, and policies. We
                    regularly share updates and financial reports to maintain
                    accountability to our stakeholders.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commitment">
        <div className="container d-flex flex-column align-items-center justify-content-center pt-80 pb-40">
          <h2 className="display-6 fw-normal text-center mb-4">
            Join Us in Shaping the Future
          </h2>
          <div className="text-styling mb-4">
            We invite you to join us in reshaping the future of scholarly
            publishing. Whether you are an author, reviewer, editor, affiliated
            institution, or simply a passionate advocate for change, SCIN
            welcomes your involvement. Together, we can create a scholarly
            publishing landscape that truly serves the needs of those who have
            dedicated their lives to the pursuit of knowledge.
          </div>
          <div className="text-styling mb-4">
            Thank you for being a part of the SCIN community. Together, we are
            pioneering a new era of scholarly communication that empowers
            authors and reviewers to lead the way.
          </div>
          <Link href="/form" passHref>
            <a className="btn btn-primary btn-lg" data-wow-delay=".6s">
              Join Our Waitlist
            </a>
          </Link>
        </div>
      </section>

      <div className="container">
        <FooterView />
      </div>
    </div>
  );
}
