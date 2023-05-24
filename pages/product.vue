<template>
  <div>
    <div class="tw-relative tw-w-full tw-h-72">
      <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
        src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740"
        alt="Banner Image">
      <div
        class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
        <h1 class="tw-text-4xl tw-font-bold tw-text-white">Nos Produits</h1>
      </div>
    </div>

    <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
      <v-breadcrumbs :items="breadcrumbItems" divider="/" class="tw-text-lg tw-font-extrabold"></v-breadcrumbs>
    </div>


    <div class=" tw-pt-4">

      <h1 class="tw-text-blue-900 tw-text-center tw-font-black tw-text-2xl" >Les Categories de Produits</h1>
      <p class="tw-text-center tw-text-gray-800 tw-text-md tw-lowercase" >
        Voici nos incroyable categories de produit qui révolutionne le marché!
      </p>

      <section class="tw-pt-4 tw-pb-8 lg:tw-pb-10 lg:tw-px-3 tw-p-4 tw-flex-col tw-gap-4 tw-mt-8">
        <div class="tw-w-full">
          <div class="tw-flex tw-flex-col tw-mb-6 tw-px-2 md:tw-px-6 lg:tw-px-10 tw-w-full">

            <div class="2xl:tw-px-20 tw-flex tw-justify-center tw-w-full tw-mb-20"
              data-aos-easing="linear">
              <div class="tw-grid lg:tw-grid-cols-2 tw-gap-4 lg:tw-gap-8 tw-w-full tw-h-full">
                <div
                  class="tw-shadow-xl hover:tw-shadow-blue-500 hover:tw-shadow-2xl  hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-bg-white tw-block tw-cursor-pointer tw-w-full tw-shadow- tw-shadow-indigo-100">
                  <div class="tw-relative tw-w-full tw-h-96">
                    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                      src="https://img.freepik.com/free-photo/3d-render-male-medical-figure-with-headache_1048-7909.jpg?w=740&t=st=1684857017~exp=1684857617~hmac=8b9b0d9dba145b94b00368662cb5d5de52da6f95a83f1da80a7f4ea504eecb99"
                      alt="Banner Image">
                    <div
                      class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
                    </div>
                  </div>
                  <div class="tw-px-4 tw-mt-4 lg:tw-h-1/2">
                    <h1 class="tw-font-bold tw-mx-3 tw-text-blue-600 tw-text-2xl tw-font-extrabold">
                      Tête
                    </h1>
                    <v-card-text class="tw-text-justify">
                      The implant coil is the component that receives power wirelessly
                      from an external device.
                    </v-card-text>

                    <v-card-actions>
              <nuxt-link to="/produits/product-tete"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>
                  </div>
                </div>

                <div
                  class="tw-bg-white hover:tw-shadow-blue-500 hover:tw-shadow-2xl  hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-shadow-xl tw-block tw-cursor-pointer tw-w-full tw-shadow-sm tw-shadow-indigo-100">
                  <div class="tw-relative tw-w-full tw-h-96">
                    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                      src="https://img.freepik.com/premium-photo/human-teeth-with-denture-3d-illustration-isolated-white_582173-233.jpg?w=740"
                      alt="Banner Image">
                    <div
                      class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
                    </div>
                  </div>

                  <div class="tw-px-4 tw-mt-4 tw-h-[fit-content] lg:tw-h-1/2">
                    <h1 class="tw-font-bold tw-mx-3 tw-text-blue-600 tw-text-2xl tw-font-extrabold">
                      Dents
                    </h1>
                    <v-card-text class="tw-text-justify">
                      The implant coil is the component that receives power wirelessly
                      from an external device.
                    </v-card-text>
                    <v-card-actions>
              <nuxt-link to="/produits/product-dent"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>
                  </div>
                </div>

                
                <div
                  class="tw-bg-white hover:tw-shadow-blue-500 hover:tw-shadow-2xl  hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-shadow-xl tw-block tw-cursor-pointer tw-w-full tw-shadow-sm tw-shadow-indigo-100">
                  <div class="tw-relative tw-w-full tw-h-96">
                    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                      src="https://img.freepik.com/free-photo/3d-close-up-female-hand_1048-7297.jpg?w=740&t=st=1684958616~exp=1684959216~hmac=3002bca66957890f0f9afbc665ae041f8c259a1cbfdea1938566b6c3ccd05364"
                      alt="Banner Image">
                    <div
                      class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
                    </div>
                  </div>

                  <div class="tw-px-4 tw-mt-4 tw-h-[fit-content] lg:tw-h-1/2">
                    <h1 class="tw-font-bold tw-mx-3 tw-text-blue-600 tw-text-2xl tw-font-extrabold">
                      Mains
                    </h1>
                    <v-card-text class="tw-text-justify">
                      The implant coil is the component that receives power wirelessly
                      from an external device.
                    </v-card-text>
                    <v-card-actions>
              <nuxt-link to="/produits/product-main"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>
                  </div>
                </div>

                <div
                  class="tw-cursor-pointer hover:tw-shadow-blue-500 hover:tw-shadow-2xl hover:tw-ease-out  hover:tw-transition-all hover:tw-rounded tw-shadow-xl tw-bg-white tw-block tw-w-full tw-shadow-sm tw-shadow-indigo-100"
                  >
                  <div class="tw-relative tw-w-full tw-h-96">
                    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover"
                      src="https://img.freepik.com/free-photo/foot-joint-pain_1048-2341.jpg?w=740&t=st=1684958560~exp=1684959160~hmac=f348e2f2beac552a83215c8ddf834c4db107019c09314011615dfa62071dc484"
                      alt="Banner Image">
                    <div
                      class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
                    </div>
                  </div>

                  <div class="tw-px-4 tw-mt-4">
                    <h1 class="tw-font-bold tw-mx-3 tw-text-blue-600 tw-text-2xl tw-font-extrabold">
                      Pieds
                    </h1>
                    <v-card-text class="tw-text-justify">
                      The implant coil is the component that receives power wirelessly
                      from an external device.
                    </v-card-text>
                    <v-card-actions>
              <nuxt-link to="/produits/product-pied"
                class="tw-group tw-relative tw-font-extrabold tw-px-6 tw-py-2 tw-mb-4 xl:tw-py-3 tw-rounded-lg tw-shadow-2xl tw-h-12  tw-cursor-pointer hover:tw-transform hover:tw-translate-x-2 hover:tw-transition-transform hover:tw-duration-300 hover:tw-shadow-blue-600 tw-border hover:tw-shadow-lg tw-overflow-hidden tw-rounded-lg tw-bg-white tw-text-lg tw-shadow-2xl">
                <div
                  class="tw-absolute tw-inset-0 tw-w-3 tw-bg-blue-900 tw--transition-all tw-duration-[250ms] tw-ease-out group-hover:tw-w-full">
                </div>
                <span
                  class="tw-relative tw-inline-flex tw-items-center tw-gap-2 tw-text-black group-hover:tw-text-white">
                  Voir Plus
                  <svg class="tw-w-5 tw-h-5 tw--transition-all tw-duration-[250ms] tw-ease-out" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3">
                    </path>
                  </svg>
                </span>
              </nuxt-link>
            </v-card-actions>
                  </div>
                </div>

              

              </div>
            </div>
          </div>
        </div>
      </section>


      <section>


        <div class="tw-relative lg:tw-h-72 tw-h-96 tw-w-full">
          <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740
" width="700px" alt="Image">
          <div
            class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60 tw-p-8">
            <div class="tw-px-8 lg:tw-px-32 tw-h-full">


            </div>
          </div>
        </div>

        <div
          class="tw-bg-blue-900 tw-p-12 tw-shadow-2xl tw-rounded-md lg:tw-mx-12 tw-mx-8 tw-transform tw--translate-y-40 lg:tw--translate-y-20  tw-bottom-0 tw-left-0 tw-px-8 tw-py-12">
          <h1 class="lg:tw-text-xl tw-text-white tw-text-sm lg:tw-px-12 tw-px-8" data-aos="fade-up">
            Découvrez notre incroyable produit qui révolutionne le marché ! Pour plus d'informations, contactez-nous dès
            maintenant:
          </h1>
          <div
            class="tw-flex lg:tw-px-12 tw-px-8 lg:tw-flex-row tw-flex-col tw-text-white lg:tw-items-center  lg:tw-gap-12 tw-gap-4 tw-pb-4">
            <h1 class="tw-font-extrabold lg:tw-text-2xl tw-text-white tw-mt-3" data-aos="fade-up">Address details:</h1>

            <span class="tw-flex tw-items-center tw-gap-1 lg:tw-text-lg tw-text-sm" data-aos="fade-up">
              <svg height="24" width="24" viewBox="0 -56 1136 1136" class="icon" version="1.1"
                xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M131.938462 570.88h126.621538L592.738462 246.153846l332.996923 324.726154h126.621538s22.055385-6.498462-7.286154-30.523077C1015.729231 516.332308 629.366154 119.532308 629.366154 119.532308s-28.356923-40.763077-78.572308 0S131.938462 550.793846 131.938462 550.793846s-18.707692 12.8 0 20.086154z"
                    fill="#FFA44C"></path>
                  <path
                    d="M1057.083077 525.784615c-22.449231-18.510769-280.024615-281.796923-413.341539-418.658461-4.135385-5.12-18.116923-20.676923-41.353846-24.024616-20.676923-2.953846-41.944615 4.332308-63.40923 21.661539-49.230769 39.975385-380.061538 389.907692-419.446154 431.852308-5.316923 4.135385-16.147692 14.178462-14.572308 28.750769 0.787692 5.907692 4.332308 16.935385 20.283077 23.04l3.347692 1.181538h137.846154l326.301539-317.046154 325.316923 317.243077h137.058461l2.56-0.787692c8.073846-2.363077 18.313846-9.452308 20.873846-21.858461 4.135385-20.283077-15.163077-36.036923-21.464615-41.353847zM156.750769 551.975385c60.455385-63.803077 362.141538-382.424615 405.858462-417.87077 12.8-10.436923 24.221538-14.966154 34.067692-13.784615 10.24 1.378462 16.541538 9.255385 17.132308 10.043077l1.969231 2.363077c38.4 39.581538 368.049231 377.895385 413.932307 419.446154H933.415385L592.738462 219.766154 251.076923 551.975385H156.750769z"
                    fill="#f6ebfa"></path>
                  <path
                    d="M308.972308 615.778462l257.575384-258.56s22.055385-29.341538 55.532308 0 254.424615 258.56 254.424615 258.56v287.704615h-186.28923s-3.150769-167.581538-3.15077-168.172308c-1.772308-97.673846-181.563077-96.886154-187.470769-4.135384-5.316923 81.723077-3.150769 172.504615-3.150769 172.504615h-187.470769V615.778462z"
                    fill="#FFA44C"></path>
                  <path
                    d="M496.443077 903.483077h193.772308l-4.529231-179.790769s-5.513846-69.12-94.326154-59.667693c0 0-63.015385-9.255385-84.283077 35.643077 0 0-7.876923 1.969231-9.452308 65.772308s-1.181538 138.043077-1.181538 138.043077z"
                    fill="#FFFFFF"></path>
                  <path
                    d="M890.092308 602.781538c-9.058462-9.452308-221.735385-230.006154-255.606154-259.741538-15.163077-13.193846-30.916923-19.101538-46.867692-17.329231-19.495385 1.969231-31.507692 14.769231-35.052308 19.101539L290.067692 607.901538v314.289231H895.212308V608.098462l-5.12-5.316924z m-184.32 132.135385c0-0.590769 0-5.907692-1.378462-13.587692-0.590769-5.12-4.923077-34.658462-30.326154-55.729231-0.393846-0.393846-0.984615-0.787692-1.378461-0.984615-20.283077-16.541538-47.458462-23.236923-80.935385-19.692308-12.209231-1.575385-50.609231-3.938462-79.556923 18.904615-0.590769 0.590769-1.378462 1.181538-1.969231 1.575385-0.393846 0.196923-0.590769 0.590769-0.984615 0.787692-0.590769 0.393846-0.984615 0.984615-1.575385 1.378462-0.590769 0.590769-1.378462 1.181538-1.96923 1.969231l-0.787693 0.787692c-0.787692 0.787692-1.575385 1.772308-2.363077 2.56-0.196923 0.196923-0.393846 0.393846-0.393846 0.590769-0.787692 0.984615-1.575385 1.772308-2.363077 2.756923-0.196923 0.393846-0.590769 0.590769-0.787692 0.984616l-1.772308 2.363076c-1.772308 2.56-3.544615 5.316923-5.12 8.073847-3.544615 4.332308-7.089231 11.421538-9.452307 27.963077-0.787692 4.332308-1.378462 9.058462-1.772308 13.784615 0 0.590769 0 1.378462-0.196923 1.969231-0.787692 9.058462-1.378462 20.086154-1.772308 33.28-1.969231 48.049231-1.969231 94.72-1.575385 119.532307h-149.464615V623.655385l252.061539-253.046154 1.575384-1.772308s4.332308-5.12 10.043077-5.710769c5.12-0.590769 11.224615 2.363077 18.116923 8.270769 29.735385 25.993846 218.584615 221.735385 247.926154 252.061539v261.12h-149.070769l-2.756923-149.661539z m-189.243077 31.310769c0.393846-9.846154 0.984615-19.889231 1.575384-29.735384 0.590769-6.695385 1.181538-11.815385 1.772308-15.556923 1.575385-7.483077 4.332308-13.981538 8.073846-19.298462 17.723077-24.024615 59.076923-19.298462 60.652308-18.904615l2.363077 0.393846 2.56-0.393846c24.221538-2.56 42.929231 1.181538 55.532308 11.224615 0.196923 0.196923 0.590769 0.393846 0.787692 0.590769 10.830769 9.452308 15.163077 22.449231 17.132308 31.31077l3.938461 158.523076h-155.569231c-0.196923-24.418462 0.196923-74.24 1.181539-118.153846z"
                    fill="#f6ebfa"></path>
                </g>
              </svg>Lome, Togo</span>
           
            <span class="tw-flex tw-items-center tw-gap-1 lg:tw-text-lg tw-text-sm" data-aos="fade-up">
              <svg height="20" width="20" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 59.997 59.997" xml:space="preserve"
                fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <g>
                    <g>
                      <path style="fill:#52C306;"
                        d="M52.475,46.944c-1.898-3.587-8.899-7.69-8.899-7.69c-1.584-0.903-3.495-1.004-4.399,0.606 c0,0-2.274,2.728-2.853,3.12c-2.643,1.791-5.091,1.722-7.562-0.75l-5.743-5.743l-5.743-5.743c-2.472-2.472-2.541-4.919-0.75-7.562 c0.392-0.579,3.12-2.853,3.12-2.853c1.609-0.904,1.509-2.815,0.606-4.399c0,0-4.103-7.001-7.69-8.899 c-1.526-0.808-3.4-0.526-4.621,0.695l-2.537,2.537c-8.045,8.045-4.084,17.129,3.961,25.174l7.353,7.353l7.353,7.353 c8.045,8.045,17.129,12.007,25.174,3.961l2.537-2.537C53.001,50.345,53.283,48.47,52.475,46.944z">
                      </path>
                      <path style="fill:#388F04;"
                        d="M39.654,59.51c-1.054,0-2.128-0.127-3.224-0.38c-4.132-0.955-8.529-3.741-13.068-8.281 L8.657,36.142C-1.336,26.15-2.706,16.957,4.695,9.555l2.537-2.537c1.541-1.542,3.867-1.891,5.796-0.872 c3.796,2.008,7.912,8.981,8.085,9.277c0.734,1.287,0.964,2.608,0.653,3.731c-0.234,0.845-0.768,1.532-1.546,1.996 c-1.22,1.02-2.646,2.285-2.869,2.595c-1.603,2.364-1.414,4.247,0.631,6.292l11.486,11.486c2.043,2.043,3.924,2.233,6.295,0.629 c0.305-0.221,1.57-1.646,2.592-2.867c0.463-0.778,1.151-1.312,1.995-1.546c1.124-0.313,2.445-0.082,3.721,0.646 c0.307,0.18,7.28,4.297,9.288,8.092l0,0c1.02,1.926,0.669,4.255-0.872,5.796l-2.537,2.537 C46.823,57.936,43.371,59.51,39.654,59.51z M10.717,7.569c-0.758,0-1.504,0.296-2.07,0.862l-2.537,2.537 c-6.568,6.569-5.235,14.563,3.962,23.76l14.705,14.706c9.197,9.198,17.191,10.529,23.76,3.961l2.537-2.537 c0.916-0.916,1.124-2.301,0.519-3.446l0,0c-1.448-2.736-6.643-6.194-8.521-7.296c-0.776-0.443-1.6-0.609-2.185-0.45 c-0.36,0.101-0.634,0.324-0.836,0.684l-0.104,0.151c-0.711,0.853-2.433,2.881-3.06,3.307c-3.15,2.133-6.12,1.841-8.831-0.87 L16.568,31.451c-2.712-2.711-3.005-5.683-0.871-8.831c0.425-0.627,2.455-2.349,3.308-3.061l0.15-0.104 c0.36-0.202,0.584-0.476,0.684-0.836c0.163-0.588-0.008-1.409-0.457-2.196c-0.033-0.057-3.995-6.768-7.289-8.511 C11.656,7.682,11.183,7.569,10.717,7.569z">
                      </path>
                    </g>
                    <path style="fill:#388F04;"
                      d="M39.998,48.508c-0.034,0-0.069-0.002-0.104-0.005c-6.895-0.716-11.409-5.097-11.599-5.283 c-0.393-0.387-0.397-1.019-0.011-1.412c0.386-0.395,1.019-0.4,1.414-0.013c0.041,0.04,4.227,4.077,10.402,4.718 c0.549,0.058,0.948,0.549,0.892,1.099C40.938,48.125,40.504,48.508,39.998,48.508z">
                    </path>
                    <path style="fill:#388F04;"
                      d="M17.996,32.508c-0.224,0-0.448-0.075-0.635-0.229c-0.229-0.188-5.638-4.715-6.359-11.668 c-0.057-0.55,0.343-1.041,0.892-1.099c0.552-0.049,1.041,0.343,1.099,0.892c0.635,6.12,5.592,10.291,5.642,10.332 c0.425,0.353,0.485,0.982,0.134,1.408C18.569,32.384,18.284,32.508,17.996,32.508z">
                    </path>
                    <g>
                      <path style="fill:#EFCE4A;"
                        d="M27.362,0.487c-0.553,0-1,0.447-1,1s0.447,1,1,1c16.892,0,30.635,13.743,30.635,30.635 c0,0.553,0.447,1,1,1s1-0.447,1-1C59.997,15.127,45.357,0.487,27.362,0.487z">
                      </path>
                      <path style="fill:#EFCE4A;"
                        d="M27.362,7.517c-0.553,0-1,0.447-1,1s0.447,1,1,1c13.016,0,23.604,10.589,23.604,23.604 c0,0.553,0.447,1,1,1s1-0.447,1-1C52.967,19.004,41.48,7.517,27.362,7.517z">
                      </path>
                      <path style="fill:#EFCE4A;"
                        d="M27.362,14.547c-0.553,0-1,0.447-1,1s0.447,1,1,1c9.14,0,16.575,7.436,16.575,16.575 c0,0.553,0.447,1,1,1s1-0.447,1-1C45.937,22.88,37.604,14.547,27.362,14.547z">
                      </path>
                    </g>
                  </g>
                </g>
              </svg> +228 90 00 00 90</span>
              <span class="tw-flex tw-items-center tw-gap-1 lg:tw-text-lg tw-text-sm" data-aos="fade-up">
              <svg width="19" height="19" xmlns="http://www.w3.org/2000/svg" aria-label="Gmail" role="img"
                viewBox="0 0 512 512" fill="#000000">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <rect width="512" height="512" rx="15%" fill="#ffffff"></rect>
                  <path d="M158 391v-142l-82-63V361q0 30 30 30" fill="#4285f4"></path>
                  <path d="M 154 248l102 77l102-77v-98l-102 77l-102-77" fill="#ea4335"></path>
                  <path d="M354 391v-142l82-63V361q0 30-30 30" fill="#34a853"></path>
                  <path d="M76 188l82 63v-98l-30-23c-27-21-52 0-52 26" fill="#c5221f"></path>
                  <path d="M436 188l-82 63v-98l30-23c27-21 52 0 52 26" fill="#fbbc04"></path>
                </g>
              </svg>
              info@msimplant.com
            </span>


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
        title: 'Products Page',
        initialized: false,

      }
    },

    mounted() {
      if (!this.initialized) {
        AOS.init({
          once: true,
        });
        this.initialized = true;
      }
    },
    computed: {
      breadcrumbItems() {
        const items = [{
            text: 'Accueil',
            href: '/',
          },
          {
            text: 'Produits',

          },

        ];

        return items.map((item) => ({
          ...item,
          disabled: !item.href,
        }));
      },

      methods: {

      },
    },
  }

</script>

<style>

</style>
