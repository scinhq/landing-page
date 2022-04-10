import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo/logo.svg';
import { SocialButton } from './SocialButtons';

export interface SocialMediumInformation {
  name: string;
  url: string;
  isActive: boolean;
  iconClassName: string;
}

const SOCIAL_MEDIA: SocialMediumInformation[] = [
  {
    name: 'twitter',
    url: 'https://twitter.com/scinhq',
    isActive: true,
    iconClassName: 'lni lni-twitter-filled',
  },
  {
    name: 'facebook',
    url: '',
    isActive: false,
    iconClassName: 'lni lni-facebook-filled',
  },
  {
    name: 'instagram',
    url: '',
    isActive: false,
    iconClassName: 'lni lni-instagram-filled',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com/company/scinhq',
    isActive: true,
    iconClassName: 'lni lni-linkedin-original',
  },
];

export default function FooterView() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md">
          <Image src={Logo} alt="" width="40" height="55" />
          <small className="d-block mb-3 text-muted">&copy; 2021</small>
          <div>
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              {SOCIAL_MEDIA.map((socialMed) => {
                return socialMed.isActive ? SocialButton(socialMed) : <></>;
              })}
            </div>
          </div>
        </div>
        <div className="col-6 col-md"></div>
        <div className="col-6 col-md"></div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link href="./team" passHref>
                <a className="link-secondary text-decoration-none">Team</a>
              </Link>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Locations
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Privacy
              </a>
            </li>
            <li className="mb-1">
              <a className="link-secondary text-decoration-none" href="#">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
