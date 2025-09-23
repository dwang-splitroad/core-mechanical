import Link from "next/link";

type EmergencyBannerProps = {
  text: string;
};

export function EmergencyBanner({ text }: EmergencyBannerProps) {
  return (
    <div className="bg-accent text-accent-foreground py-2 px-4 text-center text-sm font-medium">
      {text} • Call Now:{" "}
      <Link href="tel:574-555-0123" className="font-bold underline hover:text-primary transition-colors">
        (574) 555-0123
      </Link>
    </div>
  );
}