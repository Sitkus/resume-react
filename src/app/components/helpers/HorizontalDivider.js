import useStyles from './HorizontalDivider.style';

function HorizontalDivider({ withoutPlate }) {
  const classes = useStyles();

  return (
    <div className={classes.horizontalDivider}>
      {withoutPlate ? null : <div className={classes.dividerPlate}></div>}
    </div>
  );
}

export default HorizontalDivider;
