import DefaultLayout from "./../../Layouts/DefaultLayout";
import HeroHome from "./Components/Hero/HeroHome";
import title from "./img/Fine-Arts.png";
import logo from "./img/logo.png";




function HomePage() {
  return (
    <DefaultLayout className="">
      <div className="row align-items-center">
        <div className="col-md-24">
          <div className="page-header">
            <img src={title} alt="Contact Us" />
          </div>
        </div>
      </div>

      <HeroHome />
    </DefaultLayout>
  );
}

export default HomePage;
