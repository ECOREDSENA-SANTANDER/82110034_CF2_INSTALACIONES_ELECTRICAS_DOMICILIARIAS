<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Fundamentos de electricidad para instalaciones en casa',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Identificar la apropiación de los contenidos en la temática sobre Conceptos básicos de electricidad.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            'El generador o acumulador es aquel elemento capaz de mantener una diferencia de potencial entre los extremos de un conductor. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 2,
          texto:
            'Una resistencia es un elemento que causa oposición al paso de la corriente, ocasionando que en sus terminales aparezca una diferencia de tensión. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 3,
          texto:
            'Los condensadores son la base de cualquier instalación eléctrica. Se deben conocer los tipos de circuitos, así como su diseño y funcionamiento para asegurar que la electricidad fluya de manera adecuada. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 4,
          texto:
            'Un condensador es un dispositivo capaz de almacenar energía en forma de campo eléctrico. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 5,
          texto:
            'La resistencia es un fenómeno físico cuyo origen se encuentra en las cargas eléctricas y cuya energía se manifiesta en fenómenos mecánicos, térmicos, luminosos, químicos, entre otros. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 6,
          texto:
            'Tensión de trabajo es la máxima tensión que puede aguantar un condensador, que depende del tipo y grosor del dieléctrico con que esté fabricado. ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 7,
          texto:
            'La energía nuclear procede de reacciones de fisión o fusión de átomos en las que se liberan gigantescas cantidades de energía que se usan para producir electricidad. ',
          imagen: require('@/assets/actividad/imagen3.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 8,
          texto:
            'La biomasa es el tipo de corriente más empleado en la industria y es también la que consumimos en nuestros hogares. ',
          imagen: require('@/assets/actividad/imagen4.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 9,
          texto:
            'El circuito mixto es una combinación de elementos conectados en serie y en paralelo. ',
          imagen: require('@/assets/actividad/imagen1.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
        {
          id: 10,
          texto:
            'Para calcular la potencia en vatios se puede utilizar la fórmula Rt=R1+R2+…Rn ',
          imagen: require('@/assets/actividad/imagen2.jpg'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Felicitaciones! Ha captado con claridad los conceptos básicos de electricidad. ',
          mensaje_incorrecto:
            'Respuesta incorrecta, revise nuevamente el contenido del componente formativo. ',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente trabajo! posee una buena comprensión sobre los conceptos básicos de electricidad. ¡Siga explorando este fascinante mundo!',
      mensaje_final_reprobado:
        'No ha superado la actividad. Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
