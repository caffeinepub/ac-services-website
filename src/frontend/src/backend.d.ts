import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export type BookingId = bigint;
export interface Booking {
    id: BookingId;
    serviceType: string;
    name: string;
    email: string;
    preferredTimeSlot: string;
    preferredDate: bigint;
    timestamp: bigint;
    phone: string;
}
export interface backendInterface {
    getAllBookings(): Promise<Array<Booking>>;
    submitBooking(name: string, phone: string, email: string, serviceType: string, preferredDate: bigint, preferredTimeSlot: string, timestamp: bigint): Promise<void>;
    submitMessage(name: string, phone: string, email: string, serviceType: string, message: string, timestamp: bigint): Promise<void>;
}
