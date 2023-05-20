import { useState, useEffect } from "react";

import { Card, CardContent } from "@mui/material";

import { Helmet } from "react-helmet-async";

import { SchoolRounded } from "@mui/icons-material";

import { CustomDivider } from "../components/common";
import { ShowCourse } from "../components/pages";

const Courses = ({ helmetTitle }) => {
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
          cColor="primary"
          bColor="primary.main"
          icon={<SchoolRounded />}
          align="center"
          text="دوره های من"
        />
        {/*ShowCourses */}
        <ShowCourse loading={loading} />
      </CardContent>
    </Card>
  );
};

export default Courses;
