import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import DashboardLayout from "../../Layouts/DashboardLayout";
import {logos} from "./ServicesData";
import css from "./Featured.module.scss";
import featuredclients from "./img/featured-clients.png"




function FeaturedClients() {
    const [logos, setlogos] = useState([])

    useEffect(() => {
        fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/featured-clients`)
            .then((res) => res.json())
            .then((resJson) => {
                let data = []
                for (let i = 0; i < resJson.length; i++) {
                    data.push({
                        name: resJson[i]['name'],
                        logo: `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` + resJson[i]['logo'],
                    })
                }
                setlogos(data)
            })
    }, [])
    return (
        <>
            <DashboardLayout>
                <section className={css.section}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-md-24">
                                <div className="page-header">
                                    <img src={featuredclients} alt="Contact Us"/>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-center">
                            {logos?.map((logo, index) => (
                                <div className="col-md-6" key={index}>
                                    <figure className={css["logo"]}>
                                        <img
                                            className={css["logo__img"]}
                                            src={logo.logo}
                                            alt={logo.name}
                                        />
                                        {/* <figcaption>{logo.text} </figcaption> */}
                                    </figure>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </DashboardLayout>
        </>
    );
}

export default FeaturedClients;
