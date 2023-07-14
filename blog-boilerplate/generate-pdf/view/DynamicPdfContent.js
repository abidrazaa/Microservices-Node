const React = require('react');
const { ThemeProvider, CssBaseline, Button, Typography } = require('@mui/material');
const theme = require('./theme');
const { styled } = require('@mui/system');
const InvoiceHeader = require('./Invoice/Header.js');
const Capsule = require('./Components/atoms/Capsule');
const InvoicePdf = require('./Invoice');
const data = require('../data/invoices.js')

const DynamicPDFContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <InvoicePdf invoiceData={data['invoice']} />
    </ThemeProvider>
  );
};

module.exports = DynamicPDFContent;

