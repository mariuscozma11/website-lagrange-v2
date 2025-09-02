"use client"
import ContactForm from '@/components/ContactForm'
import HeroSectionOne from '@/components/hero-section-demo-1'
import HomeServicesSection from '@/components/HomeServicesSection'
import React from 'react'

const HomeContent = () => {
  return (
    <>
    <HeroSectionOne /> 
    <HomeServicesSection />
    <ContactForm />
    </>
  )
}

export default HomeContent