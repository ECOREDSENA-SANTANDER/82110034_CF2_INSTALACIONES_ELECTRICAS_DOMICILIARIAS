<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La presente síntesis tiene como objetivo abordar de manera integral el tema del cálculo de cargas eléctricas, un proceso fundamental en el diseño y operación de instalaciones eléctricas residenciales. A través de esta síntesis, se analizarán los aspectos clave que permiten garantizar el funcionamiento eficiente y seguro de los sistemas eléctricos, considerando tanto la demanda energética de una vivienda como los requisitos técnicos y normativos para su instalación. Además, se explicará la importancia de los planos y símbolos eléctricos como herramientas esenciales para la correcta interpretación y ejecución de los proyectos. Esta presentación busca proporcionar una comprensión clara de los elementos que intervienen en este proceso, destacando su relevancia en el contexto de la ingeniería eléctrica.

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El diagrama organiza los aspectos clave del cálculo de cargas eléctricas, partiendo de la demanda y su relación con el uso de electrodomésticos, sistemas y número de habitantes. Incluye la evaluación de necesidades por vivienda y considera factores como aire acondicionado, bomba de agua y alumbrado público. También se abordan los requisitos normativos y de eficiencia para la instalación, junto con los planos eléctricos que guían la distribución de circuitos, ubicación de tomacorrientes e interruptores. Finalmente, se incluye la representación gráfica de componentes mediante símbolos eléctricos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

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
