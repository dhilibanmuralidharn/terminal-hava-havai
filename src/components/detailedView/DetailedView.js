import { HomeIcon } from "@heroicons/react/24/outline";
import { FiUpload } from "react-icons/fi";
import {
  Breadcrumbs,
  Item,
  lightTheme,
  Provider,
  TabList,
  TabPanels,
  Tabs,
  Picker,
  Switch,
} from "@adobe/react-spectrum";
import Navbar from "../header/Navbar";
import "./DetailedView.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { useState } from "react";
import Modal from "../../modal/Modal";

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClickToAddTerminal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <nav className="flex-shrink-0 w-60 border-r border-gray-200 bg-white px-6 overflow-y-auto">
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
        <main className="flex-grow overflow-y-auto bg-white-100">
          <div className="mx-auto p-5">
            <Provider theme={lightTheme} colorScheme="light">
              <Breadcrumbs size="S">
                <Item key="home">Airport</Item>
                <Item key="trendy">Indra Gandhi International Airport</Item>
              </Breadcrumbs>
            </Provider>
            <h1 className="main-heading">Indra Gandhi International Airport</h1>
            <div>
              <Provider theme={lightTheme} colorScheme="light">
                <Tabs aria-label="History of Ancient Rome">
                  <TabList>
                    <Item key="FoR">Terminal </Item>
                    <Item key="MaR">Transport</Item>
                    <Item key="Emp">Contact Detail</Item>
                  </TabList>
                  <TabPanels>
                    <Item key="FoR">
                      <div className="terminal-container">
                        <div className="terminalBox">
                          <img
                            src="./assets/terminal.png"
                            alt="terminal"
                            className="terminal-img"
                          />
                          <div className="content">
                            <h2>Terminal 1</h2>
                            <p>optional Metadata should be two lines.</p>
                          </div>
                        </div>
                        <div className="terminalBox">
                          <img
                            src="./assets/terminal.png"
                            alt="terminal"
                            className="terminal-img"
                          />
                          <div className="content">
                            <h2>Terminal 1</h2>
                            <p>optional Metadata should be two lines.</p>
                          </div>
                        </div>
                        <Provider theme={lightTheme} colorScheme="light">
                          <div>
                            <button
                              type="button"
                              className="add-terminal-btn"
                              onClick={onClickToAddTerminal}
                            >
                              +Add Terminal
                            </button>
                          </div>
                          {isModalOpen && (
                            <Modal
                              isModalOpen={isModalOpen}
                              onCloseModal={onCloseModal}
                            />
                          )}
                        </Provider>
                      </div>
                      <div>
                        <h1 className="service-container">Service</h1>
                        <p className="lost-container">Lost & found</p>
                      </div>
                      <div className="options-container">
                        <div>
                          <Provider theme={lightTheme} colorScheme="light">
                            <Picker
                              label="Service Name"
                              defaultSelectedKey="Lost & found"
                            >
                              <Item key="Lost & found">Lost & found</Item>
                              <Item key="sometimes">Sometimes</Item>
                              <Item key="always">Always</Item>
                            </Picker>
                          </Provider>
                        </div>
                        <div>
                          <Provider theme={lightTheme} colorScheme="light">
                            <Picker
                              label="category"
                              defaultSelectedKey="Option 1"
                            >
                              <Item key="Option 1">Option 1</Item>
                              <Item key="Option 2">Option 2</Item>
                              <Item key="Option 3">Option 3</Item>
                            </Picker>
                          </Provider>
                        </div>
                        <div>
                          <Provider theme={lightTheme} colorScheme="light">
                            <Picker
                              label="Sub Category"
                              defaultSelectedKey="Option 2"
                            >
                              <Item key="Option 1">Option 1</Item>
                              <Item key="Option 2">Option 2</Item>
                              <Item key="Option 3">Option 3</Item>
                            </Picker>
                          </Provider>
                        </div>
                        <div>
                          <button className="upload-button">
                            <FiUpload />
                            upload image
                          </button>
                        </div>
                        <div className="show-image">
                          <Provider theme={lightTheme} colorScheme="light">
                            <Switch>Show image</Switch>
                          </Provider>
                        </div>
                        <div>
                          <Provider theme={lightTheme} colorScheme="light">
                            <Picker
                              label="Description"
                              defaultSelectedKey="type here"
                            >
                              <Item key="type here">type here</Item>
                            </Picker>
                          </Provider>
                        </div>
                      </div>
                      <div>
                        <p className="lost-container mt-12">Longue</p>
                        <p className="lost-container mt-5">Money Exchange</p>
                      </div>
                    </Item>
                    <Item key="MaR"></Item>
                    <Item key="Emp"></Item>
                  </TabPanels>
                </Tabs>
              </Provider>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
