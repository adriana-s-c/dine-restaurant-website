import { DescriptionPartOne } from "./DescriptionPartOne";
import { DescriptionPartTwo } from "./DescriptionPartTwo";
import { EventType } from "./EventType";
import { Header } from "./Header";
import { MenuHighlights } from "./MenuHighlights";
import { ReservationComponent } from "./ReservationComponent";
export function HomePage() {
  return (
    <div>
      <Header />
      <DescriptionPartOne />
      <DescriptionPartTwo />
      <MenuHighlights />
      <EventType />
      <ReservationComponent />
    </div>
  );
}
