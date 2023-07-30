<template>
  <div>
    <div v-if="loading">
      <lodder />
    </div>
    <div v-else>
      <div>
        <h2>Opening Stock</h2>
        <br /><br />
        <h3>To add opening stock:</h3>
        <ul>
          <li>Go to List Products</li>
          <li>Actions > Add or Edit Opening Stock</li>
        </ul>
        <figure class="m-8">
          <img
            src="https://ultimatefosters.com/wp-content/uploads/2021/01/opening-stock-ultimatepos-1024x530.png"
            alt=""
          />
        </figure>
        <br />
        <h3>Editing opening stock (or) Making opening stock 0:</h3>
        <br /><br />
        <p>
          NOTE: If you have already added an opening stock and have to edit it,
          follow the steps below.
        </p>
        <ul>
          <li>Click the ‘+’ symbol.</li>
          <li>A new row will be created</li>
          <li>Add the new amount there</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Lodder from "../../components/Lodder.vue";
export default {
  components: { Lodder },
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    if (this.loading === true) {
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    }
  },
};
</script>

<style></style>
