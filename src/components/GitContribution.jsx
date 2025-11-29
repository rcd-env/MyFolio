import GitHubCalendar from "react-github-calendar";

const GitContribution = () => {
  const customTheme = {
    light: ["#f3ece0", "#d4c4b0", "#8b7355", "#6b5744", "#3d2817"],
  };

  return (
    <div className="w-full relative">
      <div className="absolute -inset-1 border-2 border-[#3d2817] rounded-xl"></div>
      <div className="relative w-full p-4 border-2 border-[#3d2817] rounded-lg bg-[#f3ece0] cursor-grab">
        <p className="text-md font-semibold mb-2 text-[#3d2817]">rat race</p>
        <div className="hidden lg:block">
          <GitHubCalendar
            username="rcd-env"
            colorScheme="light"
            theme={customTheme}
            blockSize={10}
            blockMargin={3}
            blockRadius={1}
            hideTotalCount={true}
            showWeekdayLabels={true}
          />
        </div>
        <div className="block lg:hidden">
          <GitHubCalendar
            username="rcd-env"
            colorScheme="light"
            theme={customTheme}
            blockSize={10}
            blockMargin={3}
            blockRadius={1}
            hideTotalCount={false}
            // showWeekdayLabels={true}
          />
        </div>
      </div>
    </div>
  );
};

export default GitContribution;
