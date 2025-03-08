import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

import { GoPlusCircle } from "react-icons/go";
import images from "@/assets/images";

const musicData = [
  { id: 1, title: "Sentimental", artist: "IV of Spades", image: images.pic1 },
  { id: 2, title: "Chocolate", artist: "The 1975", image: images.pic2 },
  { id: 4, title: "Happier Than Ever", artist: "Billie Eilish", image: images.pic4 },
  { id: 3, title: "Canada", artist: "Wallows", image: images.pic3 },
];

const madeMusic = [
    { id: 1, title: "Midnight Vibes", artist: "Synth Horizon", image: "https://api.lorem.space/image/album?w=400&h=300" },
    { id: 2, title: "Neon Dreams", artist: "Midnight Echo", image: "https://picsum.photos/400/300?random=2" },
    { id: 3, title: "Wanderlust", artist: "Echo Horizon", image: "https://dummyimage.com/400x300/000/fff&text=Wanderlust" },
    { id: 4, title: "Velvet Nights", artist: "Luna Wave", image: "https://api.lorem.space/image/album?w=400&h=300&random=4" },
    { id: 5, title: "Lost Frequencies", artist: "Astral Groove", image: "https://picsum.photos/400/300?random=5" },
    { id: 6, title: "Electric Pulse", artist: "The Sound Machine", image: "https://dummyimage.com/400x300/111/eee&text=Electric+Pulse" },

  ];
  
  
  

const Home = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      {/* Sidebar & Main Content */}
      <div className="flex flex-1">
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 p-5 mt-14 w-full dark:bg-[#242124]">
          <Tabs defaultValue="account" className="w-full">
            <div className="flex justify-between w-full">
              <TabsList>
                <TabsTrigger value="account">Music</TabsTrigger>
                <TabsTrigger value="password">Podcasts</TabsTrigger>
                <TabsTrigger value="none" disabled>
                  Live
                </TabsTrigger>
              </TabsList>
              <Button>
                <GoPlusCircle /> Add Music
              </Button>
            </div>

            <TabsContent value="account">
              <div className="mt-8">
                <h1 className="text-2xl font-semibold">Listen Now</h1>
                <p className="mt-2 text-sm">Top picks for you. Updated daily.</p>
                <Separator className="mt-4 w-full" />
                <div className="grid grid-cols-6 mt-4">
                  {musicData.map((music) => (
                    <div key={music.id}>
                      <ContextMenu>
                        <ContextMenuTrigger>
                          <img
                            src={music.image}
                            alt={music.title}
                             className="h-86 w-60 rounded-md transition-all duration-300 cursor-pointer hover:brightness-50"
                          />
                          <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-lg mt-2">{music.title}</h3>
                            <p className="text-sm">{music.artist}</p>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <ContextMenuItem>Profile</ContextMenuItem>
                          <ContextMenuItem>Billing</ContextMenuItem>
                          <ContextMenuItem>Team</ContextMenuItem>
                          <ContextMenuItem>Subscription</ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h1 className="text-2xl font-semibold">Made for You</h1>
                <p className="mt-2 text-sm">Your personal playlists. Updated daily.</p>
                <Separator className="mt-4 w-full" />
                <div className="grid grid-cols-6 mt-4">
                  {madeMusic.map((music) => (
                    <div key={music.id}>
                      <ContextMenu>
                        <ContextMenuTrigger>
                        <img
                            src={music.image}
                            alt={music.title}
                             className="h-60 w-60 rounded-md transition-all duration-300 cursor-pointer hover:brightness-50"
                          />
                          <div className="flex flex-col gap-1">
                            <h3 className="font-semibold text-lg mt-2">{music.title}</h3>
                            <p className="text-sm">{music.artist}</p>
                          </div>
                        </ContextMenuTrigger>
                        <ContextMenuContent>
                          <ContextMenuItem>Profile</ContextMenuItem>
                          <ContextMenuItem>Billing</ContextMenuItem>
                          <ContextMenuItem>Team</ContextMenuItem>
                          <ContextMenuItem>Subscription</ContextMenuItem>
                        </ContextMenuContent>
                      </ContextMenu>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="password">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Home;
