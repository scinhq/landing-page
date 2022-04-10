import Link from 'next/link';
import { SocialMediumInformation } from './Footer';
import { FounderInfoCardProps } from './TeamView';

export const SocialButton = (props: SocialMediumInformation) => {
  return (
    <div className="btn-group me-2" role="group">
      <button type="button" className="btn btn-secondary">
        <Link href={props.url} passHref>
          <a target="_blank">
            <em className={props.iconClassName}></em>
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
          <em className={socialMedInfo.iconClassName}></em>
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
