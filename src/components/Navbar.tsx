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
                <nav className="navbar navbar-expand-lg">
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
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>

                  <div
                    className="collapse navbar-collapse sub-menu-bar"
                    id="navbarSupportedContent"
                  >
                    <ul id="nav" className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link href="./" passHref>
                          <a>Home</a>
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/team" passHref>
                          <a>Team</a>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* <!-- navbar collapse --> */}
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
