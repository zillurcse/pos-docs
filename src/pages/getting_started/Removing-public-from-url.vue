<template>
  <div>
    <div v-if="loading">
      <div class="cui-loader cui-loader--content">
        <div class="cui-loader__page">



          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

        </div>
        <div class="cui-loader__page">



          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

          <div class="cui-loader__row">
            <div class="cui-loader__row-img"></div>
            <div class="cui-loader__row-items">
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
              <div class="cui-loader__row-item"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div v-else>
      <h2 class="text-5xl text-brand font-bold ">Removing /public from URL</h2>
      <p class="my-8 text-base text-gray-700">
        POS uses the Laravel framework. So to remove the public from the URL is something related to Laravel.
        <br><br>
        By default, we have configured UltimatePOS to not use public in URL, but it can use it in some servers according
        to
        the server configuration.
        <br><br>
        To remove, follow one of these steps:
      </p>
      <h2 class="text-5xl text-brand font-bold my-4">
        Enable mod_rewrite:
      </h2>
      <p class="my-8 text-base text-gray-700">
        Enable <strong>mod_rewrite</strong> in your server. If you have no idea of doing this then contact your hosting
        provider for doing this.
      </p>
      <h2 class="text-5xl text-brand font-bold my-4">Don’t install in subdirectory:</h2>
      <div class="my-6 flex flex-col gap-5">
        <div class="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-5 h-5">
            <path fill="#DD2E44"
              d="M21.533 18.002L33.768 5.768c.976-.976.976-2.559 0-3.535-.977-.977-2.559-.977-3.535 0L17.998 14.467 5.764 2.233c-.976-.977-2.56-.977-3.535 0-.977.976-.977 2.559 0 3.535l12.234 12.234L2.201 30.265c-.977.977-.977 2.559 0 3.535.488.488 1.128.732 1.768.732s1.28-.244 1.768-.732l12.262-12.263 12.234 12.234c.488.488 1.128.732 1.768.732.64 0 1.279-.244 1.768-.732.976-.977.976-2.559 0-3.535L21.533 18.002z" />
            />

          </svg>
          <p class=" text-base text-gray-700">www.example.com/pos (not recommended)</p>
        </div>
        <div class="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-5 h-5">
            <path fill="#77B255"
              d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z" />
            <path fill="#FFF"
              d="M29.28 6.362c-1.156-.751-2.704-.422-3.458.736L14.936 23.877l-5.029-4.65c-1.014-.938-2.596-.875-3.533.138-.937 1.014-.875 2.596.139 3.533l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27.751-1.159.421-2.707-.737-3.458z" />
          </svg>
          <p class="text-base text-gray-700">pos.example.com (Recommended, sub-domain)</p>
        </div>
        <div class="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" class="w-5 h-5">
            <path fill="#77B255"
              d="M36 32c0 2.209-1.791 4-4 4H4c-2.209 0-4-1.791-4-4V4c0-2.209 1.791-4 4-4h28c2.209 0 4 1.791 4 4v28z" />
            <path fill="#FFF"
              d="M29.28 6.362c-1.156-.751-2.704-.422-3.458.736L14.936 23.877l-5.029-4.65c-1.014-.938-2.596-.875-3.533.138-.937 1.014-.875 2.596.139 3.533l7.209 6.666c.48.445 1.09.665 1.696.665.673 0 1.534-.282 2.099-1.139.332-.506 12.5-19.27 12.5-19.27.751-1.159.421-2.707-.737-3.458z" />
          </svg>
          <p class=" text-base text-gray-700">example.com (Recommended, main domain)</p>
        </div>
      </div>
      <div class="my-4">
        <h2 class="text-5xl text-brand font-bold my-4">Others</h2>
        <p class="text-base text-gray-700 my-6">Follow the steps mentioned in one of these links:</p>
        <ul class="list-decimal px-8 ">
          <li class="my-4 text-base text-gray-700">
            https://stackoverflow.com/questions/23837933/how-can-i-remove-public-index-php-in-the-url-generated-laravel
          </li>
          <li class="my-4 text-base text-gray-700">
            https://www.google.com/search?q=removing+public+from+laravel+url&oq=removing+public+from+laravel+url&aqs=chrome..69i57j0l5.5213j0j7&sourceid=chrome&ie=UTF-8
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
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