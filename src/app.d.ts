// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface NavLists {
      id: string
      text: string
      url: string
    }
    interface ServiceLists {
      title: string
      description: string
      // images: Images
    }
    // type Images = {
    //   src: string
    //   alt: string
    // }
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
}

export {}
