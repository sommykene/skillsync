"use client";

import { useState } from "react";
import { Badge } from "./Badge";
import Link from "next/link";

export const TopicsSelector = ({
  pathId: planId,
  topics,
}: {
  pathId: string;
  topics: string[];
}) => {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicSelect = (selectedTopic: string) => {
    setSelectedTopics((prev: string[]) => {
      // If badge is already selected, remove it from the array (deselect)
      if (prev.includes(selectedTopic)) {
        return prev.filter((topic) => topic !== selectedTopic);
      }
      // Otherwise, add the badge to the selected array (select)
      return [...prev, selectedTopic];
    });
  };
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Badge
            key={topic}
            onClick={() => handleTopicSelect(topic)}
            isSelected={selectedTopics.includes(topic)}>
            {topic}
          </Badge>
        ))}
      </div>
      {selectedTopics.length > 0 && (
        <Link
          href={`/generate/${planId}/duration?topics=${selectedTopics.join(
            ","
          )}`}
          className={`button`}>
          Continue
        </Link>
      )}
    </div>
  );
};
