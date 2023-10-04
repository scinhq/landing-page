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

const YEAR = new Date().getFullYear();

export default function FooterView() {
  return (
    <footer className="pt-4 my-md-5 pt-md-5 border-top">
      <div className="row">
        <div className="col-12 col-md-5">
          <div>
            <p className="stronger">Stay Connected</p>
            <p className="lead">
              Follow us on social media to stay updated with the latest news,
              insights, and exciting developments as we embark on this
              transformative journey together.
            </p>
          </div>
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
          <small className="d-block mt-3 text-muted">
            &copy; {YEAR} SCIN Publishing Inc. All Rights Reserved.
          </small>
        </div>
        <div className="col-6 col-md"></div>
        <div className="col-6 col-md"></div>
        <div className="col-6 col-md">
          <h5>About</h5>
          <ul className="list-unstyled text-small">
            <li className="mb-1">
              <Link
                href="mailto:info@scin.io?subject=Have a question about SCIN"
                passHref
              >
                <a className="link-secondary text-decoration-none">
                  Contact Us
                </a>
              </Link>
            </li>
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
