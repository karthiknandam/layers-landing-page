import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <Link className="cursor-pointer" href={"/"}>
                        <Image src={logo} alt="logo" className="size-30" />
                    </Link>
                    <nav className="flex gap-4">
                        {footerLinks.map((footer) => (
                            <a
                                className="text-white/50 flex-shrink-0 text-sm"
                                href={footer.href}
                                key={footer.label}
                            >
                                {footer.label}
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
}
