import React, { useEffect, useState } from "react";
import NavItems from "../../Components/WebGl/Index";

export default function Landing () {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/menu-items`)
      .then((res) => res.json())
      .then((resJson) => {
          let data = []
          let j = 96
          for(let i = 0; i < resJson.length; i++){
            j = j+1
            if(i ==0 ){
              data.push({
                title: "Contact Us",
                src: `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}`+resJson[i]['image'],
                position: [0, 0, -5],
                trigger: "."+String.fromCharCode(j),
                direction: "center",
                link: resJson[i]['link'],
                blank: resJson[i]['blank']
              })
            }else{
              data.push({
                title: "Contact Us",
                src: `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}`+resJson[i]['image'],
                position: [0, 0, -10],
                trigger: "."+String.fromCharCode(j),
                direction: "center",
                link: resJson[i]['link'],
                blank: resJson[i]['blank']
              })
            }
          }
          setItems(data)
    })
  }, [])
  return (
    <div data-scroll-container style={{ position: "relative" }}>
      <NavItems />
      {   
          items.map((item, index) => {
            return (
              <section
                key={index}
                style={{ height: item.first ? "10vh" : "50vh" }}
                className={item.trigger.substring(1)}
                data-scroll-section
              ></section>
            );
          })
      }
      <section data-scroll-section style={{ height: "100vh" }}></section>
    </div>
  );
}
