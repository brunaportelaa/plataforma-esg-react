import { BrowserRouter, Routes , Route } from 'react-router-dom';
import { NormalizeStyles } from './shared/NormalizeStyles';
import { Home } from './screens/Home/Home'

export function App() {
  return (
    <>
    <NormalizeStyles />
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}
