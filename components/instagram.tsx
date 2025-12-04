import { ExternalLink, Heart, Instagram, MessageCircle } from "lucide-react";
import { Badge } from "##/components/ui/badge";
import { Button } from "##/components/ui/button";
import { Card } from "##/components/ui/card";
import { businessInfo } from "##/lib/schema";

const instagramPosts = [
  {
    id: 1,
    type: "reel",
    caption: "Buzz cut meets burst fade",
    likes: 124,
    comments: 8,
  },
  {
    id: 2,
    type: "post",
    caption: "Easy-to-maintain short hairstyle",
    likes: 89,
    comments: 5,
  },
  {
    id: 3,
    type: "post",
    caption: "First visit and already a fan",
    likes: 156,
    comments: 12,
  },
  {
    id: 4,
    type: "reel",
    caption: "Classic gentleman's cut",
    likes: 203,
    comments: 15,
  },
  {
    id: 5,
    type: "post",
    caption: "Traditional wet shave experience",
    likes: 178,
    comments: 9,
  },
  {
    id: 6,
    type: "post",
    caption: "Scalp treatment results",
    likes: 92,
    comments: 4,
  },
];

export function InstagramFeed() {
  return (
    <section className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">
            <Instagram className="h-3.5 w-3.5 mr-1.5" />
            Follow Us
          </Badge>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
            {businessInfo.instagram}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            See our latest work, customer transformations, and behind-the-scenes
            at Kings Barber.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {instagramPosts.map((post) => (
            <Card
              key={post.id}
              className="group relative overflow-hidden aspect-square hover-elevate transition-all duration-300 cursor-pointer"
              data-testid={`instagram-post-${post.id}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/30 to-muted flex items-center justify-center">
                <Instagram className="h-12 w-12 text-muted-foreground/30" />
              </div>

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4">
                <div className="flex items-center gap-4 mb-3">
                  <span className="flex items-center gap-1 text-sm">
                    <Heart className="h-4 w-4" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <MessageCircle className="h-4 w-4" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-xs text-center text-gray-300 line-clamp-2">
                  {post.caption}
                </p>
                {post.type === "reel" && (
                  <Badge
                    variant="secondary"
                    className="mt-2 text-[10px] bg-white/20 text-white border-0"
                  >
                    Reel
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild data-testid="button-follow-instagram">
            <a
              href="https://www.instagram.com/kingsbarbersingapore/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="h-4 w-4" />
              Follow on Instagram
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
