const React = require("react");
const { Button, Typography } = require("@mui/material");
const { styled } = require("@mui/system");
const InvoiceHeader = require("./Header.js");


const InvoicePdf = ({invoiceData}) => {
    
  return (
    <>
      <InvoiceHeader businessInfo={invoiceData['businessInfo']}/>
    </>
  );
};


module.exports = InvoicePdf