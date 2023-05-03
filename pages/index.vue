<template>

  <div>

    <div class="tw-bg-cover tw-bg-no-repeat  tw-items-center tw-h-full">

      <v-carousel
        cycle
        hide-delimiter-background
        height="550"
        v-model="model"
        :show-arrows="false"
      >
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-center tw-bg-cover"
          src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
        >
          <div class="tw-w-full tw-h-full tw-hidden lg:tw-block">
            <div
          class="tw-px-4 tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen tw-opacity-60">
          <div
            class="tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-p-12 tw-p-12 tw-rounded-lg tw-shadow-lg bg-color">
            <h1 class="tw-text-white lg:tw-text-4xl sm:tw-text-4xl tw-font-bold tw-text-center tw-uppercase">Welcome to
             MS Implant</h1>
            <p class="tw-text-blue-900 lg:tw-text-2xl sm:tw-text-xl tw-italic tw-font-bold tw-text-center">We offer a
              wide variety of ms implant services</p>
          </div>
        </div>
          </div>

        </v-carousel-item>
        <v-carousel-item
          class="tw-h-full tw-w-full tw-bg-cover"
          src="https://img.freepik.com/free-photo/high-angle-patient-doctor-s-appointment_23-2149844638.jpg?size=626&ext=jpg"
        >
        <!--   <div class="tw-flex tw-justify-start tw-w-full tw-h-full">
            <div
          class="tw-px-4 tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen tw-opacity-60">
          <div
            class="tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-p-12 tw-p-12 tw-rounded-lg tw-shadow-lg bg-color">
            <h1 class="tw-text-white lg:tw-text-4xl sm:tw-text-4xl tw-font-bold tw-text-center tw-uppercase">SYSTÈME D'IMPLANTOLGIE
GUIDÉ</h1>
            <p class="tw-text-blue-600 lg:tw-text-2xl sm:tw-text-xl tw-italic tw-font-bold tw-text-center">We offer a
              wide variety of ms implant services</p>
          </div>
        </div>
          </div> -->
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://img.freepik.com/free-photo/smiley-female-doctor-clinic-front-view_23-2149844592.jpg?w=740&t=st=1683080887~exp=1683081487~hmac=be9320e069bce551a1ae36821136ecf02ab312a33fbb4ac99f55fb86577db450">
         <!--  <div
          class="tw-px-4 tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen tw-opacity-60">
          <div
            class="tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-p-12 tw-p-12 tw-rounded-lg tw-shadow-lg bg-color">
            <h1 class="tw-text-white lg:tw-text-4xl sm:tw-text-4xl tw-font-bold tw-text-center tw-uppercase">SYSTÈME D'IMPLANTOLGIE
GUIDÉ</h1>
            <p class="tw-text-blue-600 lg:tw-text-2xl sm:tw-text-xl tw-italic tw-font-bold tw-text-center">We offer a
              wide variety of ms implant services</p>
          </div>
        </div> -->
        </v-carousel-item>
        <v-carousel-item class="tw-h-full tw-w-full tw-bg-cover"
          src="https://img.freepik.com/free-photo/medical-specialist-consulting-patient-with-disease-while-wearing-face-mask-annual-checkup-visit-young-person-receiving-consultation-from-doctor-healthcare-during-covid-19-epidemic_482257-38455.jpg?w=740&t=st=1683080858~exp=1683081458~hmac=5bb24f9589d1bc6bb5045f1fb1f6416d45bdacf7f814409eaea03d82c625f3e8">
         <!--  <div
          class="tw-px-4 tw-shadow-lg tw-flex tw-justify-center tw-items-center tw-w-full tw-h-screen tw-opacity-60">
          <div
            class="tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-p-12 tw-p-12 tw-rounded-lg tw-shadow-lg bg-color">
            <h1 class="tw-text-white lg:tw-text-4xl sm:tw-text-4xl tw-font-bold tw-text-center tw-uppercase">SYSTÈME D'IMPLANTOLGIE
GUIDÉ</h1>
            <p class="tw-text-blue-600 lg:tw-text-2xl sm:tw-text-xl tw-italic tw-font-bold tw-text-center">We offer a
              wide variety of ms implant services</p>
          </div>
        </div> -->
        </v-carousel-item>
      </v-carousel>


    </div>

    <span class="lg:tw-w-1/2 tw-transform tw--translate-y-10 tw-bottom-0 tw-left-0 tw-block md:tw-left-20 -tw-bottom-10 tw-mb-4">
        <h1
          class="tw-mx-1 md:tw-mx-4 tw-bg-white md:tw-px-4 lg:tw-px-4 tw-shadow-md tw-shadow-gray-400 tw-font-extrabold lg:tw-font-bold tw-text-2xl tw-text-center tw-uppercase md:tw-text-center lg:tw-text-4xl tw-w-3/4 tw-text-blue-900 tw-p-4 tw-rounded">
          A Propos de Nous</h1>
      </span>


      <section
      class="tw-py-4 tw-px-4 tw-mx-12 lg:tw-px-desktop lg:tw-mx-desktop tw-bg-[#fff] tw-rounded-2xl tw-justify-center">
      <div class="tw-flex tw-flex-col tw-flex-col-reverse lg:tw-flex-row lg:tw-gap-12">
        <div class="tw-flex tw-items-center tw-justify-evenly tw-basis-1/2">
         
          <v-img class="tw-rounded-lg tw-shadow-2xl" src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740" width="500px"></v-img>

        </div>
        <div class="tw-basis-1/2">
          <p
            class="tw-font-extrabold tw-text-blue-900 tw-text-xl tw-font-bold lg:tw-text-left tw-uppercase tw-mb-2">
            A Propos de Nous</p>

          <p class="tw-text-justify tw-text-md">Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Morbi quam faucibus nam lorem. Imperdiet a, nibh mauris nec nibh.
            Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis elementum fringilla ut adipiscing.
            Suscipit urna tristique ornare
            
          </p>
          <br>
          <p class="tw-text-justify tw-text-md">
            Interdum quisque morbi amet ut quam nunc facilisis velit. Ultrices quis elementum fringilla ut adipiscing.
            Suscipit urna tristique ornare ipsum commodo viverra habitant.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi quam faucibus nam lorem. Imperdiet a, nibh
       
          </p>
            <button class="tw-bg-blue-700 tw-mb-4 hover:tw-bg-blue-800 tw-text-white tw-font-bold tw-px-4 tw-mt-4 xl:tw-px-6 tw-py-2 xl:tw-py-3 tw-rounded">Voir PLus</button>

        </div>

      </div>
    </section>
    

  </div>


</template>

<script>
export default {
  name: 'IndexPage'
}
</script>


<style scoped>
  .bg-color {
    background-color: #000000e3;
  }
</style>