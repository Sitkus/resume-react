import useStyles from './App.style';
import { Header, Footer } from './components/layout';
import {
  ContentBox,
  Pill,
  JobDescription,
  SchoolDescription,
  LinkBlock
} from './components/common';
import { HorizontalDivider, VerticalDivider } from './components/helpers';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <ContentBox boxClass={classes.sideBox} title="Links">
          <ul className={classes.links}>
            <LinkBlock
              link="https://www.linkedin.com/in/lukas-sitkus/"
              title="linkedin/lukas-sitkus"
            >
              <LinkedInIcon className={`${classes.linkIcon} ${classes.linkLinkedIn}`} />
            </LinkBlock>
            <LinkBlock link="/" title="twitter/lukas-sitkus">
              <TwitterIcon className={`${classes.linkIcon} ${classes.linkTwitter}`} />
            </LinkBlock>
            <LinkBlock link="https://www.github.com/Sitkus/" title="github/lukas-sitkus">
              <GitHubIcon className={`${classes.linkIcon} ${classes.linkGithub}`} />
            </LinkBlock>
            <LinkBlock link="https://sitkus.com" title="sitkus.com">
              <LanguageIcon className={`${classes.linkIcon} ${classes.linkWebsite}`} />
            </LinkBlock>
          </ul>
        </ContentBox>
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

        <section className={classes.secondRow}>
          <ContentBox boxClass={classes.sideBox} title="Education">
            <SchoolDescription
              schoolName="School Name"
              date="2014 - 2017"
              degree="Higher education"
            />
            <div className={classes.miniDivider}></div>
            <SchoolDescription
              schoolName="School Name"
              date="2014 - 2017"
              degree="Higher education"
            />
          </ContentBox>

          <ContentBox boxClass={classes.skillsSection} title="Soft Skills">
            <ul>
              <Pill levelClass={classes.skillAdv}>Teamwork</Pill>
              <Pill levelClass={classes.skillPro}>Communication</Pill>
              <Pill levelClass={classes.skillNew}>Organization</Pill>
            </ul>
          </ContentBox>

          <ContentBox boxClass={classes.skillsSection} title="Hard Skills">
            <ul>
              <Pill levelClass={classes.skillPro}>HTML</Pill>
              <Pill levelClass={classes.skillPro}>CSS / SCSS</Pill>
              <Pill levelClass={classes.skillAdv}>JavaScript</Pill>
              <Pill levelClass={classes.skillAdv}>React JS</Pill>
            </ul>
          </ContentBox>
        </section>

        <ContentBox boxClass={classes.workExperience} title="Work Experience">
          <JobDescription position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </JobDescription>

          <VerticalDivider />

          <JobDescription position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </JobDescription>

          <VerticalDivider />

          <JobDescription position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
            This book is a treatise on the theory of ethics, very popular during the Renaissance.
            The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </JobDescription>
        </ContentBox>

        <HorizontalDivider withoutPlate />
      </main>
      <Footer />
    </>
  );
}

export default App;
