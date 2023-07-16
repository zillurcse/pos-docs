<template>
    <div>
        <div v-if="loading">
            <lodder />
        </div>
        <div v-else>
            <h2 class="text-5xl text-brand font-bold">Using Commission Agent feature</h2>
            <p class="my-8 text-base text-gray-700">Commission Agent is useful for many businesses. Businesses pay sales
                agent/commission agent commission on every sale they bring.</p>
            <h2 class="text-5xl text-brand font-bold">Enabling & Choosing Commission Agent Type:</h2>
            <p class="my-8 text-base text-gray-700"> By default Commission Agent is Disabled. You can enable it from
                <strong>Settings -> Business Settings -> Sales. Sales Commission Agent drop-down</strong>.
            </p>
            <p class="my-8 text-base text-gray-700">You will see 3 different types</p>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    <strong>Logged in User:</strong> If this option is used then the Logged in User will be automatically
                    considered as the commission agent for the sales added by him. Meaning the user adding the sales will
                    get the commission for the sales.
                </li>
                <li class="my-4 text-base text-gray-700">
                    <strong> Select from User’s List:</strong> If this option is enabled then in POS & Sales Screen you will
                    see the list of <strong>“users”</strong>
                    present in your business. The user adding the sales will select the commission agent from the list of
                    users displayed.
                </li>
                <li class="my-4 text-base text-gray-700">
                    <strong>Select from Commission Agent List:</strong> If this option is enabled then in POS & Sales Screen
                    you will see the list of <strong>“Sales Commission Agents”</strong> present in your business. The user
                    adding the sales will select the commission agent from the list of “Sales Commission Agents” displayed.
                </li>

            </ul>
            <p class="my-4 text-base text-gray-700">Select the option as per your business requirements.</p>
            <h2 class="text-5xl text-brand font-bold my-8">Adding Commission Percentage:</h2>
            <p class="my-4 text-base text-gray-700">You can add commission % while adding/editing the <strong>User</strong>
                or <strong>Sales Commission Agent</strong></p>
            <h2 class="text-5xl text-brand font-bold my-8">Calculating Commission Amount:</h2>
            <p class="my-4 text-base text-gray-700">
                To See the commission amount, Go to <strong>Reports -> Sales Representative Report.</strong>
                <br>
                Select the User for which you want to see the commission amount.

                On selecting it will show you the detailed summary of Total Sale, Total Sale Commission & Total Expense.
                Also, the table below lists all the transactions. <br>

                <strong>NOTE:</strong> Sales commission is calculated without shipping or tax. Sales commissions are from
                the sales of the items, not the overhead cost such as taxes, freight, shipping, handling, etc.
            </p>

            <h2 class="text-5xl text-brand font-bold my-8">Commission payment:</h2>
            <p class="my-4 text-base text-gray-700">After getting the commission amount, UltimatePOS have 2 ways to make
                payment for the commission.</p>
            <h3 class="text-3xl text-brand font-bold my-8">Using expense</h3>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Calculate the commission from the sales representative report and after paying the amount add it as an
                    expense in Add Expense menu.
                </li>
                <li class="my-4 text-base text-gray-700">
                    In Add expense, select the Expense-For dropdown
                </li>
            </ul>
            <h3 class="text-3xl text-brand font-bold my-8">Using HRM module </h3>
            <ul class="list-decimal px-8 ">
                <li class="my-4 text-base text-gray-700">
                    Use the HRM module
                </li>
                <li class="my-4 text-base text-gray-700">
                    In the <router-link to="/red" class="text-sm  font-semibold  inline-block"> HR module</router-link>,
                    when creating payroll for a user, it will automatically include the sales commissio
                </li>
                <li class="my-4 text-base text-gray-700">
                    Sales commission will be shown as Payroll-Components so that the business owner and the user both know
                    details of the commission.
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import lodder from '../../components/Lodder.vue'
export default {
    components: { lodder },
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        if (this.loading === true) {
            setTimeout(() => {
                this.loading = false;
            }, 1500);
        }
    }
}
</script>

<style></style>