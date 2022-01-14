// source: ticket_parser.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.treeleaf.anydone.entities.TicketParserRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketParserResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketParserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketParserRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketParserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketParserRequest.displayName = 'proto.treeleaf.anydone.entities.TicketParserRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.treeleaf.anydone.entities.TicketParserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketParserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketParserResponse.displayName = 'proto.treeleaf.anydone.entities.TicketParserResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketParserRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketParserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketParserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    conversationtext: jspb.Message.getFieldWithDefault(msg, 1, ""),
    serviceid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    language: jspb.Message.getFieldWithDefault(msg, 3, ""),
    previousmsgsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    conversationid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    category: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketParserRequest;
  return proto.treeleaf.anydone.entities.TicketParserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketParserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationtext(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPreviousmsgs(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketParserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketParserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getConversationtext();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPreviousmsgsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string conversationText = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getConversationtext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setConversationtext = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string serviceId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string language = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string previousMsgs = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getPreviousmsgsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setPreviousmsgsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.addPreviousmsgs = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.clearPreviousmsgsList = function() {
  return this.setPreviousmsgsList([]);
};


/**
 * optional string conversationId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string category = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketParserRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketParserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketParserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ispossibleticket: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    probability: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.treeleaf.anydone.entities.TicketParserResponse}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketParserResponse;
  return proto.treeleaf.anydone.entities.TicketParserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketParserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketParserResponse}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIspossibleticket(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setProbability(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketParserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketParserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIspossibleticket();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getProbability();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional bool isPossibleTicket = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.getIspossibleticket = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserResponse} returns this
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.setIspossibleticket = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional float probability = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.getProbability = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserResponse} returns this
 */
proto.treeleaf.anydone.entities.TicketParserResponse.prototype.setProbability = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
