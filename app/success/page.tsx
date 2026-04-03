"use client";

import { useSearchParams } from "next/navigation";
import { videos } from "@/data/videos";

export default function SuccessPage() {
  const params = useSearchParams();
    const slug = params.get("slug");

      const video = videos.find(v => v.slug === slug);

        if (!video) return <div className="text-white">Invalid</div>;

          return (
              <div className="min-h-screen bg-black text-white p-6">
                    <h1 className="text-3xl mb-4">Unlocked 🔓</h1>

                          <video src={video.full} controls className="w-full" />
                              </div>
                                );
                                }