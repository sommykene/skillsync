"use client";

import { SignedIn, SignedOut, SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const user = useUser();
  const [menuOpen, setMenuOpen] = useState(false);

  const location = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <nav className="flex flex-col w-[100%] justify-between absolute top-0 left-0 p-4 text-primary font-semibold z-100">
      <div className="flex justify-between w-full">
        <div className="flex items-center gap-4">
          <Link href={"/"}>
            <Image
              src={"/favicon/favicon-196x196.png"}
              alt="SS"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href={"/"}
            className="md:hidden bg-gradient-to-r from-primary to-accent bg-clip-text font-bold text-transparent text-xl">
            SkillSync
          </Link>
          {/* desktop links */}
          <ul className="hidden md:flex items-center gap-4">
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
        </div>

        {/* menu toggle */}
        <ul className="flex items-center justify-center md:hidden">
          <div>
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-primary focus:outline-none"
              aria-label="Toggle menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? (
                  <path
                    data-testid="menu-open"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    data-testid="menu-closed"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </ul>

        {/* desktop links */}
        <ul className="hidden md:flex float-right items-center gap-4">
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
      </div>

      {/* mobile links */}
      {menuOpen && (
        <ul data-testid="mobile-links-list" className="flex flex-col gap-4 md:hidden mt-6  bg-background">
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
              <Link href="/">My Profile</Link>
            </li>
            <li>
              <SignOutButton />
            </li>
          </SignedIn>
        </ul>
      )}
    </nav>
  );
};
