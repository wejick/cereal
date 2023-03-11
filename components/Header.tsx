import IconBowl from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/bowl.tsx";
import IconPlugConnected from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plug-connected.tsx";
import IconPlugConnectedX from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/plug-connected-x.tsx";

type Props = {
  active: string;
  connected: boolean;
};

export default function Header({ active, connected }: Props) {
  const menus = [
    { name: "Overview", href: "/" },
    { name: "Node", href: "/node" },
    { name: "Rest", href: "/rest" },
    { name: "More >>", href: "/#more" },
  ];

  const connectionStatus = connected
    ? <IconPlugConnected class="w-7 h-7  bg-green-500" />
    : <IconPlugConnectedX class="w-7 h-7 bg-red-500" />;

  return (
    <div class="bg-white w-full py-1 px-5 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-none">
        <IconBowl />
        <div class="text-2xl  ml-1 font-bold">
          Cereal
        </div>
      </div>
      <ul class="flex items-center gap-6 flex-1">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")}
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
      <div class="flex items-center gap-6 flex-none py-1 px-1">
        Refresh
      </div>
      <div class="flex items-center gap-6 flex-none py-1 px-1">
        http://localhost:9200
      </div>
      <div class="flex items-center gap-6 flex-none">
        {connectionStatus}
      </div>
    </div>
  );
}
