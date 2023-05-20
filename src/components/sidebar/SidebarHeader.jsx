import { useState } from "react";

import { Typography } from "@mui/material";
import { RandomReveal } from "react-random-reveal";

import avatar from "../../assets/avatar.jpg";
import { alphabetPersian } from "../../constants/alphabetPersian";
import ThemeActionButton from "../ThemeActionButton";
import { CustomAvatar } from "../common";
import SocialMediaIcons from "../SocialMediaIcons";

const SidebarHeader = () => {
  const [start, setStart] = useState(false);

  return (
    <>
      <ThemeActionButton />
      <CustomAvatar avatar={avatar} size={200} fallback="AY" />

      <Typography variant="h6" color="#e65100">
        <Typography variant="caption" color="#e65100">
          {"{{"}
        </Typography>
        <RandomReveal
          isPlaying
          characterSet={alphabetPersian}
          characters="آیدا یوسفی"
          duration={2}
          onComplete={() => setStart(true)}
        />
        <Typography variant="caption" color="#e65100">
          {"}}"}
        </Typography>
      </Typography>
      {start && (
        <Typography variant="caption" color="gray">
          <Typography variant="caption" color="#ed6c02">
            {"[["}
          </Typography>
          <RandomReveal
            isPlaying
            characterSet={alphabetPersian}
            characters=" برنامه نویس سمت کاربر"
            duration={2}
          />
          <Typography variant="caption" color="#ed6c02">
            {"]]"}
          </Typography>
        </Typography>
      )}
      {/*social media icons */}
      <SocialMediaIcons />
    </>
  );
};

export default SidebarHeader;
