<template>
  <footer class="footer flex-row text-white text-center">
    <!-- Grid container -->
    <div
      class="container flex-row p-3 pb-4"
      style="display: flex; justify-content: space-between"
    >
      <div class="flex flex-col" style="display: flex; flex-direction: column">
        <span
          style="font-size: 32px; font-family: 'Cedarville Cursive', cursive"
        >
          Soustab
        </span>
        <span style="font-size: 14px">
          Indian Institute of Technology (BHU) Varanasi
        </span>
      </div>

      <section>
        <!-- Linkedin -->
        <icon-link
          v-for="link in links"
          :key="link.id"
          :url="link.url"
          :icon="link.icon"
          class="text-white hover:text-black"
        />
      </section>
      <!-- Section: Social media -->
    </div>
    <!-- Grid container -->
  </footer>
</template>
<script>
import IconLink from "../reusable/IconLink.vue";
export default {
  props: ["links", "copyright"],
  components: {
    IconLink,
  },
  name: "AppFooter",
};
</script>
<style>
.footer {
  background-color: #2b5a8a;
}
</style>
