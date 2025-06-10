export const getTopicParams = (topics: string[]) => {
  const params = new URLSearchParams();
  topics.forEach((topic) => {
    params.append("topics", topic);
  });
  return params.toString();
};
