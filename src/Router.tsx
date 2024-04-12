import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { PetListFactory } from './factory/PetListFactory';
import Layout from './sections/Layout/Layout';
import { PetDetailFactory } from './factory/PetDetailFactory';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: PetListFactory.create(),
      },
      {
        path:'/animal/:id',
        element: PetDetailFactory.create(), 
      }
    ]
  }
]);

export const Router = () => {
  return <RouterProvider router={router} />
} 