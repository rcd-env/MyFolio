import GitHubCalendar from "react-github-calendar";

const GitContribution = () => {
  return (
    <div className="w-full p-4 border border-[#8b7355] rounded-lg bg-[#f3ece0] cursor-grab">
      <p className="text-md font-semibold mb-2 text-[#3d2817]">rat race</p>
      <div className="hidden lg:block">
        <GitHubCalendar
          username="rcd-env"
          colorScheme="light"
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
          blockSize={10}
          blockMargin={3}
          blockRadius={1}
          hideTotalCount={false}
          // showWeekdayLabels={true}
        />
      </div>
    </div>
  );
};

export default GitContribution;
