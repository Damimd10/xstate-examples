import React from 'react';
import Link from 'next/link';

const Home = () => (
  <div>
    <div className="hero">
      <h1 className="title">Welcome 7GUIs XState!</h1>
      <p className="description">
        To get started, click on each example to navigate.
      </p>

      <div className="row">
        <Link href="/counter">
          <a className="card">
            <h3>Counter</h3>
            <p>
              The task is to build a frame containing a label or read-only
              textfield T and a button B. Initially, the value in T is “0” and
              each click of B increases the value in T by one.
            </p>
          </a>
        </Link>
        <Link href="/temperature">
          <a className="card">
            <h3>Temperature</h3>
            <p>
              The task is to build a frame containing two textfields TC and TF
              representing the temperature in Celsius and Fahrenheit,
              respectively.
            </p>
          </a>
        </Link>
        <Link href="/flight">
          <a className="card">
            <h3>Flight Booker</h3>
            <p>
              The task is to build a frame containing a combobox C with the two
              options “one-way flight” and “return flight”, two textfields T1
              and T2 representing the start and return date, respectively, and a
              button B for submitting the selected flight. T2 is enabled iff C’s
              value is “return flight”.
            </p>
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/timer">
          <a className="card">
            <h3>Timer</h3>
            <p>
              The task is to build a frame containing a gauge G for the elapsed
              time e, a label which shows the elapsed time as a numerical value,
              a slider S by which the duration d of the timer can be adjusted
              while the timer is running and a reset button R.
            </p>
          </a>
        </Link>
      </div>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      .row {
        max-width: 880px;
        margin: 80px auto 40px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 220px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 18px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 13px;
        color: #333;
      }
    `}</style>
  </div>
);

export default Home;
