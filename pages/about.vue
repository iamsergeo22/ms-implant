<template>
  <div class="">
    <div class="tw-relative tw-w-full tw-h-72">
    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740" alt="Banner Image">
    <div class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
      <h1 class="tw-text-4xl tw-font-bold tw-text-white">À propos de nous</h1>
    </div>
  </div>
  <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
    <v-breadcrumbs
      :items="breadcrumbItems"
      divider="/"
      class="tw-text-lg tw-font-extrabold"
    ></v-breadcrumbs>
  </div>

  <div class="tw-flex tw-flex-col tw-bg-gray-300 tw-justify-center tw-items-center">

    <!-- Section: À propos de nous -->
    <div class="tw-flex tw-flex-col tw-items-center tw-justify-center tw-my-5 tw-w-full">
      
      <div class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-4 lg:tw-container lg:tw-p-8 tw-p-4 lg:tw-justify-center tw-items-center tw-w-full">
        <!-- History -->
        <div class="tw-flex tw-shadow-2xl tw-bg-white tw-shadow-2xl hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-xl hover:tw-border-blue-500 hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-rounded-lg tw-bg-white tw-block tw-p-6  tw-cursor-pointer tw-flex-col tw-items-center tw-justify-center lg:tw-w-1/3">
          <div class="tw-bg-blue-600 tw-rounded-full tw-p-3 tw-mb-2">
            <v-icon>mdi-history</v-icon>
          </div>
          <h3 class="tw-text-lg tw-font-extrabold tw-mb-2 tw-text-blue-600" >Histoire</h3>
          <p class="tw-text-sm tw-font-medium tw-text-black tw-text-justify tw-text-center tw-max-w-sm" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus euismod felis, sit amet mattis ipsum faucibus vitae. Morbi eu justo convallis, laoreet elit vel, volutpat mauris.
          </p>
        </div>
        <!-- Achievement -->
        <div class="tw-flex tw-shadow-2xl tw-bg-white tw-shadow-2xl hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-xl hover:tw-border-blue-500 hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-rounded-lg tw-bg-white tw-block tw-cursor-pointer tw-p-6  tw-flex-col tw-items-center tw-justify-center lg:tw-w-1/3">
          <div class="tw-bg-blue-600 tw-rounded-full tw-p-3 tw-mb-2">
            <v-icon>mdi-trophy-variant</v-icon>
          </div>
          <h3 class="tw-text-lg tw-font-extrabold tw-text-blue-600 tw-mb-2" >Réalisations</h3>
          <p class="tw-text-sm tw-font-medium tw-text-black tw-text-center tw-max-w-sm tw-text-justify" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus euismod felis, sit amet mattis ipsum faucibus vitae. Morbi eu justo convallis, laoreet elit vel, volutpat mauris.
          </p>
        </div>
        <!-- Vision -->
        <div class="tw-flex tw-shadow-2xl tw-bg-white tw-shadow-2xl hover:tw-shadow-blue-600 hover:tw-shadow-blue-500 hover:tw-shadow-xl hover:tw-border-blue-500 hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-rounded-lg tw-bg-white tw-block tw-cursor-pointer tw-p-6 tw-flex-col tw-items-center tw-justify-center lg:tw-w-1/3">
          <div class="tw-bg-blue-600 tw-rounded-full tw-p-3 tw-mb-2">
            <v-icon>mdi-eye</v-icon>
          </div>
          <h3 class="tw-text-lg tw-font-extrabold tw-text-blue-600 tw-mb-2" >Vision</h3>
          <p class="tw-text-sm tw-font-medium tw-text-black tw-text-center tw-max-w-sm tw-text-justify" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus euismod felis, sit amet mattis ipsum faucibus vitae. Morbi eu justo convallis, laoreet elit vel, volutpat mauris.
          </p>
        </div>
      </div>
    </div>


    <section class="lg:tw-pb-10 lg:tw-px-3 tw-p-4 tw-flex-col tw-gap-4 tw-mt-8">
      <div class="tw-w-full">
        <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10 tw-w-full">
          
          <div class="2xl:tw-px-20 tw-flex tw-justify-center tw-w-full tw-mb-20">
            <div class="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-0 tw-w-full tw-h-full">
              
              <div 
                   class=" tw-h-full tw-bg-white tw-block tw-cursor-pointer tw-w-full tw-shadow-sm tw-shadow-indigo-100">
                <img alt="Home"
                     src="https://img.freepik.com/premium-photo/close-up-invisible-retainers-held-by-dentist_23-2148380351.jpg?w=740"
                     class="tw-h-full tw-w-full tw-object-cover tw-bg-opacity-60"/>

              
              </div>

              <div
                   class="tw-bg-white  tw-block tw-cursor-pointer tw-w-full tw-shadow-sm tw-shadow-indigo-100">
               
                <div class="tw-px-4 tw-text-center tw-h-[fit-content] lg:tw-h-full tw-p-4 lg:tw-my-12">
                  <h1 class="tw-font-extrabold tw-text-2xl tw-text-blue-600">Maîtrise de la conception et fabrication des implants</h1>
                  <div class="">
                    <dd class="tw-font-medium tw-text-md tw-text-black tw-mt-3 tw-text-justify">
                      Nous mettons à votre disposition des voitures pour vous accompagner tout au long de votre séjour.
                      Découvrez celles qui
                      sont disponibles ici.
                    </dd>
                    <dd class="tw-font-medium tw-text-md tw-text-black tw-mt-3 tw-text-justify">
                      Nous mettons à votre disposition des voitures pour vous accompagner tout au long de votre séjour.
                      Découvrez celles qui
                      sont disponibles ici.
                    </dd>
                  </div>
                </div>
              </div>

              <div 
                   class="tw-h-full tw-cursor-pointer tw-bg-white tw-block tw-w-full tw-shadow-sm tw-shadow-indigo-100">
                
                <div class="tw-px-4 tw-text-center lg:tw-h-full tw-p-4 lg:tw-my-12">
                  <h1 class="tw-font-extrabold tw-text-2xl tw-text-blue-600">Innovation et croissance</h1>
                  <div class="">
                    <dd class="tw-font-medium tw-text-md tw-text-black tw-mt-3 tw-text-justify">
                      Pour rendre votre voyage mémorable, découvrez la liste des sites touristiques disponibles dans la
                      ville où vous vous
                      rendez.
                    </dd>
                    <dd class="tw-font-medium tw-text-md tw-text-black tw-mt-3 tw-text-justify">
                      Pour rendre votre voyage mémorable, découvrez la liste des sites touristiques disponibles dans la
                      ville où vous vous
                      rendez.
                    </dd>
                  </div>
                </div>
              </div>

              <div
                   class="tw-cursor-pointer tw-bg-white tw-block tw-w-full tw-shadow-sm tw-shadow-indigo-100">
                <img alt="Home"
                     src="https://img.freepik.com/free-photo/close-up-dental-procedure-patient_23-2148380316.jpg?t=st=1683161874~exp=1683162474~hmac=ab72b325cb6a72e228b0b71081cb71fc53cbb434acb5654aca2f0fc4523a8e97"
                     class="tw-h-full tw-w-full tw-object-cover tw-bg-opacity-60"/>

                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tw-w-full">
      <div class="tw-bg-white tw-p-12">
      <h1 class="tw-text-blue-600 tw-text-center tw-font-extrabold tw-text-2xl" >Qui Sommes Nous?</h1>
      <p class="tw-text-center tw-text-gray-800 tw-text-md tw-lowercase" >UNE SOCIÉTÉ RÉCENTE, UNE EXPÉRIENCE PROBANTE EVOLUTIS</p>
      <div class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-mt-4">
        <div class="lg:tw-w-3/4 tw-w-full tw-h-72 tw-relative lg:tw-pt-56">
      <iframe class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-shadow-2xl tw-rounded" src="https://www.youtube.com/embed/jh5U5BnpGN8" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>
</div>
    </section>

</div>
</div>
</template>


<script>
import AOS from 'aos';
import 'aos/dist/aos.css';

export default {
  head() {
    return {
      title: 'À propos de nous Page',
      
    }},
    mounted() {
      if (!this.initialized) {
        AOS.init({
          once: true,
          duration: 2000
        });
        this.initialized = true;
      }
    },
  computed: {
    breadcrumbItems() {
      const items = [
        {
          text: 'Accueil',
          href: '/',
        },
        {
          text: 'À propos de nous',
          
        },
        
      ];

      return items.map((item) => ({
        ...item,
        disabled: !item.href,
      }));
    },
  },
}
</script>