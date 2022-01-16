import useFetchData from "../hooks/useFetchData";
const Container = () => {
  const { data, done } = useFetchData("../../questions.json");

  console.log(data);
  return <form className="container">{data !== null && data.question}</form>;
};

export default Container;
