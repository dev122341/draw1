import Dropzone from "components/dropzone";
import {
  Code as CodeIcon,
  Download as DownloadIcon,
  Info as InfoIcon,
  XCircle as StartOverIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer({ events, startOver, handleImageDropped }) {
  return (
    <footer className="w-full my-8">
      <div className="text-center">
        <Link href="/about" className="lil-button">

          <InfoIcon className="icon" />What is this?
        </Link>

        {events.length > 1 && (
          <button className="lil-button" onClick={startOver}>
            <StartOverIcon className="icon" />
            Start over
          </button>
        )}

        <Dropzone onImageDropped={handleImageDropped} />

        {events.length > 2 && (
          (<Link
            href={events.findLast((ev) => ev.image).image}
            className="lil-button"
            target="_blank"
            rel="noopener noreferrer">

            <DownloadIcon className="icon" />Download image
          </Link>)
        )}

        <Link
          href="https://github.com/replicate/instruct-pix2pix-demo"
          className="lil-button"
          target="_blank"
          rel="noopener noreferrer">

          <CodeIcon className="icon" />Fork repo
        </Link>
      </div>

      <div className="text-center lil-text mt-8">
      <div className="inline-block py-2 px-4 border border-yellow-200 rounded-lg bg-[#fef6aa]">
      🤔BE BABY BOSS AND FOLLOW NEXT STEPS{" "}
        <Link
          href="https://github.com/replicate/paint-with-words#readme"
          target="_blank">
          README
        </Link>.
      </div>
      </div>

      <div className="text-center lil-text mt-8">
        Powered by{" "}
       
        ,{" "}
      
        ,{" "}
        
        , and{" "}
       
      </div>
    </footer>
  );
}
