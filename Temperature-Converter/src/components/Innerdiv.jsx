export function Innerdiv() {
 function showMenu() {
  let option = document.getElementById("myoption");
   option.style.display === "none"
     ? (option.style.display = "grid")
     : (option.style.display = "none");
 }

 const menu = document.getElementById("mymenu");

 menu.addEventListener("mouseenter", showMenu);

 menu.addEventListener("mouseleave", () => {
  let option2 = option.style.display = "none";
 });
 
 
  return (
    <>
      <div className="innerdiv">
        <input type="number" placeholder="0.00" className="inputNum" required />
        <div name="Many" class="menu" id="mymenu">
          <p>Links</p>
          <div class="option" id="myoption">
      
          </div>
        </div>
        <div name="Many" class="menu" id="mymenu">
          <p>Links</p>
          <div class="option" id="myoption">

          </div>
        </div>
      </div>
    </>
  );
}
