module.exports.invoice = {
  discount: {
    currency: "PKR",
    amount: 23,
    type: "percent",
  },
  advance: {
    currency: "PKR",
    amount: 300,
  },
  paymentTerms: {
    dueDate: "2023-08-20T12:30:41.000Z",
    numDays: 32,
    custom: [],
  },
  deleted: {
    status: false,
    asOf: null,
    permanentDeletionDate: null,
  },
  voided: {
    status: false,
    asOf: null,
    lastPaymentStatus: null,
    restoreInventory: false,
  },
  user: "6450e20c58a1a3f9e3711825",
  business: "64537e8418def7b058c0c4d1",
  businessInfo: {
    name: "Abid Raza", // to be addeed
    email: "abid.raza@gmail.com", // to be addeed
    phone: {
      number: "3202047335",
      countryCode: "92",
      countryInitials: "PK",
    }, // to be addeed
    businessName: "Abid Enterprises", // to be addeed
    logoUrl:
      "https://cb-business.s3.amazonaws.com/business/business-pic-MwKn4q2t0m6jwHo5uZR2l-1685013779193.jpeg", // to be added
    address:
      "ABCD Society, Scheme#33, University Road, Karachi, Pakistan, ABCD Society, Scheme#33, ABCD",
    createdAt: "2023-07-05T15:20:19.920Z",
    updatedAt: "2023-07-05T15:20:19.920Z",
  },
  contact: {
    phone: {
      number: "3202047335",
      countryCode: "92",
      countryInitials: "PK",
    },
    id: "646c8885d3e04986848a4454",
    name: "AAAAA",
    businessName: "AAAA Pro",
    businessRelationship: ["supplier"],
    address:
      "Karachi, Pakistan, Karachi, Pakistan, Karachi, Pakistan, Karachi, Pakistan, Khi",
    email: "AAAA@gmail.com",
  },
  items: [
    {
      stockId: "645b7b62581b3a728c7dacdb",
      name: "Kurkure",
      code: "34534A",
      unit: "PCs",
      quantity: 12,
      perItemSellPrice: 50,
      sellCurrency: "PKR",
      description: "This is the desciption.",
      id: "64b7d7916a14defb48cdce9d",
    },
    {
      stockId: "645b7b3e581b3a728c7daccd",
      name: "Lays",
      code: "23345A",
      unit: "PCs",
      quantity: 21,
      perItemSellPrice: 20,
      sellCurrency: "PKR",
      description: "This is the desciption 22.",
      id: "64b7d7916a14defb48cdce9e",
    },
    {
      stockId: "6458f29f581b3a728c7daa4a",
      name: "Sooper",
      code: "23123A",
      unit: "PCs",
      quantity: 34,
      perItemSellPrice: 25,
      sellCurrency: "PKR",
      id: "64b7d7916a14defb48cdce9f",
    },
  ],
  taxes: [
    {
      name: "GST",
      rate: 17,
      type: "percent",
      id: "64b7d7916a14defb48cdcea0",
    },
    {
      name: "Sales",
      rate: 5,
      type: "percent",
      id: "64b7d7916a14defb48cdcea1",
    },
    {
      name: "10percent",
      rate: 10,
      type: "percent",
      id: "64b7d7916a14defb48cdcea2",
    },
  ],
  extraCharges: [
    {
      description: "delivery",
      amount: 120,
      id: "64b7d7916a14defb48cdcea3",
    },
    {
      description: "others",
      amount: 50,
      id: "64b7d7916a14defb48cdcea4",
    },
  ],
  paymentStatus: "partial",
  status: null,
  paymentMethod: "cheque",
  comments: "This is the comment box.",
  friendlyId: 56,
  initiationAt: "2023-07-19T12:13:24.000Z",
  createdAt: "2023-07-19T12:31:13.409Z",
  updatedAt: "2023-07-19T12:31:13.409Z",
  total: 1770.6680000000001,
  id: "64b7d7916a14defb48cdce9c",
};

// {
//   discount: {
//     currency: "PKR",
//     amount: 0,
//     type: "percent",
//   },
//   advance: {
//     currency: "PKR",
//     amount: 0,
//   },
//   paymentTerms: {
//     dueDate: "2023-07-20T15:16:25.000Z",
//     custom: [],
//     numDays: 0,
//   },
//   deleted: {
//     asOf: null,
//     permanentDeletionDate: null,
//     status: false,
//   },
//   user: "6450e20c58a1a3f9e3711825",
//   business: "64537e8418def7b058c0c4d1",
//   businessInfo: {
//     name: "Abid Raza", // to be addeed
//     email: "abid.raza@gmail.com", // to be addeed
//     phone: {
//       number: "3202047335",
//       countryCode: "92",
//       countryInitials: "PK",
//     }, // to be addeed
//     businessName: "Abid Enterprises", // to be addeed
//     logoUrl:
//       "https://cb-business.s3.amazonaws.com/business/business-pic-MwKn4q2t0m6jwHo5uZR2l-1685013779193.jpeg", // to be added
//     address:
//       "ABCD Society, Scheme#33, University Road, Karachi, Pakistan, ABCD Society, Scheme#33, ABCD",
//     createdAt: "2023-07-05T15:20:19.920Z",
//     updatedAt: "2023-07-05T15:20:19.920Z",
//   },
//   contact: {
//     phone: {
//       number: "3202047335",
//       countryCode: "92",
//       countryInitials: "PK",
//     },
//     id: "646c8885d3e04986848a4454",
//     name: "AAAAA",
//     businessName: "AAAA Pro",
//     businessRelationship: ["supplier"],
//     address:
//       "Karachi, Pakistan, Karachi, Pakistan, Karachi, Pakistan, Karachi, Pakistan, Khi",
//     email: "",
//   },
//   items: [
//     {
//       stockId: "645b7b62581b3a728c7dacdb",
//       name: "Kurkure",
//       code: "34534A",
//       unit: "PCs",
//       quantity: 2,
//       perItemSellPrice: 50,
//       sellCurrency: "PKR",
//       id: "64a58a33ec0e113e4008ad57",
//     },
//     {
//       stockId: "645b7b3e581b3a728c7daccd",
//       name: "Lays",
//       code: "23345A",
//       unit: "PCs",
//       quantity: 23,
//       perItemSellPrice: 20,
//       sellCurrency: "PKR",
//       id: "64a58a33ec0e113e4008ad58",
//     },
//   ],
//   taxes: [],
//   extraCharges: [],
//   paymentStatus: "pending",
//   paymentMethod: "card",
//   comments:
//     "This is the comment. This is the comment. This is the comment. This is the comment. This is the comment.",
//   friendlyId: 53,
//   initiationAt: "2023-07-05T15:15:30.000Z",
//   createdAt: "2023-07-05T15:19:20.402Z",
//   updatedAt: "2023-07-05T15:19:20.402Z",
//   total: 560,
//   id: "64a58a33ec0e113e4008ad56",
// };
