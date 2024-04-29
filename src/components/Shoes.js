import React from "react";
import { Link } from "react-router-dom";
import "./Shoes.css";

export default function Shoes() {
  return (
    <>
      <img className="shoesHeroImg" src="Images/shoesPageHero.jpg" alt="shoesHeroImg" />

      <h2>Red Tape</h2>

      <div className="shoes">
        <div className="card">
          <Link to = '/redtape1' ><img src="Images\redTape-1.webp" alt="shoes" /></Link>
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\redTape-2.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\redTape-3.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\redTape-4.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Red Tape</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>
      </div>

      <h2>Puma</h2>
      <div className="shoes">
        <div className="card">
          <img src="Images\puma-1.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\puma-2.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\puma-3.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\puma-4.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Puma</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>
      </div>

      <h2>Nike</h2>
      <div className="shoes">
        <div className="card">
          <img src="Images\nike-1.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\nike-2.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\nike-3.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\nike-4.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Nike</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>
      </div>

      <h2>Campus</h2>
      <div className="shoes">
        <div className="card">
          <img src="Images\campus-1.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\campus-2.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\campus-3.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>

        <div className="card">
          <img src="Images\campus-4.webp" alt="shoes" />
          <p style={{color: '#878787'}}>Campus</p>
          <p><img src="Images/rupeeSymbol.png"  alt=""/>1,061.00</p>
        </div>
      </div>
    </>
  );
}
