<template>
    <div class="">
     
      <div class="tw-relative tw-w-full tw-h-72">
    <img class="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-object-cover" src="https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740" alt="Banner Image">
    <div class="tw-relative tw-w-full tw-h-full tw-flex tw-flex-col tw-justify-center tw-items-center tw-bg-gray-900 tw-bg-opacity-60">
      <h1 class="tw-text-4xl tw-font-bold tw-text-white">Contact Us</h1>
    </div>
  </div>
  <div class="tw-flex tw-items-center tw-space-x-2 tw-px-8">
    <v-breadcrumbs
      :items="breadcrumbItems"
      divider="/"
      class="tw-text-lg tw-font-extrabold"
    ></v-breadcrumbs>
  </div>

      <div class="tw-bg-gray-200 tw-shadow-2xl lg:tw-rounded-md lg:tw-mx-8 tw-transform tw--translate-y-58 tw-bottom-0 tw-left-0 tw-px-8 tw-py-12">
        <div class="lg:tw-flex lg:tw-flex-row sm:tw-flex sm:tw-flex-col lg:tw-justify-betwen lg:tw-gap-8">
  
          <div class="tw-text-lg sm:tw-text-lg lg:tw-w-2/3">
  
            <form action="#" class="tw-mb-8">
              <h2 class="tw-font-extrabold tw-text-2xl tw-text-blue-600 tw-text-left tw-mb-2">Contact Me</h2>
              
              <div class="tw-w-full tw-md:w-1/2">
                  <label class="tw-block tw-black tw-mb-2" for="name">
                    Name
                  </label>
  
                  <input type="name" name="name" id="email" placeholder="John Doe"
                    class="tw-block tw-w-full tw-bg-white tw-border tw-border-border-color-primary tw-shadow tw-rounded tw-outline-none focus:tw-border-green-700 tw-mb-2 tw-p-4"
                    required>
                </div>

              <div class="tw-w-full tw-md:w-1/2">
                  <label class="tw-block tw-black tw-mb-2" for="email">
                    Email Address
                  </label>
  
                  <input type="email" name="email" id="email" placeholder="email@example.com"
                    class="tw-block tw-w-full tw-bg-white tw-border tw-border-border-color-primary tw-shadow tw-rounded tw-outline-none focus:tw-border-green-700 tw-mb-2 tw-p-4"
                    required>
                </div>
  

                <div class="tw-w-full tw-md:w-1/2">
                  <label class="tw-block tw-black tw-mb-2" for="number">
                    Phone Number
                  </label>
  
                  <input type="number" name="number" id="number" placeholder="+228 91 58 50 75"
                    class="tw-block tw-w-full tw-bg-white tw-border tw-border-border-color-primary tw-shadow tw-rounded tw-outline-none focus:tw-border-green-700 tw-mb-2 tw-p-4"
                    required>
                </div>
  
  
             
  
              <div class="tw-w-full tw-mb-8">
                <label class="tw-block tw-black tw-mb-2" for="message">
                  Message
                </label>
  
                <textarea id="message" rows="5" name="message"
                  class="tw-block tw-w-full tw-p-4 tw-bg-white tw-border tw-border-border-color-primary tw-shadow tw-rounded tw-outline-none tw-appearance-none focus:tw-border-green-700 tw-mb-2 tw-py-4"
                  placeholder="Enter your message here." required></textarea>
              </div>
  
              <div class="tw-flex tw-justify-start w-full">
                <input type="submit" value="Submit"
                  class="tw-block tw-bg-blue-600 hover:tw-bg-blue-800 tw-text-white tw-text-sm tw-font-semibold tw-uppercase tw-shadow tw-rounded tw-cursor-pointer tw-px-6 tw-py-3">
              </div>
            </form>
          </div>
  
          <!-- Map section -->
  
          <div>
            <div class="tw-bg-gray-100 tw-rounded-lg tw-shadow-lg tw-px-12 tw-items-center">
                <div class="tw-flex tw-flex-col tw-gap-3 tw-pb-4">
            <h1 class="font-extrabold text-2xl tw-text-blue-600 tw-mt-3">Address details:</h1>

            <span class="tw-flex tw-gap-2 lg:tw-text-xl tw-text-md">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="tw-w-6" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path fill="currentColor"
                  d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z">
                </path>
              </svg>Lome, Togo</span>
            <span class="tw-flex tw-gap-2 lg:tw-text-xl tw-text-md">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope" class="tw-w-6"
                role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                </path>
              </svg>msimplant2023@gmail.com</span>
            <span class="tw-flex tw-gap-2 lg:tw-text-xl tw-text-md">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="tw-w-6" role="img"
                xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor"
                  d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
                </path>
              </svg> +228 90 00 00 90</span>



          </div>

          
            </div>
            <v-img class="tw-rounded-lg tw-shadow-2xl tw-mt-4"
            src="https://img.freepik.com/premium-photo/asian-doctor-white-medical-gown-with-stethoscope-shoulders-taking-notes_2221-9757.jpg?w=740"
            width="550px"></v-img>
  
          </div>
  
  
  
        </div> <!-- end hero -->
  
      </div>
  
      <div class="tw-mt-12 tw-px-8 tw-pb-4 tw-shadow-2xl tw-rounded-lg tw-aspect-w-16 tw-aspect-h-7 tw-rounded-lg tw-overflow-hidden">
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.417412837234!2d-73.98579178521707!3d40.74844194225139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259d75c5f5c5d%3A0x93a74d47b46dbd65!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1635024562182!5m2!1sen!2sus" width="100%" height="500" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
           </div> 
  
    </div>
  </template>
  
  <script>
    export default {
      data() {
        return {
         
        }
      },

      head() {
    return {
      title: 'Contact Us Page',
      
    }},

      computed: {
    breadcrumbItems() {
      const items = [
        {
          text: 'Home',
          href: '/',
        },
        {
          text: 'Contact Us',
          
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
  
  <style scoped>
    .bg-image {
      background-image: url(https://img.freepik.com/premium-photo/african-american-practitioner-assistant-with-protective-face-mask-against-coroanvirus_482257-26733.jpg?w=740);
      background-size: cover;
      height: 100%;
      width: 100%;
    }
  
  </style>
  