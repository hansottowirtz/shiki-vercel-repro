import Image from "next/image";
import { CodeToHtml } from "./CodeToHtml";

export default function Home() {
  return (
    <CodeToHtml
      language="tsx"
      code={`<TrackDone onDone={() => console.log("✅")}>
  <Image src="https://picsum.photos/200" />
</TrackDone>`}
    />
  );
}
