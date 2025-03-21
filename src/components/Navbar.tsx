"use client";

import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex w-[100%] justify-between absolute top-0 left-0 p-4 text-primary font-semibold">
      <ul className="flex items-center gap-4">
        <li>
          <Link href="/" className="">
            Home
          </Link>
        </li>
        <li>
          <Link href="/plans" className="hover:underline">
            My Plans
          </Link>
        </li>
        <li>
          <Link href="/generate" className="hover:underline">
            Generate
          </Link>
        </li>
      </ul>
      <ul className="flex float-right items-center gap-4">
        <li>
          <Link href="/" className="">
            Sign Up
          </Link>
        </li>
        <li>
          <Link href="/" className="">
            My Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};
