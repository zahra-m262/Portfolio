import {
  Box,
  Typography,
  Chip,
  LinearProgress,
  Divider,
  Badge,
} from "@mui/material";

const Skill = ({ icon, color, name, value }) => {
  return (
    <>
      <Divider
        textAlign="right"
        sx={{
          "&::before, &::after": {
            borderColor: `${color}.main`,
          },
          mt: 3,
        }}
      >
        <Chip
          icon={<Box component="img" src={icon} sx={{ height: 30 }} />}
          color={color}
          label={name}
          sx={{ color: "black", p: 3 }}
        />
      </Divider>

      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Box sx={{ minWidth: 35, mr: 2 }}>
          <Typography variant="body2" color="gray">
            <Badge
              variant="standard"
              color={color}
              badgeContent={`${Math.round(value)}%`}
            />
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mr: 1 }}>
          <LinearProgress
            variant="determinate"
            value={value}
            color={color}
            sx={{ height: 7, borderRadius: 2 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default Skill;
