<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p La presente síntesis tiene como objetivo abordar de manera integral el tema del cálculo de cargas eléctricas, un proceso fundamental en el diseño y operación de instalaciones eléctricas residenciales. A través de esta síntesis, se analizarán los aspectos clave que permiten garantizar el funcionamiento eficiente y seguro de los sistemas eléctricos, considerando tanto la demanda energética de una vivienda como los requisitos técnicos y normativos para su instalación. Además, se explicará la importancia de los planos y símbolos eléctricos como herramientas esenciales para la correcta interpretación y ejecución de los proyectos. Esta presentación busca proporcionar una comprensión clara de los elementos que intervienen en este proceso, destacando su relevancia en el contexto de la ingeniería eléctrica.

    .row.justify-content-center
      .col-lg-12.mb-5.p-4
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Presenta los fundamentos de electricidad para instalaciones en casa, organizados en cuatro áreas clave: los principios básicos de la electricidad (características, tipos y energía eléctrica), las leyes fundamentales (Ohm, Kirchhoff, Joule y Watt), los elementos de un circuito eléctrico (resistencia, corriente y voltaje, con sus respectivas unidades de medida: ohmios, amperios y voltios), y la clasificación de la electricidad según su fuente, distinguiendo entre renovable y no renovable.")
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
