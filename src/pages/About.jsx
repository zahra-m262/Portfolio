import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { DevInfo, DevWorkCount, Skills } from "../components/pages";
import avatar from "../assets/avatar02.jpg";

import { CodeRounded, SelfImprovementRounded } from "@mui/icons-material";
import { CustomAvatar, CustomDivider } from "../components/common";

const About = ({ helmetTitle }) => {
  return (
    <Card
      sx={{
        height: "100vh",
        backgroundColor: "whitesmoke",
        overflowY: "scroll",
      }}
    >
      <Helmet>
        <title>{helmetTitle}</title>
      </Helmet>
      <CardContent>
        <Grid
          container
          sx={{
            mx: 3,
          }}
        >
          <Grid xs={12} sm={12} md={8} lg={8} xl={8}>
            <CustomDivider
              bColor="primary.main"
              cColor="primary"
              icon={<CodeRounded />}
              align="right"
              text="
            توسعه دهنده ی ری اکت
            
            "
            />

            <Grid container columns={12}>
              <Grid
                xs={4}
                sm={4}
                md={3}
                lg={3}
                sx={{
                  mt: 3,
                  display: {
                    xs: "none",
                    sm: "block",
                    md: "block",
                  },
                }}
              >
                {/*DevWork Info */}
                <DevWorkCount />
              </Grid>

              <Grid xs={12} sm={8} md={9} lg={9}>
                {/*Dev Info */}
                <DevInfo />
              </Grid>
            </Grid>
          </Grid>

          <Grid xs={0} sm={0} md={4} lg={4} xl={4}>
            <CustomAvatar avatar={avatar} size={250} fallback="AY" />
          </Grid>
        </Grid>

        <Grid container>
          <Grid sx={{ width: 1, mt: 1 }}>
            <CustomDivider
              bColor="secondary.main"
              cColor="secondary"
              icon={<SelfImprovementRounded />}
              align="right"
              text="
              مهارت های من
            "
            />

            {/*SKILLS */}
            <Skills />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default About;
