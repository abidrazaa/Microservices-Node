const React = require('react');
const { ThemeProvider, CssBaseline } = require('@mui/material');
const theme = require('./theme');
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

