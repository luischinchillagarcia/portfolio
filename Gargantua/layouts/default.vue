<template>
  <div>
    <Nuxt />
  </div>
</template>
<script>
  export default {
    head: {
      title: "Luis G Chinchilla Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "Personal Portfolio",
          name: "Portfolio webapp",
          content: "Created with Nuxt and Tailwind",
        },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  }
</script>

<style lang="scss" scoped>

</style>
