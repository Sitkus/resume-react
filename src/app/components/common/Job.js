import useStyles from './common.style';

function Job({ children, position, companyName, date }) {
  const classes = useStyles();

  return (
    <section className={classes.job}>
      <h4 className={classes.jobPosition}>{position}</h4>
      <h5>{companyName}</h5>
      <p>{date}</p>
      <p className={classes.jobDescription}>{children}</p>
    </section>
  );
}

export default Job;
