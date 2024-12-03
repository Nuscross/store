import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { About, Cart, Checkout, Error, HomeLayout, Landing, Login, Order, Product, Register, SingleProduct } from "./pages";
import { ErrorElement } from "./components";
import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productLoader } from "./pages/Product";

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: 'product',
        element: <Product />,
        loader: productLoader,
      },
      {
        path: 'product/:id',
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'order',
        element: <Order />,
      },
    ]
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: '/register',
    element: <Register />,
    errorElement: <Error />,
  },
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App