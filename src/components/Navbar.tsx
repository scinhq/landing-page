import Image from 'next/image';
import Link from 'next/link';
import Logo from '../../public/img/logo/logo.png';

export default function Navbar() {
  return (
    <>
      {/* <!-- ========================= header start ========================= --> */}
      <header className="header">
        <div className="navbar-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12">
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
                    {/* left adjusted links */}
                    <div className="" id="navbarSupportedContent">
                      <ul className="navbar-nav mr-auto">
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
              </div>
            </div>
            {/* <!-- row --> */}
          </div>
          {/* <!-- container --> */}
        </div>
        {/* <!-- navbar area --> */}
      </header>
      {/* <!-- ========================= header end ========================= --> */}
    </>
  );
}
