import Link from 'next/link';
import { SocialMediumInformation } from './Footer';
import { FounderInfoCardProps } from './TeamView';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const SocialButton = (props: SocialMediumInformation) => {
  console.log(props);
  return (
    <div className="btn-group me-1" role="group">
      <button type="button" className="btn btn-outline">
        <Link href={props.url} passHref>
          <a target="_blank">
            <div style={{ width: '1rem', height: '1rem' }}>
              <FontAwesomeIcon icon={props.faIcon} />
            </div>
          </a>
        </Link>
      </button>
    </div>
  );
};

export const TeamSocialLinks = (props: FounderInfoCardProps) => {
  const { socialMediaLinks } = props;
  const socialMedia = (socialMedInfo: SocialMediumInformation) => {
    return (
      <Link href={socialMedInfo.url} passHref>
        <a className="mx-2" target="_blank">
          <div style={{ width: '1rem', height: '1rem' }}>
            <FontAwesomeIcon icon={socialMedInfo.faIcon} />
          </div>
        </a>
      </Link>
    );
  };

  const socialMediaWrapper = (socialLinks: SocialMediumInformation[]) => {
    return (
      <div className="row justify-content-center">
        <div className="col-auto">
          {socialLinks.map((socialMed: SocialMediumInformation) => {
            return socialMedia(socialMed);
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      {socialMediaLinks.length > 0
        ? socialMediaWrapper(socialMediaLinks)
        : null}
    </>
  );
};
