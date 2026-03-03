import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-linear-to-r from-emerald-900/30 to-emerala-950/20 border-emerald-800/20">
            <CardContent className="p-8 md:p-12 lg:p-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-grotesque">
                  Ready to take control of your healthcare
                </h2>
                <p className="mb-6 text-muted-foreground text-lg font-jost">
                  Join thousands of users who have transformed their health
                  journey with our platform. Get started today and experience
                  the future of healthcare.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-emerald-600 text-md hover:bg-emerald-700 text-white font-jost">
                    <Link href="/sign-up">Sign Up Now</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-emerald-700/30 hover:bg-muted/80 text-white text-md font-jost">
                    <Link href="/pricing">View Pricing</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
