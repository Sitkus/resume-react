import useStyles from './index.style';
import { ContactBlock } from '../common';
import translations from '../../translations';

function Footer({ language }) {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <ul className={classes.list}>
        {translations[language].footer.map((item) => (
          <ContactBlock key={item.title} title={item.title}>
            {item.content.map((contact) =>
              !contact.href ? (
                <p key={contact.text}>{contact.text}</p>
              ) : (
                <a
                  key={contact.text}
                  className={classes.itemLink}
                  target="_blank"
                  href={contact.href}
                >
                  {contact.text}
                </a>
              )
            )}
          </ContactBlock>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
