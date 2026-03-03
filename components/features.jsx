import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { features } from "@/lib/data";

export default function Features() {
  return (
    <div>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-grotesque">
              How it works
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-jost">
              Our platform makes heathcare accessible with just afew clicks
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {features.map((feature) => {
              return (
                <Card
                  key={feature.title}
                  className="border-emerald-900/20 hover:border-emerald-800 hover:scale-105  transition-all duration-300">
                  <CardHeader className="pb">
                    <div className="bg-emerald-900/20 p-3 rounded-lg w-fit mb-2 ">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-white font-grotesque">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground font-jost text-lg">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
