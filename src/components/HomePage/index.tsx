import { Description } from "./Description/";
import { EventType } from "./EventType";
import { Header } from "./Header";
import { MenuHighlights } from "./MenuHighlights";
import { ReservationComponent } from "./ReservationComponent";
export function HomePage() {
  return (
    <div>
      <Header />
      <Description />
      <MenuHighlights />
      <EventType />
      <ReservationComponent />
    </div>
  );
}
