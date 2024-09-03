"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

export default function Component() {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: true })
  )
  return (
    <div className="flex flex-col min-h-[100dvh] relative">
      <div className="bg-[#FFEAC5] text-[#603F26] py-4 px-6 flex justify-between items-center fixed inset-x-0 top-0 w-full z-50">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <SmileIcon className="h-8 w-8" />
          <span className="text-xl font-bold">Smile 4 Smiles</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Contact
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline" prefetch={false}>
            Blog
          </Link>
          <Link href="/payments" className="" prefetch={false}>
            
          <Button className="ml-auto bg-orange-500 text-[#FFEAC5]">Donate</Button>
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <div className="flex flex-col items-start gap-4 p-6">
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Products
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Contact
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Blog
              </Link>
              <Button className="w-full bg-orange-500 text-[#FFEAC5]">Donate</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <main className="flex-1">
        <section className="bg-[#FFDBB5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6 mt-5 sm:mt-2">
            <Carousel
              opts={{ align: "center", loop: true, active: true, duration: 2000,  }}
              className="rounded-xl overflow-hidden z-0"
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="1200"
                    height="600"
                    alt="Carousel Image 1"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="1200"
                    height="600"
                    alt="Carousel Image 2"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="/placeholder.svg"
                    width="1200"
                    height="600"
                    alt="Carousel Image 3"
                    className="w-full h-[400px] md:h-[600px] object-cover"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    style={{ aspectRatio: "1200/600", objectFit: "cover" }}
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 z-10 text-[#603F26] hover:text-[#6C4E31]">
                <ChevronLeftIcon className="h-8 w-8" />
                <span className="sr-only">Previous</span>
              </CarouselPrevious>
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 z-10 text-[#603F26] hover:text-[#6C4E31]">
                <ChevronRightIcon className="h-8 w-8" />
                <span className="sr-only">Next</span>
              </CarouselNext>
            </Carousel>
          </div>
        </section>
        <section className="bg-[#FFEAC5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src="/placeholder.svg"
                width="600"
                height="600"
                alt="Hero Image"
                className="rounded-xl w-full h-[400px] md:h-[600px] object-cover"
                data-aos="fade-right"
                data-aos-duration="1000"
                style={{ aspectRatio: "600/600", objectFit: "cover" }}
              />
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold" data-aos="fade-left" data-aos-duration="1000">
                  Join Us and Make a Difference
                </h1>
                <p className="text-[#603F26]" data-aos="fade-left" data-aos-duration="1000">
                  Be a part of our charity initiative and help us bring smiles to those in need. Join us today and make
                  a lasting impact.
                </p>
                <Button data-aos="fade-left" data-aos-duration="1000" className="bg-orange-500 text-[#FFEAC5]">
                  Join Us
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFDBB5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-duration="1000">
                Get Involved
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
                <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Get Involved Image 1"
                    className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-orange-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-[#FFEAC5] text-[#6C4E31]">Get Involved</Button>
                  </div>
                </div>
                <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Get Involved Image 2"
                    className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-orange-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-[#FFEAC5] text-[#6C4E31]">Get Involved</Button>
                  </div>
                </div>
                <div className="relative group" data-aos="fade-up" data-aos-duration="1000">
                  <img
                    src="/placeholder.svg"
                    width="400"
                    height="300"
                    alt="Get Involved Image 3"
                    className="rounded-xl w-full h-[300px] md:h-[400px] object-cover"
                    style={{ aspectRatio: "400/300", objectFit: "cover" }}
                  />
                  <div className="absolute inset-0 bg-orange-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-[#FFEAC5] text-[#6C4E31]">Get Involved</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFEAC5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <Card className="bg-[#FFDBB5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex items-center gap-4">
                  <VoteIcon className="h-10 w-10 text-[#6C4E31]" />
                  <h3 className="text-xl font-bold">Volunteer</h3>
                </div>
                <p className="text-[#603F26] mt-2">
                  Join our team of dedicated volunteers and make a real difference in the lives of those in need.
                </p>
              </Card>
              <Card className="bg-[#FFDBB5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex items-center gap-4">
                  <GiftIcon className="h-10 w-10 text-[#6C4E31]" />
                  <h3 className="text-xl font-bold">Donate</h3>
                </div>
                <p className="text-[#603F26] mt-2">
                  Your donations can help us provide essential resources and support to those who need it most.
                </p>
              </Card>
              <Card className="bg-[#FFDBB5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex items-center gap-4">
                  <AnchorIcon className="h-10 w-10 text-[#6C4E31]" />
                  <h3 className="text-xl font-bold">Sponsor</h3>
                </div>
                <p className="text-[#603F26] mt-2">
                  Become a sponsor and help us expand our reach and impact in the community.
                </p>
              </Card>
              <Card className="bg-[#FFDBB5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                <div className="flex items-center gap-4">
                  <AnchorIcon className="h-10 w-10 text-[#6C4E31]" />
                  <h3 className="text-xl font-bold">Advocate</h3>
                </div>
                <p className="text-[#603F26] mt-2">
                  Use your voice to raise awareness and advocate for the causes we support.
                </p>
              </Card>
            </div>
          </div>
        </section>
        <section className="bg-[#FFDBB5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-duration="1000">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                <Card className="bg-[#FFEAC5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex items-center gap-4">
                    <SmileIcon className="h-10 w-10 text-[#6C4E31]" />
                    <h3 className="text-xl font-bold">Bringing Smiles</h3>
                  </div>
                  <p className="text-[#603F26] mt-2">
                    Our initiatives focus on bringing joy and happiness to those in need, putting smiles on their faces.
                  </p>
                </Card>
                <Card className="bg-[#FFEAC5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex items-center gap-4">
                    <HeartIcon className="h-10 w-10 text-[#6C4E31]" />
                    <h3 className="text-xl font-bold">Compassionate Care</h3>
                  </div>
                  <p className="text-[#603F26] mt-2">
                    We provide compassionate care and support to those facing difficult circumstances, offering a
                    helping hand.
                  </p>
                </Card>
                <Card className="bg-[#FFEAC5] p-6 rounded-xl" data-aos="fade-up" data-aos-duration="1000">
                  <div className="flex items-center gap-4">
                    <GroupIcon className="h-10 w-10 text-[#6C4E31]" />
                    <h3 className="text-xl font-bold">Community Impact</h3>
                  </div>
                  <p className="text-[#603F26] mt-2">
                    Our initiatives aim to create a positive impact on the communities we serve, making a lasting
                    difference.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-[#FFEAC5] py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold" data-aos="fade-up" data-aos-duration="1000">
                Contact Us
              </h2>
              <div className="bg-[#FFDBB5] p-8 rounded-xl w-full max-w-md" data-aos="fade-up" data-aos-duration="1000">
              <form className="space-y-4">
                  <Input type="text" placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                  <Textarea placeholder="Message" />
                  <Button className="bg-orange-500 text-[#FFEAC5]" type="submit">Submit</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-[#221609] text-[#603F26] py-8">
        <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <SmileIcon className="h-8 w-8" />
            <span className="text-xl font-bold  text-white">Smile 4 Smiles</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              <InstagramIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              <TwitterIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              <FacebookIcon className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-primary-foreground hover:underline" prefetch={false}>
              <YoutubeIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

function AnchorIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22V8" />
      <path d="M5 12H2a10 10 0 0 0 20 0h-3" />
      <circle cx="12" cy="5" r="3" />
    </svg>
  )
}


function ChevronLeftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}


function ChevronRightIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}


function FacebookIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GiftIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="8" width="18" height="4" rx="1" />
      <path d="M12 8v13" />
      <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
      <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
    </svg>
  )
}

function GroupIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7V5c0-1.1.9-2 2-2h2" />
      <path d="M17 3h2c1.1 0 2 .9 2 2v2" />
      <path d="M21 17v2c0 1.1-.9 2-2 2h-2" />
      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2" />
      <rect width="7" height="5" x="7" y="7" rx="1" />
      <rect width="7" height="5" x="10" y="12" rx="1" />
    </svg>
  )
}
function InstagramIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}
function TwitterIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  )
}
function YoutubeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  )
}

function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SmileIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M8 14s1.5 2 4 2 4-2 4-2" />
      <line x1="9" x2="9.01" y1="9" y2="9" />
      <line x1="15" x2="15.01" y1="9" y2="9" />
    </svg>
  )
}


function VoteIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 12 2 2 4-4" />
      <path d="M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z" />
      <path d="M22 19H2" />
    </svg>
  )
}