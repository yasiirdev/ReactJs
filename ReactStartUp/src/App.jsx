import Rendering from "./components/renderingLists";
import CardProduct from "./components/CardProduct";
import Sculpture from "./components/sculpture";


const user = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];



function App() {

  return (
    <>
     <Rendering></Rendering>
     <CardProduct items={user} ></CardProduct>
      <Sculpture></Sculpture>
    </>
  );
}

export default App;
