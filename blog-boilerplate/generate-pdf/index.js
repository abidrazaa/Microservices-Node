require("@babel/register");
const puppeteer = require("puppeteer");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const DynamicPDFContent = require("./view/DynamicPdfContent.js");
// const Logo = "file://" + __dirname + "/assets/Logo.png";
const data = require("./data/invoices.js");

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  let combinedContent = "";
  for (const invoice of data["invoice"]) {
    const content = ReactDOMServer.renderToString(
      React.createElement(DynamicPDFContent, { invoice })
    );
    combinedContent += `
      <div class="invoice-page">
        ${content}
      </div>
    `;
  }
  const wrappedContent = `
  <div class="pdf-content">
    ${combinedContent}
  </div>
`;

  await page.setContent(wrappedContent);
  await page.addStyleTag({
    content: `
    @page {
      margin: 30;
    }
    .invoice-page {
      page-break-after: always;
    }
  `,
  });
  await page.pdf({ path: "dynamic.pdf", format: "A4", printBackground: true });

  await browser.close();
}

generatePDF();
