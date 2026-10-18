import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  { name: "Tarot Nishi Chopra", url: "tarotnishichopra.com", platform: "Shopify", date: "Aug 2026" },
  { name: "Jain Son Wale", url: "jainsonwale.com", platform: "HTML, CSS, JavaScript", date: "Feb 2026" },
  { name: "Alka Food", url: "alkafood.in", platform: "Shopify", date: "Feb 2026" },
  { name: "NVC Attunements", url: "nvcattunements.com", platform: "Shopify", date: "Jan 2026" },
  { name: "Rad Logistics", url: "radlogistics.co.in", platform: "HTML, CSS, JavaScript", date: "Nov 2025" },
  { name: "Baby World IVF", url: "babyworldivf.com", platform: "WordPress", date: "Oct 2025" },
  { name: "Biharana Foods", url: "biharanafoods.in", platform: "HTML, CSS, JavaScript", date: "July 2025" },
  { name: "Content Buzz", url: "contentbuzz.co", platform: "HTML, CSS, JavaScript", date: "June 2025" },
];

function Projects() {
  return (
    <div id="projects" className="h-fit p-3 lg:p-3 min-[320px]:p-2 bg-white">
      <div className="w-full shadow-neutral-900 shadow-md bg-black rounded-[35px] overflow-hidden relative p-16 xl:p-16 lg:p-10 md:p-10 min-[320px]:py-8 min-[320px]:px-4">
        <h1 className="uppercase tracking-wide font-[anzo4] text-[16vw] leading-[14vw] min-[320px]:text-[22vw] min-[320px]:leading-[20vw]">
          Selected <span className="text-[#9b9b9b]">Projects</span>
        </h1>

        <div className="mt-10 min-[320px]:mt-6">
          {projects.map((p, i) => (
            <a
              key={p.url}
              href={`https://${p.url}`}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-wrap items-center justify-between gap-2 border-t border-[#9b9b9b]/40 py-5 min-[320px]:py-3 hover:bg-zinc-900 transition-colors"
            >
              <div className="flex items-center gap-5 min-[320px]:gap-3">
                <span className="font-[anzo3] text-[#9b9b9b] text-lg min-[320px]:text-xs">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[anzo4] uppercase tracking-wide text-3xl lg:text-3xl min-[320px]:text-lg 2xl:text-5xl">
                    {p.name}
                  </h3>
                  <p className="font-[anzo2] text-[#9b9b9b] text-base min-[320px]:text-xs 2xl:text-xl">
                    {p.platform}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 min-[320px]:gap-2 font-[anzo3] uppercase text-lg min-[320px]:text-xs 2xl:text-xl">
                <span className="text-[#9b9b9b]">{p.date}</span>
                <span className="flex items-center gap-2">
                  {p.url} <FaExternalLinkAlt className="text-xs" />
                </span>
              </div>
            </a>
          ))}
          <div className="border-t border-[#9b9b9b]/40"></div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
