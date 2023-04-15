import { writable } from 'svelte/store'

export const menu = writable<App.PublicSiteMenu[]>([
  { id: 'home', text: 'Home', url: '/' },
  { id: 'products', text: 'Products', url: '/products' },
  { id: 'services', text: 'Services', url: '/services' },
  { id: 'projects', text: 'Projects', url: '/projects' },
  { id: 'examples', text: 'Examples', url: '/examples' },
  { id: 'about', text: 'About Us', url: '/about' },
  { id: 'contact', text: 'Contact Us', url: '/contact' }
])
