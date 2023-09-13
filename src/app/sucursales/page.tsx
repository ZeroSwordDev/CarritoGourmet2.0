import SucursalesView from "@/components/SucursalesView";
import { sucursales } from "@/data";

export default function Example() {
  return (
    <>
      {sucursales?.map((item) => (
        <SucursalesView key={item.id} sucursales={item} />
      ))}
    </>
  );
}
