import logoLight from "@/assets/logo/ewlogodark.png";
import logoDark from "@/assets/logo/ewlogolight.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <>
      <img
        src={logoLight}
        alt="East West University"
        className={`h-16 w-72 object-contain dark:hidden ${className}`}
      />
      <img
        src={logoDark}
        alt="East West University"
        className={`h-16 w-72 object-contain hidden dark:block ${className}`}
      />
    </>
  );
}
