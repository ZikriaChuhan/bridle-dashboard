import './home-style.css'
import HeaderBanner from "./my-components/headerBanner";
import ListSection from './my-components/listSection';
import Tab from "./my-components/tab";

export default function Home() {
  return (
    <>
      <HeaderBanner />
      <Tab />
      <ListSection />
    </>
  );
}
