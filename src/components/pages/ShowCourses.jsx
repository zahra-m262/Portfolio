import {
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
  Slide,
  CardContent,
  Card,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EllipsisText from "react-ellipsis-text";

import { courses } from "../../constants/courses";

const ShowCourses = ({ loading }) => {
  return (
    <Grid container sx={{ mx: 3, mt: 3 }}>
      {courses.map((courses, index) => (
        <Grid key={index} xs={12} sm={6} md={6} lg={4} sx={{ px: 2, mb: 2 }}>
          <Slide
            direction="up"
            in={loading}
            style={{
              transitionDelay: loading ? `${index + 5}99ms` : "0ms",
            }}
          >
            <Card sx={{ maxWidth: 345, backgroundColor: "primary" }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="200"
                  image={courses.image}
                  alt={courses.title}
                />
                <CardContent>
                  <Typography variant="body1" textAlign="left" gutterBottom>
                    {courses.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                    gutterBottom
                    sx={{ direction: "ltr" }}
                  >
                    <EllipsisText text={courses.info} lenght={"5"} />
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  href={courses.link}
                  size="small"
                  color="secondary"
                  target="_blank"
                >
                  اطلاعات بیشتر
                </Button>
              </CardActions>
            </Card>
          </Slide>
        </Grid>
      ))}
    </Grid>
  );
};

export default ShowCourses;
