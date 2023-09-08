import Featured from "@/components/Featured";

import Slider from "@/components/Slider";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Slider />
      <Featured />
    </main>
  );
}
