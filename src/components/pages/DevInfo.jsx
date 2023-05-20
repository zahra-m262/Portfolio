import { Typography } from "@mui/material";

import { KeyboardArrowLeftRounded } from "@mui/icons-material";

const Info = ({ children }) => {
  return (
    <Typography variant="body1" color="black" textAlign="left" sx={{ mt: 2 }}>
      {children}
      <KeyboardArrowLeftRounded
        sx={{
          verticalAlign: "bottom",
          color: "primary.main",
        }}
      />
    </Typography>
  );
};
const DevInfo = () => {
  return (
    <>
      <Info>نام و نام خانوادگی : آیدا یوسفی</Info>
      <Info>سن :27 سال</Info>
      <Info>شهر: تهران</Info>
      <Info>aydamohamadi1996@gmail.com :آدرس ایمیل</Info>
      <Info>شماره تماس:09224819655</Info>
    </>
  );
};

export default DevInfo;
