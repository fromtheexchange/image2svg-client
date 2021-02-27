import React from "react";
import "twin.macro";

// Header for mobile, hidden on mobile
// Also see Footer

/**
 * TODO: Button hover details
 * https://twitter.com/steveschoger/status/878277546646929408
 * https://tailwindui.com/components/application-ui/elements/buttons
 */

export function Header() {
  return (
    <header tw="container flex-row hidden mx-auto text-white lg:flex place-content-between">
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
      <nav tw="grid font-medium place-items-center">
        <ul tw="flex flex-row lg:space-x-8">
          {/* <li tw="grid place-items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fromtheexchange/image2svg-awesome"
              tw="py-4"
            >
              Newsletter
            </a>
          </li>
          <li tw="grid place-items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fromtheexchange/image2svg-awesome"
              tw="py-4"
            >
              Awesome
            </a>
          </li> */}
          <li tw="grid place-items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/fromtheexchange/image2svg-client"
              tw="inline-flex flex-row px-6 py-3 space-x-2 font-medium border-2 border-white place-items-center"
            >
              <span>Open source</span>
              <img
                tw="w-8 h-8"
                width="32"
                height="32"
                src="/static/icons/icons8/iOS/white/icons8-octocat.svg"
                alt="GitHub Octocat Logo"
              />
            </a>
          </li>
          <li tw="grid place-items-center">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.buymeacoffee.com/fromtheexchange"
              tw="inline-flex flex-row px-6 py-3 space-x-2 font-medium text-black bg-white place-items-center"
            >
              <span tw="text-blue-gray-900">Buy me a coffee</span>
              <img
                tw="w-8 h-8"
                width="32"
                height="32"
                src="/static/buymeacoffee/bmc-logo-edited.svg"
                alt="Buy me a coffee brand logo"
              />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
