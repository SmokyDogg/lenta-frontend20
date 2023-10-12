import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppHeader } from './components/app-header/app-header';
import { Auth } from './components/auth-page/auth-page';
import { NotFound } from './components/not-found-page/not-found-page';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Auth/>} />
					<Route path='error404' element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
			{/* <AppHeader />
			<Auth /> */}
			{/* <NotFound/> */}