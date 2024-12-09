import { Route, Routes } from 'react-router-dom'
import Narrativo from '../components/layouts/Narrativo'
import Lirico from '../components/layouts/Lirico'
{/*import Dramatico from '../components/layouts/Dramatico'*/}

export default function RotasGeneros() {
  return (
    <Routes>
      <Route path="/Narrativo" element={<Narrativo />} />
      <Route path="/Lirico" element={<Lirico />} />
      {/*<Route path="/Dramatico" element={<Dramatico />} />*/}
    </Routes>
  );
}