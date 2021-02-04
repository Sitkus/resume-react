import useStyles from './LinksList.style';
import { LinkBlock } from './';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function LinksList({ links }) {
  const classes = useStyles();

  const checkWhichIconToUse = (icon) => {
    switch (icon) {
      case 'linkedin':
        return <LinkedInIcon className={classes.linkIcon} />;

      case 'twitter':
        return <TwitterIcon className={classes.linkIcon} />;

      case 'github':
        return <GitHubIcon className={classes.linkIcon} />;

      default:
        return <LanguageIcon className={classes.linkIcon} />;
    }
  };

  return (
    <ul className={classes.links}>
      {links.items.map((link) => (
        <LinkBlock key={link.title} link={link.href} title={link.title}>
          {checkWhichIconToUse(link.icon)}
          {/* {link.title.includes('linkedin') ? (
            <LinkedInIcon className={`${classes.linkIcon}`} />
          ) : link.title.includes('twitter') ? (
            <TwitterIcon className={`${classes.linkIcon}`} />
          ) : link.title.includes('github') ? (
            <GitHubIcon className={`${classes.linkIcon}`} />
          ) : (
            <LanguageIcon className={`${classes.linkIcon}`} />
          )} */}
        </LinkBlock>
      ))}
    </ul>
  );
}

export default LinksList;
