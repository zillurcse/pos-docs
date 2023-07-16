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


// user-management

import AddingUser from './src/pages/user-management/Adding-user-assigning-location-to-a-user.vue'
import RoleManagement from './src/pages/user-management/Role-management.vue'
import UsingCommissionAgent from './src/pages/user-management/Using-commission-agent-feature.vue'
import AddingSupperAdmin from './src/pages/user-management/Adding-superadmin-user.vue'
import ChangePassDB from './src/pages/user-management/Change-password-from-database.vue'

//contact-management

import CoustomerSupplier from './src/pages/contact_management/Customer-supplier-ledger.vue'
import AddingOpeningBalance from './src/pages/contact_management/Adding-opening-balance-and-payment.vue'
import Contacts_management from './src/pages/contact_management/Contacts-management-sc.vue'
import AdvancedBalance from './src/pages/contact_management/Advanced-balance.vue'
import OpeningBalance from './src/pages/contact_management/Opening-balance.vue'
import CustomerGroups from './src/pages/contact_management/Customer-groups.vue'


// products

import BulkEditProducts from './src/pages/products/Bulk-Edit-Products.vue'
import BulkPriceUpdate from './src/pages/products/Bulk-Price-Update.vue'
import CorrectingProduct from './src/pages/products/Correcting-product-stock-mis-match.vue'
import CustomLabelsForProducts from './src/pages/products/Custom-labels-for-Products.vue'
import DeleteProduct from './src/pages/products/Delete-Product.vue'
import DuplicateProduct from './src/pages/products/Duplicate-Product.vue'
import EnableBulkEdit from './src/pages/products/Enable-bulk-edit.vue'
import ExportProducts from './src/pages/products/Export-Products.vue'
import LotNumber from './src/pages/products/Lot-number.vue'
import OpeningStock from './src/pages/products/Opening-Stock.vue'
import PrintingLabels from './src/pages/products/Printing-Labels.vue'
import ProductCategory from './src/pages/products/Product-Category.vue'
import ProductExpiryRelatedSettings from './src/pages/products/Product-expiry-and-related-settings.vue'
import ProductStockHistory from './src/pages/products/Product-stock-history.vue'
import ProductUnits from './src/pages/products/Product-Units.vue'
import ProductWarranty from './src/pages/products/Product-Warranty.vue'
import ProductsManagement from './src/pages/products/Products-management.vue'
import RackRowPositionProduct from './src/pages/products/Rack-row-position-of-product.vue'
import SellingPriceGroups from './src/pages/products/Selling-Price-Groups.vue'
import Variations from './src/pages/products/Variations.vue'




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
    {
        path: "/adding-user-assigning-location-to-a-user",
        name: "AddingUser",
        component: AddingUser,
    },
    {
        path: "/role-management",
        name: "RoleManagement",
        component: RoleManagement,
    },
    {
        path: "/using-commission-agent-feature",
        name: "UsingCommissionAgent",
        component: UsingCommissionAgent,
    },
    {
        path: "/adding-superadmin-user",
        name: "AddingSupperAdmin",
        component: AddingSupperAdmin,
    },
    {
        path: "/change-password-from-database",
        name: "ChangePassDB",
        component: ChangePassDB,
    },
    {
        path: "/customer-supplier-ledger",
        name: "CoustomerSupplier",
        component: CoustomerSupplier,
    },
    {
        path: "/opening-balance-and-payment",
        name: "AddingOpeningBalance",
        component: AddingOpeningBalance,
    },
    {
        path: "/contacts-management",
        name: "Contacts_management",
        component: Contacts_management,
    },
    {
        path: "/advanced-balance",
        name: "AdvancedBalance",
        component: AdvancedBalance,
    },
    {
        path: "/opening-balance",
        name: "OpeningBalance",
        component: OpeningBalance,
    },
    {
        path: "/customer-groups",
        name: "CustomerGroups",
        component: CustomerGroups,
    },


    // products

    {
        path: "/Bulk-Edit-Products",
        name: "BulkEditProducts",
        component: BulkEditProducts,
    },
    {
        path: "/Bulk-Price-Update",
        name: "BulkPriceUpdate",
        component: BulkPriceUpdate,
    },
    {
        path: "/Correcting-product-stock-mis-match",
        name: "CorrectingProduct",
        component: CorrectingProduct,
    },
    {
        path: "/Custom-labels-for-Products",
        name: "CustomLabelsForProducts",
        component: CustomLabelsForProducts,
    },
    {
        path: "/Delete-Product",
        name: "DeleteProduct",
        component: DeleteProduct,
    },
    {
        path: "/Duplicate-Product",
        name: "DuplicateProduct",
        component: DuplicateProduct,
    },
    {
        path: "/Enable-bulk-edit",
        name: "EnableBulkEdit",
        component: EnableBulkEdit,
    },
    {
        path: "/Export-Products",
        name: "ExportProducts",
        component: ExportProducts,
    },
    {
        path: "/Lot-number",
        name: "LotNumber",
        component: LotNumber,
    },
    {
        path: "/Opening-Stock",
        name: "OpeningStock",
        component: OpeningStock,
    },
    {
        path: "/Printing-Labels",
        name: "PrintingLabels",
        component: PrintingLabels,
    },
    {
        path: "/Product-Category",
        name: "ProductCategory",
        component: ProductCategory,
    },
    {
        path: "/Product-Expiry-Related-Settings",
        name: "ProductExpiryRelatedSettings",
        component: ProductExpiryRelatedSettings,
    },
    {
        path: "/Product-Stock-History",
        name: "ProductStockHistory",
        component: ProductStockHistory,
    },
    {
        path: "/Product-Units",
        name: "ProductUnits",
        component: ProductUnits,
    },
    {
        path: "/Product-Warranty",
        name: "ProductWarranty",
        component: ProductWarranty,
    },
    {
        path: "/Products-Management",
        name: "ProductsManagement",
        component: ProductsManagement,
    },
    {
        path: "/Rack-Row-Position-Product",
        name: "RackRowPositionProduct",
        component: RackRowPositionProduct,
    },
    {
        path: "/Selling-Price-Groups",
        name: "SellingPriceGroups",
        component: SellingPriceGroups,
    },
    {
        path: "/Variations",
        name: "Variations",
        component: Variations,
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;