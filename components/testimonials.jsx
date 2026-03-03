import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { testimonials } from "@/lib/data";
import { Badge } from "./ui/badge";

export default function Testimonials() {
  return (
    <div>
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="bg-emerald-900/30 border-emerald-700/30 px-4 py-1 text-emerald-400 text-sm font-medium mb-4 font-jost md:text-lg ">
              Success stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-grotesque">
              What our users say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-jost">
              Hear from users who use our platform.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
            {testimonials.map((testimonial) => {
              return (
                <Card
                  key={testimonial.quote}
                  className="border-emerald-900/20 hover:border-emerald-800 hover:scale-105  transition-all duration-300">
                  <CardContent>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-900/20 flex items-center justify-center">
                        <span className="text-emerald-400 font-bold font-grotesque uppercase">
                          {testimonial.initials}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white font-grotesque text-md">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground font-grotesque text-md">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className=" pt-2 text-muted-foreground font-jost text-md">
                      &quot;{testimonial.quote}&quot;
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
