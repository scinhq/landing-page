import Link from 'next/link';
import SEO from '../components/seo';
import MainNavbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

const USConsumerPrivacyNotice = () => {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Decentralized Scientific Publishing'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <MainNavbar />

      <div className="container mt-80">
        <h1 className="mb-4">US Consumer Privacy Notice</h1>
        <ol className="mb-4">
          <li className="mb-2 list-items">
            About this Privacy Notice
            <div className="text-styling paragraph-items">
              Pursuant to the California Consumer Privacy Act, Colorado Privacy
              Act, Connecticut Data Privacy Act and Virginia Consumer Data
              Protection Act (collectively, “U.S. Consumer Privacy Laws”), SCIN
              Publishing Inc. and its affiliates in scope of the U.S. Consumer
              Privacy Laws (“we,” “us” or “our”) are providing this U.S.
              Consumer Privacy Notice (“Notice”). This Notice supplements our
              <Link href="/privacy" passHref>
                <a
                  className="text-primary"
                  style={{ marginLeft: '0.5rem' }}
                  data-wow-delay=".6s"
                >
                  Privacy Policy
                </a>
              </Link>
              . Terms used but not defined shall have the meanings ascribed to
              them in the applicable U.S. Consumer Privacy Laws. This Notice
              does not apply to personal information that we process on behalf
              of our customers or that we collect from job applicants,
              contractors, or employees.
            </div>
          </li>
          <li className="mb-2 list-items">
            Personal Information Collected, Processed and Disclosed
            <div className="text-styling paragraph-items">
              We collect, and have collected and disclosed in the preceding 12
              months, the following categories of personal information:
              <ul>
                <li>
                  Identifiers such as a real name, alias, postal address,
                  telephone or mobile contact number, unique personal
                  identifier, online identifier, Internet Protocol address,
                  email address, account name, and other similar identifiers.
                </li>
                <li>
                  Personal information as defined in the California customer
                  records law, such as name, contact information, education,
                  employment, employment history, and financial information.
                </li>
                <li>
                  Characteristics of protected classifications under California
                  or federal law such as gender, date of birth, and marital
                  status.
                </li>
                <li>
                  Commercial information, such as transaction information,
                  purchase history, financial details, and payment information.
                </li>
                <li>
                  Internet or other electronic network activity information,
                  such as browsing history, search history, online behavior,
                  interest data, and interactions with our and other websites,
                  applications, systems, and advertisements.
                </li>
                <li>Geolocation data, such as approximate device location.</li>
                <li>
                  Audio, electronic, visual, and similar information, such as
                  images and audio, video, or call recordings created in
                  connection with our business activities.
                </li>
                <li>
                  Professional or employment-related information, such as job
                  title, work history, and experience.
                </li>
                <li>
                  Inferences drawn from any of the personal information listed
                  above to create a profile or summary about, for example, a
                  consumer’s preferences and characteristics.
                </li>
                <li>
                  Sensitive personal information, such as personal information
                  that reveals a consumer’s passport number, racial or ethnic
                  origin, and account log-in and password.
                </li>
              </ul>
              We collect this personal information from you and from other
              categories of sources such as: our affiliates; our customers;
              public and publicly available sources; our third-party resellers
              and referral partners, data suppliers and service providers;
              partners with which we offer co-branded services or engage in
              joint event or marketing activities; social networks; news outlets
              and related media; and the organization with which you are
              employed or affiliated. We may use or process each of the above
              categories of personal information to operate, manage, and
              maintain our business, to provide our products and services, to
              communicate with you, for our vendor management purposes, and to
              accomplish our business purposes and objectives, including, for
              example, using personal information to: develop, improve, repair,
              and maintain our products and services; process or fulfill a
              request or other transactions submitted to us; personalize,
              advertise, and market our products and services; conduct research,
              analytics, and data analysis; maintain our facilities and
              infrastructure; undertake quality and safety assurance measures;
              conduct risk and security control and monitoring; prevent, detect
              and investigate fraud or other illegal actions; perform identity
              verification; perform accounting, audit, and other internal
              functions; comply with law, legal process, and internal policies;
              maintain records; exercise and defend legal claims; and fulfill
              legal obligations. We disclose, and have disclosed in the
              preceding 12 months, each of the above categories of personal
              information for our operational business purposes to all of the
              following categories of third parties: affiliates; customers;
              service providers, agents, and representatives; business and joint
              venture partners; and other parties where required by law or to
              protect our rights. We may use sensitive personal information
              specifically for the following purposes: perform our services or
              provide products or services as requested by you; prevent, detect
              and investigate security incidents or malicious, deceptive,
              fraudulent or other illegal actions; short-term, transient use
              such as displaying first party, non-personalized advertising;
              perform services on our own behalf, such as maintaining or
              servicing accounts, providing customer service, processing or
              fulfilling orders and transactions, verifying customer
              information, processing payments, or providing analytic services,
              storage or similar services for the business; and activities
              relating to quality and safety control or product improvement.
            </div>
          </li>
          <li className="mb-2 list-items">Personal Information Sold</li>
          <div className="text-styling paragraph-items">
            We do not sell personal information to third parties within the
            scope of the application of the U.S. Consumer Privacy Laws.
          </div>

          <li className="mb-2 list-items">Personal Information Shared</li>
          <div className="text-styling paragraph-items">
            We share for purposes of cross-context behavioral advertising or
            targeted advertising, and have shared for such purposes, in the
            preceding 12 months, with advertising networks, internet service
            providers, data analytics providers, operating systems and
            platforms, and social networks each of the following categories of
            personal information:
            <ul>
              <li>
                Identifiers such as online identifier, Internet Protocol
                address, and other similar identifiers.
              </li>
              <li>
                Internet or other electronic network activity information, such
                as browsing history, online behavior, interest data, and
                interactions with our and other websites, applications, systems,
                and advertisements.
              </li>
              <li>Geolocation data, such as approximate device location.</li>
              <li>
                Inferences drawn from any of the personal information listed
                above to create a profile or summary about, for example, a
                consumer’s preferences and characteristics.
              </li>
            </ul>
            We do not knowingly share the personal information, including the
            sensitive personal information, of minors under 16 years of age
            within the scope of the application of the U.S. Consumer Privacy
            Laws.
          </div>

          <li className="mb-2 list-items">Retention</li>
          <div className="text-styling paragraph-items">
            We retain your personal information for as long as necessary to
            provide our products and services to you and fulfill the
            transactions you have requested, or for other essential purposes
            such as complying with our legal obligations, maintaining business
            and financial records, resolving disputes, maintaining security,
            detecting, and preventing fraud and abuse, and enforcing our
            agreements. The criteria used to determine retention periods
            includes the legal limitation of liability period, agreed
            contractual provisions, applicable regulatory requirements, and
            industry standards.
          </div>
          <li className="mb-2 list-items">Consumer Rights and Requests</li>
          <div className="text-styling paragraph-items">
            If you are a California, Colorado, Connecticut or Virginia resident:
          </div>
          <div className="text-styling paragraph-items">
            <span className="font-weight-bold">Right to Know.</span>You may
            request to know whether we process your personal information and to
            access such personal information. In addition, if you are a
            California resident, you may request that we disclose to you the
            following information as required by law: (i) the categories of
            personal information we collected about you and the categories of
            sources from which we collected such information; (ii) the business
            or commercial purpose for collecting or sharing personal information
            about you; (iii) the categories of personal information about you
            that we shared and the categories of third parties to whom we shared
            such information; and (iv) the categories of personal information
            about you that we otherwise disclosed, and the categories of third
            parties to whom we disclosed such personal information. You may
            request to receive a copy of your personal information, including
            specific pieces of personal information, including, where
            applicable, to obtain a copy of your personal information in a
            portable, readily usable format.
          </div>
          <div className="text-styling paragraph-items">
            <span className="font-weight-bold">Right to Delete.</span>You may
            request that we delete your personal information, subject to certain
            exceptions. If you are a California resident, this applies to
            personal information we collected from you.
          </div>
          <div className="text-styling paragraph-items">
            <span className="font-weight-bold">Right to Correct.</span>You may
            request to correct inaccuracies in your personal information.
          </div>
          <div className="text-styling paragraph-items">
            <span className="font-weight-bold">Right to Opt-Out.</span>You may
            request that we do not share your personal information for
            cross-contextual behavioral advertising or targeted advertising by
            utilizing the “Cookie Settings” link on our websites that use
            tracking technologies for such purposes or by sending an opt-out
            preference signal supported by your device or browser. Your use of
            an opt-out preference signal will apply only to your device or
            browser and not to other personal information that is not linked to
            your device or browser. In addition, if you are a Colorado,
            Connecticut or Virginia resident, you may request to opt out of the
            processing of your personal information for purposes of profiling in
            furtherance of decisions that produce legal or similarly significant
            effects concerning you.
          </div>
          <div className="text-styling paragraph-items">
            <span className="font-weight-bold">
              Right Not to Receive Discriminatory Treatment.
            </span>
            We will not unlawfully discriminate against you because you exercise
            any of your rights under the U.S. Consumer Privacy Laws.
          </div>

          <li className="mb-2 list-items">How to Make a Request</li>
          <div className="text-styling paragraph-items">
            You may make a request described above via our email at{' '}
            <a href="mailto:info@scin.io" className="text-primary">
              info@scin.io
            </a>
            .
          </div>
          <div className="text-styling paragraph-items">
            You may be required to submit proof of your identity for certain of
            these requests to be processed. Such information may include your
            name, address, date of birth and government ID. This information
            will be used only for the purposes of verifying your identity and
            processing your request. We may not be able to comply with your
            request if we are unable to confirm your identity or to connect the
            information you submit in your request with personal information in
            our possession. You may designate an authorized agent to make a
            request on your behalf subject to proof of identity and written
            authorizationas required under the applicable U.S. Consumer Privacy
            Laws. Requests made through an authorized agent should be made to us
            via email at{' '}
            <a href="mailto:info@scin.io" className="text-primary">
              info@scin.io
            </a>
            .As part of our verification process, we may request that the agent
            provide, as applicable, proof concerning his or her status as an
            authorized agent. In addition, we may require that you verify your
            identity as described above or confirm that you provided the agent
            permission to submit the request. We will respond to your request
            consistent with applicable law. If you are a Virginia resident and
            we refuse to take action on your request, you may appeal this
            refusal within a reasonable period after your receipt of the
            decision by submitting a request for appeal via email at{' '}
            <a href="mailto:info@scin.io" className="text-primary">
              info@scin.io
            </a>
            .
          </div>

          <li className="mb-2 list-items">Notice of Financial Incentives</li>
          <div className="text-styling paragraph-items">
            We do not offer financial incentives, including price or service
            differences, to consumers in exchange for the collection, retention,
            sale or sharing of their personal information.
          </div>

          <li className="mb-2 list-items">De-Identified Information</li>
          <div className="text-styling paragraph-items">
            Where we maintain or use de-identified data, we will continue to
            maintain and use the de-identified data only in a de-identified
            fashion and will not attempt to re-identify the data.
          </div>

          <li className="mb-2 list-items">Changes</li>
          <div className="text-styling paragraph-items">
            We will update this Notice from time to time. Any changes will be
            posted on this page with an updated revision date.
          </div>

          <li className="mb-2 list-items">Contact</li>
          <div className="text-styling paragraph-items">
            If you have any questions or concerns regarding this Notice or our
            processing of your personal information, please contact us via email
            at{' '}
            <a href="mailto:info@scin.io" className="text-primary">
              info@scin.io
            </a>
            .
          </div>
        </ol>
      </div>

      <section id="home" className="container">
        <FooterView />
      </section>

      <ScrollTopView />
    </>
  );
};

export default USConsumerPrivacyNotice;
