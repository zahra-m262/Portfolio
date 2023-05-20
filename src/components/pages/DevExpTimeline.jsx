import { Slide, Typography } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineContent,
  TimelineConnector,
} from "@mui/lab";

import { HomeRepairServiceRounded } from "@mui/icons-material";

import { devExp } from "../../constants/details";

const DevExpTimeline = ({ loading }) => {
  return (
    <Timeline position="right" sx={{ direction: "ltr" }}>
      {devExp.map((item, index) => (
        <Slide
          direction="up"
          in={loading}
          style={{
            transitionDelay: loading ? `${index + 10}99ms` : "0ms",
          }}
        >
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="warning" variant="outline">
                <HomeRepairServiceRounded color="warning" />
              </TimelineDot>
              {index !== 3 ? <TimelineConnector /> : null}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="body1" color="black">
                {item.cert}
              </Typography>
              <Typography variant="body2" color="gray">
                {item.place}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        </Slide>
      ))}
    </Timeline>
  );
};

export default DevExpTimeline;
