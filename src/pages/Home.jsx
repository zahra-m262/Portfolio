import { useRef, useEffect, useCallback, useState } from "react";

import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import Typed from "typed.js";
import TextTransition, { presets } from "react-text-transition";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

import { links } from "../constants/particles";
import img1 from "../assets/img1.jpg";

const Home = ({helmetTitle}) => {
  const [index, setIndex] = useState(0);

  const nameEl = useRef(null);

  const strings = [
    "برنامه نویس سمت کاربر هستم",
    "علاقمند به دنیای برنامه نویسی هستم ",
  ];

  useEffect(() => {
    const typedName = new Typed(nameEl.current, {
      strings: ["آیدا یوسفی"],
      typeSpeed: 110,
      backSpeed: 80,
      backDelay: 50,
      showCursor: false,
    });

    const stringsTransition = setInterval(() => {
      setIndex((index) => index + 1);
    }, 3000);

    return () => {
      typedName.destroy();
      clearInterval(stringsTransition);
    };
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Box
      sx={{
        backgroundImage: `url(${img1})`,
        opacity: "0.7",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        WebkitBackgroundSize: "cover",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>

      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={links}
      />
      <Box component="div" sx={{ display: "flex", zIndex: 1 }}>
        <Typography variant="h3" color="#e65100">
          {"{{"}
        </Typography>
        <Typography ref={nameEl} variant="h3" color="white"></Typography>
        <Typography variant="h3" color="#e65100">
          {"}}"}
        </Typography>
      </Box>

      <Box component="div" sx={{ display: "flex", zIndex: 1 }}>
        <TextTransition springConfig={presets.molasses}>
          <Typography
            variant="h4"
            color="white"
            sx={{
              textDecoration: "underline",
              textDecorationColor: "#D2AC7F",
              mt: 6,
            }}
          >
            {strings[index % strings.length]}
          </Typography>
        </TextTransition>
        <Typography variant="h4" color="white" sx={{ mt: 6, mr: 1 }}>
          من
        </Typography>
      </Box>
    </Box>
  );
};

export default Home;
