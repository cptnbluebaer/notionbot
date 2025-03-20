import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
    NavigationMenuLink,
  } from "@/components/ui/navigation-menu";
  import { List, CirclePlus, UserRoundPen } from "lucide-react";
  
  export default function Navbar() {
    return (
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6">
          {/** Erstes Icon */}
          <NavigationMenuItem>
            <NavigationMenuLink className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#5d00ff5a]">
              <List
                size={24}
                className="text-black transition-all duration-300 ease-in-out"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          {/** Zweites Icon */}
          <NavigationMenuItem>
            <NavigationMenuLink className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#5d00ff5a]">
              <CirclePlus
                size={24}
                className="text-black transition-all duration-300 ease-in-out"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
  
          {/** Drittes Icon */}
          <NavigationMenuItem>
            <NavigationMenuLink className="group p-3 rounded-md transition-all duration-300 ease-in-out hover:bg-[#5d00ff5a]">
              <UserRoundPen
                size={24}
                className="text-black transition-all duration-300 ease-in-out"
              />
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );
  }