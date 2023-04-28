import { base } from '$app/paths'

export const navLists: App.NavLists[] = [
  { id: 'products', text: 'Products', url: `${base}/products` },
  { id: 'services', text: 'Services', url: `${base}/services` },
  { id: 'projects', text: 'Projects', url: `${base}/projects` },
  { id: 'examples', text: 'Examples', url: `${base}/examples` },
  { id: 'about', text: 'About Us', url: `${base}/about` },
  { id: 'contact', text: 'Contact Us', url: `${base}/contact` }
]

export const serviceLists: App.ServiceLists[] = [
  {
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    title: 'Mobile Development',
    description: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    title: 'Seo Service',
    description: 'Lorem ipsum dolor sit amet consectetur'
  },
  {
    title: 'Hosting',
    description: 'Lorem ipsum dolor sit amet consectetur'
  }
]
