import Text "mo:core/Text";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Order "mo:core/Order";

actor {
  type MessageId = Nat;
  var nextMessageId = 0;

  type Message = {
    id : MessageId;
    timestamp : Int;
    name : Text;
    phone : Text;
    email : Text;
    serviceType : Text;
    message : Text;
  };

  module Message {
    public func compareByTimestamp(a : Message, b : Message) : Order.Order {
      Int.compare(a.timestamp, b.timestamp);
    };
  };

  let messages = Map.empty<MessageId, Message>();

  public shared ({ caller }) func submitMessage(name : Text, phone : Text, email : Text, serviceType : Text, message : Text, timestamp : Int) : async () {
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
