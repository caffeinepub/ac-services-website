import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Text "mo:core/Text";
import Runtime "mo:core/Runtime";

actor {
  // Types for bookings and messages
  type BookingId = Nat;
  type MessageId = Nat;
  var nextBookingId = 0;
  var nextMessageId = 0;

  type Booking = {
    id : BookingId;
    timestamp : Int;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : Text;
    preferredDate : Int;
    preferredTimeSlot : Text;
  };

  type Message = {
    id : MessageId;
    timestamp : Int;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : Text;
    message : Text;
  };

  let bookings = Map.empty<BookingId, Booking>();
  let messages = Map.empty<MessageId, Message>();

  // Booking Methods
  public shared ({ caller }) func submitBooking(
    name : Text,
    phone : Text,
    email : Text,
    serviceType : Text,
    preferredDate : Int,
    preferredTimeSlot : Text,
    timestamp : Int,
  ) : async () {
    // Validation
    if (name.isEmpty() or phone.isEmpty() or email.isEmpty() or serviceType.isEmpty() or preferredTimeSlot.isEmpty()) {
      Runtime.trap("All fields must be filled");
    };

    // Create booking
    let newBooking : Booking = {
      id = nextBookingId;
      timestamp;
      name;
      phone;
      email;
      serviceType;
      preferredDate;
      preferredTimeSlot;
    };

    bookings.add(nextBookingId, newBooking);
    nextBookingId += 1;
  };

  public query ({ caller }) func getAllBookings() : async [Booking] {
    bookings.values().toArray();
  };

  // Message Methods (unchanged)
  public shared ({ caller }) func submitMessage(
    name : Text,
    phone : Text,
    email : Text,
    serviceType : Text,
    message : Text,
    timestamp : Int,
  ) : async () {
    if (name.isEmpty() or phone.isEmpty() or email.isEmpty() or serviceType.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields must be filled");
    };

    let newMessage : Message = {
      id = nextMessageId;
      timestamp;
      name;
      phone;
      email;
      serviceType;
      message;
    };

    messages.add(nextMessageId, newMessage);
    nextMessageId += 1;
  };
};
