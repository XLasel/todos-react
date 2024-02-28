import { TabItem } from "./TabItem";

const tabData = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
];

export const FilterList = () => {
  return (
    <ul className="flex list-none items-center gap-0.5">
      {tabData.map((tab) => (
        <TabItem key={tab.id} {...tab} />
      ))}
    </ul>
  );
};
