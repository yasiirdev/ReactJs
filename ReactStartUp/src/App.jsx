import Rendering from "./components/renderingLists";
import CardProduct from "./components/CardProduct";
import Sculpture from "./components/sculpture";
import { UserContext } from "./store/context";

const items = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];

export default function App() {
  return (
    <>
      <UserContext value={{ items }}>
        <Rendering></Rendering>
        <CardProduct></CardProduct>
      </UserContext>
    </>
  );
}

