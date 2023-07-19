const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Avatar, Typography } = require("@mui/material");
const { styled } = require("@mui/system");
const Capsule = require("../Components/atoms/Capsule.js");
const moment = require("moment/moment");

const Caption = styled(Typography)`
  variant: caption;
  display: block;
  font-size: 15px;
`;

const GutterHorizontal = styled("div")`
  margin: 0px 4px;
`;

const InvDetails = styled("div")(({ theme }) => ({
  width: "30%",
  textAlign: "end",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignSelf: "stretch",
}));

const CapsuleWrapper = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colors.green["50"],
  color: theme.palette.colors.green["700"],
  padding: "5px 10px",
  borderRadius: "25px",
  margin: "5px",
}));

const AvatarWrapper = styled(Avatar)`
  borderradius: 50%;
  width: 70px;
  height: 70px;
`;

const formatId = (id = 0, length = 5) => {
  return String(id).padStart(length, "0");
};

const InvoiceHeader = ({ businessInfo, id, date }) => {
  console.log("Invoice HEader ==>", businessInfo);
  return (
    <FlexRow sx={{ justifyContent: "space-between", width: "100%" }}>
      <FlexRow style={{ width: "70%" }}>
        <AvatarWrapper alt="Business Logo" src={businessInfo["logoUrl"]} />
        <GutterHorizontal />
        <div style={{ width: "50%" }}>
          <Typography variant="body1" fontWeight={"600"}>
            {businessInfo["businessName"]}
          </Typography>
          <Caption>+92-{businessInfo["phone"]["number"]}</Caption>
          <Caption>{businessInfo["email"]}</Caption>
          <Caption style={{ width: "350px" }}>
            {businessInfo["address"]}
          </Caption>
        </div>
      </FlexRow>
      <InvDetails>
        <Typography variant="h4">Invoice</Typography>

        <FlexRow style={{ justifyContent: "flex-end" }}>
          <div style={{ textAlign: "center" }}>
            <Typography variant="body2">Invoice ID</Typography>
            <CapsuleWrapper>
              <Typography variant="caption">
                {`INV-${formatId(id)}`}{" "}
              </Typography>
            </CapsuleWrapper>
          </div>
          <GutterHorizontal />
          <div style={{ textAlign: "center" }}>
            <Typography variant="body2">Invoice Date</Typography>
            <Capsule text={moment(date).format("DD MMM, YYYY")} />
          </div>
        </FlexRow>
      </InvDetails>
    </FlexRow>
  );
};

module.exports = InvoiceHeader;
