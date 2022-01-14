// source: calendar_rpc.proto
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

var auth_pb = require('./auth_pb.js');
goog.object.extend(proto, auth_pb);
var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
var calendar_pb = require('./calendar_pb.js');
goog.object.extend(proto, calendar_pb);
goog.exportSymbol('proto.treeleaf.anydone.rpc.CalendarBaseRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.rpc.CalendarBaseResponse', null, global);
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
proto.treeleaf.anydone.rpc.CalendarBaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.CalendarBaseRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.CalendarBaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.CalendarBaseRequest.displayName = 'proto.treeleaf.anydone.rpc.CalendarBaseRequest';
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
proto.treeleaf.anydone.rpc.CalendarBaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.rpc.CalendarBaseResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.rpc.CalendarBaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.rpc.CalendarBaseResponse.displayName = 'proto.treeleaf.anydone.rpc.CalendarBaseResponse';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.repeatedFields_ = [3];



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
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.CalendarBaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    stringvalue: jspb.Message.getFieldWithDefault(msg, 2, ""),
    stringvaluesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    intvalue: jspb.Message.getFieldWithDefault(msg, 4, 0),
    longvalue: jspb.Message.getFieldWithDefault(msg, 5, 0),
    boolvalue: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    doublevalue: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    authorization: (f = msg.getAuthorization()) && auth_pb.Authorization.toObject(includeInstance, f),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    filter: (f = msg.getFilter()) && calendar_pb.MeetFilter.toObject(includeInstance, f),
    meetrequest: (f = msg.getMeetrequest()) && calendar_pb.MeetRequest.toObject(includeInstance, f),
    guestfilter: (f = msg.getGuestfilter()) && calendar_pb.GuestFilter.toObject(includeInstance, f),
    bytesvalue: msg.getBytesvalue_asB64(),
    syncgooglecalendarrequest: (f = msg.getSyncgooglecalendarrequest()) && calendar_pb.SyncGoogleCalendarRequest.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.CalendarBaseRequest;
  return proto.treeleaf.anydone.rpc.CalendarBaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStringvalue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addStringvalues(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setIntvalue(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLongvalue(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setBoolvalue(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDoublevalue(value);
      break;
    case 8:
      var value = new auth_pb.Authorization;
      reader.readMessage(value,auth_pb.Authorization.deserializeBinaryFromReader);
      msg.setAuthorization(value);
      break;
    case 9:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 10:
      var value = new calendar_pb.MeetFilter;
      reader.readMessage(value,calendar_pb.MeetFilter.deserializeBinaryFromReader);
      msg.setFilter(value);
      break;
    case 11:
      var value = new calendar_pb.MeetRequest;
      reader.readMessage(value,calendar_pb.MeetRequest.deserializeBinaryFromReader);
      msg.setMeetrequest(value);
      break;
    case 12:
      var value = new calendar_pb.GuestFilter;
      reader.readMessage(value,calendar_pb.GuestFilter.deserializeBinaryFromReader);
      msg.setGuestfilter(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesvalue(value);
      break;
    case 14:
      var value = new calendar_pb.SyncGoogleCalendarRequest;
      reader.readMessage(value,calendar_pb.SyncGoogleCalendarRequest.deserializeBinaryFromReader);
      msg.setSyncgooglecalendarrequest(value);
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
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.CalendarBaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStringvalue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStringvaluesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getIntvalue();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLongvalue();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getBoolvalue();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getDoublevalue();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getAuthorization();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      auth_pb.Authorization.serializeBinaryToWriter
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getFilter();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      calendar_pb.MeetFilter.serializeBinaryToWriter
    );
  }
  f = message.getMeetrequest();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      calendar_pb.MeetRequest.serializeBinaryToWriter
    );
  }
  f = message.getGuestfilter();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      calendar_pb.GuestFilter.serializeBinaryToWriter
    );
  }
  f = message.getBytesvalue_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getSyncgooglecalendarrequest();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      calendar_pb.SyncGoogleCalendarRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stringValue = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getStringvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setStringvalue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string stringValues = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getStringvaluesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setStringvaluesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.addStringvalues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearStringvaluesList = function() {
  return this.setStringvaluesList([]);
};


/**
 * optional int32 intValue = 4;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getIntvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setIntvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 longValue = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getLongvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setLongvalue = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool boolValue = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getBoolvalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setBoolvalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool doubleValue = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getDoublevalue = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setDoublevalue = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional treeleaf.anydone.entities.Authorization authorization = 8;
 * @return {?proto.treeleaf.anydone.entities.Authorization}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getAuthorization = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Authorization} */ (
    jspb.Message.getWrapperField(this, auth_pb.Authorization, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Authorization|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setAuthorization = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearAuthorization = function() {
  return this.setAuthorization(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasAuthorization = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional treeleaf.protos.Debug debug = 9;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 9));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional treeleaf.anydone.entities.MeetFilter filter = 10;
 * @return {?proto.treeleaf.anydone.entities.MeetFilter}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getFilter = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetFilter} */ (
    jspb.Message.getWrapperField(this, calendar_pb.MeetFilter, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetFilter|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setFilter = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearFilter = function() {
  return this.setFilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional treeleaf.anydone.entities.MeetRequest meetRequest = 11;
 * @return {?proto.treeleaf.anydone.entities.MeetRequest}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getMeetrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MeetRequest} */ (
    jspb.Message.getWrapperField(this, calendar_pb.MeetRequest, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MeetRequest|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setMeetrequest = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearMeetrequest = function() {
  return this.setMeetrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasMeetrequest = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional treeleaf.anydone.entities.GuestFilter guestFilter = 12;
 * @return {?proto.treeleaf.anydone.entities.GuestFilter}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getGuestfilter = function() {
  return /** @type{?proto.treeleaf.anydone.entities.GuestFilter} */ (
    jspb.Message.getWrapperField(this, calendar_pb.GuestFilter, 12));
};


/**
 * @param {?proto.treeleaf.anydone.entities.GuestFilter|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setGuestfilter = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearGuestfilter = function() {
  return this.setGuestfilter(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasGuestfilter = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional bytes bytesValue = 13;
 * @return {!(string|Uint8Array)}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getBytesvalue = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes bytesValue = 13;
 * This is a type-conversion wrapper around `getBytesvalue()`
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getBytesvalue_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesvalue()));
};


/**
 * optional bytes bytesValue = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesvalue()`
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getBytesvalue_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesvalue()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setBytesvalue = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional treeleaf.anydone.entities.SyncGoogleCalendarRequest syncGoogleCalendarRequest = 14;
 * @return {?proto.treeleaf.anydone.entities.SyncGoogleCalendarRequest}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.getSyncgooglecalendarrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SyncGoogleCalendarRequest} */ (
    jspb.Message.getWrapperField(this, calendar_pb.SyncGoogleCalendarRequest, 14));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SyncGoogleCalendarRequest|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.setSyncgooglecalendarrequest = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseRequest} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.clearSyncgooglecalendarrequest = function() {
  return this.setSyncgooglecalendarrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseRequest.prototype.hasSyncgooglecalendarrequest = function() {
  return jspb.Message.getField(this, 14) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.repeatedFields_ = [12,13];



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
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.rpc.CalendarBaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    error: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    msg: jspb.Message.getFieldWithDefault(msg, 2, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 3, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    timestamp: jspb.Message.getFieldWithDefault(msg, 5, 0),
    debug: (f = msg.getDebug()) && treeleaf_pb.Debug.toObject(includeInstance, f),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    next: jspb.Message.getFieldWithDefault(msg, 9, ""),
    count: jspb.Message.getFieldWithDefault(msg, 10, 0),
    meet: (f = msg.getMeet()) && calendar_pb.Meet.toObject(includeInstance, f),
    meetsList: jspb.Message.toObjectList(msg.getMeetsList(),
    calendar_pb.Meet.toObject, includeInstance),
    guestList: jspb.Message.toObjectList(msg.getGuestList(),
    calendar_pb.MeetParticipant.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.rpc.CalendarBaseResponse;
  return proto.treeleaf.anydone.rpc.CalendarBaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.protos.ErrorCode} */ (reader.readEnum());
      msg.setErrorcode(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 6:
      var value = new treeleaf_pb.Debug;
      reader.readMessage(value,treeleaf_pb.Debug.deserializeBinaryFromReader);
      msg.setDebug(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNext(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCount(value);
      break;
    case 11:
      var value = new calendar_pb.Meet;
      reader.readMessage(value,calendar_pb.Meet.deserializeBinaryFromReader);
      msg.setMeet(value);
      break;
    case 12:
      var value = new calendar_pb.Meet;
      reader.readMessage(value,calendar_pb.Meet.deserializeBinaryFromReader);
      msg.addMeets(value);
      break;
    case 13:
      var value = new calendar_pb.MeetParticipant;
      reader.readMessage(value,calendar_pb.MeetParticipant.deserializeBinaryFromReader);
      msg.addGuest(value);
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
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.rpc.CalendarBaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getError();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getErrorcode();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getDebug();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      treeleaf_pb.Debug.serializeBinaryToWriter
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getNext();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getMeet();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      calendar_pb.Meet.serializeBinaryToWriter
    );
  }
  f = message.getMeetsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      calendar_pb.Meet.serializeBinaryToWriter
    );
  }
  f = message.getGuestList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      calendar_pb.MeetParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool error = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string msg = 2;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 3;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional bool success = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int64 timestamp = 5;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional treeleaf.protos.Debug debug = 6;
 * @return {?proto.treeleaf.protos.Debug}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getDebug = function() {
  return /** @type{?proto.treeleaf.protos.Debug} */ (
    jspb.Message.getWrapperField(this, treeleaf_pb.Debug, 6));
};


/**
 * @param {?proto.treeleaf.protos.Debug|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setDebug = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.clearDebug = function() {
  return this.setDebug(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.hasDebug = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string next = 9;
 * @return {string}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getNext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setNext = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int64 count = 10;
 * @return {number}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional treeleaf.anydone.entities.Meet meet = 11;
 * @return {?proto.treeleaf.anydone.entities.Meet}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getMeet = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Meet} */ (
    jspb.Message.getWrapperField(this, calendar_pb.Meet, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Meet|undefined} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setMeet = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.clearMeet = function() {
  return this.setMeet(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.hasMeet = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated treeleaf.anydone.entities.Meet meets = 12;
 * @return {!Array<!proto.treeleaf.anydone.entities.Meet>}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getMeetsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Meet>} */ (
    jspb.Message.getRepeatedWrapperField(this, calendar_pb.Meet, 12));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Meet>} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setMeetsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Meet=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Meet}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.addMeets = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.treeleaf.anydone.entities.Meet, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.clearMeetsList = function() {
  return this.setMeetsList([]);
};


/**
 * repeated treeleaf.anydone.entities.MeetParticipant guest = 13;
 * @return {!Array<!proto.treeleaf.anydone.entities.MeetParticipant>}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.getGuestList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.MeetParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, calendar_pb.MeetParticipant, 13));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.MeetParticipant>} value
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
*/
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.setGuestList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.MeetParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.MeetParticipant}
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.addGuest = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.treeleaf.anydone.entities.MeetParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.rpc.CalendarBaseResponse} returns this
 */
proto.treeleaf.anydone.rpc.CalendarBaseResponse.prototype.clearGuestList = function() {
  return this.setGuestList([]);
};


goog.object.extend(exports, proto.treeleaf.anydone.rpc);
