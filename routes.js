import {
    createWebHistory,
    createRouter
} from "vue-router";
import Home from './src/pages/Home.vue';

// Getting started

import BusinessDetails from './src/pages/getting_started/SetupYourBusinessDetails.vue';
import DesablingRegistation from './src/pages/getting_started/Disabling-registration-in-ultimate-pos.vue';
import RemovingPublicURL from './src/pages/getting_started/Removing-public-from-url.vue';
import TransferData from './src/pages/getting_started/Transfer-data-to-new-domain-changing-hosting.vue';
import ResettingData from './src/pages/getting_started/Resetting-data.vue';

// Business management

import RegisteringBusiness from './src/pages/business_management/Registering-your-business-in-pos.vue';
import SettingBusiness from './src/pages/business_management/Setting-business-multiple-locations-or-ware-house-or-storefronts.vue';





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
        path: "/disabling-registration-in-pos",
        name: "DesablingRegistation",
        component: DesablingRegistation,
    },
    {
        path: "/removing-public-from-url",
        name: "RemovingPublicURL",
        component: RemovingPublicURL,
    },
    {
        path: "/transfer-data-to-new-domain-changing-hosting",
        name: "TransferData",
        component: TransferData,
    },
    {
        path: "/resetting-data",
        name: "ResettingData",
        component: ResettingData,
    },
    {
        path: "/registering-your-business-in-pos",
        name: "RegisteringBusiness",
        component: RegisteringBusiness,
    },
    {
        path: "/setting-business-multiple-locations-or-ware-house-or-storefronts",
        name: "SettingBusiness",
        component: SettingBusiness,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;