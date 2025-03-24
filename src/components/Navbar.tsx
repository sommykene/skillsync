"use client";

import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const user = useUser();
  return (
    <nav className="flex w-[100%] justify-between absolute top-0 left-0 p-4 text-primary font-semibold">
      <ul className="flex items-center gap-4">
        <li>
          <Image
            src={"/favicon/favicon-196x196.png"}
            alt="SS"
            width={32}
            height={32}
          />
        </li>
        <li>
          <Link href="/">Home</Link>
        </li>
        <SignedIn>
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
        </SignedIn>
      </ul>
      <ul className="flex float-right items-center gap-4">
        <SignedOut>
          <li>
            <Link href="/signin">Sign In</Link>
          </li>
          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </SignedOut>
        <SignedIn>
          <li>
            <p>Hi {user.user?.firstName}</p>
          </li>
          <li>
            <Link href="/">My Profile</Link>
          </li>
          <li>
            <SignOutButton />
          </li>
        </SignedIn>
      </ul>
    </nav>
  );
};
