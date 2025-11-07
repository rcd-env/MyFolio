import React, { useEffect, useState } from "react";

const GitContribution = ({ username }) => {
  const [calendar, setCalendar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const query = `
          {
            user(login: "${username}") {
              contributionsCollection {
                contributionCalendar {
                  totalContributions
                  weeks {
                    contributionDays {
                      color
                      date
                      contributionCount
                    }
                  }
                }
              }
            }
          }
        `;

        const response = await fetch("https://api.github.com/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
          },
          body: JSON.stringify({ query }),
        });

        if (!response.ok) {
          console.log("Status:", response.status);
          console.log("Response:", await response.text());
          throw new Error("GitHub API error");
        }

        const json = await response.json();
        const data =
          json.data.user.contributionsCollection.contributionCalendar;
        setCalendar(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  if (loading) return <div>Loading contribution graph...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!calendar) return null;

  const weeks = calendar.weeks;
  const monthLabels = getMonthLabels(weeks);

  return (
    <div className="w-full p-4 border rounded-lg cursor-grab">
      <h2 className="text-md font-semibold mb-3">
        Touch some grass
        {/* ({calendar.totalContributions}) */}
      </h2>

      <div className="overflow-x-auto">
        <div className="flex flex-col">
          {/* Month Labels */}
          <div className="flex ml-8 mb-1 text-xs">
            {monthLabels.map((m, i) => (
              <div key={i} className="w-3 text-center" style={{ minWidth: 12 }}>
                {m}
              </div>
            ))}
          </div>

          <div className="flex">
            {/* Weekday Labels */}
            <div className="flex flex-col gap-2 justify-center text-xs mr-2 mt-0.5">
              <span>Mon</span>
              <span>Wed</span>
              <span>Fri</span>
            </div>

            {/* Grid */}
            <div className="flex">
              {weeks.map((week, wi) => (
                <div key={wi} className="flex flex-col gap-0.5">
                  {week.contributionDays.map((day, di) => (
                    <div
                      key={di}
                      title={`${day.date}: ${day.contributionCount} contributions`}
                      className="w-[11px] h-[11px] mr-1 rounded-sm transition-transform hover:scale-125"
                      style={{ backgroundColor: day.color || "#ebedf0" }}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend - Outside scrollable area */}
      <div className="flex mt-2 text-xs items-center">
        <span className="mr-1">Less</span>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-[11px] h-[11px] mx-px rounded-sm"
            style={{
              backgroundColor: [
                "#ebedf0",
                "#9be9a8",
                "#40c463",
                "#30a14e",
                "#216e39",
              ][i],
            }}
          />
        ))}
        <span className="ml-1">More</span>
      </div>
    </div>
  );
};

// Generate month labels every few weeks
function getMonthLabels(weeks) {
  const labels = [];
  let lastMonth = null;
  for (let i = 0; i < weeks.length; i++) {
    // Get the first day from the first contribution day in the week
    const firstDayDate = weeks[i].contributionDays[0]?.date;
    if (!firstDayDate) {
      labels.push("");
      continue;
    }
    const date = new Date(firstDayDate);
    const month = date.toLocaleString("default", { month: "short" });
    if (month !== lastMonth) {
      labels.push(month);
      lastMonth = month;
    } else {
      labels.push("");
    }
  }
  return labels;
}

export default GitContribution;
