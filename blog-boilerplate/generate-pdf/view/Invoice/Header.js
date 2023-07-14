const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { Avatar, Button, Typography } = require("@mui/material");
const { styled } = require("@mui/system");

const Caption = styled(Typography)`
  variant: caption;
  display: block;
  font-size: 10px;
`;

const InvoiceHeader = ({ businessInfo }) => {
  console.log("Invoice HEader ==>", businessInfo);
  return (
    <FlexRow sx={{ justifyContent: "space-between", width: "100%" }}>
      <FlexRow style={{ width: "70%" }}>
        <Avatar alt="Remy Sharp" src={businessInfo["logoUrl"]} />
        <div style={{ width: "50%" }}>
          <Caption>{businessInfo["businessName"]}</Caption>
          <Caption>+92-{businessInfo["phone"]["number"]}</Caption>
          <Caption>{businessInfo["email"]}</Caption>
          <Caption style={{ width: "350px" }}>
            {businessInfo["address"]}
          </Caption>
        </div>
      </FlexRow>
      <div style={{ width: "30%", textAlign: "end" }}>
        <Typography>{businessInfo["businessName"]}</Typography>
      </div>
    </FlexRow>
  );
};

module.exports = InvoiceHeader;
