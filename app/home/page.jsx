"use client";

import { useState, useEffect } from "react"
import Header from "@/components/header"
import Hero from "@/components/hero"
import ClientsAndAbout from "@/components/clients-and-about"
import LogoSection from "@/components/logo-section"
import Sponsors from "@/components/sponsors"
import UpcomingEvents from "@/components/upcoming-events"
import Footer from "@/components/footer"
import Loader from "@/components/loader"

export default function Home() {
  

  return (
    <div className="min-h-screen">
      <Header />
      {/* Removed pt-20 from main. Hero will now handle its own top padding. */}
      <main>
        <Hero />
        <ClientsAndAbout />
        <LogoSection />
        <Sponsors />
        <UpcomingEvents />
        <Footer />
      </main>
    </div>
  )
}

