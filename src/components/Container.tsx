import useFetchData from "../hooks/useFetchData";
const Container = () => {
  const { data, done } = useFetchData(
    "https://localhost:3000/Users/danielfellner/Desktop/studyRepos/typescript-react-quiz/public/reactQuestions.json"
  );

  console.log(data);
  return <form className="container"></form>;
};

export default Container;
