<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Diseño de planos eléctricos y simbología técnica requerida
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/Tema3/img01.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los planos eléctricos constituyen representaciones gráficas detalladas que permiten comprender, diseñar, ejecutar y mantener las instalaciones eléctricas de equipos, edificaciones o infraestructuras. A través del uso de símbolos normalizados, diagramas y esquemas, estos planos posibilitan la ubicación precisa de las conexiones eléctricas y componentes, facilitando tanto los procesos de construcción como los de diagnóstico, reparación y modificación de sistemas eléctricos.
          br
          br
          | Estos planos son fundamentales como punto de partida en la planificación de instalaciones eléctricas, ya que proporcionan una guía clara para su implementación segura y eficiente. Su diseño requiere la consideración de varios elementos técnicos y normativos que aseguren el cumplimiento de estándares eléctricos y arquitectónicos.
    
    .row.justify-content-center.align-items-center.mb-1(data-aos="zoom-in-left")
      .col-lg-9
        p De acuerdo con Quintero Santa (2018), al elaborar un plano eléctrico se deben considerar los siguientes aspectos clave:

    .row.justify-content-center.align-items-end.mb-5(data-aos="zoom-in-left")
      .col-lg-4.col-9.col-md-6
        img.mb-3(src="@/assets/curso/temas/Tema3/img02.png")
      .col-lg-7
        .tarjeta.bgc-slyder.p-5
          SlyderA(tipo="b").bgc-slyder_blanco.p-5
            .row
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 a)	Símbolos eléctricos
                p Representaciones gráficas normalizadas que identifican componentes como interruptores, tomas, luminarias, tableros, entre otros.
            .row  
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 b)	Localización en planta de servicios
                p Ubicación exacta de los elementos eléctricos dentro del plano arquitectónico.
            .row
              .col-md-12.mb-4.mb-md-0
                h5.mb-4 c)	Rutas de acometida de media y baja tensión
                p Trazado de las líneas de suministro eléctrico desde la fuente hasta los puntos de consumo.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 d)	Plantas para sistemas eléctricos y afines
                p Planos complementarios que incluyen redes especiales como voz, datos, seguridad o automatización.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 e)	Cuadros de carga
                p Tablas que resumen la demanda eléctrica por circuito o por área.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 f)	Diagrama unifilar
                p Esquema simplificado que muestra las conexiones eléctricas principales de forma lineal y jerárquica.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 g)	Dimensionamiento de equipos y espacios
                p Determinación de capacidades eléctricas y de los espacios físicos necesarios para su instalación.
            .row
              .col-md-12.mb-4.mb-md-0
                h5 h)	Detalles constructivos
                p Información específica sobre métodos de instalación, materiales y soluciones técnicas.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in-left")
      .col-lg-6
        p Además, un plano eléctrico completo debe incluir los siguientes elementos:   

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-7
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Instalaciones eléctricas exteriores e interiores:] representación de redes que alimentan la edificación desde el exterior y su distribución interna.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Diagrama unifilar:] refuerza la comprensión general del sistema.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Cuadro de cargas:] indica la distribución de la potencia en cada uno de los circuitos eléctricos.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Convenciones:] leyendas y símbolos utilizados en el plano.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Planta arquitectónica:] base sobre la cual se trazan las instalaciones eléctricas, facilitando la integración con el diseño general.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Equipo de medida:] elementos como medidores de energía, transformadores o sensores que forman parte del sistema.
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p #[b Notas aclaratorias y rótulo:] observaciones, especificaciones técnicas y datos de identificación del plano, como autoría, fecha, escala, etc.
      .col-lg-5.col-11.col-md-9
        img(src="@/assets/curso/temas/Tema3/img03.png")

    .row.justify-content-center.align-items-center.mb-0
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 5. 
        span  Distribución del contenido del plano
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8
          img.mb-2(src="@/assets/curso/temas/Tema3/figura5.svg", alt='Representa la organización del contenido en un plano eléctrico. En el centro se ubica el espacio destinado a los planos con la instalación eléctrica, acompañado por elementos complementarios como convenciones, cuadro de cargas, especificaciones y equipos de medida. En la parte inferior se incluyen las notas aclaratorias, y a la derecha se encuentran los datos informativos de la obra, tales como nombre, dirección, responsables, firma, matrícula y fecha. Esta distribución facilita la interpretación técnica y administrativa del plano.')
          figcaption Fuente: Mejía Jorge (2013)
    
    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-5
          img.w-card-icon(src="@/assets/curso/temas/Tema3/rayo.png")
          h3.bg7.py-2.w-card-text2.text-white Principales símbolos eléctricos que se deben usar en las instalaciones

    .row.justify-content-center.mb-5(data-aos="zoom-in-left")
      .col-lg-5
        .row.justify-content-center.align-items-center.bg555.p-4.mb-3
          .col-lg-12
            p Para garantizar una correcta interpretación de los diseños y planos de instalaciones eléctricas, es fundamental emplear un lenguaje técnico estandarizado. Este lenguaje se basa en el uso de símbolos eléctricos reconocidos internacionalmente, los cuales permiten representar de manera clara y precisa los diferentes componentes del sistema eléctrico.
      .col-lg-3.col-md-6
        img.mb-3(src="@/assets/curso/temas/Tema3/img04.png")
      .col-lg-4 
        p Estos símbolos están definidos por normas internacionales como la IEC 60617 (Comisión Electrotécnica Internacional), ANSI Y32 (Instituto Nacional Estadounidense de Estándares), CSA Z99 (Asociación Canadiense de Normalización) y IEEE 315 (Instituto de Ingenieros Eléctricos y Electrónicos). El uso de estas normas facilita la comprensión de los esquemas eléctricos por parte de profesionales en todo el mundo, asegurando uniformidad y evitando errores en la interpretación o ejecución de las instalaciones.

    .row.justify-content-center.align-items-center.mb-4(data-aos="zoom-in-left")
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 6. 
        span Símbolos de electricidad
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-8
          img.mb-2(src="@/assets/curso/temas/Tema3/figura6.svg", alt='Presenta una tabla con diversos símbolos utilizados en electricidad, distribuidos en filas y columnas. Cada símbolo está acompañado por su respectivo nombre, lo que facilita su identificación y comprensión. Incluye representaciones gráficas de elementos como protecciones, conductores, interruptores, conectores, tomacorrientes, transformadores, subestaciones, entre otros componentes eléctricos. Estos símbolos permiten la lectura e interpretación de planos eléctricos y diagramas técnicos.')
          figcaption Fuente: Proferodrix (2014)


    p.mb-4 El diseño de instalaciones eléctricas domiciliarias exige una planificación rigurosa que integre conocimientos técnicos, normativos y prácticos para garantizar la seguridad, eficiencia y funcionalidad del sistema eléctrico.
    .row.justify-content-center.align-items-center.mb-5.bg6.p-4(data-aos="zoom-in-left")
      .col-lg-12
        p A partir del plano arquitectónico y la identificación precisa de las necesidades energéticas de cada espacio, es posible calcular la demanda total, distribuir adecuadamente las cargas, seleccionar los circuitos y dispositivos de protección adecuados, y cumplir con la normativa vigente, especialmente la NTC 2050. Este proceso no solo optimiza el uso de materiales y recursos, sino que permite anticipar futuras ampliaciones y asegurar el bienestar de los ocupantes.

































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
