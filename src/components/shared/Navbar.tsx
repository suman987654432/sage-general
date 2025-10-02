'use client'

import React, { useState } from "react"
import Link from "next/link"
import { Button } from '../ui/button'
import { GraduationCap, Menu, ChevronDown, ChevronUp } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const guidelinesItems = [
  {
    title: "Author Guidelines",
    href: "/guidelines/authors"
  },
  {
    title: "Reviewer Guidelines",
    href: "/guidelines/reviewers"
  },
  {
    title: "Editor Guidelines",
    href: "/guidelines/editors"
  }
]

const aboutItems = [
 
  {
    title: "Journal Information",
    href: "/about/journal"
  },
  {
    title: "Editorial Board",
    href: "/about/editorial-board"
  },
  {
    title: "Editorial Processes",
    href: "/about/editorial-processes"
  },
  {
    title: "Publication Ethics",
    href: "/about/ethics"
  }
]

const departmentsItems = [
  {
    title: "Volume 1 Issue 1 ",
    href: "/articles/volume1"
  },
  {
    title: "Volume 1 Issue 2",
    href: "/articles/volume2"
  }
]

const Navbar = () => {
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="internal_layout">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-red rounded-full flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold text-primary-black">SAGE University</h1>
              <p className="text-xs text-gray-600">Research Repository</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center">
            <NavigationMenu className="relative" viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#home" className="text-primary-black hover:text-primary-red transition-colors font-medium">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-primary-red transition-colors font-medium">
                    Journal Details
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-1 w-[12.5rem]">
                      {aboutItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary-red/5 hover:text-primary-red focus:bg-primary-red/5 focus:text-primary-red w-full"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-primary-red transition-colors font-medium">
                    Guidelines
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-1 w-[12.5rem]">
                      {guidelinesItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary-red/5 hover:text-primary-red focus:bg-primary-red/5 focus:text-primary-red w-full"
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-gray-600 hover:text-primary-red transition-colors font-medium">
                    Articles
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-1 p-1 w-[18rem]">
                      {departmentsItems.map((item) => (
                        <li key={item.title}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={item.href}
                              className={`block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-primary-red/5 hover:text-primary-red focus:bg-primary-red/5 focus:text-primary-red w-full`}
                            >
                              <div className="text-sm font-medium">{item.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link href="#contact" className="text-gray-600 hover:text-primary-red transition-colors font-medium">
                      Contact Us
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4 lg:space-x-0">
            <div className="hidden lg:flex items-center">
              <Button
                variant="outline"
                size={"sm"}
                className="border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white transition-all duration-300"
              >
                NEWS
              </Button>
            </div>

            <div className="lg:hidden">
              <Drawer>
                <DrawerTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-gray-600 hover:text-primary-red">
                    <Menu className="w-6 h-6" />
                    <span className="sr-only">Open menu</span>
                  </Button>
                </DrawerTrigger>
                <DrawerContent className="max-h-[80vh]">
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>Navigation</DrawerTitle>
                    </DrawerHeader>
                    <div className="p-4 space-y-4 overflow-y-auto max-h-[80vh]">
                      {/* Home */}
                      <DrawerClose asChild>
                        <Link href="#home" className="block py-2 text-lg font-medium text-gray-600 hover:text-primary-red transition-colors">
                          Home
                        </Link>
                      </DrawerClose>

                      {/* About Section */}
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleSection('about')}
                          className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-600 hover:text-primary-red transition-colors"
                        >
                             Journal Details
                          {openSection === 'about' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {openSection === 'about' && (
                          <div className="space-y-1 pl-4 border-l-2 border-gray-200">
                            {aboutItems.map((item) => (
                              <DrawerClose key={item.title} asChild>
                                <Link
                                  href={item.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-primary-red transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </DrawerClose>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Guidelines Section */}
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleSection('guidelines')}
                          className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-600 hover:text-primary-red transition-colors"
                        >
                          Guidelines
                          {openSection === 'guidelines' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {openSection === 'guidelines' && (
                          <div className="space-y-1 pl-4 border-l-2 border-gray-200">
                            {guidelinesItems.map((item) => (
                              <DrawerClose key={item.title} asChild>
                                <Link
                                  href={item.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-primary-red transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </DrawerClose>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Schools Section */}
                      <div className="space-y-2">
                        <button
                          onClick={() => toggleSection('schools')}
                          className="flex items-center justify-between w-full py-2 text-lg font-medium text-gray-600 hover:text-primary-red transition-colors"
                        >
                          Articles
                          {openSection === 'schools' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                        </button>
                        {openSection === 'schools' && (
                          <div className="space-y-1 pl-4 border-l-2 border-gray-200">
                            {departmentsItems.map((item) => (
                              <DrawerClose key={item.title} asChild>
                                <Link
                                  href={item.href}
                                  className="block py-1 text-sm text-gray-600 hover:text-primary-red transition-colors"
                                >
                                  {item.title}
                                </Link>
                              </DrawerClose>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Contact */}
                      <DrawerClose asChild>
                        <Link href="#contact" className="block py-2 text-lg font-medium text-gray-600 hover:text-primary-red transition-colors">
                          Contact Us
                        </Link>
                      </DrawerClose>

                      {/* Login Button */}
                      <div className="pt-4 border-t border-gray-200">
                        <DrawerClose asChild>
                          <Button
                            variant="outline"
                            className="w-full border-primary-yellow text-primary-yellow hover:bg-primary-yellow hover:text-white transition-all duration-300"
                          >
                            NEWS
                          </Button>
                        </DrawerClose>
                      </div>
                    </div>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar