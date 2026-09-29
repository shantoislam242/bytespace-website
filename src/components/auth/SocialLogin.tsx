import Image from "next/image";

const providers = [
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "Google", icon: "/icons/google.svg" },
];

export default function SocialLogin() {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex w-full items-center gap-[11px]">
        <span className="h-px flex-1 bg-line sm:w-[200px] sm:flex-none" />
        <span className="text-body-l text-muted">or</span>
        <span className="h-px flex-1 bg-line sm:w-[200px] sm:flex-none" />
      </div>
      <div className="flex gap-4">
        {providers.map((provider) => (
          <button
            key={provider.name}
            type="button"
            aria-label={`Continue with ${provider.name}`}
            className="flex size-[72px] items-center justify-center rounded-3xl border border-line transition-colors hover:border-primary-800"
          >
            <Image src={provider.icon} alt="" width={40} height={40} />
          </button>
        ))}
      </div>
    </div>
  );
}
