import { Hero } from "@monowind/styles-library";

const Hero2 = {
  container: "flex bg-green-600",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className={Hero.container}>Monowind</div>
    </main>
  );
}
