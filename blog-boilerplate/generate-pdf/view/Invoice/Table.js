const { FlexRow } = require("../Components/Flex/index.js");
const React = require("react");
const { useCallback } = require("react");
const { styled } = require("@mui/system");
const moment = require("moment/moment");

const {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} = require("@mui/material");

const Wrapper = styled("div")``;

const StyledTableContainer = styled(TableContainer)`
  background-color: ${({ theme }) => theme.palette.background.default};
`;

const ProductCell = styled(TableCell)`
  min-width: "300px";
  max-width: "300px";
  background-color: ${({ theme }) => theme.palette.colors.gray["50"]};
  color: ${({ theme }) => theme.palette.colors.gray["500"]};
  vertical-align: top;
`;

const MedCell = styled(TableCell)`
  min-width: "180px";
  max-width: 200px;
  background-color: ${({ theme }) => theme.palette.colors.gray["50"]};
  color: ${({ theme }) => theme.palette.colors.gray["500"]};
  vertical-align: top;
`;

const Product = styled(ProductCell)`
  background-color: ${({ theme }) => theme.palette.background.default};
  vertical-align: top;
`;

const Info = styled(MedCell)`
  background-color: ${({ theme }) => theme.palette.background.default};
  vertical-align: top;
`;

const DescriptionWrapper = styled(FlexRow)`
  width: 100%;
  max-width: 100%;
  margin-top: 5px;
  padding: 4px 10px;
  background-color: ${({ theme }) => theme.palette.colors["gray"]["50"]};

  align-items: center;
  justify-content: flex-start;
`;

const StyledTableBody = styled(TableBody)`
  height: 100%;
`;

const TableHeader = styled(TableHead)`
  display: table-header-group;

  @page {
    &:first {
      display: table-header-group; /* Show header on the first page */
    }

    &:not(:first) {
      display: none; /* Hide header on subsequent pages */
    }
  }
`;

const TableHeaderCell = styled(MedCell)`
  border: 2px solid black;
`

const StyledTableRow = styled(TableRow)(() => ({
  backgroundColor: "#fff",
  alignItems: "flex-start",
  justifyContent: "space-between",
}));

const InvoiceTable = ({ items }) => {
  console.log("Invoice table ==> ", items);

  function amountToLocal(price = 0) {
    return price.toLocaleString();
  }

  const convertNumber = (num = 0) => {
    const amount = parseFloat(num.toString());

    if (Number.isInteger(amount)) {
      return amount;
    }
    return parseFloat(amount.toFixed(2));
  };

  return (
    <>
      <div style={{ margin: "30px 0px" }} />
      <Wrapper>
        <Paper sx={{ width: "100%" }}>
          <StyledTableContainer>
            <Table aria-label="sticky table" style={{border: '2px solid black'}}>
              <TableHeader style={{border: '2px solid black'}}>
                <ProductCell id={"name"} style={{border: '2px solid black'}}>
                  <Typography
                    variant={"caption"}
                    style={{ color: "#344054" }}
                    fontWeight={"500"}
                  >
                    Items
                  </Typography>
                </ProductCell>
                <TableHeaderCell align="left" width={100}>
                  <Typography variant={"caption"} fontWeight={"500"}>
                    Unit
                  </Typography>
                </TableHeaderCell>
                <TableHeaderCell align="left" width={120}>
                  <Typography variant={"caption"} fontWeight={"500"}>
                    Selling Price
                  </Typography>
                </TableHeaderCell>
                <TableHeaderCell align="left" width={100}>
                  <Typography variant={"caption"} fontWeight={"500"}>
                    Quantity
                  </Typography>
                </TableHeaderCell>
                <TableHeaderCell align="left" width={100}>
                  <Typography variant={"caption"} fontWeight={"500"}>
                    Line Total
                  </Typography>
                </TableHeaderCell>
              </TableHeader>
              <StyledTableBody>
                {items.map((row) => (
                  <StyledTableRow key={row["id"]} style={{border: '2px solid black'}}>
                    <Product id={"name"}>
                      <Typography
                        variant={"caption"}
                        style={{
                          color: "#344054",
                          overflowWrap: "break-word",
                        }}
                        fontWeight={"500"}
                        display={"block"}
                      >
                        {row.name}
                      </Typography>
                      {row.description && (
                        <DescriptionWrapper>
                          <Typography
                            variant={"caption"}
                            style={{
                              color: "#344054",
                              overflowWrap: "break-word",
                              overflowX: "auto",
                            }}
                            fontWeight={"500"}
                          >
                            {row.description}
                          </Typography>
                        </DescriptionWrapper>
                      )}
                    </Product>
                    <Info align="left" width={100}>
                      <Typography
                        variant={"caption"}
                        style={{
                          color: "#344054",
                          overflowWrap: "break-word",
                          overflowX: "auto",
                        }}
                        fontWeight={"500"}
                      >
                        {row.unit}
                      </Typography>
                    </Info>
                    <Info align="left" width={120}>
                      <Typography
                        variant={"caption"}
                        fontWeight={"500"}
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {amountToLocal(row.perItemSellPrice)}
                      </Typography>
                    </Info>
                    <Info align="left" width={100}>
                      <Typography variant={"caption"} fontWeight={"500"}>
                        {row.quantity}
                      </Typography>
                    </Info>
                    <Info align="left" width={100}>
                      <Typography
                        variant={"caption"}
                        fontWeight={"500"}
                        color={"#267755"}
                        style={{
                          overflowWrap: "break-word",
                        }}
                      >
                        {amountToLocal(
                          convertNumber(row.quantity) *
                            convertNumber(row.perItemSellPrice)
                        )}
                      </Typography>
                    </Info>
                  </StyledTableRow>
                ))}
              </StyledTableBody>
            </Table>
          </StyledTableContainer>
        </Paper>
      </Wrapper>
    </>
  );
};

module.exports = InvoiceTable;