require('@babel/register');
const puppeteer = require('puppeteer');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const DynamicPDFContent = require('./view/DynamicPdfContent.js');

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Render the React component to a string
  const componentProps = { name: 'John Doe', age: 30 };
  const content = ReactDOMServer.renderToString(
    React.createElement(DynamicPDFContent, componentProps)
  );

  await page.setContent(content);
  await page.pdf({ path: 'dynamic.pdf', format: 'A4', printBackground: true, });

  await browser.close();
}

generatePDF();