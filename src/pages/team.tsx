import Image from 'next/image';
import Navbar from '../components/Navbar';
import Avatar from '../../public/img/avatar.png';
import SEO from '../components/seo';
import ScrollTopView from '../components/Scroller';
import TeamView from '../components/TeamView';

const TeamPage = () => {
  return (
    <>
      <SEO
        title={'SCIN'}
        siteTitle={'SCIN Team'}
        description={
          'SCIN is a decentralized scientific publishing platform, empowering researchers to retain the ownership of their work.'
        }
      />
      <Navbar />
      <TeamView />
      <ScrollTopView />
    </>
  );
};

export default TeamPage;
