/**
 * In this challenge, you should compute a week planning split in 1 hour slots
 * and including existing events. To keep it simple, don't work with Dates!
 * Be carefull with leading 0!
 *
 * Example:
 * Input: [{ day: "Monday", startTime: "09:00", endTime: "11:00", name: "First work day!" }]
 * Output: [
 *     { day: "Monday", startTime: "00:00", "endTime": "01:00"},
 *     { day: "Monday", startTime: "01:00", "endTime": "02:00"},
 *     ...,
 *     { day: "Monday", startTime: "09:00", "endTime": "10:00", event: [Object] },
 *     { day: "Monday", startTime: "10:00", "endTime": "11:00", event: [Object] },
 *     { day: "Monday", startTime: "11:00", "endTime": "12:00" },
 *     ...,
 *     { day: "Sunday", startTime: "23:00", "endTime": "00:00" },
 * ]
 *
 * @param events List of event to add on the planning
 * @returns List of planning slots, from Monday 00:00 to Sunday 00:00, 1 hour each slot
 */

// ↓ uncomment bellow lines and add your response!
export default function weekPlanning({
  events,
}: {
  events: Event[];
}): PlanningSlot[] {
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const slots: PlanningSlot[] = [];

  // Generate all the slots for each day of the week
  for (const day of days) {
    for (let hour = 0; hour < 24; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

      slots.push({ day, startTime, endTime });
    }
  }

  // Add events to the corresponding slots
  for (const event of events) {
    const startHour = parseInt(event.startTime.slice(0, 2));
    const endHour = parseInt(event.endTime.slice(0, 2));

    for (let hour = startHour; hour < endHour; hour++) {
      const startTime = `${hour.toString().padStart(2, "0")}:00`;
      const endTime = `${(hour + 1).toString().padStart(2, "0")}:00`;

      const slot = slots.find(
        (s) => s.day === event.day && s.startTime === startTime
      );

      if (slot) {
        slot.event = event;
        slot.endTime = endTime;
      }
    }
  }

  return slots;
}

// used interfaces, do not touch
export interface Event {
  day: string;
  startTime: string;
  endTime: string;
  name: string;
}

export interface PlanningSlot {
  day: string;
  startTime: string;
  endTime: string;
  event?: Event;
}
