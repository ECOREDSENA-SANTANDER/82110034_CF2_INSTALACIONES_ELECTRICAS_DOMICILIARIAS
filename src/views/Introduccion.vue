<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.pb-0.pb-md-0.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    p En el entorno residencial, el uso cotidiano de electrodomésticos y sistemas como el aire acondicionado o las bombas de agua implica una constante demanda de energía eléctrica. Esta realidad resalta la importancia de realizar un cálculo preciso de la carga eléctrica necesaria para garantizar el funcionamiento óptimo y seguro de todos los dispositivos que conforman la instalación domiciliaria, incluyendo el sistema de alumbrado público. La correcta determinación de las características de cada componente de la instalación eléctrica forma parte esencial del diseño del proyecto, permitiendo no solo definir los parámetros técnicos requeridos, sino también estimar la cantidad de materiales a utilizar, elaborar presupuestos ajustados y cumplir con las disposiciones reglamentarias vigentes.
    p El cálculo de las instalaciones eléctricas se basa en métodos relativamente simples, pero siempre debe desarrollarse conforme a las normas técnicas establecidas para asegurar la calidad y seguridad del sistema. Este proceso parte del análisis del plano arquitectónico de la vivienda, sobre el cual se diseña el plano eléctrico, considerado el punto de partida fundamental para el desarrollo detallado del proyecto de instalación.

   
    .row.bgc-1.align-items-center.p-2.p-md-3(data-aos="fade-down")
      .col-lg-12.col-12.px-lg-4
        .row.justify-content-center.align-items-center.mb-5
        
          .row.justify-content-center.align-items-center
            .col-lg-12
              figure
                .video
                  iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
              figcaption Video. 

</template>

<script>
export default {
  name: 'Introduccion',
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
