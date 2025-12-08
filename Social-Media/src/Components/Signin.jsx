import { useRef } from "react";

export default function Signin({ onSignin }) {
    const password = useRef(null);
  const visiblePassword = () => {
    password.current.type === "password"
      ? password.current.type = "text"
      : password.current.type = "password"; 
       
  };

  function HandleSubmit(e) {
    e.preventDefault();
    onSignin(); 
  }

  return (
    <div className="signinform">
      <form onSubmit={HandleSubmit} className="flexForm">
        <img
          className="mb-4"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiGBduSu4J4AyksMCo1_kxkXIp8k9ZT21FUg&s"
          alt=""
          width="72"
          height="57"
        />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            ref={password}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="checkbox mb-3 pswtotext">
            <label>
              <input type="checkbox" value="Show Password" onClick={visiblePassword}/> Show Password
            </label>
          
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-5 mb-3 text-muted">© 2025–2026</p>
      </form>
    </div>
  );
}
