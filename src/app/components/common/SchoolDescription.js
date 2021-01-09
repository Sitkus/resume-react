import useStyles from './SchoolDescription.style';

function SchoolDescription({ schoolName, date, degree }) {
  const classes = useStyles();

  return (
    <section>
      <h3 className={classes.schoolName}>{schoolName}</h3>
      <p>{date}</p>
      <p>{degree}</p>
    </section>
  );
}

export default SchoolDescription;
