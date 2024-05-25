import LandingModules from '@/app/_components/LandingModules';
import Banner from "@/app/_components/Banner";

export default async function Index() {
  return (
   <div className="flex-1 w-full flex flex-col gap-20 items-center">

      <div className="flex max-w-[327px] max-h-[911px] md:max-w-[1207px] md:max-h-[796px]">
        <Banner />
      </div>
      <div className="animate-in flex-1 flex flex-col gap-20 opacity-0 max-w-4xl px-3">
        <LandingModules />
      </div>
      <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{' '}
          <a
            href="https://adventlabs.ng"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Adventlabs
          </a>
        </p>
      </footer>
    </div>
  );
}
