import { Jost, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/themeProvider";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const grotesque = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

export const metadata = {
  title: "Doctor Appointment App",
  description:
    "Connecting patients with health experts for seamless healthcare access.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        theme: dark,
      }}>
      <html lang="en" suppressHydrationWarning>
        <body className={`${grotesque.variable} ${jost.variable} antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange>
            {/* header */}
            <Header />
            <main className="min-h-screen">{children}</main>
            <footer className="bg-muted/30 py-12">
              <div className="container mx-auto text-center text-gray-500">
                <p className="text-md"> Made with ❤️ by Xtra</p>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
