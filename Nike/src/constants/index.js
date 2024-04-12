import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from '../assets/icons'
import {
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  virat,
  anushka,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  nike1,
  nike2,
  nike3,
} from '../assets/images'

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about-us', label: 'About Us' },
  { href: '#products', label: 'Products' },
  { href: '#contact-us', label: 'Contact Us' },
]

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: nike1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: nike2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: nike3,
  },
]

export const statistics = [
  { value: '1k+', label: 'Brands' },
  { value: '500+', label: 'Shops' },
  { value: '250k+', label: 'Customers' },
]

export const products = [
  {
    imgURL: shoe4,
    name: 'Nike Air Jordan-01',
    price: 'Rs.2000.20',
  },
  {
    imgURL: shoe5,
    name: 'Nike Air Jordan-10',
    price: 'Rs.2100.20',
  },
  {
    imgURL: shoe6,
    name: 'Nike Air Jordan-11',
    price: 'Rs.1500.20',
  },
  {
    imgURL: shoe7,
    name: 'Nike Air Jordan-02',
    price: 'Rs.2300.20',
  },
]

export const services = [
  {
    imgURL: truckFast,
    label: 'Free shipping',
    subtext: 'Enjoy seamless shopping with our complimentary shipping service.',
  },
  {
    imgURL: shieldTick,
    label: 'Secure Payment',
    subtext:
      'Experience worry-free transactions with our secure payment options.',
  },
  {
    imgURL: support,
    label: 'Love to help you',
    subtext: 'Our dedicated team is here to assist you every step of the way.',
  },
]

export const reviews = [
  {
    imgURL: virat,
    customerName: 'Virat Kohli',
    rating: 4.5,
    feedback:
      'The attention to detail and the quality of the product exceeded my expectations. Highly recommended!',
  },
  {
    imgURL: anushka,
    customerName: 'Anushka Sharma',
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
]

export const footerLinks = [
  {
    title: 'Products',
    links: [
      { name: 'Air Force 1', link: '/' },
      { name: 'Air Max 1', link: '/' },
      { name: 'Air Jordan 1', link: '/' },
      { name: 'Air Force 2', link: '/' },
      { name: 'Nike Waffle Racer', link: '/' },
      { name: 'Nike Cortez', link: '/' },
    ],
  },
  {
    title: 'Help',
    links: [
      { name: 'About us', link: '/' },
      { name: 'FAQs', link: '/' },
      { name: 'How it works', link: '/' },
      { name: 'Privacy policy', link: '/' },
      { name: 'Payment policy', link: '/' },
    ],
  },
  {
    title: 'Get in touch',
    links: [
      { name: 'customer@nike.com', link: 'mailto:customer@nike.com' },
      { name: '+92554862354', link: 'tel:+92554862354' },
    ],
  },
]

export const socialMedia = [
  {
    src: facebook,
    alt: 'facebook logo',
    url: 'https://www.facebook.com/nike/',
  },
  {
    src: twitter,
    alt: 'twitter logo',
    url: 'https://twitter.com/Nike',
  },
  {
    src: instagram,
    alt: 'instagram logo',
    url: 'https://www.instagram.com/nike/',
  },
]
