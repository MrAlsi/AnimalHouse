import { Event } from "./event"

export const arrayGiorni: Event[] = [
    { Subject: "Non disponibile",                   //Lunedì
      StartTime: new Date (2022, 0, 3), 
      EndTime: new Date (2022, 0, 3), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Martedì
      StartTime: new Date (2022, 0, 4), 
      EndTime: new Date (2022, 0, 4), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Mercoledì
      StartTime: new Date (2022, 0, 5), 
      EndTime: new Date (2022, 0, 5), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Giovedì
      StartTime: new Date (2022, 0, 6), 
      EndTime: new Date (2022, 0, 6), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Venerdì
      StartTime: new Date (2022, 0, 7), 
      EndTime: new Date (2022, 0, 7), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Sabato
      StartTime: new Date (2022, 0, 8), 
      EndTime: new Date (2022, 0, 8), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"},
      { Subject: "Non disponibile",                 //Domenica
      StartTime: new Date (2022, 0, 9), 
      EndTime: new Date (2022, 0, 9), 
      IsBlock: true, 
      IsAllDay: true, 
      RecurrenceRule: "FREQ=WEEKLY; INTERVAL=1"}
  ];