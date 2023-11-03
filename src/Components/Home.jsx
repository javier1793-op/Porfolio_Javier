import "../Scss/home.scss";
import PhoneUser from "./PhoneUser";
import Social from "./Social";



const Home = () => {
  
  return (
    <>
      <div className="contentHome">
        <section className="phone">
          <PhoneUser />
        </section>
        <section className="textUser">
          <h1>Ruiz Diaz Javier A.</h1>
          <p>Frontend programmer| systems analyst</p>
          <Social/>
        </section>
      </div>
    </>
  );
};

export default Home;
