import useStyles from './App.style';
import { Header, Footer } from './components/layout';
import ContentBox from './components/ContentBox/ContentBox';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function HorizontalDivider({ withoutPlate }) {
  const classes = useStyles();

  return (
    <div className={classes.horizontalDivider}>
      {withoutPlate ? null : <div className={classes.dividerPlate}></div>}
    </div>
  );
}

function VerticalDivider() {
  const classes = useStyles();

  return <div className={classes.verticalDivider}></div>;
}

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <aside className={classes.sideBox}>
          <h3>Links</h3>

          <HorizontalDivider />

          <ul className={classes.links}>
            <li className={classes.link}>
              <LinkedInIcon className={`${classes.linkIcon} ${classes.linkLinkedIn}`} />
              <a href="/" target="_blank">
                linkedin/lukas-sitkus
              </a>
            </li>
            <li className={classes.link}>
              <TwitterIcon className={`${classes.linkIcon} ${classes.linkTwitter}`} />
              <a href="/" target="_blank">
                twitter/lukas-sitkus
              </a>
            </li>
            <li className={classes.link}>
              <GitHubIcon className={`${classes.linkIcon} ${classes.linkGithub}`} />
              <a href="/" target="_blank">
                github/sitkus
              </a>
            </li>
            <li className={classes.link}>
              <LanguageIcon className={`${classes.linkIcon} ${classes.linkWebsite}`} />
              <a href="/" target="_blank">
                sitkus.com
              </a>
            </li>
          </ul>
        </aside>
        {/* Edit here */}
        <ContentBox boxClass={classes.aboutMe} title="About me">
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </ContentBox>

        <article className={classes.aboutMe}>
          <h3>About me</h3>
          <HorizontalDivider />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through
            the cites of the word in classical literature, discovered the undoubtable source. Lorem
            Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
            Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the
            theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
            "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          </p>
        </article>

        <section className={classes.secondRow}>
          <aside className={classes.sideBox}>
            <h3>Education</h3>
            <HorizontalDivider />
            <article>
              <h3 className={classes.schoolName}>School Name</h3>
              <p>2009 - 2013</p>
              <p>Degree</p>
            </article>

            <div className={classes.miniDivider}></div>

            <article>
              <h3 className={classes.schoolName}>School Name</h3>
              <p>2009 - 2013</p>
              <p>Degree</p>
            </article>
          </aside>

          <article className={classes.skillsSection}>
            <h3>Soft Skills</h3>
            <HorizontalDivider />
            <ul className={classes.skillsList}>
              <li className={classes.skillsItem}>
                <p className={`${classes.skill} ${classes.skillPro}`}>Teamwork</p>
              </li>
              <li className={classes.skillsItem}>
                <p className={`${classes.skill} ${classes.skillAdv}`}>Communication</p>
              </li>
              <li className={classes.skillsItem}>
                <p className={`${classes.skill} ${classes.skillNew}`}>Organization</p>
              </li>
            </ul>
          </article>

          <article className={classes.skillsSection}>
            <h3>Hard Skills</h3>
            <HorizontalDivider />
            <ul className={classes.skillsList}>
              <li className={classes.skillsItem}>
                <p className={classes.skill}>HTML</p>
              </li>
              <li className={classes.skillsItem}>
                <p className={classes.skill}>CSS / SCSS</p>
              </li>
              <li className={classes.skillsItem}>
                <p className={classes.skill}>JavaScript</p>
              </li>
              <li className={classes.skillsItem}>
                <p className={`${classes.skill} ${classes.skillsItem}`}>React JS</p>
              </li>
            </ul>
          </article>
        </section>

        <article className={classes.workExperience}>
          <h3>Work experience</h3>
          <HorizontalDivider />
          <section className={classes.workExperienceSection}>
            <h4 className={classes.workTitle}>Job position</h4>
            <h5>Company</h5>
            <p>2018 - Present</p>
            <p className={classes.workDescription}>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32.
            </p>
          </section>

          <VerticalDivider />

          <section className={classes.workExperienceSection}>
            <h4 className={classes.workTitle}>Job position</h4>
            <h5>Company</h5>
            <p>2018 - Present</p>
            <p className={classes.workDescription}>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32.
            </p>
          </section>

          <VerticalDivider />

          <section className={classes.workExperienceSection}>
            <h4 className={classes.workTitle}>Job position</h4>
            <h5>Company</h5>
            <p>2018 - Present</p>
            <p className={classes.workDescription}>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular during the
              Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
              a line in section 1.10.32.
            </p>
          </section>
        </article>

        <HorizontalDivider withoutPlate />
      </main>
      <Footer />
    </>
  );
}

export default App;
