import React from "react";
import Next_link from "next/link";

const style_nav: React.CSSProperties = {
  border: "1px solid red",
};

const style_menu: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-evenly",
};

export function Header() {
  return (
    <header>
      <nav style={style_nav}>
        <ul style={style_menu}>
          <li>
            <Next_link href="/">Home</Next_link>
          </li>
          <li>
            <Next_link href="/form">Form</Next_link>
          </li>
          <li>
            <Next_link href="/tables">Table</Next_link>
          </li>
          <li>
            <Next_link href="/calendar">Calendar</Next_link>
          </li>
          <li>
            <Next_link href="/login">Login</Next_link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
