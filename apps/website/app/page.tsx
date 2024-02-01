import { HeroStyles, PageStyles } from "@monowind/styles-library";

export default function Home() {
  return (
    <main className={PageStyles.container}>
      <div className={HeroStyles.container}>
        <h1 className={HeroStyles.title}>Monowind</h1>
      </div>
    </main>
  );
}
