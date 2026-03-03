import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Stethoscope } from "lucide-react";
import { Check } from "lucide-react";
import { Badge } from "./ui/badge";
import { creditBenefits } from "@/lib/data";

export default function CreditBenefits() {
  return (
    <div>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4 font-jost md:text-lg ">
              Affordable Healthcare
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-grotesque">
              Consultation packages
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-jost">
              Choose the perfect consultation package that fits your healthcare
              needs.
            </p>
          </div>
          <div>
            {/* pricing table */}
            <Card className="mt-12 bg-muted/20 border-emerald-900/30">
              <CardHeader>
                <CardTitle className="capitalize flex items-center font-jost text-md md:text-lg font-semibold text-white">
                  <Stethoscope className="text-emerald-400 w-5 h-5 mr-2" /> How
                  out credit system works
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul>
                  {creditBenefits.map((benefit, index) => {
                    return (
                      <li key={index} className="flex items-start pt-6">
                        <div className="mr-3 mt-2 bg-emerald-900/20 p-1 rounded-full ">
                          <Check className="h-4 w-4 text-emerald-400" />
                        </div>
                        <p
                          className="text-muted-foreground font-jost text-lg"
                          dangerouslySetInnerHTML={{ __html: benefit }}></p>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
