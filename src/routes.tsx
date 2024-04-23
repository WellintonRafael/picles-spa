import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";
import { PetDetails } from "./pages/PetDetails/PetDetails";
import { Shelter } from "./pages/Admin/Shelter";
import { PetList } from "./pages/Admin/PetList";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/admin',
            children: [
                {
                    index: true,
                    element: <Shelter />
                },
                {
                    path: '/admin/pets',
                    children: [
                        {
                            index: true,
                            element: <PetList />
                        }
                    ]
                }
            ]
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
