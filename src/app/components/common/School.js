import useStyles from './common.style';

function School({ schoolName, date, degree }) {
  const classes = useStyles();

  return (
    <section>
      <h3 className={classes.schoolName}>{schoolName}</h3>
      <p>{date}</p>
      <p>{degree}</p>
    </section>
  );
}

export default School;
