import { useState, Fragment } from 'react';
import useStyles from './index.style';

import Layout from './components/layout';
import { ContentBox, Pill, Job, School, LinksList } from './components/common';
import { HorizontalDivider, VerticalDivider } from './components/helpers';
import translations from '../translations';

function App() {
  const classes = useStyles();
  const [language, setLanguage] = useState('en');
  const { links, aboutMe, education, skills, experience } = translations[language];

  return (
    <Layout language={language} setLanguage={setLanguage}>
      <ContentBox className={classes.sideBox} title={links.title}>
        <LinksList links={links} />
      </ContentBox>
      <ContentBox className={classes.aboutMe} title={aboutMe.title}>
        <p>{aboutMe.description}</p>
      </ContentBox>

      <section className={classes.secondRow}>
        <ContentBox className={classes.sideBox} title={education.title}>
          {education.schools.map((school, index, array) => (
            <Fragment key={school.name}>
              <School schoolName={school.name} date={school.date} degree={school.degree} />
              {index !== array.lenght - 1 && <HorizontalDivider withoutPlate isShort />}
            </Fragment>
          ))}
        </ContentBox>

        <ContentBox className={classes.skillsSection} title={skills.soft.title}>
          <ul>
            {skills.soft.skills.map((skill) => (
              <Pill key={skill.title} level={skill.level}>
                {skill.title}
              </Pill>
            ))}
          </ul>
        </ContentBox>

        <ContentBox className={classes.skillsSection} title={skills.hard.title}>
          <ul>
            {skills.hard.skills.map((skill) => (
              <Pill key={skill.title} level={skill.level}>
                {skill.title}
              </Pill>
            ))}
          </ul>
        </ContentBox>
      </section>

      <ContentBox className={classes.workExperience} title={experience.title}>
        {experience.jobs.map((job, index, array) => (
          <Fragment key={job.name}>
            <Job position={job.position} companyName={job.name} date={job.date}>
              {job.description}
            </Job>
            {index !== array.length - 1 && <VerticalDivider />}
          </Fragment>
        ))}
      </ContentBox>

      <HorizontalDivider withoutPlate />
    </Layout>
  );
}

export default App;
