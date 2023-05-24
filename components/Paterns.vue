<template>
    <div class="partners-section">
      <marquee class="marquee" behavior="scroll">
        <div class="tw-inline-block tw-gap-8 tw-px-4 tw-items-center" v-for="(partner, index) in partners" :key="index">
          <img class="" :src="partner.logo" :alt="partner.name">
        </div>
      </marquee>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        partners: [
          { name: 'Partenaire 1', logo: 'https://jnj-content-lab.brightspotcdn.com/63/fd/390307564f889a1abd22f788a278/logo-site-white-header-animated-med.22180f8ca16ad33fd51a4b8f78d4120d.gif' },
          { name: 'Partenaire 2', logo: 'https://www.merck.com/wp-content/themes/mhh-merck-mco-theme/images/site-logo.svg' },
          { name: 'Partenaire 3', logo: 'https://www.astrazeneca.com/etc/designs/az/img/logo-az.png' },
          { name: 'Partenaire 4', logo: 'https://www.bms.com/assets/bms/us/en-us/logos/bms-rebrand-logo.svg' },
          { name: 'Partenaire 5', logo: 'https://dam.abbott.com/global/logos/logo.png' },
          { name: 'Partenaire 1', logo: 'https://jnj-content-lab.brightspotcdn.com/63/fd/390307564f889a1abd22f788a278/logo-site-white-header-animated-med.22180f8ca16ad33fd51a4b8f78d4120d.gif' },
          { name: 'Partenaire 2', logo: 'https://www.merck.com/wp-content/themes/mhh-merck-mco-theme/images/site-logo.svg' },

          // Ajoutez les autres partenaires ici
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .partners-section {
    height: 100px; /* Ajustez la hauteur selon vos besoins */
  }
  
  .marquee {
    width: 100%;
    
  }
  
 
  </style>
  