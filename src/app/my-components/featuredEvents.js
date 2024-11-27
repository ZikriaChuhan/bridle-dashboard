import EventImg1 from "../images/events-img-1.jpg"
import EventImg2 from "../images/events-img-2.avif"
import { BiTargetLock } from "react-icons/bi";
import { TbCalendarStar } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";



export default function FeaturedEvents() {
    return (
        <>
            <section className=" text-xl font-medium px-10 pt-4 pb-10 ">
                <h3>Featured Events</h3>
                <div className=" flex justify-evenly mt-3 gap-2">

                <Carousel className=" m-3 ml-0 ">
                    <CarouselContent>
                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <div className=" flex justify-center items-start  rounded-md border-2 border-slate-700 ">
                        <Image src={EventImg1} width={80} height={100} alt="Event image 1" />
                        <div className="ml-2 flex flex-col gap-1 py-1">
                            <h3 className=" leading-5 text-lg max-w-44">
                                Underground Bull Riders Membership
                            </h3>
                            <p className=" flex text-sm items-center"><BiTargetLock /> Bull Ring</p>
                            <p className=" flex text-sm items-center"><TbCalendarStar />Jan 1 - Dec 31, 2...</p>
                        </div>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="a" className="m-1 border-2 rounded-md border-slate-400"><CiBookmark /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <div className=" flex justify-center items-start  rounded-md border-2 border-slate-700 ">
                        <Image src={EventImg2} width={80} height={100} alt="Event image 2" />
                        <div className="ml-2 flex flex-col gap-1 py-1">
                            <h3 className=" leading-5 text-lg max-w-44">
                                Underground Bull Riders Membership
                            </h3>
                            <p className=" flex text-sm items-center"><BiTargetLock /> Bull Ring</p>
                            <p className=" flex text-sm items-center"><TbCalendarStar />Jan 1 - Dec 31, 2...</p>
                        </div>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="a" className="m-1 border-2 rounded-md border-slate-400"><CiBookmark /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <div className=" flex justify-center items-start  rounded-md border-2 border-slate-700 ">
                        <Image src={EventImg1} width={80} height={100} alt="Event image 1" />
                        <div className="ml-2 flex flex-col gap-1 py-1">
                            <h3 className=" leading-5 text-lg max-w-44">
                                Underground Bull Riders Membership
                            </h3>
                            <p className=" flex text-sm items-center"><BiTargetLock /> Bull Ring</p>
                            <p className=" flex text-sm items-center"><TbCalendarStar />Jan 1 - Dec 31, 2...</p>
                        </div>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="a" className="m-1 border-2 rounded-md border-slate-400"><CiBookmark /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <div className=" flex justify-center items-start  rounded-md border-2 border-slate-700 ">
                        <Image src={EventImg2} width={80} height={100} alt="Event image 2" />
                        <div className="ml-2 flex flex-col gap-1 py-1">
                            <h3 className=" leading-5 text-lg max-w-44">
                                Underground Bull Riders Membership
                            </h3>
                            <p className=" flex text-sm items-center"><BiTargetLock /> Bull Ring</p>
                            <p className=" flex text-sm items-center"><TbCalendarStar />Jan 1 - Dec 31, 2...</p>
                        </div>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="a" className="m-1 border-2 rounded-md border-slate-400"><CiBookmark /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                        </CarouselItem>

                        <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                        <div className=" flex justify-center items-start  rounded-md border-2 border-slate-700 ">
                        <Image src={EventImg1} width={80} height={100} alt="Event image 1" />
                        <div className="ml-2 flex flex-col gap-1 py-1">
                            <h3 className=" leading-5 text-lg max-w-44">
                                Underground Bull Riders Membership
                            </h3>
                            <p className=" flex text-sm items-center"><BiTargetLock /> Bull Ring</p>
                            <p className=" flex text-sm items-center"><TbCalendarStar />Jan 1 - Dec 31, 2...</p>
                        </div>
                        <ToggleGroup type="single">
                            <ToggleGroupItem value="a" className="m-1 border-2 rounded-md border-slate-400"><CiBookmark /></ToggleGroupItem>
                        </ToggleGroup>
                    </div>
                        </CarouselItem>
                        
                    </CarouselContent>
                   
                    <CarouselNext />
                </Carousel>

                </div>

                

            </section>
        </>
    );
}