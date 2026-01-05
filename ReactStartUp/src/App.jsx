import Rendering from "./components/renderingLists";
import CardProduct from "./components/CardProduct";
import { Time } from "./components/RealTime";
import { UserContext } from "./store/context";
import NetworkState from "./components/ChecknetworkState";

const items = [
  { title: "Banana", color: "pink", id: 1 },
  { title: "tomotes", color: "lightblue", id: 2 },
  { title: "watermelon", color: "blue", id: 3 },
];

export default function App() {
  return (
    <>
      <UserContext value={{ items }}>
        <NetworkState></NetworkState>
        <Rendering></Rendering>
        <CardProduct></CardProduct>
        <Time></Time>
      </UserContext>
    </>
  );
}

