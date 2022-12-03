import ApiAuthorzationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { FacilitySearchResults } from "./pages/FacilitySearchResults";
import { Search } from "./pages/Search";
import { SignInOrRegister } from "./pages/SignInOrRegister";
import { TermsOfUse } from "./pages/TermsOfUse";
import { About } from "./pages/About";
import { PostReview } from "./pages/PostReview";
import { ReviewConfirmation } from "./pages/ReviewConfirmation";
import { FormTest } from "./pages/FormTest";
import { FacilityProfile} from "./pages/FacilityProfile"



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
    path: '/postreview',
    element: <PostReview />
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
    path: '/facilitysearchresult/:id',
    element: <FacilitySearchResults />
  },
  {
    path: '/facilityprofile/:facility',
    element: <FacilityProfile />
  },
    ...ApiAuthorzationRoutes
];

export default AppRoutes;
