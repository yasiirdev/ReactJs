export default function Navbar() {
  return (
    <>
      <nav classNameName="navbar w-full h-[6%]  bg-amber-200 fixed top-0 flex items-center justify-items-center place-content-around ">
        <a href="#">Contact</a>
        <a href="#">Setting</a>
        <a href="#">Profile</a>
        <a href="#">Portfolio</a>
        <a href="#">help</a>
        <input
          type="text"
          name="Search"
          placeholder="Search Here ..."
          classNameName="bar placeholder: text-black border-1 rounded-2xl w-[30%] h-[30px]  font-mono"
        />
      </nav>
    </>
  );
}
