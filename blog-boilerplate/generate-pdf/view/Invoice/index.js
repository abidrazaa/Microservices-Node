const React = require("react");
const { Button, Typography } = require("@mui/material");
const { styled } = require("@mui/system");
const InvoiceHeader = require("./Header.js");
const DetailsCard = require("./DetailsCard.js");

const Container = styled("div")`
  padding: 25px;
`;

const InvoicePdf = ({ invoiceData }) => {
  console.log("invoice pdff ==>", invoiceData);
  return (
    <Container>
      <InvoiceHeader
        businessInfo={invoiceData["businessInfo"]}
        id={invoiceData["friendlyId"]}
        date={invoiceData["createdAt"]}
      />
      <DetailsCard
        contactInfo={invoiceData["contact"]}
        paymentMethod={invoiceData["paymentMethod"]}
        paymentTerms={invoiceData["paymentTerms"]}
      />
    </Container>
  );
};

module.exports = InvoicePdf;
