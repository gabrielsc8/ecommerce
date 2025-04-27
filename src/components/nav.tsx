"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navmenu"

export function Nav() {
  const [open, setOpen] = React.useState(false)
  const items = [
    { label: "Home", href: "/" },
    { label: "Produtos", href: "#produtos", isAnchor: true },
    { label: "Contato", href: "/contato" },
  ]

  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          E-Commerce
        </Link>

        <div className="hidden md:block">
          <NavigationMenu className="bg-transparent shadow-none">
            <NavigationMenuList className="flex space-x-6">
              {items.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    {item.isAnchor ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link href={item.href}>{item.label}</Link>
                    )}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}

              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link href="/cart">
                    <ShoppingCart className="w-5 h-5" />
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden bg-white shadow-lg">
          <ul className="px-4 py-2 space-y-2">
            {items.map((item) => (
              <li key={item.href}>
                {item.isAnchor ? (
                  <a
                    href={item.href}
                    className="block py-2 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-2 hover:text-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                href="/cart"
                className="flex items-center py-2 hover:text-blue-600"
                onClick={() => setOpen(false)}
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Carrinho
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
