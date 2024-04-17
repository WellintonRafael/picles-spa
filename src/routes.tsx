import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails/PetDetails";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/admin',
            element: <>Admin</>
        },
        {
            path: '/pets',
            children: [
                {
                    index: true,
                    element: <Pets />
                },
                {
                    path: '/pets/:id',
                    element: <PetDetails />
                }
            ]
        },
    ]
);

export default router;
