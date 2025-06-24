<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Requisitos para una instalación eléctrica

    p.mb-4 La definición de las características de cada componente de una instalación eléctrica domiciliaria es una parte fundamental del diseño del proyecto eléctrico. A través de cálculos específicos, no solo se determinan dichas características técnicas, sino que también se obtiene información clave para:  

    .row.mb-4(data-aos="zoom-in-left")
      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.mb-3(src='@/assets/curso/temas/t2/01.png', alt='Texto que describa la imagen')
            .col-9  
              p.text-center Estimar la cantidad de materiales necesarios.
          

      .col-sm-6.col-lg-4.mb-4.mb-lg-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.mb-3(src='@/assets/curso/temas/t2/02.png', alt='Texto que describa la imagen')
            .col-9
              p.text-center Elaborar presupuestos adecuados.
    

      .col-sm-6.col-lg-4.mb-4.mb-sm-0
        .tarjeta--boton.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img.mb-3(src='@/assets/curso/temas/t2/03.png', alt='Texto que describa la imagen')
            .col-9
              p.text-center Cumplir con las disposiciones reglamentarias vigentes.
         

    p.mb-4 El cálculo de una instalación eléctrica se realiza mediante métodos relativamente sencillos. Sin embargo, es esencial que estos cálculos respeten las normas técnicas y reglamentarias aplicables. Además, se deben basar en el plano arquitectónico de la vivienda, ya que este sirve como base para la elaboración del plano eléctrico, el cual representa el punto de partida para el desarrollo detallado del proyecto.
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 4. 
        span  Plano arquitectónico
      .col-lg-8.col-11.col-md-9
        img.mb-3(src='@/assets/curso/temas/t2/plano.png', alt='La figura presenta el plano arquitectónico de una vivienda unifamiliar que incluye las áreas principales distribuidas en una sola planta. Se identifican espacios como sala de estar, comedor, cocina, baños y habitaciones.')  

    .row.justify-content-start.mb-5(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-5
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.png")
          h3.bg7.py-2.w-card-text2.text-white Requerimientos indispensables para realizar una instalación eléctrica domiciliaria


    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4(data-aos="zoom-in-left")
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t2/1.jpg')})`}")
      .bloque-texto-g__texto.p-4.py-lg-5
        br
        p.mb-5 El primer paso para diseñar y calcular una instalación eléctrica en una vivienda es contar con el plano arquitectónico de planta. Este plano debe estar a escala y mostrar con claridad todas las áreas de la casa: número y ubicación de habitaciones, sala, comedor, pasillos, cocina, baños, patio, jardines, entre otros espacios. Estos elementos varían según el tipo de vivienda sea unifamiliar o multifamiliar, ya que cada una presenta diferentes necesidades eléctricas.
        br
        br

    p.mb-4 El primer paso para diseñar y calcular una instalación eléctrica en una vivienda es contar con el plano arquitectónico de planta. Este plano debe estar a escala y mostrar con claridad todas las áreas de la casa: número y ubicación de habitaciones, sala, comedor, pasillos, cocina, baños, patio, jardines, entre otros espacios. Estos elementos varían según el tipo de vivienda sea unifamiliar o multifamiliar, ya que cada una presenta diferentes necesidades eléctricas.

    .row.justify-content-center.align-items-center.mb-3
        .col-lg-3.col-8.col-md-5
          img.mb-4(src='@/assets/curso/temas/t2/img01.png', alt='')  
        .col-lg-9
          .tarjeta.fondolink2.mb-0.p-3
            .row.align-items-center.justify-content-center
              .col-7.col-md-4.col-lg-2
                img(src="@/assets/curso/temas/Tema1/3.png")
              .col-11.col-lg-9
                .row.justify-content-between.align-items-center.mb-0
                  .col.mb-3.mb-sm-0
                    .py-2
                    h4.text-white.mb-5  Para complementar esta información revise los siguientes PDFs
                    
                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0  
                    p.mb-1.text-white Guía de gestión energética en el sector hotelero.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES%20ELECTRICAS%20DOMICILIARIAS/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/Documentos%20DI%20ok/Enlaces%20para%20DI/guia-de-gestion-energetica-en-el-sector-hotelero-fenercom.pdf?csf=1&web=1&e=xEhUpx" target="_blank")
                      span Descargar
                      i.fas.fa-download

                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0
                    p.mb-1.text-white Guía de diseño de instalaciones eléctricas.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES%20ELECTRICAS%20DOMICILIARIAS/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/Documentos%20DI%20ok/Enlaces%20para%20DI/guia-instalaciones-electricas-2008-s.e.pdf?csf=1&web=1&e=QOZ87z" target="_blank")
                      span Descargar
                      i.fas.fa-download

                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0
                    p.mb-1.text-white Instalaciones eléctricas.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos%20compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES%20ELECTRICAS%20DOMICILIARIAS/1.%20FinalxVirtualizar/Contenidos/CF02/Formatos%20DI/Documentos%20DI%20ok/Enlaces%20para%20DI/instalacion_de_electrodomesticos_de_potencia.pdf?csf=1&web=1&e=ibB9pX" target="_blank")
                      span Descargar
                      i.fas.fa-download


    .row.justify-content-start.mb-3(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-5
          img.w-card-icon(src="@/assets/curso/temas/t2/ico.png")
          h3.bg7.py-2.w-card-text2.text-white Requerimientos básicos por espacio

    p.mb-3 A continuación, se describen los requerimientos eléctricos generales por cada zona de la vivienda:

    AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row(titulo="Cocina")
        .col-md-12.mb-4.mb-md-0
          p Este espacio suele contar con iluminación incandescente y múltiples salidas para tomacorrientes, destinados a electrodomésticos como la nevera, la licuadora, el horno, entre otros. En algunos casos, es necesario instalar tomas especiales para equipos menos comunes, como lavavajillas o trituradores de desperdicios.
      .row(titulo="Habitaciones")
        .col-md-12.mb-4.mb-md-0
          p En los dormitorios se requiere iluminación básica (frecuentemente incandescente) y tomacorrientes para conectar aparatos como lámparas de mesa, televisores, planchas, calefactores y teléfonos.
      .row(titulo="Baño")
        .col-md-12.mb-4.mb-md-0
          p Los baños deben tener salidas para iluminación general y específica (como la del espejo), así como un sistema de extracción de aire. Además, es común incluir tomacorrientes dobles para aparatos como secadores de cabello, rasuradoras o calentadores de agua. La iluminación puede combinar luminarias fluorescentes e incandescentes.
      .row(titulo="Sala y comedor")
        .col-md-12.mb-4.mb-md-0
          p Estos espacios deben contar con salidas para iluminación (mediante luminarias, candelabros o portalámparas especiales), así como tomacorrientes para conectar televisores, equipos de sonido, teléfonos, aspiradoras, entre otros dispositivos.
      .row(titulo="Pasillos")
        .col-md-12.mb-4.mb-md-0
          p En los pasillos es necesario instalar iluminación y, en algunos casos, tomacorrientes para herramientas portátiles como aspiradoras o pulidoras. Se recomienda el uso de apagadores de tres vías, especialmente en pasillos largos o escaleras, para controlar la luz desde diferentes puntos.
      .row(titulo="Patios y jardines")
        .col-md-12.mb-4.mb-md-0
          p Si la vivienda cuenta con patio o jardín, se debe incluir iluminación exterior con control desde el interior o exterior de la vivienda. Además, se instalan tomas a prueba de agua (intemperie) para conectar herramientas como cortadoras de césped o taladros. También pueden requerirse salidas especiales para bombas de agua o iluminación decorativa mediante luminarias tipo spot.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-12
        .d-flex.align-items-center.mt-5
          img.w-card-icon(src="@/assets/curso/temas/t2/ico1.png")
          h3.bg7.py-2.w-card-text2.text-white Estimación de carga y planificación del sistema eléctrico

    p.mb-4 Con base en estos requerimientos generales, se puede realizar una estimación preliminar de la carga eléctrica total de la vivienda. No obstante, es importante considerar que estos valores representan un mínimo; vale la pena señalar que una buena instalación eléctrica debe prever la posibilidad de futuras ampliaciones o la conexión de nuevos equipos como aires acondicionados, planchas eléctricas, o sistemas de automatización.

    .row.justify-content-start.mb-4(data-aos="zoom-in-left")
      .col-sm-12.col-lg-6
        .d-flex.align-items-center.mt-3
          h3.bg33.py-2.w-card-text Plano de instalación eléctrica

    p.mb-4 Para realizar el cálculo detallado de la instalación eléctrica se debe elaborar un plano de trabajo que indique, para cada área, los siguientes elementos:

    .row.justify-content-center.mb-2(data-aos="zoom-in-left")
      .col-lg-3.col-md-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Iluminación (alumbrado).

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Tomacorrientes (contactos).

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Tomacorrientes en piso.
      .col-lg-3.col-md-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Apagadores de tres y cuatro vías.

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Contactos controlados por apagadores.

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Contactos polarizados.

      .col-lg-3.col-md-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Arbotantes para pasillos.

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Salidas para televisión y teléfono.

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Iluminación exterior (jardines).

      .col-lg-3.col-md-6
        ul.lista-ul--color
          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Salidas para intercomunicadores.

          li.d-flex.mb-0
            i.fas.fa-circle-check
            p Salidas especiales (bombas, equipos grandes, etc.).

    p Este plano servirá como base para elaborar el proyecto eléctrico domiciliario y permitirá definir la capacidad de los conductores eléctricos, el tipo de protecciones necesarias y la distribución adecuada de los circuitos.
    p.mb-4 Por ejemplo, a una tensión de 127 voltios en un sistema monofásico, se deben tener en cuenta los valores típicos de consumo de cada equipo o carga para seleccionar el calibre adecuado de los conductores y los dispositivos de protección.

      .row.justify-content-center.align-items-center.mb-3(data-aos="zoom-in-left")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3.
          span  Valores de consumo
        .col-lg-8
          .tabla-b.color-acento-contenido
            .tabla-b__header(alt,="La tabla presenta el consumo en vatios de diversos electrodomésticos. Incluye artefactos de uso cotidiano como licuadora, plancha eléctrica, refrigerador, tostador de pan, secador de pelo, radio, televisor, aspiradora, pulidora de pisos, rasuradora, reloj eléctrico, lavadora de ropa, máquina de coser y parrilla eléctrica. Algunos equipos tienen un consumo fijo, mientras que otros presentan un rango de consumo.")
              h4.mb-0 Valores de consumo
            table
              caption Fuente: Técnico Electricista (s.f.) – curso electricidad 2000
              tr
                th.text-center Electrodoméstico
                th.text-center  Consumo 
              tr.text-center
                th.text-regular  Licuadora
                th.text-regular  500 vatios
              tr.text-center
                th.text-regular  Plancha eléctrica
                th.text-regular  800 vatios
              tr.text-center
                th.text-regular  Refrigerador
                th.text-regular  1000 vatios
              tr.text-center
                th.text-regular  Tostador de pan
                th.text-regular  1200 vatios
              tr.text-center
                th.text-regular  Secador de pelo
                th.text-regular  500 – 1000 vatios
              tr.text-center
                th.text-regular  Radio
                th.text-regular  100 vatios
              tr.text-center
                th.text-regular  Televisor
                th.text-regular  100 – 1000 vatios
              tr.text-center
                th.text-regular  Aspiradora
                th.text-regular  200 – 1000 vatios
              tr.text-center
                th.text-regular  Pulidora de pisos
                th.text-regular  200 – 500 vatios
              tr.text-center
                th.text-regular  Rasuradora
                th.text-regular  20 vatios
              tr.text-center
                th.text-regular  Reloj eléctrico
                th.text-regular  5 vatios
              tr.text-center
                th.text-regular  Lavadora de ropa
                th.text-regular  800 vatios
              tr.text-center
                th.text-regular  Máquina de coser
                th.text-regular  150 vatios
              tr.text-center
                th.text-regular  Parrilla eléctrica
                th.text-regular  750 vatios
              tr.text-center
                th.text-regular  Extractor de jugos
                th.text-regular  300 vatios
              tr.text-center
                th.text-regular  Aspiradora
                th.text-regular  450 vatios
            












































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
