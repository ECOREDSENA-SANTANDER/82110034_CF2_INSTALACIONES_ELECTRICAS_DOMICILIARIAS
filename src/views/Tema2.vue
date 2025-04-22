<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requisitos para una instalación eléctrica

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        br
        p.mb-5 Los medidores eléctricos son instrumentos utilizados para cuantificar e indicar diferentes magnitudes eléctricas, tales como la corriente, la carga, el potencial eléctrico y la energía. Además, permiten medir las características eléctricas de un circuito, incluyendo la resistencia, la capacidad y la inductancia.
        br
        br

    p.text-center.mb-4 Estas magnitudes se expresan en unidades eléctricas estandarizadas como:

    .row.justify-content-center.mb-4
      .col-lg-9(data-aos="fade-right")
        .row.justify-content-center
          .col-lg-8.bg1
            img(src='@/assets/curso/temas/t2/2.png', alt='')
          .col-lg-4.bg2
            ul.lista-ul--color.sec2.px-4.px-lg-5.py-3.mb-0
              li
                i.fas.fa-circle-check
                | Ohmios (Ω)
              li
                i.fas.fa-circle-check
                | Voltios (V)
              li
                i.fas.fa-circle-check
                | Amperios (A)
              li
                i.fas.fa-circle-check
                | Culombios (C)
              li
                i.fas.fa-circle-check
                | Henrios (H)
              li
                i.fas.fa-circle-check
                | Faradios (F)
              li
                i.fas.fa-circle-check
                | Vatios (W)
              li.mb-0
                i.fas.fa-circle-check
                | Julios (J)
      .col-lg-3(data-aos="fade-left")
        img(src='@/assets/curso/temas/t2/3.jpg', alt='')
    
    p.text-center A continuación, se describen brevemente algunas de las unidades básicas más utilizadas en los circuitos eléctricos:

    h4.text-center Unidades básicas de medida en un circuito

    .row.justify-content-center.mb-5(data-aos="fade-down")
      .col-lg-4.mb-3
        .tarjeta.tarj-hover.text-center.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj2.svg', alt='')
          h4.tit.mb-3.py-1.pb-0.px-4 Resistencia
          p.mb-0 Es la oposición que presenta un material al paso de la corriente eléctrica. Se mide en ohmios (Ω). Un resistor es el componente que se encarga de ofrecer esta resistencia dentro de un circuito.  
      .col-lg-4.mb-3
        .tarjeta.tarj-hover.text-center.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj2.svg', alt='')
          h4.tit.mb-3.py-1.pb-0.px-4 Corriente
          p.mb-0 Representa el flujo de electrones a través de un conductor o material. Su unidad de medida es el amperio (A), y es una de las principales variables en cualquier análisis eléctrico. 
      .col-lg-4.mb-3
        .tarjeta.tarj-hover.text-center.p-4.h-100
          img.mb-4(src='@/assets/curso/temas/t2/tarj2.svg', alt='')
          h4.tit.mb-3.py-1.pb-0.px-4 Voltaje
          p.mb-0 También conocido como tensión eléctrica, es la diferencia de potencial eléctrico entre dos puntos de un circuito. Es la fuerza que impulsa a los electrones a moverse, generando corriente. Se mide en voltios (V).


</template>

<script>
export default {
  name: 'Tema2',
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
