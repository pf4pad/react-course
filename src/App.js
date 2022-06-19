import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2022, 4, 20),
      description: "Холодильник",
      amount: 999.99,
    },
    {
      date: new Date(2021, 5, 23),
      description: "Macbook",
      amount: 1299.99,
    },
    {
      date: new Date(2021, 6, 15),
      description: "Джинсы",
      amount: 49.99,
    }
  ]
  return (
    <div >
      <h1> Начнем изучение</h1>
      <Costs costs={costs} />
    </div>
  );
}

export default App;
