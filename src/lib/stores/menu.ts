import { base } from '$app/paths'
import { writable } from 'svelte/store'

export const menu = writable<App.PublicSiteMenu[]>([
  { id: 'products', text: 'Products', url: `${base}/products` },
  { id: 'services', text: 'Services', url: `${base}/services` },
  { id: 'projects', text: 'Projects', url: `${base}/projects` },
  { id: 'examples', text: 'Examples', url: `${base}/examples` },
  { id: 'about', text: 'About Us', url: `${base}/about` },
  { id: 'contact', text: 'Contact Us', url: `${base}/contact` }
])
