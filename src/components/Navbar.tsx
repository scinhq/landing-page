import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo/logo.png';

export default function Navbar() {
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-white">
        <div className="container">
          <Link href="./" passHref>
            <a className="navbar-brand">
              <div style={{ width: '12rem' }}>
                <Image
                  className="logo-1"
                  src={Logo}
                  alt="SCIN Logo"
                  layout="responsive"
                  width={1000}
                  height={400}
                />
              </div>
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="./" passHref>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team" passHref>
                  <a className="nav-link">Team</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- navbar --> */}
    </>
  );
}
