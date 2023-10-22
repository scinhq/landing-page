import Image from 'next/image';
import Link from 'next/link';
import styles from '../assets/styles/team.module.css';
// import AliPhoto from '../../public/img/team/Ali-B&W.png';
import ArminPhoto from '../../public/img/team/Armin-B&W.png';
import IsmaelPhoto from '../../public/img/team/Ismael-B&W.jpg';
import MasoudPhoto from '../../public/img/team/Masoud-B&W.jpg';
import FooterView, { SocialMediumInformation } from './Footer';
import { TeamSocialLinks } from './SocialButtons';
import {
  faLinkedin,
  faLinkedinIn,
  faXTwitter,
} from '@fortawesome/free-brands-svg-icons';

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
    position: 'CEO',
    imagePath: ArminPhoto,
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
    position: 'CBDO',
    imagePath: IsmaelPhoto,
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
        faIcon: faLinkedinIn,
      },
    ],
  },
  {
    fullName: 'Masoud Zare',
    description: `Masoud is a computer science student at Memorial University, complemented by a bachelor's degree in business and seven years of marketing experience. Recently, he spent two years as a Full Stack Developer, creating web applications and responsive websites. His unique blend of technical expertise and business insights positions him as an invaluable asset in both tech and multidisciplinary roles.
      Having worked in diverse capacities ranging from marketing roles to pivotal tech positions, Masoud has cultivated a holistic view of projects, ensuring both the functional and aesthetic aspects are in harmony.`,
    position: 'CTO',
    imagePath: MasoudPhoto,
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
        faIcon: faLinkedinIn,
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
        <div className="card-body">
          <h2 className="card-title mb-4 pricing-card-title text-center">
            {founderInfo.fullName}
            <small className="text-muted fw-light">
              /{founderInfo.position}
            </small>
          </h2>
          <p className="text-muted">{founderInfo.description}</p>
          {TeamSocialLinks(founderInfo)}
        </div>
      </div>
    );
  };

  return (
    <div className="other-main-sections">
      <section id="tracking">
        <div className="d-flex align-items-center justify-content-center pt-100 pb-150">
          <div>
            <h1
              className="display-3 mb-40 wow fadeInUp text-center"
              data-wow-delay=".2s"
              style={{
                fontWeight: 'bold', // Bold font-weight
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)', // Subtle text-shadow for depth
                padding: '10px 0', // Padding top and bottom
                background: '-webkit-linear-gradient(45deg, #0F7AB6, #0d6efd)', // Gradient background
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Revolutionizing Scholarly Publishing
            </h1>

            <h3 className="display-4 text-center mb-4">Our Vision</h3>
            <p
              className="display-7 wow mx-auto w-75 fadeInUp text-center"
              data-wow-delay=".4s"
            >
              SCIN is a technology company that builds a decentralized
              publishing system that enables researchers to publish their
              scientific articles while retaining the copyright ownership of
              their work.
            </p>
          </div>
        </div>
      </section>
      <section
        id="tracking"
        style={{ backgroundColor: '#0F7AB6', color: '#ffffff' }}
      >
        <div className="d-flex align-items-center justify-content-center pt-80 pb-80">
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
                  <p>
                    SCIN is on a mission to support and uplift authors,
                    especially graduate researchers and emerging talents. By
                    providing fair compensation, we aim to ensure authors
                    continue their roles in shaping the future of research.
                  </p>
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
                  <p>
                    We are committed to expediting the peer review process. Our
                    approach matches manuscripts with expert reviewers,
                    streamlining evaluation and accelerating groundbreaking
                    research dissemination.
                  </p>
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
                  <p>
                    SCIN challenges traditional publishing practices. We
                    introduce a fair income distribution model to create an
                    equitable ecosystem for all collaborators.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <main>
          <h1 className="display-6 fw-normal text-center mb-4">Our Team</h1>
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
                  <h4 className="mb-3">Supporting Emerging Talent</h4>
                  <p>
                    We are dedicated to supporting emerging talent in academia,
                    including graduate researchers, PhD students, and early
                    career professionals. By recognizing their potential and
                    contributions, we aim to provide them with the resources and
                    encouragement needed to thrive.
                  </p>
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
                  <h4 className="mb-3">Open Access Advocates</h4>
                  <p>
                    SCIN is a staunch advocate for open access. We believe that
                    knowledge should be freely accessible to all. As part of our
                    commitment, we pledge to make all articles published on our
                    platform open access after a 10-year period, promoting
                    widespread access to valuable research.
                  </p>
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
                  <h4 className="mb-3">Transparency and Accountability</h4>
                  <p>
                    Our commitment to transparency extends to every aspect of
                    our operation. We are transparent about our income
                    distribution model, financial projections, and policies. We
                    regularly share updates and financial reports to maintain
                    accountability to our stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="commitment">
        <div className="d-flex align-items-center justify-content-center pt-80">
          <div className="container">
            <h2 className="display-6 fw-normal text-center mb-4">
              Join Us in Shaping the Future
            </h2>
            <p className="mb-4">
              We invite you to join us in reshaping the future of scholarly
              publishing. Whether you are an author, reviewer, editor,
              affiliated institution, or simply a passionate advocate for
              change, SCIN welcomes your involvement. Together, we can create a
              scholarly publishing landscape that truly serves the needs of
              those who have dedicated their lives to the pursuit of knowledge.
            </p>
            <p>
              Thank you for being a part of the SCIN community. Together, we are
              pioneering a new era of scholarly communication that empowers
              authors and reviewers to lead the way.
            </p>
          </div>
        </div>
      </section>

      <div className="container">
        <FooterView />
      </div>
    </div>
  );
}
