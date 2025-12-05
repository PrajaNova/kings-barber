import { Link } from "@radix-ui/themes";
import Image from "next/image";

interface LogoProps {
  href?: string;
  width?: number;
  height?: number;
}

/**
 * Logo component for the navbar
 * Displays the brand logo with responsive sizing
 */
export function Logo({ href = "/", width = 340, height = 120 }: LogoProps) {
  return (
    <Link href={href} style={{ textDecoration: "none" }}>
      <Image
        src="https://kingsbarber.com.sg/wp-content/uploads/2016/08/LOGO.png"
        alt="Kings Barber"
        width={width}
        height={height}
        style={{ height: "50px", width: "auto" }}
        unoptimized
      />
    </Link>
  );
}
