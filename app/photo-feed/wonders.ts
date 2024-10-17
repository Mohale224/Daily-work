import { StaticImageData } from "next/image";
import photo1 from "./Screen1/1.jpg";
import photo2 from "./Screen2/2.jpg";
import photo3 from "./Screen3/3.jpg";
import photo4 from "./Screen4/4.jpg";
import photo5 from "./Screen5/5.jpg";
import photo6 from "./Screen6/6.jpg";
import photo7 from "./Screen7/7.jpg";

export type WonderImage = {
    id: string;
    name: string;
    src: StaticImageData;
    photographer: string;
    location: string;
};

const wondersImages: WonderImage[] = [
    {
        id: "1",
        name: "Mount Fuji",
        src: photo1,
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
    {
        id: "2",
        name: "Mount Fuji",
        src: photo2,
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
    {
        id: "3",
        name: "Mount Fuji",
        src: photo3,
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
    {
        id: "4",
        name: "Mount Fuji",
        src: photo4,    
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
    {
        id: "5",        
        name: "Mount Fuji",
        src: photo5,
        photographer: "Hidetoshi Hara", 
        location: "Japan",
    },
    {
        id: "6",
        name: "Mount Fuji",
        src: photo6,
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
    {
        id: "7",
        name: "Mount Fuji",
        src: photo7,
        photographer: "Hidetoshi Hara",
        location: "Japan",
    },
]