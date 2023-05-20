import { IconButton, Box } from "@mui/material";

import { GitHub, Instagram, Telegram, WhatsApp } from "@mui/icons-material";

const SocialMediaIcons = () => {
  return (
    <Box component="div" sx={{ mx: "auto", mt: 2, textAlign: "center" }}>
      <IconButton aria-label="Github">
        <a
          href="https://whatsapp.com/ayda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WhatsApp sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="https://telegtam.com/ayda_m262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Telegram sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="https://www.instagram.com/ayda_m262/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram sx={{ color: "gray" }} />
        </a>
      </IconButton>

      <IconButton aria-label="Github">
        <a
          href="https://github.com/ayda1996"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub sx={{ color: "gray" }} />
        </a>
      </IconButton>
    </Box>
  );
};

export default SocialMediaIcons;
