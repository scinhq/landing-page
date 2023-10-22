import Link from 'next/link';
import SEO from '../components/seo';
import Navbar from '../components/Navbar';
import ScrollTopView from '../components/Scroller';
import FooterView from '../components/Footer';

const Privacy = () => {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'Decentralized Scientific Publishing'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />

      <Navbar />
      <div className="container mt-150">
        <h1 className="mb-4">SCIN Privacy Policy</h1>
        <p>
          SCIN is committed to maintaining your confidence and trust with
          respect to your privacy. This privacy policy explains how we collect,
          use and share your personal information.
        </p>
        <h2 className="mt-4 mb-2">About our privacy policy</h2>
        <p className="mb-3">
          This privacy policy applies to our websites, apps and other services,
          including programs and events, that refer or link to this privacy
          policy (each, a “Service”). This policy may be supplemented by
          additional privacy statements, terms or notices provided to you or by
          the Service. The SCIN publishing company that owns or administers the
          Service, as identified therein, is the primary controller of your
          personal information provided to, or collected by or for, the Service.
          For information about the handling of personal information contained
          in our Service content, please read
          <Link href="/processingNotices" passHref>
            <a
              className="text-primary"
              style={{ marginLeft: '0.5rem' }}
              data-wow-delay=".6s"
            >
              processing notices
            </a>
          </Link>
          . For information about our processing of personal information as
          required by applicable U.S. laws, see our
          <Link href="/usConsumerPrivacyNotice" passHref>
            <a
              className="text-primary"
              style={{ marginLeft: '0.5rem' }}
              data-wow-delay=".6s"
            >
              U.S. Consumer Privacy Notice
            </a>
          </Link>
          .
        </p>
        <h2 className="mt-4 mb-2">Information we collect</h2>
        <p>
          We collect information about you in three ways: directly from your
          input, from third-party sources, and through automated technologies.
          <br />
          <strong>Information you provide to us</strong>
          <br />
          The types of personal information that we collect directly from you
          depends on the content and features of the Service you use and how you
          otherwise interact with us and may include:
          <ul>
            <li>
              Contact details, such as your name, email address, postal address,
              phone number and social media handle;
            </li>
            <li>
              Account login credentials, such as usernames and passwords,
              password hints and similar security information;
            </li>
            <li>
              Other account registration and profile information, including
              educational, professional and other background information, such
              as your field of study, current position, practice area and areas
              of interests, gender, ORCID ID and photo;
            </li>
            <li>
              Content that you upload and share or store in your account, such
              as annotations, comments, contributions and replies;
            </li>
            <li>
              Payment information, such as a credit or debit card number, and
              government-issued ID numbers;
            </li>
            <li>
              Information that you communicate to us, such as questions or
              information you send to customer support;
            </li>
            <li>
              Data that you provide to us as part of interacting with the
              Service, such as your favorites and search queries; and/or
            </li>
            <li>
              Communications preferences, such as your preferred language and
              the frequency, type and format of the alerts you sign up to
              receive.
            </li>
          </ul>
          <br />
          <strong>Data from your institution</strong>
          <br />
          We may obtain information about you from the institution with which
          you are employed or affiliated in order to activate and manage your
          access to and use of the institution’s subscription to the Service,
          including:
          <ul>
            <li>
              Contact details, such as your name and institutional email
              address, postal address and phone number;
            </li>
            <li>
              Other account registration information, such as job title; and/or
            </li>
            <li>Institutional user ID.</li>
          </ul>
          <br />
          <strong>Data from other sources</strong>
          <br />
          We also may obtain contact details and other information about you
          from other entities within SCIN and from third parties, including:
          <ul>
            <li>
              Social networks that you grant permission to the Service to access
              your data on one or more networks;
            </li>
            <li>
              Service providers that help us determine a location in order to
              customize certain products to your location;
            </li>
            <li>
              Partners with which we offer co-branded services or engage in
              joint marketing activities; and/or
            </li>
            <li>
              Publicly available sources and data suppliers to validate or
              supplement the information we hold or to support the Service.
            </li>
          </ul>
          <br />
          <strong>Device and usage data</strong>
          <br />
          The Service may automatically collect information about how you and
          your device interact with the Service, such as:
          <ul>
            <li>
              Computer, device and connection information, such as IP address,
              browser type and version, operating system and other software
              installed on your device, unique device identifier and other
              technical identifiers, error reports and performance data;
            </li>
            <li>
              Usage data, such as the features you used, the settings you
              selected, URL click stream data, including date and time stamp and
              referring and exit pages, and pages you visited on the Service;
            </li>
            <li>
              For educational Services, the course modules and test questions
              you view, answer or complete; and/or
            </li>
            <li>
              For location-aware Services, the physical location of your device.
            </li>
          </ul>
          We collect this data through our servers and the use of cookies and
          other technologies. You can control cookies through your browser's
          settings and other tools. However, if you choose to block certain
          cookies, you may not be able to register, login, or access certain
          parts or make full use of the Service. For more details, visit the{' '}
          <a className="text-primary" href="#">
            cookie notice
          </a>{' '}
          of the Service.
        </p>
        <h2 className="mt-4 mb-3">How we use your information</h2>
        We are committed to delivering a relevant and useful experience to you.
        Depending on how you interact with us and the Service, we use your
        personal information to:
        <ul>
          <li>
            Provide, activate and manage your access to and use of the Service;
          </li>
          <li>
            Process and fulfill a request, order, download, subscription or
            other transaction;
          </li>
          <li>
            Offer you customized content and other personalization to make the
            Service more efficient for you and more relevant to your interests
            and geography;
          </li>
          <li>
            Enhance and improve the Service, such as add new content and
            features;
          </li>
          <li>
            Notify you about changes, updates and other announcements related to
            the Service;
          </li>
          <li>
            Deliver targeted advertisements, promotional messages, and other
            information related to the Service and to your interests;
          </li>
          <li>
            Provide technical, product and other support and help to keep the
            Service working, safe and secure; and/or
          </li>
          <li>
            Identify usage trends and develop data analysis, including for the
            purposes of research, audits, reporting and other business
            operations, such as to pay royalties and license fees to third-party
            content providers, determine the effectiveness of our promotional
            campaigns, evaluate our business performance, or in other ways
            pursuant to a customer agreement.
          </li>
        </ul>
        <p className="mt-4">We may also use your personal information to:</p>
        <ul>
          <li>Respond to your requests, inquiries, comments or concerns;</li>
          <li>
            Invite you to submit or review manuscripts or otherwise participate
            in our publishing programs;
          </li>
          <li>
            Issue payments and statements, such as for royalties and editorial
            fees;
          </li>
          <li>
            Conduct and administer user testing and surveys as well as
            sweepstakes, competitions and similar promotions;
          </li>
          <li>
            Provide you with relevant promotional messages and other information
            about products, events and services of ours, our group companies and
            third parties such as societies and sponsors;
          </li>
          <li>
            Enhance and improve our products, events and services and develop
            new ones; and/or
          </li>
          <li>
            Comply with our legal obligations, resolve disputes and enforce our
            agreements.
          </li>
        </ul>
        <h2 className="mt-4">Sharing of your information</h2>
        <p>
          We share your personal information in the following ways and contexts.
        </p>
        <br />
        <strong>Your institution</strong>
        <br />
        <p>
          If you access the Service through a subscription administered by your
          institution, your personal information and certain usage data gathered
          through the Service, such as the number of items you downloaded, any
          fee-based items you accessed, and test scores, may be accessed by or
          shared with the administrators authorized by your institution for the
          purposes of usage analysis, subscription management, course management
          and testing and remediation. If your institution is a corporation or
          other business entity, additional usage data, such as the types of
          records you viewed and the number of searches you ran, also may be
          shared for the purposes of cost attribution and departmental
          budgeting. We may also disclose to your institution or other third
          parties non-personally identifiable information, such as anonymous
          usage data reports and aggregated information, subject to any
          applicable legal or contractual obligations.
        </p>
        <br />
        <strong>Our group companies and service providers</strong>
        <br />
        <p>
          Depending on the Service provided, we share your personal information
          with our:
        </p>
        <ul>
          <li>
            Affiliates, trading names and divisions within the SICN Publishing
            that provide technology, customer service and other shared services
            functions; and/or
          </li>
          <li>
            Suppliers and service providers, including editors, reviewers,
            payment processors, customer support, email service providers,
            access and authentication service providers, event venues and
            service providers, mailing houses, shipping agents and IT service
            providers;
          </li>
        </ul>
        <p>
          to process the information as necessary to provide the Service,
          complete a transaction or fulfill your request or otherwise on our
          behalf based on our instructions and in compliance with this privacy
          policy and any other appropriate confidentiality and security
          measures.
        </p>
        <br />
        <strong>Your choices</strong>
        <br />
        <p>
          We may also share your personal information with our group companies
          and with sponsors, joint venture partners and other third parties,
          including entities for which we are acting as an agent, licensee,
          application host or publisher, such as societies, that wish to send
          you invitations, surveys, programs or information about their products
          and services that may be of interest to you as determined by your
          choices in managing your communications preferences and other
          settings. The Service may let you post and share personal information,
          comments, messages, materials and other content. Any such information
          that you disclose publicly or in discussion fora in the Service may be
          collected and used by others, may be indexed by search engines, and
          might not be able to be removed. Please be careful when disclosing
          personal information in these public areas.
        </p>
        <br />
        <strong>Legal reasons</strong>
        <br />
        <p>
          We also will disclose your personal information if we have a good
          faith belief that such disclosure is necessary to:
        </p>
        <ul>
          <li>
            Meet any applicable law, regulation, legal process or other legal
            obligation;
          </li>
          <li>
            Detect, investigate and help prevent security, fraud or technical
            issues; and/or
          </li>
          <li>
            Protect the rights, property or safety of SICN, our users, employees
            or others;
          </li>
        </ul>
        <p className="mt-4">
          And as part of a corporate transaction, such as a transfer of a
          journal or other assets to or an acquisition by or merger with another
          company.
        </p>
        <h2 className="mt-4">Your personal account</h2>
        <p>
          If you create a personal user account on SCIN Publishing, you can sign
          in with the same credentials to all other website under SCIN
          Publishing. We will share your usage activity, preferences and other
          information amongst these and related SCIN services to help you
          improve your productivity.
        </p>
        <h2 className="mt-4">Administrator data</h2>
        <p>
          If you are an administrator of an institution with a subscription to a
          Service, we will use your details to communicate with you about your
          institution’s subscription and related services. If you supply us
          contact information of your colleagues, we may include a reference to
          you when we contact those individuals with communications about the
          Service.
        </p>
        <h2 className="mt-4">Your communications preferences</h2>
        <p>
          You can customize and manage your communications preferences and other
          settings when you register with the Service, by updating your account
          features and preferences, by using the “opt-in/out” or
          subscribe/unsubscribe mechanisms or other means provided within the
          communications that you receive from us or by contacting us. We
          reserve the right to notify you of changes or updates to the Service
          whenever necessary.
        </p>
        <h2 className="mt-4">Accessing and updating your information</h2>
        <p>
          The Service may allow registered users to directly access their
          account information and make corrections or updates at any time.
          Keeping such information up to date is solely the responsibility of
          the user. Registered users may also close their account directly
          through the Service or by contacting the Service’s customer support.
        </p>
        <p>
          You have the right under certain privacy and data protection laws, as
          may be applicable, to request free of charge:
        </p>
        <ul>
          <li>
            Access to and correction and deletion of your personal information;
          </li>
          <li>
            Restriction of our processing of your personal information, or to
            object to our processing; and/or
          </li>
          <li>Portability of your personal information.</li>
        </ul>
        <p>
          If you wish to exercise any of these rights, please contact us through
          the{' '}
          <a href="mailto:info@scin.io" className="text-primary">
            info@scin.io
          </a>
          . We will respond to your request consistent with applicable laws. To
          protect your privacy and security, we may require you to verify your
          identity. You may designate an authorized agent to make a request on
          your behalf subject to proof of identity and authorization.
        </p>
        <h2 className="mt-4">Data retention</h2>
        <p>
          We retain your personal information for as long as necessary to
          provide the Service and fulfill the transactions you have requested,
          or for other essential purposes such as complying with our legal
          obligations, maintaining business and financial records, resolving
          disputes, maintaining security, detecting and preventing fraud and
          abuse, and enforcing our agreements.
        </p>
        <h2 className="mt-4">Data security</h2>
        <p>
          We take precautions to safeguard your personal information against
          loss, theft and misuse and unauthorized access, disclosure, alteration
          and destruction through the use of appropriate technical and
          organizational measures.
        </p>
        <h2 className="mt-4">Locations of processing</h2>
        <p>
          Your personal information may be stored and processed in your region
          or another country where SCIN Publishing companies and their service
          providers maintain servers and facilities, including Australia,
          Canada, China, France, Germany, India, Ireland, the Netherlands, the
          Philippines, Singapore, the United Kingdom, and the United States. We
          take steps, including through contracts, to ensure that the
          information continues to be protected wherever it is located in a
          manner consistent with the standards of protection required under
          applicable law.
        </p>
        <p>
          Certain U.S. entities within the SCIN group of companies have
          certified certain of their services to the EU-U.S. and Swiss-U.S.
          Privacy Shield Frameworks as set forth by the U.S. Department of
          Commerce. To learn more about the Privacy Shield program, and to view
          these entities’ certification, please visit{' '}
          <a
            className="btn-link"
            href="https://www.privacyshield.gov"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.privacyshield.gov
          </a>
          .
        </p>
        <h2 className="mt-4">Grounds for processing</h2>
        <p>
          When we process any personal information within the scope of certain
          privacy and data protection laws, we do so:
          <ul>
            <li>
              Where necessary to provide the Service, fulfill a transaction or
              otherwise perform a contract with you or at your request prior to
              entering into a contract;
            </li>
            <li>
              Where necessary for our compliance with applicable law or other
              legal obligation;
            </li>
            <li>
              Where necessary for the performance of a task carried out in the
              public interest;
            </li>
            <li>Where applicable, with your consent; and/or</li>
            <li>
              As necessary to operate our business, protect the security of our
              systems, customers and users, detect or prevent fraud, or fulfill
              our other legitimate interests as described in the sections above,
              except where our interests are overridden by your privacy rights.
            </li>
          </ul>
          Where we rely on your consent to process personal information, you
          have the right to withdraw your consent at any time, and where we rely
          on legitimate interests, you may have the right to object to our
          processing.
        </p>
        <h2 className="mt-4">Changes</h2>
        <p>
          We will update this privacy policy from time to time. Any changes will
          be posted on this page with an updated revision date. If we make any
          material changes, we will provide notice through the Service or by
          other means.
        </p>
        <h2 className="mt-4">Contact</h2>
        <p>
          If you have any questions, comments, complaints or requests regarding
          this privacy policy or our processing of your information, please
          contact the SCIN Publishing via the Email () You also may lodge a
          complaint with the data protection authority in the applicable
          jurisdiction. The data protection representative for our businesses
          that are processing personal data within the scope of European Union
          and Swiss data protection laws and established outside of the European
          Economic Area and Switzerland is SCIN Publishing Inc. The data
          protection representative for our businesses that are processing
          personal data within the scope of United Kingdom data protection laws
          and established outside of the United Kingdom is SCIN Publishing.
        </p>
        <h2 className="mt-4">Service-specific details</h2>
        <p>
          Please read the service-specific details below for additional
          information about certain SCIN services.
        </p>
        <p>
          <br />
          <strong>SCIN Workflow Manager</strong>
          <br />
        </p>
        <p>
          Submissions to most SCIN journals are handled via the SCIN workflow
          manager online manuscript submission and peer review system. When you
          create or confirm an Editorial Manager account for a journal, certain
          personal information is required, such as your name and email address.
          Some journals may require or provide you the option to add other
          information, such as postal address, institutional affiliation,
          telephone number, or ORCID ID, as well as to self-identify your gender
          identity, race and ethnicity for diversity, equity and inclusion
          purposes.If you are a reviewer, workflow manager may process
          additional information, such as your subject area expertise,
          publication history, and review history, including your previous
          review comments, to help optimally match submitted manuscripts with
          relevant reviewers.To optimize performance and secure the integrity of
          the peer review process, SCIN also monitors geography-based traffic
          and usage data. To deliver workflow manager services, your data may be
          processed by affiliates and service providers that perform services
          such as website hosting and IT support.You can always manage your
          marketing communication preferences in your workflow manager account
          at any time.
        </p>
      </div>
      {/* <!-- ========================= footer start ========================= --> */}
      <section id="home" className="container">
        {<FooterView />}
      </section>

      {/* <!-- ========================= scroll-top ========================= --> */}
      <ScrollTopView />
    </>
  );
};

export default Privacy;
