import useStyles from './HorizontalDivider.style';

function HorizontalDivider({ withoutPlate, isShort }) {
  const classes = useStyles();

  return (
    <div
      className={
        isShort ? `${classes.horizontalDivider} ${classes.isShort}` : `${classes.horizontalDivider}`
      }
    >
      {withoutPlate ? null : <div className={classes.dividerPlate}></div>}
    </div>
  );
}

export default HorizontalDivider;
