import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from './src/pages/Home.vue';
import BusinessDetails from './src/pages/SetupYourBusinessDetails.vue';
import DesablingRegistation from './src/pages/Disabling-registration-in-ultimate-pos.vue';
import RemovingPublicURL from './src/pages/Removing-public-from-url.vue';




const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/businessDetails",
        name: "BusinessDetails",
        component: BusinessDetails,
    },
    {
        path: "/disabling-registration-in-ultimate-pos",
        name: "DesablingRegistation",
        component: DesablingRegistation,
    },
    {
        path: "/removing-public-from-url",
        name: "RemovingPublicURL",
        component: RemovingPublicURL,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;