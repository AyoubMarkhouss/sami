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
    { label: "Lombricompost", link: "/lombricompost" },
    {
      label: "Valorisation de biodechets",
      link: "/Valorisation_de_biodechets",
    },
    { label: "Destributeurs", link: "/Destributeurs" },
    { label: "Contact", link: "/Contact" },
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
      <NavbarContent justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden text-slate-50"
        />
        <NavbarBrand className="text-white text-xl">
          <Image
            alt="logo"
            src="/epiver-logo.png"
            width={1200}
            height={1200}
            className="w-24 sm:w-36 ml-24 sm:ml-0"
          />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-3" justify="end">
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-lg text-slate-100"
            href="/"
          >
            À propos
          </Button>
        </NavbarItem>

        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-lg text-slate-100"
            href="/lombricompost"
          >
            Lombricompost
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-lg text-slate-100"
            href="/Valorisation_de_biodechets"
          >
            Valorisation de biodechets
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-lg text-slate-100"
            href="/"
          >
            Distributeurs
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-transparent text-lg text-slate-100"
            href="/Contact"
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
      <NavbarMenu className="mt-8 sm:mt-0 bg-darkbrown">
        {menuItems.map((item) => (
          <NavbarMenuItem key={item.label}>
            <Link
              className="medium w-full text-lightbrown text-3xl pt-5"
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
