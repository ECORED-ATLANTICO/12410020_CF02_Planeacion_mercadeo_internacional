<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente “Plan de mercadeo internacional” brinda al aprendiz las herramientas necesarias para formular planes de mercadeo internacional, integrando el análisis de objetivos, el diagnóstico del entorno y la estructuración de estrategias orientadas a la internacionalización. A partir de una metodología clara y técnica, se fortalecen habilidades para diseñar acciones concretas que permitan a las organizaciones competir y posicionarse en mercados globales. Este proceso incluye el uso de recursos, criterios de diseño y herramientas que favorecen la toma de decisiones acertadas en contextos diversos, promoviendo así un enfoque estratégico, adaptable e innovador en el ámbito del comercio internacional.
    .row.justify-content-center.bg-color-sintesis.tarjeta
      .col-lg-12.mb-5.bgs.p-5.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente Plan de mercadeo internacional tiene como propósito dotar al aprendiz de los conocimientos y habilidades para desarrollar planes de mercadeo con proyección global. A través de un enfoque técnico y estructurado, se abordan el establecimiento de objetivos, el análisis del entorno internacional y la formulación de estrategias que favorezcan la expansión hacia nuevos mercados. Este proceso permite fortalecer la capacidad de diseñar acciones efectivas que impulsen la competitividad y visibilidad de las organizaciones en el ámbito internacional, integrando herramientas, criterios de evaluación y metodologías que apoyan la toma de decisiones estratégicas en escenarios multiculturales y cambiantes.")
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
