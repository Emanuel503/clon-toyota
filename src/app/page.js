import SectionBeyond from './components/SectionBeyond';
import SectionDiscover from './components/SectionDiscover';
import SectionExplore from './components/SectionExplore';
import SectionGuide from './components/SectionGuide';
import SectionHeader from './components/SectionHeader';
import SectionVideo from './components/SectionVideo';

export default function Home() {
  return (
    <main>
        <SectionHeader/>

        <SectionExplore/>

        <SectionVideo/>

        <SectionGuide/>

        <SectionBeyond/>

        <SectionDiscover/>
    </main>
  );
}
