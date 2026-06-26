import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="w-full py-3 bg-slate-800 flex flex-row items-center justify-between">
      <div className="px-8">
        <span className="text-slate-100 font-semibold text-lg hover:text-slate-300 hover:underline">
          Students
        </span>
      </div>
      <div className="px-8 flex flex-col items-center justify-center border-b border-slate-600">
        <span className="text-slate-100 font-bold text-2xl">RAU</span>
        <span className="text-sm text-slate-400 mb-0.5">
          Rea Ahll University
        </span>
      </div>
      <div className="px-8">
        <span className="text-slate-100 font-semibold text-lg hover:text-slate-300 hover:underline">
          Account
        </span>
      </div>
    </header>
  );
};

export default Navbar;
