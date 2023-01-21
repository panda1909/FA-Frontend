import React, { useEffect, useState } from "react";
import * as THREE from "three";
//import { Sprite } from "three/examples/jsm/objects/Sprite";
import { Sprite } from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
gsap.registerPlugin(ScrollTrigger);

function MyComponent({ slide }) {
  const navigate = useNavigate();
  const spriteMap = new THREE.TextureLoader().load(slide.src);
  const spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap });
  const sprite = new Sprite(spriteMaterial);
  const slideRef = React.useRef();
  useEffect(() => {
    const ctx = gsap.context(() => {
      let lastScroll = 0;
      // Target the two specific elements we have forwarded refs to
      gsap.to(slideRef.current?.position, {
        scrollTrigger: {
          trigger: slide.trigger,
          scrub: 1.5,
          invalidateOnRefresh: true,
        },
        x: 0,
        z: 10,
        duration: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <mesh
      onPointerEnter={() => {
        document.body.style.cursor = "pointer";
      }}
      onPointerLeave={() => {
        document.body.style.cursor = "default";
      }}
    >
      <primitive
        ref={slideRef}
        object={sprite}
        scale={[sprite.scale.x * 3, sprite.scale.y * 0.7]}
        position={slide.position}
        onClick={() => {
          if (slideRef.current.position.z < -5) {
            return;
          }
          if (slide.blank) {
            console.log("---IF");
            window.open(slide.link, "_blank", "noreferrer");
          } else {
            console.log("---else");
            navigate(slide.link, { replace: false });
            // window.location.replace(slide.link)
          }
        }}
      />
    </mesh>
  );
}

const initialNavLink = {
  title: "Contact Us",
  src: "/directedbyal2.png",
  position: [0, 0, 2],
  trigger: ".a",
  direction: "center",
  link: "https://www.google.com",
  blank: true,
};

export default function Links() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}/menu-items`)
      .then((res) => res.json())
      .then((resJson) => {
        let data = [initialNavLink];
        let initial = -76;
        let j = 97;
        for (let i = 0; i < resJson.length; i++) {
          j = j + 1;

          data.push({
            title: "Contact Us",
            src:
              `${import.meta.env.VITE_REACT_APP_BACKEND_API_ROUTE}` +
              resJson[i]["image"],
            position: [0, 0, initial],
            trigger: "." + String.fromCharCode(j),
            direction: "center",
            link: resJson[i]["link"],
            blank: resJson[i]["blank"],
          });

          initial = initial - 5;
        }
        setItems(data);
      });
  }, []);

  useEffect(() => {
    console.log(items);
  }, [items]);
  return (
    <>
      {items.map((item, index) => {
        return <MyComponent key={index} slide={item} />;
      })}
    </>
  );
}
