import HeaderBox from "@/components/HeaderBox";
import { PaginationBank } from "@/components/PaginationBank";
import TransactionsTable from "@/components/TransactionsTable";
import { Pagination } from "@/components/ui/pagination";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import React from "react";

const TransactionHistory = async () => {
  const loggedIn = await getLoggedInUser();
  return (
    <section className="transactions">
      <HeaderBox
        title="Transaction History"
        subtext="Gain Insights and Track your Transactions Over Time"
      />
      <div className="space-y-6">
        <div className="transactions-account">
          <div className="flex flex-col gap-2">
            <h2 className="text-18 font-bold text-white">{loggedIn.name}</h2>
            <p className="text-14 text-blue-25">Rural Bank Savings Account</p>
            <p className="text-14 font-semibold tracking-[1.1px] text-white">
              ●●●● ●●●● ●●●● ●●●●
            </p>
          </div>

          <div className="transactions-account-balance">
            <p className="text-14">Current Balance</p>
            <p className="text-24 font-bold">PHP 1,250.35</p>
          </div>
        </div>

        <h2 className="recent-transactions-label">Transaction History</h2>
        <section className="flex w-full flex-col gap-6">
          <TransactionsTable />
        </section>
      </div>
    </section>
  );
};

export default TransactionHistory;
