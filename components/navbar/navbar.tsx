import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { List, CirclePlus, UserRoundPen } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">
        {/** Erstes Icon */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/connectionlist"
            className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#364153] bg-[#030712]"
          >
            <List
              size={24}
              className="text-[#3e77ce] transition-all duration-300 ease-in-out"
            />
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/** Zweites Icon */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/addconnection"
            className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#364153]  bg-[#030712]"
          >
            <CirclePlus
              size={24}
              className="text-[#3e77ce] transition-all duration-300 ease-in-out"
            />
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/** Drittes Icon */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/settings"
            className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#364153]  bg-[#030712]"
          >
            <UserRoundPen
              size={24}
              className="text-[#3e77ce] transition-all duration-300 ease-in-out"
            />
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
