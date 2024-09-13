import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { Progress } from "@/components/ui/progress";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { Indicator } from "@radix-ui/react-progress";
import React from "react";

import { cn } from "@/lib/utils";
import { topCategoryStyles } from "@/constants";

const MyBanks = async () => {
  const {
    bg,
    circleBg,
    text: { main, count },
    progress: { bg: progressBg, indicator },
    icon,
  } = topCategoryStyles.default;
  const user = await getLoggedInUser();

  const banks = [
    { currentBalance: 123.5, name: "One Lastname" },
    { currentBalance: 432.01, name: "Two Lastname" },
    { currentBalance: 99.21, name: "Three Lastname" },
    { currentBalance: 258.0, name: "Four Lastname" },
    { currentBalance: 68.42 },
    { currentBalance: 1359.64 },
  ];
  return (
    <section className="flex h-full">
      <div className="my-banks">
        <HeaderBox
          title="My Bank Accounts"
          subtext="Effortlessly Manage Your Banking Activities"
        />
        <div className="space-y-4">
          <h2 className="header-2">Your cards</h2>
          <div className="flex  flex-wrap justify-start gap-6">
            {banks &&
              banks.map((bank, index) => (
                <div>
                  <BankCard
                    key={index}
                    account={bank}
                    userName={bank.name || user.name}
                  />
                  <div className="">
                    <div className="flex flex-row justify-between pb-2 mt-5">
                      <p className=" flex text-sm ">Spending this month</p>
                      <p className="flex text-sm text-gray-800">
                        $ {bank.currentBalance}
                      </p>
                    </div>
                    <Progress
                      value={(bank.currentBalance / 800) * 150}
                      className={cn("h-2 w-full", progressBg)}
                      indicatorClassName={cn("h2 w-full", indicator)}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
