import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import FeaturedEvents from "./featuredEvents";

export default function Tab() {
    return (
        <>
            <Tabs defaultValue="account" className="w-full">
                <TabsList className="px-3 pl-10 w-full justify-start">
                    <TabsTrigger value="account">All Events</TabsTrigger>
                    <TabsTrigger value="password">Saved Events</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                    <FeaturedEvents />
                </TabsContent>
                <TabsContent value="password"></TabsContent>
            </Tabs>
        </>
    );
}
