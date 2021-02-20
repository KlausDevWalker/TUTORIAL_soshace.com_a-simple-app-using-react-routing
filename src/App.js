import React from "react";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Header";
import Body from "./Body";

export default function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Header />
				<Body />
			</div>
		</BrowserRouter>
	)
}