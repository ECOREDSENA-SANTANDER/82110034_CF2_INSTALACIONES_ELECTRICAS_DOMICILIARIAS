<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Cálculo de la demanda
    
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down")
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/Tema1/img01.png')})`}")
        .bloque-texto-g__texto.p-4.py-lg-5
          br
          p.mb-5 La carga eléctrica que se calcula para una vivienda debe contemplar la totalidad de las necesidades energéticas, incluyendo tanto el alumbrado como las distintas aplicaciones que requieren electricidad, tales como tomacorrientes, bombas de agua, aires acondicionados, secadoras de ropa, entre otros.
          br
          br
      
      p.text-center.mb-4 Para organizar y dimensionar adecuadamente estas necesidades, se establecen dos niveles de electrificación:

      .tarjeta--container.row.mb-5(data-aos='fade-right')
        .col-md.tarjeta.color-primario.p-5
          .row.justify-content-center.align-items-center.mb-0
            .col-9.col-lg-5
              figure
                img(src='@/assets/curso/temas/Tema1/1.png', alt='Texto que describa la imagen')          
            .col-12.col-lg-7
              br
              h2.bg4.text-center La electrificación básica
          p Según Torres (2015), se refiere a la infraestructura eléctrica necesaria para el uso de aparatos eléctricos comunes, como la instalación de circuitos, tomacorrientes, interruptores, luminarias, tablero de distribución y cableado. Es decir, hace referencia al sistema eléctrico instalado en una edificación para que los dispositivos funcionen correctamente.
        
        .col-md.tarjeta.bg5.p-5
          .row.justify-content-center.align-items-center.mb-0
            .col-9.col-lg-5
              figure
                img(src='@/assets/curso/temas/Tema1/2.png', alt='Texto que describa la imagen')          
            .col-12.col-lg-7
              br
              h2.bg4.text-center.text-white Electrificación elevada
          p Se aplica a viviendas con superficies útiles superiores a 160 m², en las que se prevé un uso de electrodomésticos mayor al contemplado por la electrificación básica, o que cuentan con sistemas de calefacción eléctrica y aire acondicionado (Actividad de tecnología, s.f.).

      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1.
          span  Electrificación y tecnología
        .col-lg-8.col-11.col-md-9
          img.mb-3(src='@/assets/curso/temas/Tema1/img02.png', alt='La imagen representa una estructura de torre de transmisión eléctrica junto a un poste de alumbrado público encendido, en un entorno que sugiere la interacción entre infraestructura eléctrica y sistemas tecnológicos urbanos.')  
         

      .row.justify-content-center.mb-3
        .col-lg-4.col-11.col-md-9
          img.mb-4(src='@/assets/curso/temas/Tema1/img03.png', alt='')   
        .col-lg-8
          p Según Drakosman (2013), los cálculos de demanda, contemplados en la sección 220 de la NTC 2050, permiten determinar aspectos fundamentales para el diseño y dimensionamiento de los sistemas eléctricos, tales como:
          ul.lista-ul--color
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p El tamaño de la carga que debe alimentar cada unidad de edificación o equipo.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p La carga equivalente resultante de la agrupación o consideración conjunta de múltiples cargas.

            li.d-flex.mb-0
              i.fas.fa-circle-check
              p La capacidad requerida de las fuentes de alimentación.

            li.d-flex.mb-0
              i.fas.fa-circle-check
              p La selección adecuada de transformadores.

            li.d-flex.mb-0
              i.fas.fa-circle-check
              p La capacidad necesaria de los grupos electrógenos.

            li.d-flex.mb-0
              i.fas.fa-circle-check
              p La elección de los equipos de gestión energética y de medición.

      .row.justify-content-center.align-items-center.mb-5.bg6.p-4
        .col-lg-12
          h5 La demanda de una carga o de un conjunto de cargas corresponde a una estimación, ya sea de tipo estadístico o práctico, de la máxima exigencia que dichas cargas imponen sobre la fuente de suministro eléctrico. Para realizar un cálculo preciso de esta demanda, es fundamental considerar el tipo de ocupación de la edificación, ya sea residencial, comercial o institucional, como en el caso de viviendas, hoteles, hospitales o instalaciones que requieren equipos eléctricos específicos, ya que cada uso implica características y necesidades energéticas particulares.

      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2.
        span   Aire acondicionado
      .row.bgc-2.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .col-lg-8.col-11.col-md-9
          img.mb-5(src='@/assets/curso/temas/Tema1/img04.png', alt='Un sistema de aire acondicionado está en funcionamiento en una sala moderna y ordenada. Indica que el equipo está enfriando o ventilando el ambiente. El espacio está decorado con elementos sencillos y funcionales, lo que resalta un diseño interior minimalista y confortable.')  

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.col-8.col-md-6
          img.mb-4(src='@/assets/curso/temas/Tema1/img05.png', alt='')  
        .col-lg-9
          .tarjeta.fondolink2.mb-0.p-3
            .row.align-items-center.justify-content-center
              .col-7.col-md-4.col-lg-2
                img(src="@/assets/curso/temas/Tema1/3.png")
              .col-11.col-lg-9
                .row.justify-content-between.align-items-center.mb-0
                  .col.mb-3.mb-sm-0
                    .py-2
                    h4.text-white.mb-5  Para complementar esta información visite los siguientes anexos:
                    
                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0  
                    p.mb-1.text-white Reglamento técnico de instalaciones eléctricas RETIE.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES ELECTRICAS DOMICILIARIAS/1. FinalxVirtualizar/Contenidos/CF02/Formatos DI/Enlaces para DI/Reglamento tecnico RETIE.pdf?csf=1&web=1&e=isVmiV" target="_blank")
                      span Descargar
                      i.fas.fa-download

                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0
                    p.mb-1.text-white Desarrollo de programa para cálculos de cargas térmicas en edificaciones.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES ELECTRICAS DOMICILIARIAS/1. FinalxVirtualizar/Contenidos/CF02/Formatos DI/Enlaces para DI/DESARROLLO PROGRAMA PARA CALCULO DE CARGAS TERMICAS EN EDIFICACIONES.pdf?csf=1&web=1&e=P3f0l2" target="_blank")
                      span Descargar
                      i.fas.fa-download

                .row.justify-content-between.align-items-center.mb-3
                  .col.mb-3.mb-sm-0
                    p.mb-1.text-white Marco regulatorio sector energético en Colombia.
                  .col-sm-auto.col-lg-2
                    a.boton.color-acento-botones.texto-blanco(href="https://sena4.sharepoint.com/:b:/r/sites/VirtualizacionRED/Documentos compartidos/2025/LP-Santander/COMPLEMENTARIAS/82110034-INSTALACIONES ELECTRICAS DOMICILIARIAS/1. FinalxVirtualizar/Contenidos/CF02/Formatos DI/Enlaces para DI/marco_regulatorio_sector_energia.pdf?csf=1&web=1&e=j8LIYm" target="_blank")
                      span Descargar
                      i.fas.fa-download
      
      separador
      #t_1_1.titulo-segundo.mb-4
        h2 1.1  Demanda en unidades de vivienda            

      .row.justify-content-center.align-items-center.mb-3
        .col-lg-12
          p Para el cálculo de la demanda en unidades de vivienda unifamiliares, bifamiliares o multifamiliares, la NTC 2050 (2019) establece cuatro alternativas, las cuales se describen a continuación:

      .row.justify-content-center.mb-5
        .col-lg-12(data-aos="fade-right")
          .row.justify-content-center
            .col-lg-5.bg1
              img(src='@/assets/curso/temas/Tema1/img06.png', alt='')
            .col-lg-7.bg2
              br
              br
              ul.lista-ul--color.sec2.px-4.px-lg-5.py-3.mb-0
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p #[b Alternativa No. 1.] Basada en la Sección 220, Parte B. Incluye los artículos 220-3(b) y (c), 220-11, 220-15, 220-16, 220-17, 220-18 y 220-19.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p #[b Alternativa No. 2.] Basada en la Sección 220, Parte C, artículo 220-30.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p #[b Alternativa No. 3.] Dirigida a viviendas multifamiliares, basada en la Sección 220, Parte C, artículo 220-32.
                li.d-flex.mb-0
                  i.fas.fa-circle-check
                  p #[b Alternativa No. 4.] También basada en la Sección 220, Parte C, artículo 220-37.
              
      .row.justify-content-center.align-items-center.bg6.p-4
        .col-lg-12
          h5 A continuación, se detalla la aplicación de la Alternativa No. 1, por ser la de mayor difusión y uso en el contexto nacional. Si bien las alternativas 2 y 3 son técnicamente válidas, no se ajustan completamente a las características de la vivienda típica colombiana. Por su parte, la alternativa 4 está ampliamente abordada en textos técnicos y normativas sobre sistemas de distribución eléctrica.
  
  
      .row.justify-content-start.mb-5(data-aos="zoom-in-left")
        .col-sm-12.col-lg-12
          .d-flex.align-items-center.mt-5
            img.w-card-icon(src="@/assets/curso/temas/Tema1/rayo.png")
            h3.bg7.py-2.w-card-text2.text-white Alternativa 1. Pasos para calcular la demanda eléctrica de una vivienda
  
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.p-4.bgc-3
          .row
            .col-lg-12.p-4
              .tarjeta.tarjeta--blanca.p-4
                PasosB.color-acento-contenido
                  .row.justify-content-center.align-items-center(titulo="Paso 1")
                    .col-md-12.mb-4.mb-md-0.col-lg-6
                      h4 Determinar el área total de la vivienda
                      p El primer paso consiste en calcular la superficie total de la vivienda en metros cuadrados (m²), utilizando las dimensiones exteriores de la construcción.
                      p.bg33.p-4 Importante: no se deben incluir áreas como porches abiertos, balcones descubiertos o espacios sin terminar que no puedan ser usados funcionalmente en el futuro.
                    .col-md-8.col-lg-4
                      figure
                        img(src='@/assets/curso/temas/Tema1/img07.png', alt='')
                 

                  .row.justify-content-center.align-items-center(titulo="Paso 2")
                    .col-md-12.mb-4.mb-md-0.col-lg-7
                      h4.mb-5 Estimar la carga mínima de alumbrado
                      p Para calcular la carga de iluminación:
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Se considera una carga mínima de 32 voltamperios (VA) por metro cuadrado.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Multiplica el área total de la vivienda por 32 VA/m² para obtener la carga base de iluminación.

                      p Este valor representa la demanda mínima requerida, sin importar cómo se distribuyan los puntos de luz o los tomacorrientes.
                    .col-md-12.p-4.bg33.col-lg-4
                      h5.mb-4 Aplicación práctica:
                      p En viviendas unifamiliares, bifamiliares, multifamiliares y en habitaciones de hoteles o moteles, se entiende que las salidas para alumbrado general incluyen tanto la iluminación como los tomacorrientes de uso general (de hasta 20 A) que no estén destinados a pequeños electrodomésticos específicos.
                 
                  .row.justify-content-center.align-items-center(titulo="Paso 3")
                    .col-md-12.mb-4.mb-md-0.col-lg-7
                      h4.mb-3 Calcular la carga por pequeños artefactos
                      p Cada unidad de vivienda debe contar con al menos dos circuitos independientes de #[b 20 A] para pequeños artefactos (electrodomésticos de uso común).
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p La carga asignada a cada uno de estos circuitos es de 1500 VA.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Por lo tanto, el mínimo a considerar para esta sección es 3000 VA (1500 VA × 2).

                      p.bg33.p-4 Recomendación: en viviendas con diseños más complejos o no estandarizados, se sugiere evaluar cada caso de forma particular para definir cuántos circuitos son realmente necesarios.
                    .col-md-8.col-lg-4
                      figure
                      img(src='@/assets/curso/temas/Tema1/img08.png', alt='')
  
                  .row.justify-content-center.align-items-center(titulo="Paso 4")
                    .col-md-11.mb-4.mb-md-0
                      h4.mb-3 Incluir cargas especiales
                      p Estas son cargas que, por su naturaleza o potencia, deben tratarse de manera independiente. Algunas de las más comunes en viviendas son:
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Lavandería y planchado:] requiere un circuito de #[b 20 A] con una carga mínima de 1500 VA, excepto si hay lavandería comunal o está prohibido el uso de lavadoras.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Equipos de cómputo:] aunque no es exigencia normativa, se recomienda un circuito independiente de 1500 VA para proteger estos equipos.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Calentadores de agua:] requieren un circuito dedicado de #[b 20 A] por unidad, con una carga mínima de 1500 VA o según la potencia del fabricante.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Secadoras:] se recomienda un circuito multi conductor de 2 x #[b 30 A], con una carga estimada de 5000 VA o conforme a la placa del equipo
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Cocción eléctrica:]  para estufas, hornos o cocinas empotradas con más de #[b 1,75 KW,] se debe considerar la potencia real indicada en la placa del fabricante.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p #[b Aire acondicionado y calefacción:] deben incluirse todos los circuitos necesarios, calculando la carga en función del diseño o especificaciones técnicas del fabricante.
                  
                  .row.justify-content-center.align-items-center(titulo="Paso 5")
                    .col-md-12.mb-4.mb-md-0.col-lg-7
                      h4.mb-3 Estimar la carga de servicios generales (si aplica)
                      p En edificaciones multifamiliares o unidades residenciales con zonas comunes, deben contemplarse cargas adicionales como:
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Alumbrado de parqueaderos.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Ascensores o sistemas de elevación.
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Motobombas
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Iluminación perimetral y de accesos.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Alumbrado de escaleras y áreas compartidas.
                    .col-md-8.col-lg-4
                      figure
                      img.mb-3(src='@/assets/curso/temas/Tema1/img09.png', alt='')
                    .col-md-11
                      h5.bg33.p-3 Estas cargas deben calcularse con base en el diseño general del conjunto residencial.
                  
                  .row.justify-content-center.align-items-center(titulo="Paso 6")
                    .col-md-12.mb-4.mb-md-0.col-lg-7
                      h4.mb-3 Elaborar el cuadro general de cargas
                      p Con toda la información recogida en los pasos anteriores, se construye un cuadro de cargas que consolide los siguientes datos:
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Área de la vivienda.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Carga por alumbrado.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Carga por pequeños artefactos.

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Cargas especiales (electrodomésticos, climatización, etc.).


                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Cargas de servicios generales (si aplica).
                    .col-md-9.col-lg-4
                      figure
                      img.mb-3(src='@/assets/curso/temas/Tema1/img10.png', alt='')
                    .col-md-11
                      h5.bg33.p-3 El cuadro es fundamental para los cálculos eléctricos detallados, el diseño de los sistemas de distribución interna, la selección de protecciones y conductores, y la elaboración de los presupuestos del proyecto eléctrico.
  
                  .row.justify-content-center.align-items-center(titulo="Paso 7")
                    .col-md-11.mb-4.mb-md-0
                      h4.mb-3 Calcular la demanda total de la instalación
                      p Una vez elaborado el cuadro general de cargas, se procede a calcular la demanda eléctrica total. Para ello, se aplican factores de demanda sobre las cargas previamente identificadas, con el fin de estimar la carga real que se utilizará de forma simultánea.
                      p Procedimiento práctico:
                      ul.lista-ul--color
                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Suma las cargas correspondientes al alumbrado (Paso 2), pequeños artefactos (Paso 3) y cargas especiales como lavandería, equipos de cómputo y calentador de agua (Paso 4).

                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p Aplica los factores de demanda establecidos para cada grupo de carga según su uso y cantidad.


                        li.d-flex.mb-0
                          i.fas.fa-circle-check
                          p El resultado será la demanda máxima probable que debe usarse como base para el dimensionamiento de la acometida eléctrica, protecciones principales y transformadores (si aplica).
                    .col-md-11
                      h5.bg33.p-3 Este paso permite optimizar los recursos del sistema eléctrico, evitando sobredimensionamientos y garantizando la seguridad y eficiencia de la instalación.
  
      .row.justify-content-center.align-items-center.bg6.p-4.mb-5
        .col-lg-12
          h5 Nota: si desea profundizar en esta información, puede adquirir en la página de ICONTEC. Las diferentes normas y leyes citadas dentro del componente; aunque debe tener presente que tienen un costo dentro de esa página.     
          h5 Sin embargo, al interior de este componente se proporciona contenido clave que le permitirá comprender el proceso de diseño de instalaciones eléctricas

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          p Para complementar la temática expuesta se expone la siguiente tabla resumen del diseño eléctrico de una vivienda conforme a la NTC 2050, que es la norma colombiana basada en el NEC #[em (National Electrical Code).] Estos aspectos se consideran los más importantes que se deben tener en cuenta en el diseño eléctrico residencial.
  
      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 1.
          span  Diseño eléctrico de una vivienda
    
      .tabla-b.color-acento-contenido
        .tabla-b__header(alt,="Presenta una tabla con los principales elementos del diseño eléctrico de una vivienda, indicando los requisitos establecidos por la NTC 2050 y los artículos específicos que los respaldan. Incluye aspectos como el cálculo de carga total, número mínimo de circuitos, circuitos específicos para cocina y lavadora, tomacorrientes en baños y exteriores, distribución de cargas, conexión a tierra, protección contra sobre corriente, alumbrado de emergencia, tablero de distribución, canalizaciones y capacidad del medidor.")
          h4.mb-0 Diseño eléctrico de una vivienda
        table
          tr
            th.text-regular Elemento del diseño
            th.text-regular.izq  Descripción / Requisito según NTC 2050
            th Referencia NTC 2050
          tr
            th.text-regular  Cálculo de carga
            th.text-regular.izq  Se debe calcular la carga total de la vivienda incluyendo iluminación, tomacorrientes, electrodomésticos fijos, HVAC, etc.
            th.text-regular  Art. 220
          tr
            th.text-regular  Número mínimo de circuitos
            th.text-regular.izq  Un mínimo de 2 circuitos derivados para iluminación y tomacorrientes generales.
            th.text-regular  Art. 210.11
          tr
            th.text-regular  Circuito para cocina
            th.text-regular.izq  Circuitos independientes de 20 A para tomacorrientes de cocina.
            th.text-regular  Art. 210.52(B)
          tr
            th.text-regular  Circuito para lavadora
            th.text-regular.izq  Circuito dedicado de 20 A para el área de lavandería.
            th.text-regular  Art. 210.52(F)
          tr
            th.text-regular  Tomacorrientes en baños
            th.text-regular.izq  Deben ser protegidos por GFCI (Interruptor de falla a tierra).
            th.text-regular  Art. 210.8(A)
          tr
            th.text-regular  Tomacorrientes exteriores
            th.text-regular.izq  Mínimo uno por cada fachada accesible; deben tener GFCI.
            th.text-regular  Art. 210.52(E)
          tr
            th.text-regular  Distribución de cargas
            th.text-regular.izq  Equilibrar las cargas entre las fases en instalaciones bifásicas.
            th.text-regular  Art. 220.40
          tr
            th.text-regular  Iluminación mínima
            th.text-regular.izq  Todas las áreas habitables deben tener iluminación.
            th.text-regular  Art. 210.70

          tr
            th.text-regular Conductor neutro
            th.text-regular.izq Debe instalarse en todos los puntos de interruptores.
            th.text-regular Art. 404.2(C)
          tr
            th.text-regular Puesta a tierra
            th.text-regular.izq Se requiere un sistema de puesta a tierra adecuado.
            th.text-regular Art. 250
          tr
            th.text-regular Protección contra sobre corriente
            th.text-regular.izq Se debe proteger cada circuito con interruptores automáticos adecuados.
            th.text-regular Art. 240
          tr
            th.text-regular Alumbrado de emergencia
            th.text-regular.izq Requerido en edificaciones con más de una salida o evacuación.
            th.text-regular Art. 700
          tr
            th.text-regular Tablero de distribución
            th.text-regular.izq Debe ubicarse en un lugar accesible, fuera de zonas húmedas.
            th.text-regular Art. 240.24
          tr
            th.text-regular Tablero de distribución
            th.text-regular.izq Debe ubicarse en un lugar accesible, fuera de zonas húmedas.
            th.text-regular Art. 240.24
          tr
            th.text-regular Canalizaciones
            th.text-regular.izq Uso de tubería PVC, EMT, o canaletas, según el ambiente.
            th.text-regular Art. 352, 358
          tr
            th.text-regular Capacidad del medidor
            th.text-regular.izq Depende de la carga total calculada, comúnmente 120/240 V - 100 A o 200 A.
            th.text-regular Art. 230

      .row.justify-content-start.mb-4(data-aos="zoom-in-left")
        .col-sm-12.col-lg-5
          .d-flex.align-items-center.mt-3
            h3.bg33.py-2.w-card-text Siglas utilizadas

      .row.justify-content-center.align-items-end.mb-2
        .col-lg-3.col-9.col-md-6
          img.mb-4(src='@/assets/curso/temas/Tema1/img11.png', alt='')
        .col-lg-7
          .row.justify-content-center.align-items-end.mb-5.fondoslyder.p-4
            .col-lg-12
              SlyderA(tipo="b").fondoblanco.p-4
                .row
                  .col-md-11
                    h4 NTC 2050: 
                    p Norma Técnica Colombiana que regula instalaciones eléctricas (basada en el NEC de EE. UU.).
                .row
                  .col-md-11
                    h4 NEC: 
                    p #[em National Electrical Code], base técnica para la NTC 2050.

                .row
                  .col-md-11
                    h4 HVAC:
                    p #[em Heating, Ventilation and Air Conditioning] (sistemas de calefacción, ventilación y aire acondicionado).
                .row
                  .col-md-11
                    h4 GFCI:
                    p #[em Ground Fault Circuit Interrupter] - Interruptor que protege contra fallas a tierra (evita descargas eléctricas).
                .row
                  .col-md-11
                    h4 A:
                    p Amperios – unidad de medida de corriente eléctrica.
                .row
                  .col-md-11
                    h4 PVC:
                    p Policloruro de vinilo – tipo de tubería plástica aislante.
                .row
                  .col-md-11
                    h4 EMT:
                    p #[em Electrical metallic tubing] - tubería metálica para canalización eléctrica.
      
      p.mb-3 A continuación, se presenta un ejemplo de cuadro de carga para una propiedad de uso residencial de 80 metros cuadrados:
      
      .row.justify-content-center.align-items-center.mb-5(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 3. 
          span Ejemplo cuadro de cargas para vivienda (80 m²)
        .col-lg-10
          img.mb-3(src='@/assets/curso/temas/Tema1/figura3.svg', alt='La figura presenta un cuadro de cargas eléctricas estimadas para una vivienda de 80 m². Se detallan diferentes categorías de consumo, como alumbrado general, pequeños artefactos, cargas especiales y servicios generales, junto con su descripción, cantidad, potencia unitaria y potencia total en VA. El total estimado de carga es de 23.560 VA, equivalente a 23,56 KVA. ')  

      .row.justify-content-center.align-items-end.mb-5.bg33.p-4
        .col-lg-8
          h4.mb-4 Importante:
          p VA significa #[b Volt - amperio], una unidad de medida utilizada para expresar la #[b potencia aparente] en sistemas eléctricos de corriente alterna (AC).
          h4 Para entenderlo mejor:
          ul.lista-ul--color.mb-5
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Voltios (V)] miden la tensión eléctrica.

            li.d-flex.mb-0
              i.fas.fa-circle-check
              p #[b Amperios (A)] miden la corriente eléctrica.
            li.d-flex.mb-0
              i.fas.fa-circle-check
              p Al multiplicar voltios por amperios, se obtiene #[b VA], que representa la potencia aparente, es decir, la #[b cantidad total de energía que un dispositivo eléctrico “toma” del sistema], sin distinguir cuánto de esa energía se convierte en trabajo útil o cuánto se pierde.
            .py-3
            h4 Diferencias clave:
            
            ul.lista-ul--color.mb-4
              li.d-flex.mb-0
                i.fas.fa-circle-check
                p #[b VA (volt - amperios):] potencia aparente (energía total suministrada).

              li.d-flex.mb-0
                i.fas.fa-circle-check
                p #[b W (vatios o watts):]  potencia real (energía útil convertida en trabajo).

              li.d-flex.mb-0
                i.fas.fa-circle-check
                p #[b VAR (volt - amperios reactivos):]  potencia reactiva (energía almacenada y devuelta por componentes como bobinas o condensadores).
        
            p En instalaciones eléctricas, se usa VA para dimensionar correctamente los equipos y asegurar que el sistema soporte toda la carga, incluso si parte de la energía no se convierte en trabajo útil.
        
        .col-lg-4
          img.mb-3.abajo.d-none.d-lg-block(src='@/assets/curso/temas/Tema1/img12.png', alt='')  

      p.mb-5 Para calcular correctamente la carga eléctrica de una vivienda, se deben aplicar los factores de demanda establecidos en la Tabla 220-11 de la NTC 2050, de acuerdo con el siguiente esquema:

      .row.justify-content-center.align-items-center.mb-3(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 2.
          span  Factores de demanda para alimentadores de cargas de alumbrado
    
      .tabla-b.color-acento-contenido.mb-5
        .tabla-b__header(alt,="La tabla presenta los factores de demanda aplicables al cálculo de alimentadores de cargas de alumbrado, según tres rangos de potencia en VA: hasta 3.000 VA se aplica un factor del 100 %, entre 3.001 y 120.000 VA un 35 %, y para valores superiores a 120.000 VA un 25 %.")
          h4.mb-0 Factores de demanda para alimentadores de cargas de alumbrado
        table
          caption Fuente: ICONTEC (1998)
          tr
            th Parte de la demanda VA
            th Factor de demanda
          tr
            th.text-regular Hasta los primeros 3.000 VA
            th.text-regular 100 % (factor 1)
          tr
            th.text-regular Entre 3.001 y 120.000 VA
            th.text-regular 35 %
          tr
            th.text-regular Exceso de 120.000 VA
            th.text-regular 25 %
      
      p La Norma Técnica Colombiana NTC 2050 establece los lineamientos técnicos para el diseño e implementación de instalaciones eléctricas en Colombia. Entre sus contenidos, la Tabla 220-11 especifica los factores de demanda que deben aplicarse a las cargas de alumbrado general en edificaciones.
      p.mb-4 Para consultar esta tabla y demás apartados de la norma, se recomienda adquirir el documento directamente a través de fuentes oficiales, como ICONTEC. Es importante tener en cuenta que la NTC 2050 está protegida por derechos de autor, por lo cual su distribución no autorizada puede estar restringida. Obtenerla de manera legítima garantiza el acceso a su versión actualizada y válida.































</template>

<script>
export default {
  name: 'Tema1',
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
