import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";

import { transactionCategoryStyles } from "@/constants";
import { cn } from "@/lib/utils";

const CategoryBadge = ({ category }: CategoryBadgeProps) => {
  const { borderColor, backgroundColor, textColor, chipBackgroundColor } =
    transactionCategoryStyles[
      category as keyof typeof transactionCategoryStyles
    ] || transactionCategoryStyles.default;

  return (
    <div className={cn("category-badge", borderColor, chipBackgroundColor)}>
      <div className={cn("size-2 rounded-full", backgroundColor)} />
      <p className={cn("text-[12px] font-medium", textColor)}>{category}</p>
    </div>
  );
};

const transactions = [
  {
    name: "Spotify",
    amount: "+ Php 750.00",
    type: "- credit",
    status: "Processing",
    date: "Sept 20",
    paymentChannel: "Online",
    category: "Subscription",
  },
  {
    name: "Jolibee",
    amount: "- Php 150.00",
    type: "credit",
    status: "Decline",
    date: "Sept 20",
    paymentChannel: "In store",
    category: "Food and Drink",
  },

  {
    name: "Puregold",
    amount: "- Php 3450.58",
    status: "Success",
    type: "credit",
    date: "Sept 8",
    paymentChannel: "Online",
    category: "Groceries",
  },
  {
    name: "Credit Card",
    amount: "+ Php 1500.00",
    type: "debit",
    status: "Success",
    date: "Sept 5",
    paymentChannel: "Other",
    category: "Payment",
  },
  {
    name: "Angel PIzza",
    amount: "- Php 750.00",
    status: "Success",
    type: "credit",
    date: "Sept 2",
    paymentChannel: "In Store",
    category: "Food and Drink",
  },
];

const TransactionsTable = () => {
  return (
    <Table>
      <TableHeader className="bg-[#f9fafb]">
        <TableRow>
          <TableHead>Transaction</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Category</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((t, index) => {
          //   const isDebit = t.type === "debit";
          const isCredit = t.type === "credit";
          return (
            <TableRow
              key={index}
              className={`${
                isCredit ? "bg-[#FFFBFA]" : "bg-[#F6FEF9]"
              } !over:bg-none !border-b-DEFAULT`}
            >
              <TableCell className=" pl-5 pr-10">
                <h1 className="text-14 truncate font-semibold text-gray-950">
                  {t.name}
                </h1>
              </TableCell>
              <TableCell
                className={` pl-2 pr-10 font font-normal ${
                  isCredit || t.amount[0] === "-"
                    ? "text-red-500"
                    : "text-green-600 font-bold"
                }`}
              >
                {t.amount}
              </TableCell>
              <TableCell className=" pl-2 pr-10">
                <CategoryBadge category={t.status} />{" "}
              </TableCell>
              <TableCell className=" pl-2 pr-10">{t.date}</TableCell>
              <TableCell className=" pl-2 pr-10">
                <CategoryBadge category={t.category} />
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
