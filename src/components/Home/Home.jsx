import style from "./Home.module.css";
import tooth from "../../images/icon-tooth.png";

const Home = () => {
  return (
    <div className={style.field}>
      {/* <h1 className={style.title}>Home</h1> */}
      <div className={style.flex}>
        <img src={tooth} alt="" className={style.tooth} />
        <p className={style.text_logo}>Your dantist</p>
      </div>
      <div className={style.wrapper}>
        <p className={style.text}>
          <span className={style.logo}>Your dantist</span> is a modern dental
          office in the city center. We invite children, adults as well as the
          elderly. An experienced dental team is waiting for you at <br />
          al. Architects 10B
        </p>
      </div>
    </div>
  );
};

export default Home;
