
const products = [
  { title: "Banana", isFruit: false, id: 1 },
  { title: "tomotes", isFinite: false, id: 2 },
  { title: "watermelon", isFruit: true, id: 3 },
];



// List component that is taking porps from its parent
function List({ Fruit }) {
  Fruit.map((item) => {
    return (
      <li
        key={item.id}
        style={{
          color: item.isFruit ? "magenta" : "darkgreen",
        }}
      >
        {item.title}
      </li>
    );
  });
}



let Rendering = function () {
  return (
    <>
      <ul>
        <List key={products.id} Fruit={products} /> {/* take children list  */}
      </ul>
    </>
  );
};

export default Rendering; 