import Image from 'next/image';
import styles from '../assets/styles/team.module.css';
import AmirsalarPhoto from '../../public/img/team/Amirsalar-B&W.jpg';
import ArminPhoto from '../../public/img/team/Armin-B&W.jpg';
import FooterView, { SocialMediumInformation } from './Footer';
import { TeamSocialLinks } from './SocialButtons';

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
    description:
      'Armin is an Assistant Professor, Engineer, and Entrepreneur with over ten years \
      of experience in engineering project management and academia at both small and large \
      engineering firms and institutions. He carried out PDF in Mechanical Engineering \
      at UBC, Ph.D. at MUN and MASc at SUT. Armin has a professional engineering designation \
      with Engineers PEI, published more than 20 peer-reviewed journal papers, completed more \
      than 15 industrial projects in Canada and supervised more than ten students and engineers.\
      After many years of engineering and research, Armin joined UPEI as an Assistant Professor \
      to pursue his career. Armin is passionate about research and innovation and has led many \
      companies and helped many entrepreneurs to succeed.',
    position: 'CEO',
    imagePath: ArminPhoto,
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/arminbodaghkh',
        isActive: true,
        iconClassName: 'lni lni-twitter-filled',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/arminbodaghkhani',
        isActive: true,
        iconClassName: 'lni lni-linkedin-original',
      },
    ],
  },
  {
    fullName: 'Amirsalar Heydari',
    description:
      "Amir (BSc. and MASc.) is a Software Engineer with more than 5 years of software \
      development experience. He has worked in a large-scale S&P 500 fintech company \
      and a couple of startups based in Silicon Valley, where he went through \
      a full cycle of developing, leading and managing projects and teams. Amir has a \
      solid track record of building a large-scale fintech product with his engineering \
      team, which reinvented the revenue stream of his past organization. Before \
      starting his professional career and entrepreneurial journey, he earned his master's degree \
      in Electrical and Computer Engineering from UBC, where he was a high-standing \
      student researcher, publishing several journals and conference papers.",
    position: 'CTO',
    imagePath: AmirsalarPhoto,
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/amirsalar',
        isActive: true,
        iconClassName: 'lni lni-twitter-filled',
      },
      {
        name: 'linkedin',
        url: 'https://linkedin.com/in/arminbodaghkhani',
        isActive: true,
        iconClassName: 'lni lni-linkedin-original',
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
      <div className="container">
        <div
          className={`${styles.pricingHeader} p-3 pb-md-4 mx-auto text-center`}
        >
          <h1 className="display-4 fw-normal">SCIN Team</h1>
          <p className="fs-5 text-muted">
            Quickly build an effective pricing table for your potential
            customers with this Bootstrap example. It’s built with default
            Bootstrap components and utilities with little customization.
          </p>
        </div>

        <main>
          <h1 className="display-6 fw-normal text-center mb-4">Founders</h1>
          <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
            {FOUNDERS.map((aFounder, index) => {
              return (
                <div key={index} className="col col-md-6">
                  {founderCard(aFounder)}
                </div>
              );
            })}
          </div>
        </main>
        <FooterView />
      </div>
    </div>
  );
}
