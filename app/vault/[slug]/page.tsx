"use client";

import { useParams } from "next/navigation";
import { videos } from "@/data/videos";

export default function VideoPage() {
  const params = useParams();
    const slug = params?.slug as string;

      const video = videos.find((v) => v.slug === slug);

        if (!video) {
            return <div className="text-white">Not found</div>;
              }

                const handleBuy = async () => {
                    const res = await fetch("/api/checkout", {
                          method: "POST",
                                body: JSON.stringify({ slug }),
                                    });

                                        const data = await res.json();
                                            window.location.href = data.url;
                                              };

                                                return (
                                                    <div className="min-h-screen bg-black text-white p-6">
                                                          <h1 className="text-3xl mb-4">{video.title}</h1>

                                                                <video
                                                                        src={video.preview}
                                                                                controls
                                                                                        className="w-full mb-4"
                                                                                              />

                                                                                                    <button
                                                                                                            onClick={handleBuy}
                                                                                                                    className="bg-purple-600 px-6 py-3 rounded-xl"
                                                                                                                          >
                                                                                                                                  Unlock for $5
                                                                                                                                        </button>
                                                                                                                                            </div>
                                                                                                                                              );
                                                                                                                                              }