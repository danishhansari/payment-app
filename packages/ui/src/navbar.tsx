"use client";
import { type JSX } from "react";
import { Button } from "./button.js";

export function Navbar(): JSX.Element {
  return (
    <>
      <nav className="flex items-center w-full justify-between px-4 py-6">
        <h1 className="text-2xl font-mono">Paytm</h1>
        <Button>Login</Button>
      </nav>
    </>
  );
}
