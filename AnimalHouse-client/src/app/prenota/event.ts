export interface Event {
    "Subject": string,
    "StartTime": Date,
    "EndTime": Date,
    "IsBlock": boolean,
    "IsAllDay": boolean,
    "RecurrenceRule": string
}