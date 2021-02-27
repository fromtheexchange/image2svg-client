import React from "react";
import "twin.macro";

// Footer for mobile, hidden on desktop
// Also see Header

export function Footer() {
  return (
    <footer tw="grid pt-12 -ml-2 text-white place-items-center lg:hidden">
      <div>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://fromthe.exchange"
          tw="inline-flex flex-row space-x-4 place-items-center"
        >
          <img
            tw="w-8 h-8"
            width="32"
            height="32"
            src="/static/fromtheexchange/exchange-logo-white.svg"
            alt="From the Exchange"
          />
          <span tw="font-bold">From the Exchange</span>
        </a>
        <nav tw="pl-12 font-medium">
          <ul tw="grid gap-2">
            {/* <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fromtheexchange/image2svg-awesome"
              >
                Newsletter
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fromtheexchange/image2svg-awesome"
              >
                Awesome
              </a>
            </li> */}
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/fromtheexchange/image2svg-awesome"
              >
                Open source
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.buymeacoffee.com/fromtheexchange"
              >
                Buy me a coffee
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
