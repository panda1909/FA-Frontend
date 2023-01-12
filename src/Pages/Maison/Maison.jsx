import DefaultLayout from "../../Layouts/DefaultLayout";
import css from "./Maison.module.scss";
import comingsoon from "./img/coming-soon.png";

function Maison() {
  return (
    <>
      <DefaultLayout>
        <section className={css.section}>
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-24">
                <div className="page-header">
                </div>
              </div>
            </div>

            <div className="row align-items-center">
              <div className="col-md-24 col-24">
                <div className="d-flex align-items-center justify-content-center">
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <img src={comingsoon} alt="Contact Us" />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default Maison;
