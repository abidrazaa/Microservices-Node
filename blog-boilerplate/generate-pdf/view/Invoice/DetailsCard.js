const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Typography } = require("@mui/material");
const { styled } = require("@mui/system");
const moment = require("moment/moment");

const Caption = styled(Typography)`
  variant: caption;
  display: block;
  font-size: 15px;
`;

const Box = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colors.gray["50"],
  padding: "15px",
  borderRadius: "10px",
  width: "49%",
  minHeight: "160px",
}));

const calculateDueDate = (dueDate) => {
  const days = moment(dueDate)
    .startOf("days")
    .diff(moment().startOf("days"), "days");
  const date = moment(dueDate).format("DD MMM, YYYY");

  return { days, date };
};

const getTermsText = (dueDate) => {
  if (!dueDate) return "";

  const { days, date } = calculateDueDate(dueDate);
  return `Due ${days === 0 ? "Today" : ""} ${
    days > 0
      ? `after ${days} ${days > 1 ? "days" : "day"} ( ${date} )`
      : `${days < 0 ? "on" : ""}  ${date} `
  }`;
};

const DetailsCard = ({ contactInfo, paymentMethod, paymentTerms }) => {
  console.log("DetailsCard ==>", contactInfo);
  const { dueDate, custom } = paymentTerms;
  return (
    <>
      <hr style={{ margin: "30px 0px" }} />
      <FlexRow style={{ width: "100%" }}>
        <Box>
          <Typography variant="body1">Billed To</Typography>
          <Typography variant="body2" fontWeight={"600"}>
            {contactInfo["name"]}
          </Typography>
          <Caption>+92-{contactInfo["phone"]["number"]}</Caption>
          <Caption>{contactInfo["address"]}</Caption>
        </Box>
        <div style={{ width: "2%" }} />
        <Box>
          <Typography variant="h6">Payment Information</Typography>
          {paymentMethod && (
            <Typography variant={"caption"} display={"block"}>
              Method:{" "}
              <Typography
                variant={"caption"}
                display={"inline"}
                color={"green"}
              >
                {paymentMethod}
              </Typography>{" "}
            </Typography>
          )}
          {(dueDate || (custom.length > 0 && custom[0])) && (
            <Typography variant={"caption"} display={"block"}>
              Terms:{" "}
              <Typography
                variant={"caption"}
                display={"inline"}
                color={"green"}
              >
                <>
                  {getTermsText(dueDate)}
                  {custom.length > 0 && custom[0]}
                </>
              </Typography>{" "}
            </Typography>
          )}
        </Box>
      </FlexRow>
    </>
  );
};

module.exports = DetailsCard;
