import { useData } from "../../context/DataContext";
import { Card } from "../Pricing";

function YearlyPlanes() {
  const { yearlyplanes } = useData();
  return (
    <>
      <Card
        features={yearlyplanes.planes[0]}
        price={0}
        type={"Free Planes"}
        plan={yearlyplanes.type}
      />
      <Card
        features={yearlyplanes.planes[1]}
        price={100}
        type={"Pro Planes"}
        plan={yearlyplanes.type}
      />
    </>
  );
}

export default YearlyPlanes;
