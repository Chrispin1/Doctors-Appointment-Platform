import Contact from "@/components/contact";
import CreditBenefits from "@/components/credit-benefits";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { creditBenefits, features } from "@/lib/data";
import { Stethoscope } from "lucide-react";
import { Check } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-background">
      <section className="relative overflow-hidden pt-32 mb-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="px-4 py-2 bg-emerald-900/30 border-emerals-700/30 text-sm md:text-lg font-jost text-emerald-400">
                Healthcare made simple.
              </Badge>
              <h1 className="text-4xl font-grotesque md:text-5xl lg:text-6xl font-bold text-white leading-tight pt-2">
                Connect with doctors <br />{" "}
                <span className="gradient-title">anywhere, anytime</span>
              </h1>
              <p className="text-muted-foreground font-jost text-lg md:text-xl max-w-md">
                Book appointments, consult via video, and manage your healthcare
                journey all in one platform
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700">
                  <Link href="/onboarding" className="flex items-center">
                    <span className="font-jost text-lg">Get started </span>
                    <ArrowRight className=" h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-white hover:bg-emerald-700">
                  <Link href="/doctors" className="flex items-center ">
                    <span className="font-jost text-lg">Find Doctors </span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative h-75 sm:h-100 md:h-125 lg:h-150 rounded-xl overflow-hidden w-full">
              <Image
                src="/banner2.png"
                alt="healthcare banner"
                fill
                priority
                className="md:object-cover object-contain md:pt-14"
              />
            </div>
          </div>
        </div>
      </section>

      <Features />
      <CreditBenefits />
      <Testimonials />
      <Contact />
    </div>
  );
}
