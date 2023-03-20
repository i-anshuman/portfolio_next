import { motion, Variants } from "framer-motion";
import styles from "@/styles/components/Sidenav.module.css";
import Link from "next/link";
import { useContext } from "react";
import { SidebarContext } from "@/context";

type MenuProps = {
  links: { id: string; title: string }[];
};

const appear: Variants = {
  open: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.1, staggerDirection: -1 },
  },
};

const fadeIn: Variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    y: 100,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Menu({ links }: MenuProps) {
  const { hide } = useContext(SidebarContext);
  return (
    <motion.ol className={styles.menu} variants={appear}>
      {links.map(({ id, title }) => (
        <motion.li className={styles.menu_item} key={id} variants={fadeIn}>
          <Link href={id} onClick={hide}>
            {title}
          </Link>
        </motion.li>
      ))}
    </motion.ol>
  );
}
