import { useContext } from "react";
import PostContext from "../Context/ContextApi";
import Card from "./Card";
export default function Hero() {
  const { postState } = useContext(PostContext);
  return (
    <div className="content">
      {postState.map((postlist) => (
        <Card key={postlist.id} postlist={postlist} />
      ))}
    </div>
  );
}
