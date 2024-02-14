import Nav from './components/Nav';
import SectionExplore from './components/SectionExplore';
import SectionGuide from './components/SectionGuide';
import SectionHeader from './components/SectionHeader';
import SectionVideo from './components/SectionVideo';

export default function Home() {
  return (
    <main>
        <Nav/>

        <SectionHeader/>

        <SectionExplore/>

        <SectionVideo/>

        <SectionGuide/>
    </main>
  );
}
