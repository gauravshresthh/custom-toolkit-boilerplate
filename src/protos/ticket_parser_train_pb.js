// source: ticket_parser_train.proto
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

var treeleaf_pb = require('./treeleaf_pb.js');
goog.object.extend(proto, treeleaf_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TicketTrainRequest', null, global);
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
proto.treeleaf.anydone.entities.TicketTrainRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TicketTrainRequest.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketTrainRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketTrainRequest.displayName = 'proto.treeleaf.anydone.entities.TicketTrainRequest';
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
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.displayName = 'proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.repeatedFields_ = [4];



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
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketTrainRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketTrainRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    language: jspb.Message.getFieldWithDefault(msg, 2, ""),
    basemodelcategory: jspb.Message.getFieldWithDefault(msg, 3, ""),
    possibletickettextsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    accountid: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketTrainRequest;
  return proto.treeleaf.anydone.entities.TicketTrainRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketTrainRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasemodelcategory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addPossibletickettexts(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
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
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketTrainRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketTrainRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getBasemodelcategory();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPossibletickettextsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string serviceId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string language = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string baseModelCategory = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.getBasemodelcategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.setBasemodelcategory = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string possibleTicketTexts = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.getPossibletickettextsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.setPossibletickettextsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.addPossibletickettexts = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.clearPossibletickettextsList = function() {
  return this.setPossibletickettextsList([]);
};


/**
 * optional string accountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketTrainRequest} returns this
 */
proto.treeleaf.anydone.entities.TicketTrainRequest.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    serviceid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    basemodelcategory: jspb.Message.getFieldWithDefault(msg, 2, ""),
    completedat: jspb.Message.getFieldWithDefault(msg, 4, 0),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    bucketname: jspb.Message.getFieldWithDefault(msg, 6, ""),
    trainedmodelname: jspb.Message.getFieldWithDefault(msg, 7, ""),
    downloadpath: jspb.Message.getFieldWithDefault(msg, 8, ""),
    lasttrained: jspb.Message.getFieldWithDefault(msg, 9, 0),
    timetakentotrain: jspb.Message.getFieldWithDefault(msg, 10, 0),
    accountid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    error: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    msg: jspb.Message.getFieldWithDefault(msg, 13, ""),
    errorcode: jspb.Message.getFieldWithDefault(msg, 14, 0),
    success: jspb.Message.getBooleanFieldWithDefault(msg, 15, false)
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
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent;
  return proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setServiceid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setBasemodelcategory(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCompletedat(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBucketname(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrainedmodelname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadpath(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLasttrained(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimetakentotrain(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setError(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 14:
      var value = /** @type {!proto.treeleaf.protos.ErrorCode} */ (reader.readEnum());
      msg.setErrorcode(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getServiceid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBasemodelcategory();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCompletedat();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBucketname();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTrainedmodelname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDownloadpath();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getLasttrained();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getTimetakentotrain();
  if (f !== 0) {
    writer.writeInt64(
      10,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getError();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getMsg();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getErrorcode();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
};


/**
 * optional string serviceId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getServiceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setServiceid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string baseModelCategory = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getBasemodelcategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setBasemodelcategory = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 completedAt = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getCompletedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setCompletedat = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string bucketName = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getBucketname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setBucketname = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string trainedModelName = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getTrainedmodelname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setTrainedmodelname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string downloadPath = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getDownloadpath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setDownloadpath = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 lastTrained = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getLasttrained = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setLasttrained = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional int64 timeTakenToTrain = 10;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getTimetakentotrain = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setTimetakentotrain = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional string accountId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool error = 12;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getError = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setError = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string msg = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setMsg = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional treeleaf.protos.ErrorCode errorCode = 14;
 * @return {!proto.treeleaf.protos.ErrorCode}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getErrorcode = function() {
  return /** @type {!proto.treeleaf.protos.ErrorCode} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.treeleaf.protos.ErrorCode} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setErrorcode = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional bool success = 15;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent} returns this
 */
proto.treeleaf.anydone.entities.TicketParserTrainingCompleteEvent.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


goog.object.extend(exports, proto.treeleaf.anydone.entities);
