import Link from "next/link";
import { videos } from "@/data/videos";

export default function VaultPage() {
  return (
      <div className="min-h-screen bg-black text-white p-6 grid grid-cols-2 gap-4">
            {videos.map(v => (
                    <Link key={v.slug} href={`/vault/${v.slug}`}>
                              <div className="bg-zinc-900 p-3 rounded-xl">
                                          <img src={v.thumbnail} className="rounded-lg mb-2" />
                                                      <p>{v.title}</p>
                                                                </div>
                                                                        </Link>
                                                                              ))}
                                                                                  </div>
                                                                                    );
                                                                                    }