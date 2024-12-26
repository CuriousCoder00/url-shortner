import React from "react";
import { ChevronRight } from "lucide-react";
import UrlInput from "./url-input";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 z-[0] h-screen w-screen bg-purple-950/10 bg-[radial-gradient(ellipse_20%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <section className="relative max-w-full mx-auto  z-1">
        <div className="max-w-screen-xl z-10 mx-auto px-4 py-8 gap-12 md:px-8">
          <div className="space-y-5 max-w-3xl leading-0  lg:leading-5 mx-auto text-center">
            <h1 className="text-sm group font-geist mx-auto px-5 py-2 bg-gradient-to-tr from-zinc-300/5 via-gray-400/5 to-transparent  border-[2px] border-border rounded-3xl w-fit">
              URL SHORTENER
            </h1>

            <h2 className="text-4xl mx-auto md:text-6xl dark:text-white">
              Shorten your links
            </h2>
            <p className="text-lg">
              A simple URL shortener
            </p>
            <UrlInput />
          </div>
        </div>
      </section>
    </div>
  );
}
