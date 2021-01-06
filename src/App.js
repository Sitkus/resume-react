import useStyles from './App.style';
import { Header, Footer } from './Components';

function Divider() {
  const classes = useStyles();

  return (
    <div className={classes.divider}>
      <div className={classes.dividerPlate}></div>
    </div>
  );
}

function App() {
  const classes = useStyles();

  return (
    <>
      <Header />
      <main className={classes.main}>
        <aside className={classes.aside}>
          <h3>Links</h3>
          <Divider />
          <ul>
            <li>
              Icon
              <a href="/">LinkedIn</a>
            </li>
            <li>
              Icon
              <a href="/">LinkedIn</a>
            </li>
            <li>
              Icon
              <a href="/">LinkedIn</a>
            </li>
            <li>
              Icon
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </aside>

        <article className={classes.aboutMe}>
          <h3>About me</h3>
          <Divider />
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32.
          </p>
        </article>

        <aside className={classes.aside}>
          <h3>Education</h3>
          <Divider />
          <article>
            <p>School Name</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </article>

          <div>Mini Separator here ---</div>

          <article>
            <p>School Name</p>
            <p>2009 - 2013</p>
            <p>Degree</p>
          </article>
        </aside>

        <article className={classes.softSkills}>
          <h3>Soft Skills</h3>
          <Divider />
          <ul>
            <li>Teamwork</li>
            <li>Communication</li>
            <li>Organization</li>
          </ul>
        </article>

        <article className={classes.softSkills}>
          <h3>Hard Skills</h3>
          <Divider />
          <ul>
            <li>HTML</li>
            <li>CSS / SCSS</li>
            <li>JavaScript</li>
            <li>React JS</li>
          </ul>
        </article>

        <article className={classes.workExperience}>
          <h3>Work experience</h3>
          <Divider />
          <section>
            <h4>Job position</h4>
            <h5>Company</h5>
            <h6>2018 - Present</h6>
            <p>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
              "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </section>

          <section>
            <h4>Job position</h4>
            <h5>Company</h5>
            <h6>2018 - Present</h6>
            <p>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
              "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </section>

          <section>
            <h4>Job position</h4>
            <h5>Company</h5>
            <h6>2018 - Present</h6>
            <p>
              Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
              treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum,
              "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </p>
          </section>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
