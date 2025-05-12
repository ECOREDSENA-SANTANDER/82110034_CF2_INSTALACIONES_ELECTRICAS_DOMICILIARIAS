<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño de planos eléctricos y simbología técnica requerida
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los planos eléctricos constituyen representaciones gráficas detalladas que permiten comprender, diseñar, ejecutar y mantener las instalaciones eléctricas de equipos, edificaciones o infraestructuras. A través del uso de símbolos normalizados, diagramas y esquemas, estos planos posibilitan la ubicación precisa de las conexiones eléctricas y componentes, facilitando tanto los procesos de construcción como los de diagnóstico, reparación y modificación de sistemas eléctricos.
          br
          br
          | Estos planos son fundamentales como punto de partida en la planificación de instalaciones eléctricas, ya que proporcionan una guía clara para su implementación segura y eficiente. Su diseño requiere la consideración de varios elementos técnicos y normativos que aseguren el cumplimiento de estándares eléctricos y arquitectónicos.
    
    .row.justify-content-center.align-items-center.mb-1
      .col-lg-9
        p De acuerdo con Quintero Santa (2018), al elaborar un plano eléctrico se deben considerar los siguientes aspectos clave:

    .row.justify-content-center.align-items-end.mb-5
      .col-lg-4
        img(src="@/assets/curso/temas/Tema3/img02.png")
      .col-lg-7
        .tarjeta.bgc-slyder.p-5
          SlyderA(tipo="b").bgc-slyder_blanco.p-5
            .row
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 a)	Símbolos eléctricos:
                p Representaciones gráficas normalizadas que identifican componentes como interruptores, tomas, luminarias, tableros, entre otros.
            .row  
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 b)	Localización en planta de servicios:
                p Ubicación exacta de los elementos eléctricos dentro del plano arquitectónico.
            .row
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 c)	Rutas de acometida de media y baja tensión:
                p Trazado de las líneas de suministro eléctrico desde la fuente hasta los puntos de consumo.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 d)	Plantas para sistemas eléctricos y afines:
                p Planos complementarios que incluyen redes especiales como voz, datos, seguridad o automatización.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 e)	Cuadros de carga:
                p Tablas que resumen la demanda eléctrica por circuito o por área.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 f)	Diagrama unifilar:
                p Esquema simplificado que muestra las conexiones eléctricas principales de forma lineal y jerárquica.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 g)	Dimensionamiento de equipos y espacios:
                p Determinación de capacidades eléctricas y de los espacios físicos necesarios para su instalación.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 h)	Detalles constructivos:
                p Información específica sobre métodos de instalación, materiales y soluciones técnicas.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6
        p Además, un plano eléctrico completo debe incluir los siguientes elementos:           

</template>

<script>
export default {
  name: 'Tema3',
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
