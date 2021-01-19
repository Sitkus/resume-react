import { useState, Fragment } from 'react';
import useStyles from './index.style';
import Layout from './components/layout';
import { ContentBox, Pill, Job, School, LinkBlock } from './components/common';
import { HorizontalDivider, VerticalDivider } from './components/helpers';
import translations from '../translations';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LanguageIcon from '@material-ui/icons/Language';

function App() {
  const classes = useStyles();
  const [language, setLanguage] = useState('en');
  const { links, aboutMe, education, skills, experience } = translations[language];

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <ContentBox className={classes.sideBox} title={links.title}>
        <ul className={classes.links}>
          {links.items.map((link) => (
            <LinkBlock key={link.title} link={link.href} title={link.title}>
              {link.title.includes('linkedin') ? (
                <LinkedInIcon className={`${classes.linkIcon}`} />
              ) : link.title.includes('twitter') ? (
                <TwitterIcon className={`${classes.linkIcon}`} />
              ) : link.title.includes('github') ? (
                <GitHubIcon className={`${classes.linkIcon}`} />
              ) : (
                <LanguageIcon className={`${classes.linkIcon}`} />
              )}
            </LinkBlock>
          ))}
        </ul>
      </ContentBox>
      <ContentBox className={classes.aboutMe} title={aboutMe.title}>
        <p>{aboutMe.description}</p>
      </ContentBox>

      <section className={classes.secondRow}>
        <ContentBox className={classes.sideBox} title={education.title}>
          {education.schools.map((school, index) =>
            index === 0 ? (
              <Fragment key={school.name}>
                <School schoolName={school.name} date={school.date} degree={school.degree} />
                <HorizontalDivider withoutPlate isShort />
              </Fragment>
            ) : (
              <School
                key={school.name}
                schoolName={school.name}
                date={school.date}
                degree={school.degree}
              />
            )
          )}
        </ContentBox>

        <ContentBox className={classes.skillsSection} title={skills.soft.title}>
          <ul>
            {skills.soft.skills.map((skill) => (
              <Pill
                key={skill.title}
                className={
                  skill.level.includes('Pro')
                    ? classes.skillPro
                    : skill.level.includes('Adv')
                    ? classes.skillAdv
                    : classes.skillNew
                }
              >
                {skill.title}
              </Pill>
            ))}
          </ul>
        </ContentBox>

        <ContentBox className={classes.skillsSection} title={skills.hard.title}>
          <ul>
            {skills.hard.skills.map((skill) => (
              <Pill
                key={skill.title}
                className={
                  skill.level.includes('Pro')
                    ? classes.skillPro
                    : skill.level.includes('Adv')
                    ? classes.skillAdv
                    : classes.skillNew
                }
              >
                {skill.title}
              </Pill>
            ))}
          </ul>
        </ContentBox>
      </section>

      <ContentBox className={classes.workExperience} title={experience.title}>
        {experience.jobs.map((job, index, array) =>
          index !== array.length - 1 ? (
            <Fragment key={job.name}>
              <Job position={job.position} companyName={job.name} date={job.date}>
                {job.description}
              </Job>
              <VerticalDivider />
            </Fragment>
          ) : (
            <Job key={job.name} position={job.position} companyName={job.name} date={job.date}>
              {job.description}
            </Job>
          )
        )}
      </ContentBox>

      <HorizontalDivider withoutPlate />
    </Layout>
  );
}

export default App;
