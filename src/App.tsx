
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route
} from "react-router-dom";
import Home from "./components/Home";
import Layout from "./components/Layout";
import Destination from "./components/Destination";
import Crew from "./components/Crew";
import Technology from "./components/Technology";
import NotFound from "./NotFound";
import SpecificDestination from './components/SpecificDestination';

const router = createBrowserRouter(createRoutesFromElements(
  <>
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='Destination' element={<Destination />}/>
      <Route path=':destinations' element={<SpecificDestination />} />
      <Route path='Crew' element={<Crew />} />
      <Route path='Technology' element={<Technology />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </>
));

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;

