import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { videos } from "@/data/videos";

export async function POST(req: Request) {
  const { slug } = await req.json();
    const video = videos.find(v => v.slug === slug);

      if (!video) {
          return NextResponse.json({ error: "Video not found" }, { status: 404 });
            }

              const session = await stripe.checkout.sessions.create({
                  payment_method_types: ["card"],
                      mode: "payment",
                          line_items: [
                                {
                                        price_data: {
                                                  currency: "aud",
                                                            product_data: {
                                                                        name: video.title,
                                                                                  },
                                                                                            unit_amount: video.price,
                                                                                                    },
                                                                                                            quantity: 1,
                                                                                                                  },
                                                                                                                      ],
                                                                                                                          success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?slug=${slug}`,
                                                                                                                              cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/vault/${slug}`,
                                                                                                                                });

                                                                                                                                  return NextResponse.json({ url: session.url });
                                                                                                                                  }