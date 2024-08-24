import ClickyMeep from "@/components/ClickyMeep";
import LinkMeep from "@/components/LinkMeep";
import { headers } from "next/headers";
import { isMobile } from "@/utils/isMobile";
import "@/app/softtacos/page.css"

export const revalidate = 0;

export default async function Home() {
  const userAgent = headers().get("user-agent") || "";
  const mobile = isMobile(userAgent);
  return (
    //This wrapper is important for mobile and how it loads the page
    <div className="wrapper overflow-hidden relative min-h-screen w-full">
      <main className="flex flex-col w-3/4 mx-auto items-center">
        {mobile ? 
        (
          <div className="flex flex-col items-center gap-4">
            <ClickyMeep size={700} />
            <LinkMeep link="/"/>
          </div>
        ) 
        : 
        (
          <div className="flex flex-col items-center">
            <div className="flex mt-8 justify-end w-10/12 fixed">
              <LinkMeep link="/"/>
            </div>
            <div className="flex items-center gap-4">
              <ClickyMeep size={700} />
            </div>
          </div>
          
        )}
      </main>
    </div>
  );
}
