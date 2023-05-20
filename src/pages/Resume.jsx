import { useState, useEffect } from "react";

import { Card, CardContent } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { Helmet } from "react-helmet-async";

import {
  HomeRepairServiceRounded,
  SettingsEthernetRounded,
} from "@mui/icons-material";
import { CustomDivider } from "../components/common";
import { DevExpTimeline, DevEduTimeline } from "../components/pages";

const Resume = ({ helmetTitle }) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    return () => {
      setLoading(false);
    };
  });
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
        <CustomDivider
          bColor="error.main"
          cColor="error"
          icom={<SettingsEthernetRounded />}
          text="
          رزومه من
          "
        />

        <Grid container sx={{ mt: 4 }}>
          <Grid xs={6}>
            <CustomDivider
              bColor="warning.main"
              cColor="warning"
              icom={<HomeRepairServiceRounded />}
              text="
            تجربیات
          "
            />

            {/*DevExp timeline*/}
            <DevExpTimeline loading={loading} />
          </Grid>
          <Grid xs={6}>
            <CustomDivider
              bColor="info.main"
              cColor="info"
              icom={<HomeRepairServiceRounded />}
              text="
            تحصیلات
          "
            />

            {/*DevEdu timeline */}
            <DevEduTimeline loading={loading} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Resume;
