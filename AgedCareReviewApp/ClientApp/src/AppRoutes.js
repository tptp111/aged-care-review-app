import { Counter } from "./pages/Counter";
import { FetchData } from "./pages/FetchData";
import { Home } from "./pages/Home";
import { SignInOrRegister } from "./pages/SignInOrRegister";
import { SignIn } from "./pages/SignIn";
import { ForgotPassword } from "./pages/ForgotPassword";
import { Register } from "./pages/Register";
import { TermsOfUse } from "./pages/TermsOfUse";
import { About } from "./pages/About";

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
    path: '/fetch-data',
    element: <FetchData />
  }
];

export default AppRoutes;
