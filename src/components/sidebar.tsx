import { useContext, createContext, useState } from 'react';

interface SidebarContextType {
    expanded: boolean;
}

const SidebarContext = createContext<SidebarContextType | null>(null);

interface SidebarProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    const [expanded, setExpanded] = useState(true);

    return (
        <aside className="h-screen" style={{ width: expanded ? 290 : 120, transition: 'width 0.3s ease-in-out' }}>
            <nav className="h-full flex flex-col bg-white border-r shadow-sm rounded-br-xl rounded-tr-xl">
                <div className="p-4 pb-2 flex justify-between items-center relative w-full">
                    <button
                        className={`bg-red_primary w-8 h-8 items-center justify-center flex rounded-tl-lg rounded-bl-lg hover:cursor-pointer absolute top-8 ${expanded ? 'right-2' : 'right-8'}`}
                        onClick={() => setExpanded((curr) => !curr)}
                    >
                        <img className="w-4 h-4" src="/icons/left-menu.png" alt="left-menu.png" />
                    </button>
                    <div className={`w-full items-center justify-center flex ${expanded ? 'mt-0' : 'mt-16'}`}>
                        <img
                            src="/icons/MyAdmedika.png"
                            alt="MyAdmedika.png"
                            className={`overflow-hidden transition-all ${expanded ? 'w-32' : 'w-20'}`}
                        />
                    </div>
                </div>
                <div className={`w-full items-center justify-center flex`}>
                    <div className="w-3/4 bg-[#F6F6F6] h-0.5 mt-1.5" />
                </div>

                <SidebarContext.Provider value={{ expanded }}>
                    <ul className="flex-1 px-6">{children}</ul>
                </SidebarContext.Provider>
            </nav>
        </aside>
    );
};

interface SidebarItemProps {
    icon: React.ReactNode;
    text: string;
    onClick?: () => void;
    textRed?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, textRed, onClick }) => {
    const { expanded } = useContext(SidebarContext) ?? {};

    return (
        <li
            className={`
        relative flex items-center py-2 pl-5 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
    `}
            onClick={onClick}
        >
            {icon}
            <span
                className={`overflow-hidden hover:underline transition-all ${expanded ? 'w-[290px] ml-3' : 'w-0'} ${textRed && 'text-red_primary'}`}
            >
                {text}
            </span>

            {!expanded && (
                <div
                    className={`
          absolute left-full rounded-md px-2 py-1 ml-6 bg-white
           text-sm shadow-md
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
            ${textRed ? 'text-red_primary' : 'text-black'}
      `}
                >
                    {text}
                </div>
            )}
        </li>
    );
};

export { Sidebar, SidebarItem };
