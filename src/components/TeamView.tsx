import Image from 'next/image';
import styles from '../assets/styles/team.module.css';
// import AliPhoto from '../../public/img/team/Ali-B&W.png';
import ArminPhoto from '../../public/img/team/Armin-B&W.png';
import IsmaelPhoto from '../../public/img/team/Ismael-B&W.jpg';
import MasoudPhoto from '../../public/img/team/Masoud-B&W.jpg';
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
  // {
  //   fullName: 'Ali Farrokhtala',
  //   description:
  //     "Ali (MASc. and PhD Candidate) is a Researcher, Software Developer and IT Expert with more than 5 years of IT industry experience. He has worked in a different sectors such as Cloud Services and Finance and Tax industry, where he went through a full cycle of developing, leading and managing IT projects and teams. Ali has a solid track record of designing and deploying IT services and products. Before starting his professional career and entrepreneurial journey, he earned his master's degree in Computer Science from UTM, Malaysia and is now in the process of completing his Doctorate study at Memorial University where he has a high-standing research and teaching portfolio as well as publishing several journals and conference papers.",
  //   position: 'CTO',
  //   imagePath: AliPhoto,
  //   socialMediaLinks: [
  //     {
  //       name: 'twitter',
  //       url: 'https://twitter.com/Ali_Farrokhtala',
  //       isActive: true,
  //       iconClassName: 'lni lni-twitter-filled',
  //     },
  //     {
  //       name: 'linkedin',
  //       url: 'https://linkedin.com/in/ali-farrokhtala',
  //       isActive: true,
  //       iconClassName: 'lni lni-linkedin-original',
  //     },
  //   ],
  // },
  {
    fullName: 'Ismael Golmaohammadi',
    description:
      'Ismael is an industrial engineer and a Ph.D. candidate in international business and strategy at Memorial University, Canada. He is a passionate and dedicated researcher who believes in the power of knowledge to build a prosperous and sustainable society for everyone. Ismael has received several prestigious awards and recognitions for his devotion to studying international business. He has been awarded the Bank of Montreal’s scholarship for academic standing, the Mitacs Accelerate Fellowship, the best paper award from Administrative Science of Canada, and the Dr. Robert Sexty Scholarship for Social Responsibility. Along with his academic endeavors, Ismael has more than fourteen years of experience working with industries in different capacities, including Business and Strategy Analyst, Marketing Manager, and Director of Business Development. In his leisure time, Ismael enjoys hiking, traveling, fishing, and spending time with family and friends.',
    position: 'CBDO',
    imagePath: IsmaelPhoto,
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/IsmaelGolm',
        isActive: true,
        iconClassName: 'lni lni-twitter-filled',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/igolm',
        isActive: true,
        iconClassName: 'lni lni-linkedin-original',
      },
    ],
  },
  {
    fullName: 'Masoud Zare',
    description:
      'Masoud is a CS student at Memorial university with a background in marketing. I have a demonstrated experience in working on web applications and designing responsive websites.',
    position: 'CTO',
    imagePath: MasoudPhoto,
    socialMediaLinks: [
      {
        name: 'twitter',
        url: 'https://twitter.com/masoudzare18',
        isActive: true,
        iconClassName: 'lni lni-twitter-filled',
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/masoudzare',
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
            SCIN is a technology company that builds a decentralized publishing
            system that enables researchers to publish their scientific articles
            while retaining the copyright ownership of their work.
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
