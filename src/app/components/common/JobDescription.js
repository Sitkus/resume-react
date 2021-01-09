import useStyles from './JobDescription.style';

function JobDescription({ position, companyName, date, children }) {
  const classes = useStyles();

  return (
    <section className={classes.job}>
      <h4 className={classes.position}>{position}</h4>
      <h5>{companyName}</h5>
      <p>{date}</p>
      <p className={classes.description}>{children}</p>
    </section>
  );
}

export default JobDescription;
