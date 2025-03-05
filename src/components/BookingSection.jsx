import React from "react";
import { BookingCard } from "./BookingCard"; // Путь к компоненту с карточкой

export function BookingSection() {
  return (
    <section className="p-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 pl-50 px-24">
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
        <BookingCard />
      </div>
    </section>
  );
}
