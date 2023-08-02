const { FlexRow, FlexCol } = require("../Components/Flex/index.js");
const React = require("react");
const { Typography, Box } = require("@mui/material");
const { styled } = require("@mui/system");
const {
  calculateSubTotal,
  calculateExtraCharges,
  calculateDiscountAmount,
  calculateAdvanceAmount,
  calculateTaxes,
  convertNumber,
} = require("../../helpers.js");

const CommentBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colors.gray["50"],
  padding: "15px",
  borderRadius: "10px",
  width: "68%",
  minHeight: "160px",
}));

const ReceiptBox = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.colors.orange["50"],
  padding: "15px",
  borderRadius: "10px",
  width: "30%",
  minHeight: "160px",
}));

const ReceiptContainer = styled("div")`
  /* Add the page-break-inside property to avoid breaking the content across pages */
  page-break-inside: avoid;
`;

const Row = styled(FlexRow)`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-content: space-between;
  width: 100%;
  column-gap: 10px;
`;

const Col = styled(FlexCol)`
  align-items: flex-end;
  flex: 1;
  width: 100%;
  height: 100%;
`;

const TaxWrapper = styled(FlexCol)`
  margin-left: 10px;
  width: 100%;
  padding-right: 10px;
`;

const Line = styled("div")`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.palette.colors.gray["300"]};
  margin: 10px 0 0 0;
`;

const Footer = styled("div")`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

const Receipt = ({ invoice }) => {
  const { comments, advance, taxes, extraCharges, items, discount } = invoice;

  const Text = ({ txt }) => {
    return <Typography variant={"caption"}>{txt}</Typography>;
  };
  const Title = ({ txt }) => {
    return <Typography variant={"subtitle2"}>{txt}</Typography>;
  };

  const totalItemCost = calculateSubTotal(items);
  const totalExtraCharges = calculateExtraCharges(extraCharges);
  const totalDiscount = calculateDiscountAmount(discount, totalItemCost);
  const totalAdvance = calculateAdvanceAmount(advance);
  const totalTax = calculateTaxes(taxes, totalItemCost);

  const totalAmount =
    totalItemCost - totalAdvance + totalTax + totalExtraCharges - totalDiscount;

  function amountToLocal(price = 0) {
    return price.toLocaleString();
  }

  return (
    <>
      <ReceiptContainer>
        <div style={{ margin: "30px 0px" }} />
        <FlexRow style={{ width: "100%" }}>
          {comments && (
            <CommentBox style={{border: '1px solid black'}}>
              <Typography variant="caption">{comments}</Typography>
            </CommentBox>
          )}
          {!comments && <div style={{ width: "68%" }} />}
          <div style={{ width: "2%" }} />
          <ReceiptBox>
            <Row>
              <Title txt={"Total items"} />
              <Col>
                <Text txt={items.length.toString()} />
              </Col>
            </Row>
            <Row>
              <Title txt={"SubTotal (PKR):"} />
              <Col>
                <Text txt={amountToLocal(totalItemCost)} />
              </Col>
            </Row>
            {taxes && taxes.length > 0 && (
              <>
                <Row>
                  <Title txt={"Taxes (PKR):"} />
                </Row>
                <TaxWrapper>
                  {taxes.map((d) => (
                    <Row key={`${d.name}${d.rate}`}>
                      <Title txt={`${d.name} (${d.rate}%)`} />
                      <Col>
                        <Text
                          txt={amountToLocal((totalItemCost * d.rate) / 100)}
                        />
                      </Col>
                    </Row>
                  ))}
                </TaxWrapper>
              </>
            )}
            {extraCharges &&
              extraCharges.map((e) => (
                <Row key={`${e.description}-${e.amount}`}>
                  <Title txt={`${e.description}:`} />
                  <Col>
                    <Text txt={amountToLocal(e.amount)} />
                  </Col>
                </Row>
              ))}
            {totalDiscount !== 0 && (
              <Row>
                <Title txt={"Discount (PKR):"} />
                <Col>
                  <Text txt={amountToLocal(totalDiscount)} />
                </Col>
              </Row>
            )}
            {totalAdvance !== 0 && (
              <Row>
                <Title txt={"Advance (PKR):"} />
                <Col>
                  <Text txt={`-${amountToLocal(totalAdvance)}`} />
                </Col>
              </Row>
            )}
            <Line />
            <Row>
              <Typography variant={"caption"} fontWeight={600}>
                {"Grand Total (PKR):"}{" "}
              </Typography>
              <FlexRow />
            </Row>
            <Row>
              <FlexRow />
              <Typography
                variant={"subtitle2"}
                fontWeight={600}
                fontSize={"30px"}
              >
                {amountToLocal(convertNumber(totalAmount))}
              </Typography>
            </Row>
          </ReceiptBox>
        </FlexRow>
        <div>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
              maxHeight: { xs: 100, md: 50 },
              maxWidth: { xs: 100, md: 50 },
            }}
            alt="ordr logo"
            src={
              "https://cb-business.s3.amazonaws.com/645a135e18def7b058c0c598/business-pic-KXCAdnRCUffYtWUMLr5iD-1689790557374.jpeg"
            }
          />
        </div>
      </ReceiptContainer>
    </>
  );
};

module.exports = Receipt;
