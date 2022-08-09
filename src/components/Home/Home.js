import sprite from "../../images/sprite.svg";

const Home = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">The Sky Is The Limit</h1>
        <p className="hero__text">
          We provide world class financial assistance
        </p>
        <button className="button hero__button" type="button">
          <div className="hero__content-button">
            <svg className="hero__icon" width="9" height="18">
              <use href={sprite + "#icon-angle-right"} />
            </svg>
            <div className="hero__text-button">Read More</div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Home;
