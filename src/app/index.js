import useStyles from './index.style';
import Layout from './components/layout';
import { ContentBox, Pill, Job, School, LinkBlock } from './components/common';
import { HorizontalDivider, VerticalDivider } from './components/helpers';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  const classes = useStyles();

  return (
    <Layout>
      <ContentBox className={classes.sideBox} title="Links">
        <ul className={classes.links}>
          <LinkBlock link="https://www.linkedin.com/in/lukas-sitkus/" title="linkedin/lukas-sitkus">
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
      <ContentBox className={classes.aboutMe} title="About me">
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
          cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of
          ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum
          dolor sit amet..", comes from a line in section 1.10.32.
        </p>
      </ContentBox>

      <section className={classes.secondRow}>
        <ContentBox className={classes.sideBox} title="Education">
          <School schoolName="School Name" date="2014 - 2017" degree="Higher education" />
          <HorizontalDivider withoutPlate isShort />
          <School schoolName="School Name" date="2014 - 2017" degree="Higher education" />
        </ContentBox>

        <ContentBox className={classes.skillsSection} title="Soft Skills">
          <ul>
            <Pill className={classes.skillAdv}>Teamwork</Pill>
            <Pill className={classes.skillPro}>Communication</Pill>
            <Pill className={classes.skillNew}>Organization</Pill>
          </ul>
        </ContentBox>

        <ContentBox className={classes.skillsSection} title="Hard Skills">
          <ul>
            <Pill className={classes.skillPro}>HTML</Pill>
            <Pill className={classes.skillPro}>CSS / SCSS</Pill>
            <Pill className={classes.skillAdv}>JavaScript</Pill>
            <Pill className={classes.skillAdv}>React JS</Pill>
          </ul>
        </ContentBox>
      </section>

      <ContentBox className={classes.workExperience} title="Work Experience">
        <Job position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </Job>

        <VerticalDivider />

        <Job position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </Job>

        <VerticalDivider />

        <Job position="Graphic designer" companyName="Learnkey" date="2019 - 2020">
          Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
          1.10.32.
        </Job>
      </ContentBox>

      <HorizontalDivider withoutPlate />
    </Layout>
  );
}

export default App;
