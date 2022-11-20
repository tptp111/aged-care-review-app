import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import {FacilitySearchResults} from "./pages/FacilitySearchResults";

import { SignInOrRegister } from "./pages/SignInOrRegister";
import { SignIn } from "./pages/SignIn";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Register } from "./pages/Register";
import { Search } from "./pages/Search";
import { TermsOfUse } from "./pages/TermsOfUse";
import { About } from "./pages/About";
import { FormTest } from "./pages/FormTest";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/SignInOrRegister',
    element: <SignInOrRegister />
  },
  {
    path: '/SignIn',
    element: <SignIn />
  },
  {
    path: '/ForgotPassword',
    element: <ForgotPassword />
  },
  {
    path: '/Register',
    element: <Register />
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
  }
];

export default AppRoutes;
