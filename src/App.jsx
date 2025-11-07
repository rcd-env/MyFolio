import Info from "./components/Info";
import TechStack from "./components/TechStack";
import Links from "./components/Links";
import Projects from "./components/Projects";
import XP from "./components/XP";
import DailyToolStack from "./components/DailyToolStack";
import Quote from "./components/Quote";
import GitContribution from "./components/GitContribution";
import Song from "./components/Song";

function App() {
  return (
    <div className="p-4 md:p-10">
      <div className="lg:hidden flex flex-col gap-4 max-w-2xl mx-auto">
        <Info />
        <Links />
        <TechStack />
        <Projects />
        <DailyToolStack />
        <XP />
        <GitContribution username={"rcd-env"} />
        <Song />
        <Quote />
      </div>

      <div className="hidden lg:flex justify-center gap-4">
        <div className="w-[20%]">
          <TechStack />
        </div>
        <div className="w-[35%] flex flex-col gap-4">
          <Info />
          <div className="flex gap-4">
            <div className="w-1/3">
              <DailyToolStack />
            </div>
            <div className="flex flex-col gap-4 w-2/3">
              <Projects />
              <GitContribution username={"rcd-env"} />
              <Song />
            </div>
          </div>
        </div>
        <div className="w-[20%] flex flex-col gap-4">
          <Links />
          <XP />
          <Quote />
        </div>
      </div>
      <hr className="my-4 md:hidden" />
      <p className="text-end font-mono text-md md:hidden">Peace out.</p>
    </div>
  );
}

export default App;
