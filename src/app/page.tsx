import { CodeToHtml } from "./CodeToHtml";

export const dynamic = 'force-dynamic';

export default function Home() {
  return (
    <CodeToHtml
      language="tsx"
      code={`<TrackDone onDone={() => console.log("ok")}>
  <Image src="https://picsum.photos/200" />
</TrackDone>`}
    />
  );
}
