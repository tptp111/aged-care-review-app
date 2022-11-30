import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { FacilitySearchResults } from "./pages/FacilitySearchResults";
import { Search } from "./pages/Search";
import { SignInOrRegister } from "./pages/SignInOrRegister";
import { TermsOfUse } from "./pages/TermsOfUse";
import { About } from "./pages/About";
import { Review } from "./pages/Review";
import { ReviewConfirmation } from "./pages/ReviewConfirmation";
import { FormTest } from "./pages/FormTest";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/SignInOrRegister',
    element: <SignInOrRegister />
  },
  {
    path: '/TermsOfUse',
    element: <TermsOfUse />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/Review',
    element: <Review />
  },
  {
    path: '/ReviewConfirmation',
    element: <ReviewConfirmation />
  },
  {
    path: '/form-test',
    element: <FormTest />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
  },
  {
    path: '/search',
    element: <Search />
  },
  {
    path: '/facility-search-results',
    element: <FacilitySearchResults />
  },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
