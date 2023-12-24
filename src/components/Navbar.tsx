import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MainNavbar() {
  const router = useRouter();

  return (
    <Navbar expand="lg" className="d-flex justify-content-between">
      <div className="container pt-4">
        {/* Logo Section */}
        <Link href="./" passHref>
          <a className="navbar-brand">
            <div style={{ width: '12rem' }}>
              <Image
                className="logo-1"
                src="/img/logo/logo.png"
                alt="SCIN Logo"
                layout="responsive"
                width={1000}
                height={400}
              />
            </div>
          </a>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navigation Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="./" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/' ? 'active' : ''
                    }`}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/howScinWorks" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/howScinWorks' ? 'active' : ''
                    }`}
                  >
                    How SCIN works?
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/team" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/team' ? 'active' : ''
                    }`}
                  >
                    About Us
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/pricing" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/pricing' ? 'active' : ''
                    }`}
                  >
                    Pricing
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/journals" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/journals' ? 'active' : ''
                    }`}
                  >
                    Journals
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" passHref>
                  <a
                    className={`nav-link ${
                      router.pathname === '/blog' ? 'active' : ''
                    }`}
                  >
                    Blog
                  </a>
                </Link>
              </li>
            </ul>
          </Nav>
          <Link href="/form" passHref>
            <button
              className="btn btn-primary ml-auto custom-mb"
              data-wow-delay=".6s"
            >
              Get Your Invitation
            </button>
          </Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
