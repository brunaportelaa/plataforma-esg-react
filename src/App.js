import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Home } from './screens/Home/Home';
import { Header } from './common-components/Header/Header';

export function App() {
  return (
    <>
    <Header />
    <NormalizeStyles />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
