import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  isEnglish:boolean = true;
  now = {
    'products': 'Products',
    'about': 'About us',
    'contact': 'Contact',
    'liv_innovation': 'LIV Innovation',
    'title_sub_1': 'Your partner for innovative automation solutions',
    'title_sub_2': 'Discover how our software can revolutionize your can revolutionize your business.',
    'learn_more': 'Learn More',
    'product_1': 'Innovation',
    'product_1_desc': 'Ready to optimize your business process and increase your productivity? Immerse yourself in the world of automation with LIV Innovation, your expert for tailor-made, innovative software solutions.',
    'product_2': 'Efficiency',
    'product_2_desc': 'In an ever-changing business world, efficiency is the key to success. We offer tailor-made automation solutions to optimize your operational business processes and take your company to the next level.',
    'product_3': 'Integration',
    'product_3_desc': 'Do you want to automate manual processes and integrate them into your existing workflow? At LIV Innovation, we offer automation solutions tailored to your specific needs.',
    'about_us': 'LIV Innovation aims to help companies work smarter and more efficiently. We believe in the power of automation to take over repetitive tasks and free up human resources for creative and strategic challenges.',
    'vision': 'Our Vision & Mission',
    'vision_mission': 'Our vision is to create a world where technology enhances human performance and helps companies achieve their goals.',
    'hello': 'Hello!',
    'love_to_hear': 'We’d love to hear from you.Here’s how you can reach us...',
    'imprint': 'Imprint',
    'data_protection': 'Data protection',

  };
  content = {
    'en': {
      'products': 'Products',
      'about': 'About us',
      'contact': 'Contact',
      'liv_innovation': 'LIV Innovation',
      'title_sub_1': 'Your partner for innovative automation solutions',
      'title_sub_2': 'Discover how our software can revolutionize your can revolutionize your business.',
      'learn_more': 'Learn More',
      'product_1': 'Innovation',
      'product_1_desc': 'Ready to optimize your business process and increase your productivity? Immerse yourself in the world of automation with LIV Innovation, your expert for tailor-made, innovative software solutions.',
      'product_2': 'Efficiency',
      'product_2_desc': 'In an ever-changing business world, efficiency is the key to success. We offer tailor-made automation solutions to optimize your operational business processes and take your company to the next level.',
      'product_3': 'Integration',
      'product_3_desc': 'Do you want to automate manual processes and integrate them into your existing workflow? At LIV Innovation, we offer automation solutions tailored to your specific needs.',
      'about_us': 'LIV Innovation aims to help companies work smarter and more efficiently. We believe in the power of automation to take over repetitive tasks and free up human resources for creative and strategic challenges.',
      'vision': 'Our Vision & Mission',
      'vision_mission': 'Our vision is to create a world where technology enhances human performance and helps companies achieve their goals.',
      'hello': 'Hello!',
      'love_to_hear': 'We’d love to hear from you.Here’s how you can reach us...',
      'imprint': 'Imprint',
      'data_protection': 'Data protection',

    },
    'ge': {
      'products': 'Products',
      'about': 'Über uns',
      'contact': 'Kontakt',
      'liv_innovation': 'LIV Innovation',
      'title_sub_1': 'Ihrem Partner für innovative Automatisierungslösungen',
      'title_sub_2': 'Entdecken Sie, wie unsere Software Ihr Unternehmen revolutionieren kann.',
      'learn_more': 'Mehr erfahren',
      'product_1': 'Innovation',
      'product_1_desc': 'Bereit, Ihren Geschäftsprozess zu optimieren und Ihre Produktivität zu steigern? Tauchen Sie ein in die Welt der Automatisierung mit LIV Innovation, Ihrem Experten für maßgeschneiderte, innovative  Softwarelösungen.',
      'product_2': 'Effizienz',
      'product_2_desc': 'In einer sich ständig wandelnden Geschäftswelt ist Effizienz der Schlüssel zum Erfolg. Bei uns bieten wir maßgeschneiderte Automatisierungslösungen, um Ihre operative Geschäftsprozesse zu optimieren und Ihr Unternehmen auf die nächste Stufe zu heben.',
      'product_3': 'Integration',
      'product_3_desc': 'Möchten Sie manuelle Prozesse automatisieren und in Ihren bisherigen Ablauf integrieren? Bei LIV Innovation bieten wir Automatisierungslösungen, die auf Ihre spezifischen Anforderungen zugeschnitten sind.',
      'about_us': 'LIV Innovation möchte Unternehmen dabei unterstützen, intelligenter und effizienter zu arbeiten. Wir glauben an die Kraft der Automatisierung, um repetitive Aufgaben zu übernehmen und menschliche Ressourcen für kreative und strategische Herausforderungen freizusetzen.',
      'vision': 'Our Vision & Mission',
      'vision_mission': 'Unsere Vision ist es, eine Welt zu schaffen, in der Technologie die menschliche Leistungsfähigkeit erweitert und Unternehmen dabei hilft, ihre Ziele zu erreichen.',
      'hello': 'Hallo!',
      'love_to_hear': 'Wir würden uns freuen, von Ihnen zu hören. Hier erfahren Sie, wie Sie uns erreichen können...',
      'imprint': 'Impressum',
      'data_protection': 'Datenschutz',
    }
  }

  constructor() {
    if(this.isEnglish) {
      this.now = this.content['en'];
    } else {
      this.now = this.content['ge'];
    }
  }

  changeLang() {
    this.isEnglish = !this.isEnglish;
    if(this.isEnglish) {
      this.now = this.content['en'];
    } else {
      this.now = this.content['ge'];
    }
  }
}
