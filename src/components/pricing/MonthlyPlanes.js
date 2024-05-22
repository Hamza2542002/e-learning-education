import { useData } from "../../context/DataContext";
import { Card } from "../Pricing";

function MonthlyPlanes() {
  const { Monthlyplanes } = useData();
  return (
    <>
      <Card
        features={Monthlyplanes.planes[0]}
        price={0}
        type={"Free Planes"}
        plan={Monthlyplanes.type}
      />
      <Card
        features={Monthlyplanes.planes[1]}
        price={79}
        type={"Pro Planes"}
        plan={Monthlyplanes.type}
      />
    </>
  );
}

export default MonthlyPlanes;
