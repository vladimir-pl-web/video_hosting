import { ILink } from "./types"

import { MdOutlineLocalMovies } from "react-icons/md";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { RiKakaoTalkLine } from "react-icons/ri";
import { PiVideoLight } from "react-icons/pi";

import { SlLike } from "react-icons/sl";
import { VscLibrary } from "react-icons/vsc";
import { MdOutlineUnsubscribe } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";

import { IoSettingsOutline } from "react-icons/io5";
import { LiaHandsHelpingSolid } from "react-icons/lia";

export const media: ILink[] = [
    {
        name:"Videos", url: "videos", info:"", icon: <PiVideoLight />
    },
    {
        name:"Movies & Shows", info:"", url: "movies_shows", icon: <MdOutlineLocalMovies className="rotate-90" />
    },
    {
        name:"Premium Content", info:"", url: "premium", icon: <MdOutlineWorkspacePremium />
    },
    {
        name:"Live", url: "live", info:"", icon: <RiKakaoTalkLine />
    },
]

export const info: ILink[] = [
    {
        name:"Subscriptions", info:"29 new", url: "subscriptions", icon: <MdOutlineUnsubscribe />
    },
    {
        name:"Library", info:"", url: "library", icon: <VscLibrary />
    },
    {
        name:"Liked videos", info:"", url: "liked_videos", icon: <SlLike />
    },
    {
        name:"Watch Later", info:"", url: "watch_later", icon: <GiSandsOfTime />
    },
]

export const settings: ILink[] = [
    {
        name:"Settings", info:"", url: "settings", icon: <IoSettingsOutline />
    },
    {
        name:"Help & Report", info:"", url: "help", icon: <LiaHandsHelpingSolid />
    },

]