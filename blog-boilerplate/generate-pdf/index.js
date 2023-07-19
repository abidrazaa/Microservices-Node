require("@babel/register");
const puppeteer = require("puppeteer");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const DynamicPDFContent = require("./view/DynamicPdfContent.js");
// const Logo = "file://" + __dirname + "/assets/Logo.png";

async function generatePDF() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const content = ReactDOMServer.renderToString(
    React.createElement(DynamicPDFContent)
  );

  await page.setContent(content);
  await page.addStyleTag({
    content: `
      @page {
        margin: 30;
      }
    `,
  });
  await page.pdf({ path: 'dynamic.pdf', format: 'A4', printBackground: true, });

  await browser.close();
}

// async function generatePDF() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   // Render the Receipt component to a string
//   const content = ReactDOMServer.renderToString(
//     React.createElement(DynamicPDFContent, {
//       /* Pass your invoice object here */
//     })
//   );

//   // HTML template with custom footer and logo logic
//   const htmlTemplate = `
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <style>
//           /* Add custom styles here */
//           body {
//             margin: 0;
//             padding: 0;
//           }
//           /* Rest of your styles... */
//         </style>
//       </head>
//       <body>
//         <div id="receipt-container">
//           ${content}
//         </div>
//       </body>
//     </html>
//   `;

//   // Set the content for the first render to calculate total pages
//   await page.setContent(htmlTemplate, { waitUntil: "domcontentloaded" });

//   // Wait for the content to render completely
//   await page.waitForTimeout(1000); // Adjust the delay as needed based on your content complexity

//   // Get the total number of pages after rendering
//   const totalPages = await page.evaluate(() => {
//     const container = document.getElementById("receipt-container");
//     const { scrollHeight, clientHeight } = container;
//     return Math.ceil(scrollHeight / clientHeight);
//   });

//   // Set the content for the second render with the logo on the last page
//   await page.setContent(htmlTemplate, { waitUntil: "domcontentloaded" });

//   // Wait for the content to render completely
//   await page.waitForTimeout(2000); // Adjust the delay as needed based on your content complexity
//   const logoPath = "file://" + __dirname + "/assets/Logo.png"
//   // Function to inject the logo on the last page
//   const injectLogoOnLastPage = async (totalPages, logoPath) => {
//     const lastPageOffset = (totalPages - 1) * window.innerHeight;
//     await window.scrollTo(0, lastPageOffset);
//     const logo = document.createElement("img");
//     logo.alt = "logo";
//     logo.src = logoPath;
//     logo.style.position = "fixed";
//     logo.style.bottom = "10px";
//     logo.style.left = "10px";
//     logo.style.width = "100px";
//     document.body.appendChild(logo);
//   };

//   // Execute the logo injection function in the page context and pass totalPages as an argument
//   await page.evaluate(injectLogoOnLastPage, totalPages, 'file://' + __dirname + '/assets/Logo.png');

//   // Generate the PDF with print background option set to true
//   await page.pdf({ path: "dynamic.pdf", format: "A4", printBackground: true });

//   await browser.close();
// }

generatePDF();
