import { Instagram } from "lucide-react";

const reelUrls = [
  "https://www.instagram.com/p/DTpJq8xD37X/",
];

const InstagramReels = () => {
  return (
    <section className="py-12 md:py-16 bg-secondary">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Instagram size={22} className="text-primary" />
            <span className="text-xs tracking-[0.2em] uppercase font-body text-muted-foreground">
              Follow us on Instagram
            </span>
          </div>
          <h2 className="font-heading text-2xl md:text-3xl italic text-foreground">
            @gridox
          </h2>
        </div>

        <div className="flex justify-center gap-4 flex-wrap">
          {reelUrls.map((url, i) => (
            <div
              key={i}
              className="rounded-lg overflow-hidden shadow-md bg-background"
            >
              <iframe
                src={`${url}embed`}
                width="400"
                height="520"
                frameBorder="0"
                scrolling="no"
                allowTransparency
                allow="encrypted-media"
                className="max-w-full"
                title={`Instagram post ${i + 1}`}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramReels;
