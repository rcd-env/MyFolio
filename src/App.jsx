import Info from "./components/Info";
import TechStack from "./components/TechSTack";
import Links from "./components/Links";
import Projects from "./components/Projects";
import XP from "./components/XP";
import DailyToolStack from "./components/DailyToolStack";
import Quote from "./components/Quote";
import GitContribution from "./components/GitContribution";

function App() {
  return (
    <div className="p-10 flex justify-center gap-4">
      <div className="w-[20%]">
        <TechStack />
      </div>
      <div className="w-[35%] flex flex-col gap-4">
        <Info />
        <DailyToolStack />
        <Projects />
        <GitContribution username={"rcd-env"} />
      </div>
      <div className="w-[20%] flex flex-col gap-4">
        <Links />
        <XP />
        <Quote />
      </div>
    </div>
  );
}

export default App;
