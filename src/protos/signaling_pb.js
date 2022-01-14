// source: signaling.proto
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

var user_pb = require('./user_pb.js');
goog.object.extend(proto, user_pb);
var anydone_pb = require('./anydone_pb.js');
goog.object.extend(proto, anydone_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.AddCallParticipant', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.AvConnectDetails', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.BroadcastVideoCall', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallAccepted', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallEnd', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallParticipant', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CallTransferredLog', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CancelDrawing', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.CreateRtcSessionReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawCanvasClear', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawClose', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawCollab', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawCollabAcknowledgement', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawEnd', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawMaximize', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawMetaData', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawMetaDataChange', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawMinize', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawStart', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawTouchDown', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawTouchMove', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.DrawTouchUp', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Jsep', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MaxDrawingExceed', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MuteParticipant', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ParticipantLeft', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PointerStart', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.PollEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Position', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ReceiveNewTextField', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ReceiverCallDeclined', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcCredential', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcPayloadWrapper', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcProvider', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcSession', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.RtcSessionType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.StartDraw', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.StartDrawAcknowledgement', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TextFieldChange', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TextFieldRemove', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TransferCall', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TransferCall.TransferCallType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.TrickleRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoCallEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoCallEvent.EventType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoCallJoinRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoCallJoinResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoRoomHostLeft', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoRoomPublishReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoRoomSubscribeReq', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.VideoToggle', null, global);
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
proto.treeleaf.anydone.entities.CreateRtcSessionReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CreateRtcSessionReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CreateRtcSessionReq.displayName = 'proto.treeleaf.anydone.entities.CreateRtcSessionReq';
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
proto.treeleaf.anydone.entities.RtcSession = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcSession, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcSession.displayName = 'proto.treeleaf.anydone.entities.RtcSession';
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
proto.treeleaf.anydone.entities.RtcPayloadWrapper = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcPayloadWrapper, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcPayloadWrapper.displayName = 'proto.treeleaf.anydone.entities.RtcPayloadWrapper';
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
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoRoomSubscribeReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.displayName = 'proto.treeleaf.anydone.entities.VideoRoomSubscribeReq';
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
proto.treeleaf.anydone.entities.VideoRoomPublishReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoRoomPublishReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoRoomPublishReq.displayName = 'proto.treeleaf.anydone.entities.VideoRoomPublishReq';
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
proto.treeleaf.anydone.entities.Jsep = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Jsep, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Jsep.displayName = 'proto.treeleaf.anydone.entities.Jsep';
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
proto.treeleaf.anydone.entities.TrickleRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TrickleRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TrickleRequest.displayName = 'proto.treeleaf.anydone.entities.TrickleRequest';
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
proto.treeleaf.anydone.entities.PollEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PollEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PollEvent.displayName = 'proto.treeleaf.anydone.entities.PollEvent';
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
proto.treeleaf.anydone.entities.AvConnectDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AvConnectDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AvConnectDetails.displayName = 'proto.treeleaf.anydone.entities.AvConnectDetails';
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
proto.treeleaf.anydone.entities.RtcCredential = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.RtcCredential, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.RtcCredential.displayName = 'proto.treeleaf.anydone.entities.RtcCredential';
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
proto.treeleaf.anydone.entities.BroadcastVideoCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.BroadcastVideoCall.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.BroadcastVideoCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.BroadcastVideoCall.displayName = 'proto.treeleaf.anydone.entities.BroadcastVideoCall';
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
proto.treeleaf.anydone.entities.CallParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CallParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CallParticipant.displayName = 'proto.treeleaf.anydone.entities.CallParticipant';
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
proto.treeleaf.anydone.entities.VideoCallJoinResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.VideoCallJoinResponse.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoCallJoinResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoCallJoinResponse.displayName = 'proto.treeleaf.anydone.entities.VideoCallJoinResponse';
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
proto.treeleaf.anydone.entities.VideoCallJoinRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoCallJoinRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoCallJoinRequest.displayName = 'proto.treeleaf.anydone.entities.VideoCallJoinRequest';
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
proto.treeleaf.anydone.entities.VideoRoomHostLeft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.VideoRoomHostLeft.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoRoomHostLeft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoRoomHostLeft.displayName = 'proto.treeleaf.anydone.entities.VideoRoomHostLeft';
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
proto.treeleaf.anydone.entities.ParticipantLeft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ParticipantLeft.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ParticipantLeft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ParticipantLeft.displayName = 'proto.treeleaf.anydone.entities.ParticipantLeft';
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
proto.treeleaf.anydone.entities.Position = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Position, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Position.displayName = 'proto.treeleaf.anydone.entities.Position';
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
proto.treeleaf.anydone.entities.StartDraw = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.StartDraw.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.StartDraw, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.StartDraw.displayName = 'proto.treeleaf.anydone.entities.StartDraw';
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
proto.treeleaf.anydone.entities.StartDrawAcknowledgement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.StartDrawAcknowledgement.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.StartDrawAcknowledgement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.StartDrawAcknowledgement.displayName = 'proto.treeleaf.anydone.entities.StartDrawAcknowledgement';
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
proto.treeleaf.anydone.entities.CancelDrawing = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.CancelDrawing.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CancelDrawing, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CancelDrawing.displayName = 'proto.treeleaf.anydone.entities.CancelDrawing';
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
proto.treeleaf.anydone.entities.ReceiveNewTextField = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ReceiveNewTextField.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ReceiveNewTextField, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ReceiveNewTextField.displayName = 'proto.treeleaf.anydone.entities.ReceiveNewTextField';
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
proto.treeleaf.anydone.entities.TextFieldChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TextFieldChange.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TextFieldChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TextFieldChange.displayName = 'proto.treeleaf.anydone.entities.TextFieldChange';
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
proto.treeleaf.anydone.entities.TextFieldRemove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TextFieldRemove.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TextFieldRemove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TextFieldRemove.displayName = 'proto.treeleaf.anydone.entities.TextFieldRemove';
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
proto.treeleaf.anydone.entities.DrawTouchDown = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawTouchDown.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawTouchDown, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawTouchDown.displayName = 'proto.treeleaf.anydone.entities.DrawTouchDown';
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
proto.treeleaf.anydone.entities.DrawTouchMove = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawTouchMove.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawTouchMove, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawTouchMove.displayName = 'proto.treeleaf.anydone.entities.DrawTouchMove';
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
proto.treeleaf.anydone.entities.DrawTouchUp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawTouchUp.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawTouchUp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawTouchUp.displayName = 'proto.treeleaf.anydone.entities.DrawTouchUp';
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
proto.treeleaf.anydone.entities.DrawCanvasClear = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawCanvasClear.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawCanvasClear, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawCanvasClear.displayName = 'proto.treeleaf.anydone.entities.DrawCanvasClear';
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
proto.treeleaf.anydone.entities.DrawMetaDataChange = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawMetaDataChange.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawMetaDataChange, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawMetaDataChange.displayName = 'proto.treeleaf.anydone.entities.DrawMetaDataChange';
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
proto.treeleaf.anydone.entities.DrawMinize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawMinize.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawMinize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawMinize.displayName = 'proto.treeleaf.anydone.entities.DrawMinize';
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
proto.treeleaf.anydone.entities.DrawMaximize = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawMaximize.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawMaximize, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawMaximize.displayName = 'proto.treeleaf.anydone.entities.DrawMaximize';
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
proto.treeleaf.anydone.entities.DrawClose = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawClose.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawClose, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawClose.displayName = 'proto.treeleaf.anydone.entities.DrawClose';
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
proto.treeleaf.anydone.entities.DrawCollab = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawCollab.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawCollab, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawCollab.displayName = 'proto.treeleaf.anydone.entities.DrawCollab';
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
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawCollabAcknowledgement, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.displayName = 'proto.treeleaf.anydone.entities.DrawCollabAcknowledgement';
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
proto.treeleaf.anydone.entities.DrawStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawStart.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawStart.displayName = 'proto.treeleaf.anydone.entities.DrawStart';
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
proto.treeleaf.anydone.entities.DrawEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawEnd.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawEnd.displayName = 'proto.treeleaf.anydone.entities.DrawEnd';
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
proto.treeleaf.anydone.entities.DrawMetaData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.DrawMetaData.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.DrawMetaData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.DrawMetaData.displayName = 'proto.treeleaf.anydone.entities.DrawMetaData';
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
proto.treeleaf.anydone.entities.ReceiverCallDeclined = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ReceiverCallDeclined.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ReceiverCallDeclined, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ReceiverCallDeclined.displayName = 'proto.treeleaf.anydone.entities.ReceiverCallDeclined';
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
proto.treeleaf.anydone.entities.PointerStart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.PointerStart.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.PointerStart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.PointerStart.displayName = 'proto.treeleaf.anydone.entities.PointerStart';
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
proto.treeleaf.anydone.entities.MaxDrawingExceed = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.MaxDrawingExceed.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MaxDrawingExceed, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MaxDrawingExceed.displayName = 'proto.treeleaf.anydone.entities.MaxDrawingExceed';
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
proto.treeleaf.anydone.entities.AddCallParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.AddCallParticipant.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.AddCallParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.AddCallParticipant.displayName = 'proto.treeleaf.anydone.entities.AddCallParticipant';
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
proto.treeleaf.anydone.entities.MuteParticipant = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.MuteParticipant.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MuteParticipant, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MuteParticipant.displayName = 'proto.treeleaf.anydone.entities.MuteParticipant';
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
proto.treeleaf.anydone.entities.VideoToggle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.VideoToggle.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoToggle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoToggle.displayName = 'proto.treeleaf.anydone.entities.VideoToggle';
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
proto.treeleaf.anydone.entities.TransferCall = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.TransferCall.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.TransferCall, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.TransferCall.displayName = 'proto.treeleaf.anydone.entities.TransferCall';
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
proto.treeleaf.anydone.entities.CallTransferredLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CallTransferredLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CallTransferredLog.displayName = 'proto.treeleaf.anydone.entities.CallTransferredLog';
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
proto.treeleaf.anydone.entities.CallEnd = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.CallEnd.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CallEnd, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CallEnd.displayName = 'proto.treeleaf.anydone.entities.CallEnd';
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
proto.treeleaf.anydone.entities.VideoCallEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.VideoCallEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.VideoCallEvent.displayName = 'proto.treeleaf.anydone.entities.VideoCallEvent';
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
proto.treeleaf.anydone.entities.CallAccepted = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.CallAccepted.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.CallAccepted, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.CallAccepted.displayName = 'proto.treeleaf.anydone.entities.CallAccepted';
}



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
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CreateRtcSessionReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CreateRtcSessionReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcsessiontype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    isprivate: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.treeleaf.anydone.entities.CreateRtcSessionReq}
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CreateRtcSessionReq;
  return proto.treeleaf.anydone.entities.CreateRtcSessionReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CreateRtcSessionReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CreateRtcSessionReq}
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcSessionType} */ (reader.readEnum());
      msg.setRtcsessiontype(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprivate(value);
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
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CreateRtcSessionReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CreateRtcSessionReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcsessiontype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getIsprivate();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional RtcSessionType rtcSessionType = 1;
 * @return {!proto.treeleaf.anydone.entities.RtcSessionType}
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.getRtcsessiontype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcSessionType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcSessionType} value
 * @return {!proto.treeleaf.anydone.entities.CreateRtcSessionReq} returns this
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.setRtcsessiontype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional bool isPrivate = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.getIsprivate = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.CreateRtcSessionReq} returns this
 */
proto.treeleaf.anydone.entities.CreateRtcSessionReq.prototype.setIsprivate = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
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
proto.treeleaf.anydone.entities.RtcSession.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcSession.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcSession} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcSession.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    rtcprovider: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.RtcSession}
 */
proto.treeleaf.anydone.entities.RtcSession.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcSession;
  return proto.treeleaf.anydone.entities.RtcSession.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcSession} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcSession}
 */
proto.treeleaf.anydone.entities.RtcSession.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {!proto.treeleaf.anydone.entities.RtcProvider} */ (reader.readEnum());
      msg.setRtcprovider(value);
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
proto.treeleaf.anydone.entities.RtcSession.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcSession.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcSession} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcSession.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRtcprovider();
  if (f !== 0.0) {
    writer.writeEnum(
      2,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcSession.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcSession} returns this
 */
proto.treeleaf.anydone.entities.RtcSession.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional RtcProvider rtcProvider = 2;
 * @return {!proto.treeleaf.anydone.entities.RtcProvider}
 */
proto.treeleaf.anydone.entities.RtcSession.prototype.getRtcprovider = function() {
  return /** @type {!proto.treeleaf.anydone.entities.RtcProvider} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.RtcProvider} value
 * @return {!proto.treeleaf.anydone.entities.RtcSession} returns this
 */
proto.treeleaf.anydone.entities.RtcSession.prototype.setRtcprovider = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
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
proto.treeleaf.anydone.entities.RtcPayloadWrapper.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcPayloadWrapper.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcPayloadWrapper} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerpayload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.RtcPayloadWrapper}
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcPayloadWrapper;
  return proto.treeleaf.anydone.entities.RtcPayloadWrapper.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcPayloadWrapper} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcPayloadWrapper}
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderpayload(value);
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
proto.treeleaf.anydone.entities.RtcPayloadWrapper.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcPayloadWrapper.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcPayloadWrapper} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderpayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string providerPayload = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.prototype.getProviderpayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcPayloadWrapper} returns this
 */
proto.treeleaf.anydone.entities.RtcPayloadWrapper.prototype.setProviderpayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    publisherid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    audio: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    video: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    offeraudio: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    offervideo: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoRoomSubscribeReq;
  return proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPublisherid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAudio(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVideo(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOfferaudio(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOffervideo(value);
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
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPublisherid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAudio();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getVideo();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getOfferaudio();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getOffervideo();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string publisherId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.getPublisherid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.setPublisherid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool audio = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.getAudio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool video = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.getVideo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.setVideo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool offerAudio = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.getOfferaudio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.setOfferaudio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool offerVideo = 5;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.getOffervideo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomSubscribeReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomSubscribeReq.prototype.setOffervideo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
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
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoRoomPublishReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    audio: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    video: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    record: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.treeleaf.anydone.entities.VideoRoomPublishReq}
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoRoomPublishReq;
  return proto.treeleaf.anydone.entities.VideoRoomPublishReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomPublishReq}
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAudio(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setVideo(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRecord(value);
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
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoRoomPublishReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAudio();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getVideo();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRecord();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional bool audio = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.getAudio = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.setAudio = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool video = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.getVideo = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.setVideo = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool record = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.getRecord = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomPublishReq} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomPublishReq.prototype.setRecord = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.treeleaf.anydone.entities.Jsep.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Jsep.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Jsep} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Jsep.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sdp: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.Jsep}
 */
proto.treeleaf.anydone.entities.Jsep.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Jsep;
  return proto.treeleaf.anydone.entities.Jsep.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Jsep} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Jsep}
 */
proto.treeleaf.anydone.entities.Jsep.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSdp(value);
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
proto.treeleaf.anydone.entities.Jsep.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Jsep.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Jsep} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Jsep.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSdp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Jsep.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Jsep} returns this
 */
proto.treeleaf.anydone.entities.Jsep.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string sdp = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Jsep.prototype.getSdp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Jsep} returns this
 */
proto.treeleaf.anydone.entities.Jsep.prototype.setSdp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
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
proto.treeleaf.anydone.entities.TrickleRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TrickleRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TrickleRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TrickleRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    candidatepayload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.TrickleRequest}
 */
proto.treeleaf.anydone.entities.TrickleRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TrickleRequest;
  return proto.treeleaf.anydone.entities.TrickleRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TrickleRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TrickleRequest}
 */
proto.treeleaf.anydone.entities.TrickleRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCandidatepayload(value);
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
proto.treeleaf.anydone.entities.TrickleRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TrickleRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TrickleRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TrickleRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCandidatepayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string candidatePayload = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TrickleRequest.prototype.getCandidatepayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TrickleRequest} returns this
 */
proto.treeleaf.anydone.entities.TrickleRequest.prototype.setCandidatepayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.PollEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PollEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PollEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PollEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    providerpayload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.PollEvent}
 */
proto.treeleaf.anydone.entities.PollEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PollEvent;
  return proto.treeleaf.anydone.entities.PollEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PollEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PollEvent}
 */
proto.treeleaf.anydone.entities.PollEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProviderpayload(value);
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
proto.treeleaf.anydone.entities.PollEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PollEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PollEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PollEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProviderpayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string providerPayload = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PollEvent.prototype.getProviderpayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PollEvent} returns this
 */
proto.treeleaf.anydone.entities.PollEvent.prototype.setProviderpayload = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
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
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AvConnectDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AvConnectDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AvConnectDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    baseurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    apikey: jspb.Message.getFieldWithDefault(msg, 2, ""),
    apisecret: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.AvConnectDetails}
 */
proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AvConnectDetails;
  return proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AvConnectDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AvConnectDetails}
 */
proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBaseurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setApikey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setApisecret(value);
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
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AvConnectDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AvConnectDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AvConnectDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBaseurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getApikey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getApisecret();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string baseUrl = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.getBaseurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AvConnectDetails} returns this
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.setBaseurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string apiKey = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.getApikey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AvConnectDetails} returns this
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.setApikey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string apiSecret = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.getApisecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AvConnectDetails} returns this
 */
proto.treeleaf.anydone.entities.AvConnectDetails.prototype.setApisecret = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
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
proto.treeleaf.anydone.entities.RtcCredential.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.RtcCredential.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.RtcCredential} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcCredential.toObject = function(includeInstance, msg) {
  var f, obj = {
    broker: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.RtcCredential}
 */
proto.treeleaf.anydone.entities.RtcCredential.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.RtcCredential;
  return proto.treeleaf.anydone.entities.RtcCredential.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.RtcCredential} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.RtcCredential}
 */
proto.treeleaf.anydone.entities.RtcCredential.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setBroker(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
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
proto.treeleaf.anydone.entities.RtcCredential.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.RtcCredential.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.RtcCredential} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.RtcCredential.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBroker();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string broker = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.getBroker = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcCredential} returns this
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.setBroker = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcCredential} returns this
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.RtcCredential} returns this
 */
proto.treeleaf.anydone.entities.RtcCredential.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.BroadcastVideoCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.BroadcastVideoCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    avconnectdetails: (f = msg.getAvconnectdetails()) && proto.treeleaf.anydone.entities.AvConnectDetails.toObject(includeInstance, f),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    broadcasttype: jspb.Message.getFieldWithDefault(msg, 11, 0),
    pluginid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.BroadcastVideoCall;
  return proto.treeleaf.anydone.entities.BroadcastVideoCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.BroadcastVideoCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.AvConnectDetails;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinaryFromReader);
      msg.setAvconnectdetails(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 9:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 11:
      var value = /** @type {!proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType} */ (reader.readEnum());
      msg.setBroadcasttype(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginid(value);
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
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.BroadcastVideoCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.BroadcastVideoCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAvconnectdetails();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.AvConnectDetails.serializeBinaryToWriter
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getBroadcasttype();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getPluginid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType = {
  UNKNOWN_BROADCAST_TYPE: 0,
  NORMAL_BROADCAST_TYPE: 1,
  CALL_LINK_START_CALL_TYPE: 2
};

/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string roomId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional AvConnectDetails avConnectDetails = 4;
 * @return {?proto.treeleaf.anydone.entities.AvConnectDetails}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getAvconnectdetails = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AvConnectDetails} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AvConnectDetails, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AvConnectDetails|undefined} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
*/
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setAvconnectdetails = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.clearAvconnectdetails = function() {
  return this.setAvconnectdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.hasAvconnectdetails = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string senderAccountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional Account senderAccount = 9;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
*/
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional BroadcastType broadcastType = 11;
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getBroadcasttype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.BroadcastVideoCall.BroadcastType} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setBroadcasttype = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string pluginId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.getPluginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.BroadcastVideoCall} returns this
 */
proto.treeleaf.anydone.entities.BroadcastVideoCall.prototype.setPluginid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
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
proto.treeleaf.anydone.entities.CallParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CallParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CallParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    joinedat: jspb.Message.getFieldWithDefault(msg, 5, 0),
    leftat: jspb.Message.getFieldWithDefault(msg, 6, 0),
    type: jspb.Message.getFieldWithDefault(msg, 7, 0),
    status: jspb.Message.getFieldWithDefault(msg, 8, 0),
    disconnectedat: jspb.Message.getFieldWithDefault(msg, 9, 0),
    mutestatus: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    profilepic: jspb.Message.getFieldWithDefault(msg, 11, ""),
    name: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.CallParticipant}
 */
proto.treeleaf.anydone.entities.CallParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CallParticipant;
  return proto.treeleaf.anydone.entities.CallParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CallParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CallParticipant}
 */
proto.treeleaf.anydone.entities.CallParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJoinedat(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLeftat(value);
      break;
    case 7:
      var value = /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 8:
      var value = /** @type {!proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDisconnectedat(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMutestatus(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepic(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
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
proto.treeleaf.anydone.entities.CallParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CallParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CallParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getJoinedat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getLeftat();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getDisconnectedat();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getMutestatus();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getProfilepic();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus = {
  LEFT: 0,
  JOINED: 1,
  DISCONNECTED: 2
};

/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string callId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getCallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setCallid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getAccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setAccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 joinedAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getJoinedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setJoinedat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 leftAt = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getLeftat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setLeftat = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional AccountType type = 7;
 * @return {!proto.treeleaf.anydone.entities.AccountType}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.AccountType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.AccountType} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ParticipantStatus status = 8;
 * @return {!proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getStatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.CallParticipant.ParticipantStatus} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 disconnectedAt = 9;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getDisconnectedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setDisconnectedat = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional bool muteStatus = 10;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getMutestatus = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setMutestatus = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string profilePic = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getProfilepic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setProfilepic = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string name = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallParticipant} returns this
 */
proto.treeleaf.anydone.entities.CallParticipant.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.repeatedFields_ = [9,11];



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
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoCallJoinResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    participantsList: jspb.Message.toObjectList(msg.getParticipantsList(),
    proto.treeleaf.anydone.entities.CallParticipant.toObject, includeInstance),
    roomid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    callstartedat: jspb.Message.getFieldWithDefault(msg, 13, 0),
    istransferred: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    pluginid: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoCallJoinResponse;
  return proto.treeleaf.anydone.entities.VideoCallJoinResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 11:
      var value = new proto.treeleaf.anydone.entities.CallParticipant;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CallParticipant.deserializeBinaryFromReader);
      msg.addParticipants(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCallstartedat(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIstransferred(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginid(value);
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
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoCallJoinResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getParticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto.treeleaf.anydone.entities.CallParticipant.serializeBinaryToWriter
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCallstartedat();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getIstransferred();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getPluginid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
*/
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated CallParticipant participants = 11;
 * @return {!Array<!proto.treeleaf.anydone.entities.CallParticipant>}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getParticipantsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CallParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.CallParticipant, 11));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CallParticipant>} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
*/
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setParticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CallParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallParticipant}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.addParticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.treeleaf.anydone.entities.CallParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.clearParticipantsList = function() {
  return this.setParticipantsList([]);
};


/**
 * optional string roomId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional int64 callStartedAt = 13;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getCallstartedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setCallstartedat = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional bool isTransferred = 14;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getIstransferred = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setIstransferred = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string pluginId = 15;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.getPluginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinResponse} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinResponse.prototype.setPluginid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
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
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoCallJoinRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoCallJoinRequest;
  return proto.treeleaf.anydone.entities.VideoCallJoinRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
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
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoCallJoinRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
*/
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string roomId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallJoinRequest} returns this
 */
proto.treeleaf.anydone.entities.VideoCallJoinRequest.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.repeatedFields_ = [9,13];



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
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoRoomHostLeft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    startedat: jspb.Message.getFieldWithDefault(msg, 11, 0),
    duration: jspb.Message.getFieldWithDefault(msg, 12, 0),
    callparticipantsList: jspb.Message.toObjectList(msg.getCallparticipantsList(),
    proto.treeleaf.anydone.entities.CallParticipant.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoRoomHostLeft;
  return proto.treeleaf.anydone.entities.VideoRoomHostLeft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setStartedat(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 13:
      var value = new proto.treeleaf.anydone.entities.CallParticipant;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CallParticipant.deserializeBinaryFromReader);
      msg.addCallparticipants(value);
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
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoRoomHostLeft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getStartedat();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getCallparticipantsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      13,
      f,
      proto.treeleaf.anydone.entities.CallParticipant.serializeBinaryToWriter
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
*/
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 startedAt = 11;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getStartedat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setStartedat = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 duration = 12;
 * @return {number}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * repeated CallParticipant callParticipants = 13;
 * @return {!Array<!proto.treeleaf.anydone.entities.CallParticipant>}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.getCallparticipantsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.CallParticipant>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.CallParticipant, 13));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.CallParticipant>} value
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
*/
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.setCallparticipantsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 13, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.CallParticipant=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallParticipant}
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.addCallparticipants = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 13, opt_value, proto.treeleaf.anydone.entities.CallParticipant, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoRoomHostLeft} returns this
 */
proto.treeleaf.anydone.entities.VideoRoomHostLeft.prototype.clearCallparticipantsList = function() {
  return this.setCallparticipantsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ParticipantLeft.repeatedFields_ = [9];



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
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ParticipantLeft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ParticipantLeft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ParticipantLeft.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ParticipantLeft;
  return proto.treeleaf.anydone.entities.ParticipantLeft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ParticipantLeft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ParticipantLeft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ParticipantLeft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ParticipantLeft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string senderAccountId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
*/
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ParticipantLeft} returns this
 */
proto.treeleaf.anydone.entities.ParticipantLeft.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
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
proto.treeleaf.anydone.entities.Position.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Position.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Position} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Position.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFieldWithDefault(msg, 1, 0),
    y: jspb.Message.getFieldWithDefault(msg, 2, 0)
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
 * @return {!proto.treeleaf.anydone.entities.Position}
 */
proto.treeleaf.anydone.entities.Position.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Position;
  return proto.treeleaf.anydone.entities.Position.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Position} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Position}
 */
proto.treeleaf.anydone.entities.Position.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setY(value);
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
proto.treeleaf.anydone.entities.Position.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Position.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Position} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Position.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Position.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Position} returns this
 */
proto.treeleaf.anydone.entities.Position.prototype.setX = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Position.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Position} returns this
 */
proto.treeleaf.anydone.entities.Position.prototype.setY = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.StartDraw.repeatedFields_ = [9];



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
proto.treeleaf.anydone.entities.StartDraw.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.StartDraw.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.StartDraw} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.StartDraw.toObject = function(includeInstance, msg) {
  var f, obj = {
    canvaswidth: jspb.Message.getFieldWithDefault(msg, 1, 0),
    canvasheight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    capturedtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    capturedimage: msg.getCapturedimage_asB64(),
    participantid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.treeleaf.anydone.entities.StartDraw}
 */
proto.treeleaf.anydone.entities.StartDraw.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.StartDraw;
  return proto.treeleaf.anydone.entities.StartDraw.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.StartDraw} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.StartDraw}
 */
proto.treeleaf.anydone.entities.StartDraw.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvaswidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvasheight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapturedtime(value);
      break;
    case 4:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCapturedimage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.StartDraw.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.StartDraw.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.StartDraw} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.StartDraw.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanvaswidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCanvasheight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCapturedtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCapturedimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      4,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional int32 canvasWidth = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCanvaswidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setCanvaswidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 canvasHeight = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCanvasheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setCanvasheight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 capturedTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCapturedtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setCapturedtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional bytes capturedImage = 4;
 * @return {!(string|Uint8Array)}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCapturedimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * optional bytes capturedImage = 4;
 * This is a type-conversion wrapper around `getCapturedimage()`
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCapturedimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCapturedimage()));
};


/**
 * optional bytes capturedImage = 4;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCapturedimage()`
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getCapturedimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCapturedimage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setCapturedimage = function(value) {
  return jspb.Message.setProto3BytesField(this, 4, value);
};


/**
 * optional string participantId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
*/
proto.treeleaf.anydone.entities.StartDraw.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string rtcMessageId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDraw} returns this
 */
proto.treeleaf.anydone.entities.StartDraw.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.StartDrawAcknowledgement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.toObject = function(includeInstance, msg) {
  var f, obj = {
    canvaswidth: jspb.Message.getFieldWithDefault(msg, 1, 0),
    canvasheight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    capturedtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.StartDrawAcknowledgement;
  return proto.treeleaf.anydone.entities.StartDrawAcknowledgement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvaswidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvasheight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapturedtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.StartDrawAcknowledgement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanvaswidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCanvasheight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCapturedtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional int32 canvasWidth = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getCanvaswidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setCanvaswidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 canvasHeight = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getCanvasheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setCanvasheight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 capturedTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getCapturedtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setCapturedtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
*/
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.StartDrawAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.StartDrawAcknowledgement.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.CancelDrawing.repeatedFields_ = [6];



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
proto.treeleaf.anydone.entities.CancelDrawing.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CancelDrawing.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CancelDrawing} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CancelDrawing.toObject = function(includeInstance, msg) {
  var f, obj = {
    cancellationtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing}
 */
proto.treeleaf.anydone.entities.CancelDrawing.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CancelDrawing;
  return proto.treeleaf.anydone.entities.CancelDrawing.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CancelDrawing} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing}
 */
proto.treeleaf.anydone.entities.CancelDrawing.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCancellationtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.CancelDrawing.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CancelDrawing.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CancelDrawing} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CancelDrawing.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCancellationtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 cancellationTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getCancellationtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setCancellationtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Account senderAccount = 5;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
*/
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string rtcMessageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CancelDrawing} returns this
 */
proto.treeleaf.anydone.entities.CancelDrawing.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.repeatedFields_ = [9];



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
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ReceiveNewTextField.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ReceiveNewTextField} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    textid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    eventtime: jspb.Message.getFieldWithDefault(msg, 4, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    drawmetadata: (f = msg.getDrawmetadata()) && proto.treeleaf.anydone.entities.DrawMetaData.toObject(includeInstance, f),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ReceiveNewTextField;
  return proto.treeleaf.anydone.entities.ReceiveNewTextField.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ReceiveNewTextField} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 11:
      var value = new proto.treeleaf.anydone.entities.DrawMetaData;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinaryFromReader);
      msg.setDrawmetadata(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ReceiveNewTextField.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ReceiveNewTextField} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getTextid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDrawmetadata();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.treeleaf.anydone.entities.DrawMetaData.serializeBinaryToWriter
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional string textId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getTextid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setTextid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 eventTime = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string participantId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
*/
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional DrawMetaData drawMetaData = 11;
 * @return {?proto.treeleaf.anydone.entities.DrawMetaData}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getDrawmetadata = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMetaData} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DrawMetaData, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMetaData|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
*/
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setDrawmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.clearDrawmetadata = function() {
  return this.setDrawmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.hasDrawmetadata = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional string rtcMessageId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiveNewTextField} returns this
 */
proto.treeleaf.anydone.entities.ReceiveNewTextField.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TextFieldChange.repeatedFields_ = [9];



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
proto.treeleaf.anydone.entities.TextFieldChange.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TextFieldChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TextFieldChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextFieldChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    eventtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange}
 */
proto.treeleaf.anydone.entities.TextFieldChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TextFieldChange;
  return proto.treeleaf.anydone.entities.TextFieldChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TextFieldChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange}
 */
proto.treeleaf.anydone.entities.TextFieldChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.TextFieldChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TextFieldChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TextFieldChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextFieldChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTextid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string textId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getTextid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setTextid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 eventTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string clientId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string refId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
*/
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string rtcMessageId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldChange} returns this
 */
proto.treeleaf.anydone.entities.TextFieldChange.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TextFieldRemove.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TextFieldRemove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TextFieldRemove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextFieldRemove.toObject = function(includeInstance, msg) {
  var f, obj = {
    textid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventtime: jspb.Message.getFieldWithDefault(msg, 2, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TextFieldRemove;
  return proto.treeleaf.anydone.entities.TextFieldRemove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TextFieldRemove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TextFieldRemove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TextFieldRemove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TextFieldRemove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTextid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string textId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getTextid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setTextid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 eventTime = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account senderAccount = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
*/
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TextFieldRemove} returns this
 */
proto.treeleaf.anydone.entities.TextFieldRemove.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawTouchDown.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawTouchDown.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawTouchDown} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchDown.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    eventtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 10, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawTouchDown;
  return proto.treeleaf.anydone.entities.DrawTouchDown.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchDown} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawTouchDown.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchDown} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchDown.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 eventTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
*/
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string rtcMessageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchDown} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchDown.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawTouchMove.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawTouchMove.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawTouchMove} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchMove.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    eventtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    drawsessionid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    drawmetadata: (f = msg.getDrawmetadata()) && proto.treeleaf.anydone.entities.DrawMetaData.toObject(includeInstance, f),
    prevx: jspb.Message.getFloatingPointFieldWithDefault(msg, 14, 0.0),
    prevy: jspb.Message.getFloatingPointFieldWithDefault(msg, 15, 0.0),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 16, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawTouchMove;
  return proto.treeleaf.anydone.entities.DrawTouchMove.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchMove} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrawsessionid(value);
      break;
    case 13:
      var value = new proto.treeleaf.anydone.entities.DrawMetaData;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinaryFromReader);
      msg.setDrawmetadata(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrevx(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setPrevy(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawTouchMove.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchMove} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchMove.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getDrawsessionid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDrawmetadata();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      proto.treeleaf.anydone.entities.DrawMetaData.serializeBinaryToWriter
    );
  }
  f = message.getPrevx();
  if (f !== 0.0) {
    writer.writeFloat(
      14,
      f
    );
  }
  f = message.getPrevy();
  if (f !== 0.0) {
    writer.writeFloat(
      15,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 eventTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
*/
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string drawSessionId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getDrawsessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setDrawsessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional DrawMetaData drawMetaData = 13;
 * @return {?proto.treeleaf.anydone.entities.DrawMetaData}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getDrawmetadata = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMetaData} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DrawMetaData, 13));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMetaData|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
*/
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setDrawmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.clearDrawmetadata = function() {
  return this.setDrawmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.hasDrawmetadata = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional float prevX = 14;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getPrevx = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 14, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setPrevx = function(value) {
  return jspb.Message.setProto3FloatField(this, 14, value);
};


/**
 * optional float prevY = 15;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getPrevy = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 15, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setPrevy = function(value) {
  return jspb.Message.setProto3FloatField(this, 15, value);
};


/**
 * optional string rtcMessageId = 16;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchMove} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchMove.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawTouchUp.repeatedFields_ = [6];



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
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawTouchUp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawTouchUp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchUp.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawTouchUp;
  return proto.treeleaf.anydone.entities.DrawTouchUp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchUp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawTouchUp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawTouchUp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawTouchUp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Account senderAccount = 5;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
*/
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string rtcMessageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawTouchUp} returns this
 */
proto.treeleaf.anydone.entities.DrawTouchUp.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.repeatedFields_ = [6];



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
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawCanvasClear.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawCanvasClear} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawCanvasClear;
  return proto.treeleaf.anydone.entities.DrawCanvasClear.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawCanvasClear} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawCanvasClear.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawCanvasClear} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Account senderAccount = 5;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
*/
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string rtcMessageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCanvasClear} returns this
 */
proto.treeleaf.anydone.entities.DrawCanvasClear.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.repeatedFields_ = [12];



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
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawMetaDataChange.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawMetaDataChange} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    brushwidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    brushopacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    brushcolor: jspb.Message.getFieldWithDefault(msg, 5, 0),
    textcolor: jspb.Message.getFieldWithDefault(msg, 6, 0),
    eventtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawMetaDataChange;
  return proto.treeleaf.anydone.entities.DrawMetaDataChange.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawMetaDataChange} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrushwidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrushopacity(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBrushcolor(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTextcolor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 11:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawMetaDataChange.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawMetaDataChange} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBrushwidth();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBrushopacity();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getBrushcolor();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTextcolor();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float brushWidth = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getBrushwidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setBrushwidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float brushOpacity = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getBrushopacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setBrushopacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional int32 brushColor = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getBrushcolor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setBrushcolor = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 textColor = 6;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getTextcolor = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setTextcolor = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 eventTime = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string participantId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string clientId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string refId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Account senderAccount = 11;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
*/
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string recipients = 12;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string rtcMessageId = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaDataChange} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaDataChange.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawMinize.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.DrawMinize.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawMinize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawMinize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMinize.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawMinize}
 */
proto.treeleaf.anydone.entities.DrawMinize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawMinize;
  return proto.treeleaf.anydone.entities.DrawMinize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawMinize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawMinize}
 */
proto.treeleaf.anydone.entities.DrawMinize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawMinize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawMinize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawMinize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMinize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account senderAccount = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
*/
proto.treeleaf.anydone.entities.DrawMinize.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMinize} returns this
 */
proto.treeleaf.anydone.entities.DrawMinize.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawMaximize.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.DrawMaximize.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawMaximize.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawMaximize} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMaximize.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize}
 */
proto.treeleaf.anydone.entities.DrawMaximize.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawMaximize;
  return proto.treeleaf.anydone.entities.DrawMaximize.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawMaximize} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize}
 */
proto.treeleaf.anydone.entities.DrawMaximize.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawMaximize.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawMaximize.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawMaximize} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMaximize.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account senderAccount = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
*/
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMaximize} returns this
 */
proto.treeleaf.anydone.entities.DrawMaximize.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawClose.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.DrawClose.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawClose.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawClose} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawClose.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawClose}
 */
proto.treeleaf.anydone.entities.DrawClose.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawClose;
  return proto.treeleaf.anydone.entities.DrawClose.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawClose} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawClose}
 */
proto.treeleaf.anydone.entities.DrawClose.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawClose.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawClose.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawClose} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawClose.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account senderAccount = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
*/
proto.treeleaf.anydone.entities.DrawClose.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawClose} returns this
 */
proto.treeleaf.anydone.entities.DrawClose.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawCollab.repeatedFields_ = [9];



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
proto.treeleaf.anydone.entities.DrawCollab.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawCollab.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawCollab} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCollab.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    toaccountid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    capturedimage: msg.getCapturedimage_asB64(),
    isnewrequest: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 15, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawCollab}
 */
proto.treeleaf.anydone.entities.DrawCollab.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawCollab;
  return proto.treeleaf.anydone.entities.DrawCollab.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawCollab} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawCollab}
 */
proto.treeleaf.anydone.entities.DrawCollab.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setToaccountid(value);
      break;
    case 8:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 13:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setCapturedimage(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnewrequest(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawCollab.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawCollab.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawCollab} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCollab.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getToaccountid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCapturedimage_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      13,
      f
    );
  }
  f = message.getIsnewrequest();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string toAccountId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getToaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setToaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Account senderAccount = 8;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
*/
proto.treeleaf.anydone.entities.DrawCollab.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bytes capturedImage = 13;
 * @return {!(string|Uint8Array)}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getCapturedimage = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * optional bytes capturedImage = 13;
 * This is a type-conversion wrapper around `getCapturedimage()`
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getCapturedimage_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getCapturedimage()));
};


/**
 * optional bytes capturedImage = 13;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getCapturedimage()`
 * @return {!Uint8Array}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getCapturedimage_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getCapturedimage()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setCapturedimage = function(value) {
  return jspb.Message.setProto3BytesField(this, 13, value);
};


/**
 * optional bool isNewRequest = 14;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getIsnewrequest = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setIsnewrequest = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional string rtcMessageId = 15;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollab} returns this
 */
proto.treeleaf.anydone.entities.DrawCollab.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.repeatedFields_ = [10];



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
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.toObject = function(includeInstance, msg) {
  var f, obj = {
    canvaswidth: jspb.Message.getFieldWithDefault(msg, 1, 0),
    canvasheight: jspb.Message.getFieldWithDefault(msg, 2, 0),
    capturedtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    fromaccountid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    toaccountid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 10)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawCollabAcknowledgement;
  return proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvaswidth(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCanvasheight(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCapturedtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setFromaccountid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setToaccountid(value);
      break;
    case 9:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCanvaswidth();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getCanvasheight();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCapturedtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getFromaccountid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getToaccountid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional int32 canvasWidth = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getCanvaswidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setCanvaswidth = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 canvasHeight = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getCanvasheight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setCanvasheight = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 capturedTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getCapturedtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setCapturedtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string fromAccountId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getFromaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setFromaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string toAccountId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getToaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setToaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional Account senderAccount = 9;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
*/
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated string recipients = 10;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string rtcMessageId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawCollabAcknowledgement} returns this
 */
proto.treeleaf.anydone.entities.DrawCollabAcknowledgement.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawStart.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.DrawStart.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    eventtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    drawmetadata: (f = msg.getDrawmetadata()) && proto.treeleaf.anydone.entities.DrawMetaData.toObject(includeInstance, f),
    drawsessionid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawStart}
 */
proto.treeleaf.anydone.entities.DrawStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawStart;
  return proto.treeleaf.anydone.entities.DrawStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawStart}
 */
proto.treeleaf.anydone.entities.DrawStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.DrawMetaData;
      reader.readMessage(value,proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinaryFromReader);
      msg.setDrawmetadata(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrawsessionid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDrawmetadata();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.DrawMetaData.serializeBinaryToWriter
    );
  }
  f = message.getDrawsessionid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 eventTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
*/
proto.treeleaf.anydone.entities.DrawStart.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional DrawMetaData drawMetaData = 10;
 * @return {?proto.treeleaf.anydone.entities.DrawMetaData}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getDrawmetadata = function() {
  return /** @type{?proto.treeleaf.anydone.entities.DrawMetaData} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.DrawMetaData, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.DrawMetaData|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
*/
proto.treeleaf.anydone.entities.DrawStart.prototype.setDrawmetadata = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.clearDrawmetadata = function() {
  return this.setDrawmetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.hasDrawmetadata = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string drawSessionId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getDrawsessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setDrawsessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string rtcMessageId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawStart} returns this
 */
proto.treeleaf.anydone.entities.DrawStart.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawEnd.repeatedFields_ = [6];



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
proto.treeleaf.anydone.entities.DrawEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    drawsessionid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawEnd}
 */
proto.treeleaf.anydone.entities.DrawEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawEnd;
  return proto.treeleaf.anydone.entities.DrawEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawEnd}
 */
proto.treeleaf.anydone.entities.DrawEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrawsessionid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDrawsessionid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string participantId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Account senderAccount = 5;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
*/
proto.treeleaf.anydone.entities.DrawEnd.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string drawSessionId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getDrawsessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setDrawsessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string rtcMessageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawEnd} returns this
 */
proto.treeleaf.anydone.entities.DrawEnd.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.DrawMetaData.repeatedFields_ = [12];



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
proto.treeleaf.anydone.entities.DrawMetaData.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.DrawMetaData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.DrawMetaData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMetaData.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    brushwidth: jspb.Message.getFloatingPointFieldWithDefault(msg, 3, 0.0),
    brushopacity: jspb.Message.getFloatingPointFieldWithDefault(msg, 4, 0.0),
    brushcolor: jspb.Message.getFieldWithDefault(msg, 5, ""),
    textcolor: jspb.Message.getFieldWithDefault(msg, 6, ""),
    eventtime: jspb.Message.getFieldWithDefault(msg, 7, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 12)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 13, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 14, "")
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
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData}
 */
proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.DrawMetaData;
  return proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.DrawMetaData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData}
 */
proto.treeleaf.anydone.entities.DrawMetaData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrushwidth(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setBrushopacity(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrushcolor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextcolor(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 11:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.DrawMetaData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.DrawMetaData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.DrawMetaData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.DrawMetaData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getBrushwidth();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getBrushopacity();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
  f = message.getBrushcolor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTextcolor();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      12,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional float brushWidth = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getBrushwidth = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 3, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setBrushwidth = function(value) {
  return jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional float brushOpacity = 4;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getBrushopacity = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 4, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setBrushopacity = function(value) {
  return jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * optional string brushColor = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getBrushcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setBrushcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string textColor = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getTextcolor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setTextcolor = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 eventTime = 7;
 * @return {number}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string participantId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string clientId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string refId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional Account senderAccount = 11;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
*/
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * repeated string recipients = 12;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 12));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 12, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 12, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string rtcMessageId = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.DrawMetaData} returns this
 */
proto.treeleaf.anydone.entities.DrawMetaData.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.repeatedFields_ = [6];



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
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ReceiverCallDeclined.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    accountname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    roomid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ReceiverCallDeclined;
  return proto.treeleaf.anydone.entities.ReceiverCallDeclined.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
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
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ReceiverCallDeclined.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAccountname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string accountName = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getAccountname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setAccountname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string recipients = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
*/
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string roomId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string participantId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ReceiverCallDeclined} returns this
 */
proto.treeleaf.anydone.entities.ReceiverCallDeclined.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.PointerStart.repeatedFields_ = [8];



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
proto.treeleaf.anydone.entities.PointerStart.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.PointerStart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.PointerStart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PointerStart.toObject = function(includeInstance, msg) {
  var f, obj = {
    x: jspb.Message.getFloatingPointFieldWithDefault(msg, 1, 0.0),
    y: jspb.Message.getFloatingPointFieldWithDefault(msg, 2, 0.0),
    eventtime: jspb.Message.getFieldWithDefault(msg, 3, 0),
    participantid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
    imageid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    drawsessionid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.treeleaf.anydone.entities.PointerStart}
 */
proto.treeleaf.anydone.entities.PointerStart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.PointerStart;
  return proto.treeleaf.anydone.entities.PointerStart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.PointerStart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.PointerStart}
 */
proto.treeleaf.anydone.entities.PointerStart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setX(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setY(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDrawsessionid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.PointerStart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.PointerStart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.PointerStart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.PointerStart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getX();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getY();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getImageid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDrawsessionid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional float x = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getX = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 1, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setX = function(value) {
  return jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional float y = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getY = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 2, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setY = function(value) {
  return jspb.Message.setProto3FloatField(this, 2, value);
};


/**
 * optional int64 eventTime = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string participantId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string clientId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string refId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
*/
proto.treeleaf.anydone.entities.PointerStart.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated string recipients = 8;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string imageId = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getImageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setImageid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string drawSessionId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getDrawsessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setDrawsessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string rtcMessageId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.PointerStart} returns this
 */
proto.treeleaf.anydone.entities.PointerStart.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MaxDrawingExceed.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MaxDrawingExceed} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtime: jspb.Message.getFieldWithDefault(msg, 1, 0),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MaxDrawingExceed;
  return proto.treeleaf.anydone.entities.MaxDrawingExceed.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MaxDrawingExceed} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
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
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MaxDrawingExceed.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MaxDrawingExceed} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 eventTime = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional Account senderAccount = 6;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
*/
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string rtcMessageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MaxDrawingExceed} returns this
 */
proto.treeleaf.anydone.entities.MaxDrawingExceed.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.AddCallParticipant.repeatedFields_ = [4,9];



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
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.AddCallParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.AddCallParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddCallParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    avconnectdetails: (f = msg.getAvconnectdetails()) && proto.treeleaf.anydone.entities.AvConnectDetails.toObject(includeInstance, f),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    pluginid: jspb.Message.getFieldWithDefault(msg, 13, "")
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
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.AddCallParticipant;
  return proto.treeleaf.anydone.entities.AddCallParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.AddCallParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.AvConnectDetails;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinaryFromReader);
      msg.setAvconnectdetails(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setPluginid(value);
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
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.AddCallParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.AddCallParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.AddCallParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAvconnectdetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.AvConnectDetails.serializeBinaryToWriter
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getPluginid();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string roomId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string accountIds = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
};


/**
 * optional AvConnectDetails avConnectDetails = 5;
 * @return {?proto.treeleaf.anydone.entities.AvConnectDetails}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getAvconnectdetails = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AvConnectDetails} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AvConnectDetails, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AvConnectDetails|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
*/
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setAvconnectdetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.clearAvconnectdetails = function() {
  return this.setAvconnectdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.hasAvconnectdetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string senderAccountId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string clientId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string refId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional Account senderAccount = 10;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
*/
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string rtcMessageId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string pluginId = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.getPluginid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.AddCallParticipant} returns this
 */
proto.treeleaf.anydone.entities.AddCallParticipant.prototype.setPluginid = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.MuteParticipant.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.MuteParticipant.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MuteParticipant.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MuteParticipant} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MuteParticipant.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    muted: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant}
 */
proto.treeleaf.anydone.entities.MuteParticipant.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MuteParticipant;
  return proto.treeleaf.anydone.entities.MuteParticipant.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MuteParticipant} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant}
 */
proto.treeleaf.anydone.entities.MuteParticipant.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setMuted(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
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
proto.treeleaf.anydone.entities.MuteParticipant.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MuteParticipant.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MuteParticipant} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MuteParticipant.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMuted();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string participantId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool muted = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getMuted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setMuted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string rtcMessageId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string senderAccountId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.MuteParticipant} returns this
 */
proto.treeleaf.anydone.entities.MuteParticipant.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.VideoToggle.repeatedFields_ = [7];



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
proto.treeleaf.anydone.entities.VideoToggle.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoToggle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoToggle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoToggle.toObject = function(includeInstance, msg) {
  var f, obj = {
    participantid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    isvideoenabled: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.VideoToggle}
 */
proto.treeleaf.anydone.entities.VideoToggle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoToggle;
  return proto.treeleaf.anydone.entities.VideoToggle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoToggle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoToggle}
 */
proto.treeleaf.anydone.entities.VideoToggle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsvideoenabled(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
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
proto.treeleaf.anydone.entities.VideoToggle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoToggle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoToggle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoToggle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsvideoenabled();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
};


/**
 * optional string participantId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool isVideoEnabled = 2;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getIsvideoenabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setIsvideoenabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string rtcMessageId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string clientId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string refId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string senderAccountId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated string recipients = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.VideoToggle} returns this
 */
proto.treeleaf.anydone.entities.VideoToggle.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.TransferCall.repeatedFields_ = [4,9];



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
proto.treeleaf.anydone.entities.TransferCall.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.TransferCall.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.TransferCall} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TransferCall.toObject = function(includeInstance, msg) {
  var f, obj = {
    sessionid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    roomid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    participantid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accountidsList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    avconnectdetails: (f = msg.getAvconnectdetails()) && proto.treeleaf.anydone.entities.AvConnectDetails.toObject(includeInstance, f),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 9)) == null ? undefined : f,
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f),
    transfertype: jspb.Message.getFieldWithDefault(msg, 11, 0),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    transferstatus: jspb.Message.getFieldWithDefault(msg, 13, 0),
    transferredto: (f = msg.getTransferredto()) && user_pb.Account.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.TransferCall}
 */
proto.treeleaf.anydone.entities.TransferCall.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.TransferCall;
  return proto.treeleaf.anydone.entities.TransferCall.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.TransferCall} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.TransferCall}
 */
proto.treeleaf.anydone.entities.TransferCall.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSessionid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setParticipantid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addAccountids(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.AvConnectDetails;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AvConnectDetails.deserializeBinaryFromReader);
      msg.setAvconnectdetails(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 10:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
      break;
    case 11:
      var value = /** @type {!proto.treeleaf.anydone.entities.TransferCall.TransferCallType} */ (reader.readEnum());
      msg.setTransfertype(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 13:
      var value = /** @type {!proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus} */ (reader.readEnum());
      msg.setTransferstatus(value);
      break;
    case 14:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setTransferredto(value);
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
proto.treeleaf.anydone.entities.TransferCall.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.TransferCall.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.TransferCall} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.TransferCall.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getParticipantid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccountidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAvconnectdetails();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.AvConnectDetails.serializeBinaryToWriter
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      9,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
  f = message.getTransfertype();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getTransferstatus();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getTransferredto();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TransferCall.TransferCallType = {
  UNKNOWN: 0,
  WAIT: 1,
  LEAVE: 2
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus = {
  UNKNOWN_TRANSFER_STATUS: 0,
  CALL_TRANSFERRED: 1,
  EMPLOYEE_BUSY: 2
};

/**
 * optional string sessionId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getSessionid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setSessionid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string roomId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string participantId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getParticipantid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setParticipantid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string accountIds = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getAccountidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setAccountidsList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.addAccountids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.clearAccountidsList = function() {
  return this.setAccountidsList([]);
};


/**
 * optional AvConnectDetails avConnectDetails = 5;
 * @return {?proto.treeleaf.anydone.entities.AvConnectDetails}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getAvconnectdetails = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AvConnectDetails} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AvConnectDetails, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AvConnectDetails|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
*/
proto.treeleaf.anydone.entities.TransferCall.prototype.setAvconnectdetails = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.clearAvconnectdetails = function() {
  return this.setAvconnectdetails(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.hasAvconnectdetails = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string senderAccountId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string clientId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string refId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * repeated string recipients = 9;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 9));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 9, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 9, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional Account senderAccount = 10;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 10));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
*/
proto.treeleaf.anydone.entities.TransferCall.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional TransferCallType transferType = 11;
 * @return {!proto.treeleaf.anydone.entities.TransferCall.TransferCallType}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getTransfertype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TransferCall.TransferCallType} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TransferCall.TransferCallType} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setTransfertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * optional string rtcMessageId = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional TransferCallStatus transferStatus = 13;
 * @return {!proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getTransferstatus = function() {
  return /** @type {!proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.TransferCall.TransferCallStatus} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.setTransferstatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional Account transferredTo = 14;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.getTransferredto = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 14));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
*/
proto.treeleaf.anydone.entities.TransferCall.prototype.setTransferredto = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.TransferCall} returns this
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.clearTransferredto = function() {
  return this.setTransferredto(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.TransferCall.prototype.hasTransferredto = function() {
  return jspb.Message.getField(this, 14) != null;
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
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CallTransferredLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CallTransferredLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallTransferredLog.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    transferredto: jspb.Message.getFieldWithDefault(msg, 3, ""),
    transferredby: jspb.Message.getFieldWithDefault(msg, 4, ""),
    transferredat: jspb.Message.getFieldWithDefault(msg, 5, 0)
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
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CallTransferredLog;
  return proto.treeleaf.anydone.entities.CallTransferredLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CallTransferredLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferredto(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTransferredby(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTransferredat(value);
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
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CallTransferredLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CallTransferredLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallTransferredLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransferredto();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransferredby();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransferredat();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog} returns this
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string callId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.getCallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog} returns this
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.setCallid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transferredTo = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.getTransferredto = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog} returns this
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.setTransferredto = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transferredBy = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.getTransferredby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog} returns this
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.setTransferredby = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 transferredAt = 5;
 * @return {number}
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.getTransferredat = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.CallTransferredLog} returns this
 */
proto.treeleaf.anydone.entities.CallTransferredLog.prototype.setTransferredat = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.CallEnd.repeatedFields_ = [5];



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
proto.treeleaf.anydone.entities.CallEnd.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CallEnd.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CallEnd} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallEnd.toObject = function(includeInstance, msg) {
  var f, obj = {
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    refid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    recipientsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    roomid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    senderaccount: (f = msg.getSenderaccount()) && user_pb.Account.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.CallEnd}
 */
proto.treeleaf.anydone.entities.CallEnd.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CallEnd;
  return proto.treeleaf.anydone.entities.CallEnd.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CallEnd} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CallEnd}
 */
proto.treeleaf.anydone.entities.CallEnd.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRtcmessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRefid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipients(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoomid(value);
      break;
    case 7:
      var value = new user_pb.Account;
      reader.readMessage(value,user_pb.Account.deserializeBinaryFromReader);
      msg.setSenderaccount(value);
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
proto.treeleaf.anydone.entities.CallEnd.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CallEnd.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CallEnd} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallEnd.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getRoomid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSenderaccount();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      user_pb.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional string rtcMessageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setRtcmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string senderAccountId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string refId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string recipients = 5;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getRecipientsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setRecipientsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.addRecipients = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.clearRecipientsList = function() {
  return this.setRecipientsList([]);
};


/**
 * optional string roomId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getRoomid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.setRoomid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Account senderAccount = 7;
 * @return {?proto.treeleaf.anydone.entities.Account}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.getSenderaccount = function() {
  return /** @type{?proto.treeleaf.anydone.entities.Account} */ (
    jspb.Message.getWrapperField(this, user_pb.Account, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.Account|undefined} value
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
*/
proto.treeleaf.anydone.entities.CallEnd.prototype.setSenderaccount = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.CallEnd} returns this
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.clearSenderaccount = function() {
  return this.setSenderaccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.CallEnd.prototype.hasSenderaccount = function() {
  return jspb.Message.getField(this, 7) != null;
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
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.VideoCallEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.VideoCallEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, 0),
    broadcastvideocall: (f = msg.getBroadcastvideocall()) && proto.treeleaf.anydone.entities.BroadcastVideoCall.toObject(includeInstance, f),
    videoroomhostleft: (f = msg.getVideoroomhostleft()) && proto.treeleaf.anydone.entities.VideoRoomHostLeft.toObject(includeInstance, f),
    videocalljoinresponse: (f = msg.getVideocalljoinresponse()) && proto.treeleaf.anydone.entities.VideoCallJoinResponse.toObject(includeInstance, f),
    receivercalldeclined: (f = msg.getReceivercalldeclined()) && proto.treeleaf.anydone.entities.ReceiverCallDeclined.toObject(includeInstance, f),
    addcallparticipant: (f = msg.getAddcallparticipant()) && proto.treeleaf.anydone.entities.AddCallParticipant.toObject(includeInstance, f),
    participantleft: (f = msg.getParticipantleft()) && proto.treeleaf.anydone.entities.ParticipantLeft.toObject(includeInstance, f),
    calltransfer: (f = msg.getCalltransfer()) && proto.treeleaf.anydone.entities.TransferCall.toObject(includeInstance, f),
    callend: (f = msg.getCallend()) && proto.treeleaf.anydone.entities.CallEnd.toObject(includeInstance, f),
    context: jspb.Message.getFieldWithDefault(msg, 10, 0),
    callaccepted: (f = msg.getCallaccepted()) && proto.treeleaf.anydone.entities.CallAccepted.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.VideoCallEvent;
  return proto.treeleaf.anydone.entities.VideoCallEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.VideoCallEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.VideoCallEvent.EventType} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.BroadcastVideoCall;
      reader.readMessage(value,proto.treeleaf.anydone.entities.BroadcastVideoCall.deserializeBinaryFromReader);
      msg.setBroadcastvideocall(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.VideoRoomHostLeft;
      reader.readMessage(value,proto.treeleaf.anydone.entities.VideoRoomHostLeft.deserializeBinaryFromReader);
      msg.setVideoroomhostleft(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.VideoCallJoinResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.VideoCallJoinResponse.deserializeBinaryFromReader);
      msg.setVideocalljoinresponse(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.ReceiverCallDeclined;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ReceiverCallDeclined.deserializeBinaryFromReader);
      msg.setReceivercalldeclined(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.AddCallParticipant;
      reader.readMessage(value,proto.treeleaf.anydone.entities.AddCallParticipant.deserializeBinaryFromReader);
      msg.setAddcallparticipant(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.ParticipantLeft;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ParticipantLeft.deserializeBinaryFromReader);
      msg.setParticipantleft(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.TransferCall;
      reader.readMessage(value,proto.treeleaf.anydone.entities.TransferCall.deserializeBinaryFromReader);
      msg.setCalltransfer(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.CallEnd;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CallEnd.deserializeBinaryFromReader);
      msg.setCallend(value);
      break;
    case 10:
      var value = /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (reader.readEnum());
      msg.setContext(value);
      break;
    case 11:
      var value = new proto.treeleaf.anydone.entities.CallAccepted;
      reader.readMessage(value,proto.treeleaf.anydone.entities.CallAccepted.deserializeBinaryFromReader);
      msg.setCallaccepted(value);
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
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.VideoCallEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.VideoCallEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.VideoCallEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getBroadcastvideocall();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.BroadcastVideoCall.serializeBinaryToWriter
    );
  }
  f = message.getVideoroomhostleft();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.VideoRoomHostLeft.serializeBinaryToWriter
    );
  }
  f = message.getVideocalljoinresponse();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.VideoCallJoinResponse.serializeBinaryToWriter
    );
  }
  f = message.getReceivercalldeclined();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.ReceiverCallDeclined.serializeBinaryToWriter
    );
  }
  f = message.getAddcallparticipant();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.AddCallParticipant.serializeBinaryToWriter
    );
  }
  f = message.getParticipantleft();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.ParticipantLeft.serializeBinaryToWriter
    );
  }
  f = message.getCalltransfer();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.TransferCall.serializeBinaryToWriter
    );
  }
  f = message.getCallend();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.CallEnd.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getCallaccepted();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      proto.treeleaf.anydone.entities.CallAccepted.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.EventType = {
  UNKNOWN_TYPE: 0,
  BROADCAST_VIDEO_CALL: 1,
  VIDEO_ROOM_HOST_LEFT: 2,
  VIDEO_CALL_JOIN_RESPONSE: 3,
  RECIPIENT_CALL_DECLINED: 4,
  ADD_CALL_PARTICIPANT: 5,
  PARTICIPANT_LEFT: 6,
  TRANSFER_CALL: 7,
  CALL_END: 8,
  CALL_ACCEPTED: 9
};

/**
 * optional EventType type = 1;
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent.EventType}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getType = function() {
  return /** @type {!proto.treeleaf.anydone.entities.VideoCallEvent.EventType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.VideoCallEvent.EventType} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional BroadcastVideoCall broadcastVideoCall = 2;
 * @return {?proto.treeleaf.anydone.entities.BroadcastVideoCall}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getBroadcastvideocall = function() {
  return /** @type{?proto.treeleaf.anydone.entities.BroadcastVideoCall} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.BroadcastVideoCall, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.BroadcastVideoCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setBroadcastvideocall = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearBroadcastvideocall = function() {
  return this.setBroadcastvideocall(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasBroadcastvideocall = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional VideoRoomHostLeft videoRoomHostLeft = 3;
 * @return {?proto.treeleaf.anydone.entities.VideoRoomHostLeft}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getVideoroomhostleft = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoRoomHostLeft} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.VideoRoomHostLeft, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoRoomHostLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setVideoroomhostleft = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearVideoroomhostleft = function() {
  return this.setVideoroomhostleft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasVideoroomhostleft = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional VideoCallJoinResponse videoCallJoinResponse = 4;
 * @return {?proto.treeleaf.anydone.entities.VideoCallJoinResponse}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getVideocalljoinresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.VideoCallJoinResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.VideoCallJoinResponse, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.VideoCallJoinResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setVideocalljoinresponse = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearVideocalljoinresponse = function() {
  return this.setVideocalljoinresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasVideocalljoinresponse = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional ReceiverCallDeclined receiverCallDeclined = 5;
 * @return {?proto.treeleaf.anydone.entities.ReceiverCallDeclined}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getReceivercalldeclined = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ReceiverCallDeclined} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ReceiverCallDeclined, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ReceiverCallDeclined|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setReceivercalldeclined = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearReceivercalldeclined = function() {
  return this.setReceivercalldeclined(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasReceivercalldeclined = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AddCallParticipant addCallParticipant = 6;
 * @return {?proto.treeleaf.anydone.entities.AddCallParticipant}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getAddcallparticipant = function() {
  return /** @type{?proto.treeleaf.anydone.entities.AddCallParticipant} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.AddCallParticipant, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.AddCallParticipant|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setAddcallparticipant = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearAddcallparticipant = function() {
  return this.setAddcallparticipant(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasAddcallparticipant = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional ParticipantLeft participantLeft = 7;
 * @return {?proto.treeleaf.anydone.entities.ParticipantLeft}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getParticipantleft = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ParticipantLeft} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ParticipantLeft, 7));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ParticipantLeft|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setParticipantleft = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearParticipantleft = function() {
  return this.setParticipantleft(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasParticipantleft = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional TransferCall callTransfer = 8;
 * @return {?proto.treeleaf.anydone.entities.TransferCall}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getCalltransfer = function() {
  return /** @type{?proto.treeleaf.anydone.entities.TransferCall} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.TransferCall, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.TransferCall|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setCalltransfer = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearCalltransfer = function() {
  return this.setCalltransfer(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasCalltransfer = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional CallEnd callEnd = 9;
 * @return {?proto.treeleaf.anydone.entities.CallEnd}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getCallend = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallEnd} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.CallEnd, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallEnd|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setCallend = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearCallend = function() {
  return this.setCallend(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasCallend = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional ServiceContext context = 10;
 * @return {!proto.treeleaf.anydone.entities.ServiceContext}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getContext = function() {
  return /** @type {!proto.treeleaf.anydone.entities.ServiceContext} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.ServiceContext} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setContext = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional CallAccepted callAccepted = 11;
 * @return {?proto.treeleaf.anydone.entities.CallAccepted}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.getCallaccepted = function() {
  return /** @type{?proto.treeleaf.anydone.entities.CallAccepted} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.CallAccepted, 11));
};


/**
 * @param {?proto.treeleaf.anydone.entities.CallAccepted|undefined} value
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
*/
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.setCallaccepted = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.VideoCallEvent} returns this
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.clearCallaccepted = function() {
  return this.setCallaccepted(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.VideoCallEvent.prototype.hasCallaccepted = function() {
  return jspb.Message.getField(this, 11) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.CallAccepted.repeatedFields_ = [5];



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
proto.treeleaf.anydone.entities.CallAccepted.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.CallAccepted.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.CallAccepted} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallAccepted.toObject = function(includeInstance, msg) {
  var f, obj = {
    refid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    callid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    senderaccountid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    recipientList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.CallAccepted}
 */
proto.treeleaf.anydone.entities.CallAccepted.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.CallAccepted;
  return proto.treeleaf.anydone.entities.CallAccepted.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.CallAccepted} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.CallAccepted}
 */
proto.treeleaf.anydone.entities.CallAccepted.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCallid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderaccountid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addRecipient(value);
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
proto.treeleaf.anydone.entities.CallAccepted.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.CallAccepted.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.CallAccepted} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.CallAccepted.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRefid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCallid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSenderaccountid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRecipientList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
};


/**
 * optional string refId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.getRefid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.setRefid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string callId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.getCallid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.setCallid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string clientId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string senderAccountId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.getSenderaccountid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.setSenderaccountid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated string recipient = 5;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.getRecipientList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.setRecipientList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.addRecipient = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.CallAccepted} returns this
 */
proto.treeleaf.anydone.entities.CallAccepted.prototype.clearRecipientList = function() {
  return this.setRecipientList([]);
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcSessionType = {
  UNKNOWN_RTC_SESSION_TYPE: 0,
  VIDEO_ROOM: 1,
  AUDIO_ROOM: 2,
  VIDEO_CALL: 3,
  AUDIO_CALL: 4
};

/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.RtcProvider = {
  UNKNOWN_PROVIDER: 0,
  JANUS: 1
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
