import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import DefaultLayout from "./../../Layouts/DefaultLayout";
import style from "./NotFoundPage.module.scss";

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found</title>
        <meta name="description" content="Page not found" />
      </Helmet>
      
      <DefaultLayout>
        <section className={style.notFound} id="not-found">
          <div className="text-center">
            <h3 className={style.notFound__icon}>
              <span role="img" aria-label="Crying Face">
                😢
              </span>
            </h3>
            <h2 className={style.notFound__heading}>404 Not Found!</h2>
            <p className={style.notFound__description}>
              The page you are looking for not avaible!
            </p>
            <br />
            <Link to="/" className="btn btn-main">Return to Home Page</Link>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
}

export default NotFoundPage; 
