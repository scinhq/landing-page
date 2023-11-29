import Head from 'next/head';
import Link from 'next/link';
import SEO from '../components/seo';
import MainNavbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

const Pricing = () => {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Scientific Independence'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <MainNavbar />
      <section id="tracking" className="tracking-section ">
        <div className="container mt-5 pb-100">
          <Head>
            <title>SCIN Pricing Models</title>
          </Head>

          <h1 className="text-center mb-5">SCIN Pricing Models*</h1>
          <div className="text-styling">
            Welcome to SCIN, where we offer flexible pricing models to cater to
            the diverse needs of our users. Whether you are an individual
            author, an avid reader, or an institution looking to subscribe to
            multiple journals, SCIN has a pricing option that suits you.
          </div>

          <div className="row mt-5">
            {/* Option 1 */}
            <div className="col-md-6 d-flex align-items-stretch mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-info">
                    Option 1: Pay-per-use for Articles
                  </h5>
                  <div className="text-styling font-weight-bold mb-3">
                    Price: $20 - $40 per Article
                  </div>
                  <div className="text-styling">
                    For those who require access to specific articles, our
                    Pay-per-use model offers flexibility and affordability. You
                    pay only for the articles you need, with pricing that adapts
                    to the content.
                  </div>
                  <ul style={{ listStyleType: 'disc !important' }}>
                    <li className="mt-2">
                      Individual Authors: Publish your work with SCIN, and if
                      you choose to access other articles, you pay as you go.
                    </li>
                    <li className="mt-2">
                      Readers and Researchers: Select and access articles on
                      topics that interest you, with the freedom to pay only for
                      what you consume.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 2 */}
            <div className="col-md-6 d-flex align-items-stretch mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-info">
                    Option 2: Online Journal Subscription
                  </h5>
                  <div className="text-styling font-weight-bold mb-3">
                    Price Range: $1000 - $2000 annually
                  </div>
                  <div className="text-styling">
                    For those seeking comprehensive access to a single journal,
                    our Online Journal Subscription is the perfect choice. Enjoy
                    unlimited access to all articles, updates, and research
                    within your chosen journal.
                  </div>
                  <ul style={{ listStyleType: 'disc !important' }}>
                    <li className="mt-2">
                      Individual Subscribers: Dive deep into the content of your
                      favorite journal, staying up-to-date with the latest
                      research in your field.
                    </li>
                    <li className="mt-2">
                      What's Included: Enjoy unrestricted access to the entire
                      content of a single journal of your choice, making it
                      ideal for focused research or comprehensive exploration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 3 */}
            <div className="col-md-6 d-flex align-items-stretch mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-info">
                    Option 3: Institutional Subscription
                  </h5>
                  <div className="text-styling font-weight-bold mb-3">
                    Tailored Discounts for Institutions
                  </div>
                  <div className="text-styling">
                    For academic institutions and libraries looking to provide
                    their members with broader access, SCIN offers Institutional
                    Subscriptions with tiered discounts based on the number of
                    journals subscribed to.
                  </div>
                  <ul style={{ listStyleType: 'disc !important' }}>
                    <li className="mt-2">
                      Subscription for 5 Journals: 15% Discount
                    </li>
                    <li className="mt-2">
                      Subscription for 10 Journals: 20% Discount
                    </li>
                    <li className="mt-2">
                      Subscription for 15 and More Journals: 25% Discount
                    </li>
                  </ul>
                  <div>Why Choose an Institutional Subscription?</div>
                  <ul style={{ listStyleType: 'disc !important' }}>
                    <li className="mt-2">
                      Cost-Efficiency: Bulk access to multiple journals at a
                      reduced rate.
                    </li>
                    <li className="mt-2">
                      Support for Researchers: Provide valuable resources to
                      your researchers, faculty, and students.
                    </li>
                    <li className="mt-2">
                      Comprehensive Coverage: Access a diverse range of research
                      content spanning multiple disciplines.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Option 4 */}
            <div className="col-md-6 d-flex align-items-stretch mb-4">
              <div className="card shadow-sm">
                <div className="card-body d-flex flex-column p-4">
                  <h5 className="card-title text-info">
                    Option 4: SaaS Model for Existing Journals
                  </h5>
                  <div className="text-styling font-weight-bold mb-3">
                    Unlock the Power of SCIN for Your Journal
                  </div>
                  <div className="text-styling bg-custom pb-2">
                    Option 4.1: Annual Subscription - $24,000 per Year
                  </div>
                  <div className="text-styling">
                    Subscribe to SCIN's platform annually for a fixed fee of
                    $24,000 per year. Gain access to our comprehensive suite of
                    tools and features, empowering you to revolutionize your
                    journal's publishing process. Retain 100% of the sales
                    revenue generated from your journal's articles.
                  </div>

                  <ul style={{ listStyleType: 'disc !important' }}>
                    <li className="mt-2">
                      Subscribe to SCIN's platform annually for a fixed fee of
                      $24,000 per year.
                    </li>
                    <li className="mt-2">
                      Gain access to our comprehensive suite of tools and
                      features, empowering you to revolutionize your journal's
                      publishing process.
                    </li>
                    <li className="mt-2">
                      Retain 100% of the sales revenue generated from your
                      journal's articles.
                    </li>
                  </ul>

                  <div className="text-styling bg-custom pb-2">
                    Option 4.2: Revenue Sharing - Free to Use with a 30% Revenue
                    Share
                  </div>
                  <div className="text-styling">
                    Utilize SCIN's platform for free and enjoy all the benefits
                    it offers. SCIN will collect a 30% share of the sales
                    revenue generated from your journal's articles. This fee
                    only applies when revenue is generated.
                  </div>

                  <ul
                    className="mt-2"
                    style={{ listStyleType: 'disc !important' }}
                  >
                    <li className="mt-2">
                      Utilize SCIN's platform for free and enjoy all the
                      benefits it offers.
                    </li>
                    <li className="mt-2">
                      SCIN will collect a 30% share of the sales revenue
                      generated from your journal's articles. This fee only
                      applies when revenue is generated.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-2">
            * Our pricing model aims to align with the numbers mentioned;
            however, as our startup evolves and gains momentum over time, the
            pricing structure may change. When you engage with our services, you
            agree to the pricing model in effect at that time. These figures are
            approximations and can be adjusted without legal consequences, with
            no liability on our part.
          </div>
        </div>

        <section id="tracking" style={{ backgroundColor: '#f9f8ff' }}>
          <div className="d-flex align-items-center justify-content-center pt-80 pb-80">
            <div className="container">
              <h2 className="display-6 fw-normal text-center mb-40">
                Why Choose SCIN?
              </h2>

              <div className="row row-cols-1 row-cols-md-3 mb-3 justify-content-center">
                <div className="col col-md-4 d-flex align-items-stretch">
                  <div className="card mb-4 rounded-3 shadow-sm p-3">
                    <h4 className="mb-3">Flexibility</h4>
                    <div className="text-styling">
                      We understand that your needs may change. Our flexible
                      pricing models allow you to choose what suits you best at
                      any given time.{' '}
                    </div>
                  </div>
                </div>

                <div className="col col-md-4 d-flex align-items-stretch">
                  <div className="card mb-4 rounded-3 shadow-sm p-3">
                    <h4 className="mb-3">Affordability</h4>
                    <div className="text-styling">
                      SCIN is committed to making scientific knowledge
                      accessible to all. Our pricing is designed to be
                      reasonable and competitive.{' '}
                    </div>
                  </div>
                </div>

                <div className="col col-md-4 d-flex align-items-stretch">
                  <div className="card mb-4 rounded-3 shadow-sm p-3">
                    <h4 className="mb-3">Quality Content</h4>
                    <div className="text-styling">
                      With SCIN, you can trust that you're accessing
                      high-quality, peer-reviewed scientific content that
                      contributes to your academic and professional success.{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="pt-80 pb-80 container d-flex flex-column align-items-center justify-content-center">
            <h3 className="text-center">Join SCIN Today</h3>
            <div className="text-styling">
              Unlock the doors to a world of knowledge and rewards with SCIN.
              Choose the pricing model that aligns with your needs, and start
              your journey toward a brighter, more informed future. If you have
              any questions or require further information about our pricing
              models, please feel free to contact us at (Email). We're here to
              assist you on your academic journey.
            </div>
            <Link href="/form" passHref>
              <a className="btn btn-primary btn-lg" data-wow-delay=".6s">
                Join Our Waitlist
              </a>
            </Link>
          </div>
        </section>
      </section>
      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
};

export default Pricing;
