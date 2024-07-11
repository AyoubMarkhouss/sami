import React, { useEffect, useState, useRef } from "react";
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
import { motion } from "framer-motion";


export default function Navnext() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const ref = useRef(null);
  // const menuItems = ["À propos", "Services", "Expertises", "Blog", "Contact"];
  const menuItems = [
    { label: "À propos", link: "/" },
    { label: "Lombricompost", link: "/lombricompost" },
    {
      label: "Valorisation de biodechets",
      link: "/Valorisation_de_biodechets",
    },
    { label: "Distributeurs", link: "/Distributeurs" },
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
          className="lg:hidden text-slate-50"
        />
        <NavbarBrand className="text-white text-xl w-full flex justify-center">
          <Link href="/">
            <Image
              alt="logo"
              src="/logo.png"
              width={1200}
              height={1200}
              className="w-16"
            />
          </Link>
        </NavbarBrand>
        <div className="w-[20px]"></div>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-3" justify="end">
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          >
            <Button
              as={Link}
              className="bg-transparent text-lg text-slate-100"
              href="/"
            >
              À propos
            </Button>
          </motion.div>
        </NavbarItem>

        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          >
            <Button
              as={Link}
              className="bg-transparent text-lg text-slate-100"
              href="/lombricompost"
            >
              Lombricompost
            </Button>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          >
            <Button
              as={Link}
              className="bg-transparent text-lg text-slate-100"
              href="/Valorisation_de_biodechets"
            >
              Valorisation de biodechets
            </Button>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          >
            <Button
              as={Link}
              className="bg-transparent text-lg text-slate-100"
              href="/"
            >
              Distributeurs
            </Button>
          </motion.div>
        </NavbarItem>
        <NavbarItem>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8, borderRadius: "100%" }}
          >
            <Button
              as={Link}
              className="bg-transparent text-lg text-slate-100"
              href="/Contact"
            >
              Contact
            </Button>
          </motion.div>
        </NavbarItem>
      </NavbarContent>

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
