import { useState } from "react";

import "./App.css";

function App() {



  // let selectBtn1 = document.querySelector(".btn1");
  // let selectBtn2 = document.querySelector(".btn2");
  // let selectBtn3 = document.querySelector("#no");
  // let selectBtn4 = document.querySelector("#no1");
  // let selectBtn5 = document.querySelector("#no2");
  // let counter = 1;

  // function IncreseValve() {
  //   selectBtn3.innerHTML = counter;
  //   selectBtn4.innerHTML = counter;
  //   selectBtn5.innerHTML = counter;
  //   counter = counter + 1;
  // }
  // function DecreseValve() {
  //   selectBtn3.innerHTML = counter;
  //   selectBtn4.innerHTML = counter;
  //   selectBtn5.innerHTML = counter;
  //   counter = counter - 1;
  // }

/* <header>
<h1>Counter Project</h1>
</header>
<main>
<section>
  <article>
    Counter No : <span id="no">{IncreseValve}</span>{" "}
  </article>
</section>
<section className="btn">
  <button className="btn1" onClick={IncreseValve}>
    Increse{" "}
  </button>
  <button className="btn2" onClick={DecreseValve}>
    Decrese
  </button>
</section>
<section>
  <article>
    Counter No : <span id="no1">{IncreseValve}</span>{" "}
  </article>
</section>
<section>
  <article>
    Counter No : <span id="no2">{DecreseValve}</span>{" "}
  </article>
</section>
</main> */




  // Note : this above task may be automatically done  by using useState hook
  // so we don't need to write pure and full js, just use it in simple way




//Note : kitna easy kam ho gaya h
// yaha pe UI me state change ka kam React dekh rahi h, jaha jaha update hota h wo kar deti h, 
// na hame koi js se id select karne k need par rahi h, na koi issue so it is best thing in react
const [counter,setCounter] = useState(1);


// useState 2 thing return me deti h array ki form me 
// 1. variable
//2. setfunction
function IncreseValve() {
    
  setCounter(counter+1)

  }
  function DecreseValve() {
    setCounter(counter-1)
  }
  return (
    <>
     
      <header>
        <h1>Counter Project</h1>
      </header>
      <main>
        <section>
          <article>
            Counter No : <span className="counter">{counter}</span>
          </article>
        </section>
        <section className="btn">
          <button className="btn1" onClick={IncreseValve}>
            Increse
          </button>
          <button className="btn2" onClick={DecreseValve}>
            Decrese
          </button>
        </section>
        <section>
          <article>
            Counter No : <span className="counter">{counter}</span>
          </article>
        </section>
        <section>
          <article>
            Counter No : <span className="counter">{counter}</span>
          </article>
        </section>
        <section>
          <article>
            Counter No : <span className="counter">{counter}</span>
          </article>
        </section>
        <section>
          <article>
            Counter No : <span className="counter">{counter}</span>
          </article>
        </section>
      

       
      </main>
    </>
  );
}

export default App;


