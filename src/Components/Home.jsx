import "../Scss/home.scss";
import PhoneUser from "./PhoneUser";

const Home = () => {
  return (
    <>
      <div className="contentHome">
        <section className="phone">
          <PhoneUser />
        </section>
        <section className="textUser">
          <h1>Ruiz Diaz Javier A.</h1>
          <p>Progammin Front End</p>
          <span className="social">iconos aca</span>
        </section>
      </div>
    </>
  );
};

export default Home;
