import './App.css';
import {
	BrowserRouter,
	Routes,
	Route,
  } from "react-router-dom";
import Home from './components/Home';
import Category from './components/Category';
import Detail from './components/Detail';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="category" element={<Category />}/>
					<Route path="meal/:idMeal" element={<Detail />}/>
				</Routes>
			</div>
		</BrowserRouter>
	);
}
export default App;