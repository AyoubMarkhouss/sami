import React, { useEffect, useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button,
} from "@nextui-org/react";
import Image from "next/image";
import { IoIosMail } from "react-icons/io";

export default function Navnext() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // const menuItems = ["À propos", "Services", "Expertises", "Blog", "Contact"];
  const menuItems = [
    { label: "À propos", link: "/" },
    { label: "Services", link: "/services" },
    { label: "Expertises", link: "/expertises" },
    { label: "Blog", link: "/blog" },
    { label: "Contact", link: "/contact" },
  ];

  const [navbarBlur, setNavbarBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setNavbarBlur(true);
      } else {
        setNavbarBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isBlurred={false}
      className={navbarBlur ? "blurred" : "trans"}
      id="nav"
    > 
    
      <NavbarContent className="hidden sm:flex gap-3 ">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
            À propos
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
            Services
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
            Distributeurs
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="center">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden "
        />
        <NavbarBrand className="text-white text-xl" >
          <Image
            alt="logo"
            src="/epiver-logo.png"
            width={1200}
            height={1200}
            className="w-24 sm:w-36 ml-24 sm:ml-0"
          />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-3 " justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
            Expertises
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
            Services
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-xl text-slate-100"
            href="/"
          >
           Contact
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="h-12 w-12 rounded-3xl bg-[#A67B5B] text-slate-100 text-xl flex items-center justify-center "
            href="contact"
            variant="flat"
          >
            <IoIosMail size={30} />
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu className="mt-8 sm:mt-0">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className="medium w-full  text-slate-50 text-3xl pt-5"
              href={item.link}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
