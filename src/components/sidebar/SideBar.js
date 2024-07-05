import { HomeIcon } from "@heroicons/react/24/outline";
import Navbar from "../header/Navbar";

import { LuLayoutDashboard } from "react-icons/lu";

const navigation = [
  { name: "Home", icon: HomeIcon, current: true },
  { name: "Dashboard", icon: LuLayoutDashboard, current: false },
];
const service = [
  { name: "Airport", current: true },
  { name: "Videos", current: false },
];
const teams = [
  { id: 1, name: "List 1" },
  { id: 2, name: "List 2" },
  { id: 3, name: "List 3" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DetailedView() {
  return (
    <>
      <div className="flex h-screen">
        <nav className="flex-shrink-0 w-72 border-r border-gray-200 bg-white px-6 overflow-y-auto">
          <ul role="list" className="flex flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <p
                      className={classNames(
                        item.current
                          ? "bg-gray-50 text-indigo-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-indigo-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className={classNames(
                          item.current
                            ? "text-indigo-600"
                            : "text-gray-400 group-hover:text-indigo-600",
                          "h-6 w-6 shrink-0"
                        )}
                      />
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                <h1>Services</h1>
                {service.map((item) => (
                  <li key={item.name}>
                    <p
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-600"
                          : "text-gray-700 hover:bg-white-50 hover:text-indigo-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      {item.name}
                    </p>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-xs font-semibold leading-6 text-gray-400">
                Others
              </div>
              <ul role="list" className="-mx-2 mt-2 space-y-1">
                {teams.map((team) => (
                  <li key={team.name}>
                    <p className="text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                      <span className="truncate">{team.name}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
