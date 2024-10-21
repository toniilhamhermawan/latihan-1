import FavColor from "./components/favColor";
import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatpendidikan";
// import FormKuis from "./components/formKuis";
import "./toni-style.css";

export default function MyApp() {
  return (
    <section>
      <Hero />
      <RiwayatPendidikan />
      {/* <FormKuis /> */}
      <FavColor/>
    </section>
  );
}