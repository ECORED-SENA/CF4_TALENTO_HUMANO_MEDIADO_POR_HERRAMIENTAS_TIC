<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5 

    p.mb-5 A continuación, se presenta un mapa conceptual que sintetiza el componente formativo:  

    .row.justify-content-center
      .col-lg-10
        figure
          img(src="@/assets/curso/sintesis.svg", alt="alt")
      

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
