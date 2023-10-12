import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppHeader } from './components/app-header/app-header';
import { AuthPage } from './components/auth-page/auth-page';
import { NotFoundPage } from './components/not-found-page/not-found-page';
import { UserDeskPage } from './components/user-desk-page/user-desk-page';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<AuthPage/>} />
					<Route path='error404' element={<NotFoundPage />} />
					<Route path='user-desk' element={<UserDeskPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;