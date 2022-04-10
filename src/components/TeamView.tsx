import Image from 'next/image';
import styles from '../assets/styles/team.module.css';
import AmirsalarPhoto from '../../public/img/team/Amirsalar-B&W.jpg';
import ArminPhoto from '../../public/img/team/Armin-B&W.jpg';
import FooterView from './Footer';

interface FounderInfoCardProps {
  fullName: string;
  description: string;
  position: string;
  imagePath: any;
}

const FOUNDERS: FounderInfoCardProps[] = [
  {
    fullName: 'Armin Bodaghkhani',
    description:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    position: 'CEO',
    imagePath: ArminPhoto,
  },
  {
    fullName: 'Amirsalar Heydari',
    description:
      'lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet  lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet',
    position: 'CTO',
    imagePath: AmirsalarPhoto,
  },
];

export default function TeamView() {
  const founderCard = (founderInfo: FounderInfoCardProps) => {
    return (
      <div className="card mb-4 rounded-3 shadow-sm">
        <div className="row justify-content-around">
          <div className="col-4 mt-3">
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
          <h2 className="card-title pricing-card-title">
            {founderInfo.fullName}
            <small className="text-muted fw-light">
              /{founderInfo.position}
            </small>
          </h2>
          <p className="text-muted">{founderInfo.description}</p>
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
          <div className="row row-cols-1 row-cols-md-3 mb-3 text-center justify-content-center">
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
