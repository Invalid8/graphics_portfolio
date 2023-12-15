import classes from "./boxie.module.css";
const Boxie = () => {
  return (
    <div className={`${classes.boxie} animated shake infinite slower`}>
      <div className={`${classes.box} ${classes.fill}`}></div>
      <div className={classes.box}></div>
    </div>
  );
};

export default Boxie;
