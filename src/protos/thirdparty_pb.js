// source: thirdparty.proto
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

var integration_pb = require('./integration_pb.js');
goog.object.extend(proto, integration_pb);
var nlu_pb = require('./nlu_pb.js');
goog.object.extend(proto, nlu_pb);
var rtc_pb = require('./rtc_pb.js');
goog.object.extend(proto, rtc_pb);
goog.exportSymbol('proto.treeleaf.anydone.entities.ClientCredentials', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmailAddress', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EmailUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Entry', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.EventTypes', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.GoogleVerification', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingMailMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingMessengerMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingMessengerPayload', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingOutlookEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingOutlookMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingSlackMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingViberMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.IncomingWhatsAppMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.InstagramMessageReplyResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessageRead', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.Messaging', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerAttachments', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerPayload', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerUserProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.MessengerWebhook', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingMailMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingMessengerContent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingOutlookMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutlookUserDetails', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.OutlookUserDetails.Value', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SendReplyRequest', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackEvent', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackFiles', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackPayload', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackRequestBody', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackUserProfile', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackUserResponse', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.SlackWebhook', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ViberMessage', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ViberPayload', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ViberUser', null, global);
goog.exportSymbol('proto.treeleaf.anydone.entities.ViberWebhook', null, global);
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
proto.treeleaf.anydone.entities.IncomingViberMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingViberMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingViberMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingViberMessage';
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
proto.treeleaf.anydone.entities.ViberUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ViberUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ViberUser.displayName = 'proto.treeleaf.anydone.entities.ViberUser';
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
proto.treeleaf.anydone.entities.ViberMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ViberMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ViberMessage.displayName = 'proto.treeleaf.anydone.entities.ViberMessage';
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
proto.treeleaf.anydone.entities.MessengerWebhook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerWebhook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerWebhook.displayName = 'proto.treeleaf.anydone.entities.MessengerWebhook';
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
proto.treeleaf.anydone.entities.ViberWebhook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.ViberWebhook.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ViberWebhook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ViberWebhook.displayName = 'proto.treeleaf.anydone.entities.ViberWebhook';
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
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingWhatsAppMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingWhatsAppMessage';
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
proto.treeleaf.anydone.entities.IncomingMessengerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.IncomingMessengerMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingMessengerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingMessengerMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingMessengerMessage';
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
proto.treeleaf.anydone.entities.Entry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.Entry.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Entry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Entry.displayName = 'proto.treeleaf.anydone.entities.Entry';
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
proto.treeleaf.anydone.entities.Messaging = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.Messaging, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.Messaging.displayName = 'proto.treeleaf.anydone.entities.Messaging';
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
proto.treeleaf.anydone.entities.MessageRead = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessageRead, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessageRead.displayName = 'proto.treeleaf.anydone.entities.MessageRead';
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
proto.treeleaf.anydone.entities.MessengerUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerUser.displayName = 'proto.treeleaf.anydone.entities.MessengerUser';
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
proto.treeleaf.anydone.entities.MessengerMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.MessengerMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerMessage.displayName = 'proto.treeleaf.anydone.entities.MessengerMessage';
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
proto.treeleaf.anydone.entities.MessengerAttachments = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerAttachments, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerAttachments.displayName = 'proto.treeleaf.anydone.entities.MessengerAttachments';
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
proto.treeleaf.anydone.entities.IncomingMessengerPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingMessengerPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingMessengerPayload.displayName = 'proto.treeleaf.anydone.entities.IncomingMessengerPayload';
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
proto.treeleaf.anydone.entities.OutgoingMessengerContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingMessengerContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingMessengerContent.displayName = 'proto.treeleaf.anydone.entities.OutgoingMessengerContent';
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
proto.treeleaf.anydone.entities.MessengerUserProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerUserProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerUserProfile.displayName = 'proto.treeleaf.anydone.entities.MessengerUserProfile';
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
proto.treeleaf.anydone.entities.MessengerPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.MessengerPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.MessengerPayload.displayName = 'proto.treeleaf.anydone.entities.MessengerPayload';
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
proto.treeleaf.anydone.entities.ViberPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ViberPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ViberPayload.displayName = 'proto.treeleaf.anydone.entities.ViberPayload';
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
proto.treeleaf.anydone.entities.SlackWebhook = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackWebhook, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackWebhook.displayName = 'proto.treeleaf.anydone.entities.SlackWebhook';
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
proto.treeleaf.anydone.entities.SlackRequestBody = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackRequestBody, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackRequestBody.displayName = 'proto.treeleaf.anydone.entities.SlackRequestBody';
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
proto.treeleaf.anydone.entities.IncomingSlackMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingSlackMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingSlackMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingSlackMessage';
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
proto.treeleaf.anydone.entities.SlackUserProfile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackUserProfile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackUserProfile.displayName = 'proto.treeleaf.anydone.entities.SlackUserProfile';
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
proto.treeleaf.anydone.entities.SlackUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackUser.displayName = 'proto.treeleaf.anydone.entities.SlackUser';
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
proto.treeleaf.anydone.entities.SlackEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.SlackEvent.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackEvent.displayName = 'proto.treeleaf.anydone.entities.SlackEvent';
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
proto.treeleaf.anydone.entities.SlackUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackUserResponse.displayName = 'proto.treeleaf.anydone.entities.SlackUserResponse';
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
proto.treeleaf.anydone.entities.SlackPayload = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackPayload, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackPayload.displayName = 'proto.treeleaf.anydone.entities.SlackPayload';
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
proto.treeleaf.anydone.entities.SlackFiles = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SlackFiles, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SlackFiles.displayName = 'proto.treeleaf.anydone.entities.SlackFiles';
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
proto.treeleaf.anydone.entities.IncomingMailMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.IncomingMailMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingMailMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingMailMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingMailMessage';
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
proto.treeleaf.anydone.entities.OutgoingMailMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingMailMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingMailMessage.displayName = 'proto.treeleaf.anydone.entities.OutgoingMailMessage';
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
proto.treeleaf.anydone.entities.SendReplyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.SendReplyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.SendReplyRequest.displayName = 'proto.treeleaf.anydone.entities.SendReplyRequest';
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
proto.treeleaf.anydone.entities.EmailAddress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmailAddress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmailAddress.displayName = 'proto.treeleaf.anydone.entities.EmailAddress';
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
proto.treeleaf.anydone.entities.EmailUser = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.EmailUser, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.EmailUser.displayName = 'proto.treeleaf.anydone.entities.EmailUser';
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
proto.treeleaf.anydone.entities.IncomingOutlookMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.IncomingOutlookMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingOutlookMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingOutlookMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingOutlookMessage';
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
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.displayName = 'proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value';
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
proto.treeleaf.anydone.entities.IncomingOutlookEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.IncomingOutlookEvent.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingOutlookEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingOutlookEvent.displayName = 'proto.treeleaf.anydone.entities.IncomingOutlookEvent';
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
proto.treeleaf.anydone.entities.ClientCredentials = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.ClientCredentials, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.ClientCredentials.displayName = 'proto.treeleaf.anydone.entities.ClientCredentials';
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
proto.treeleaf.anydone.entities.OutlookUserDetails = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutlookUserDetails.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutlookUserDetails, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutlookUserDetails.displayName = 'proto.treeleaf.anydone.entities.OutlookUserDetails';
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
proto.treeleaf.anydone.entities.OutlookUserDetails.Value = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutlookUserDetails.Value, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutlookUserDetails.Value.displayName = 'proto.treeleaf.anydone.entities.OutlookUserDetails.Value';
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingOutlookMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.displayName = 'proto.treeleaf.anydone.entities.OutgoingOutlookMessage';
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.displayName = 'proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message';
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.displayName = 'proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage';
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.displayName = 'proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent';
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.repeatedFields_, null);
};
goog.inherits(proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.displayName = 'proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard';
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
proto.treeleaf.anydone.entities.GoogleVerification = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.GoogleVerification, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.GoogleVerification.displayName = 'proto.treeleaf.anydone.entities.GoogleVerification';
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
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.treeleaf.anydone.entities.InstagramMessageReplyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.displayName = 'proto.treeleaf.anydone.entities.InstagramMessageReplyResponse';
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
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingViberMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingViberMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    event: jspb.Message.getFieldWithDefault(msg, 1, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 2, ""),
    chathostname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    messagetoken: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sender: (f = msg.getSender()) && proto.treeleaf.anydone.entities.ViberUser.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.ViberMessage.toObject(includeInstance, f),
    silent: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    signature: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingViberMessage;
  return proto.treeleaf.anydone.entities.IncomingViberMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingViberMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChathostname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagetoken(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.ViberUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ViberUser.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.ViberMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ViberMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSilent(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
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
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingViberMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingViberMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChathostname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessagetoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.ViberUser.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.ViberMessage.serializeBinaryToWriter
    );
  }
  f = message.getSilent();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string event = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getEvent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setEvent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string timeStamp = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string chatHostName = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getChathostname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setChathostname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string messageToken = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getMessagetoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setMessagetoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ViberUser sender = 5;
 * @return {?proto.treeleaf.anydone.entities.ViberUser}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getSender = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ViberUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ViberUser, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ViberUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.hasSender = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional ViberMessage message = 6;
 * @return {?proto.treeleaf.anydone.entities.ViberMessage}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ViberMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ViberMessage, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ViberMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool silent = 7;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getSilent = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setSilent = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional string signature = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingViberMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingViberMessage.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.treeleaf.anydone.entities.ViberUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ViberUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ViberUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    avatar: jspb.Message.getFieldWithDefault(msg, 3, ""),
    language: jspb.Message.getFieldWithDefault(msg, 4, ""),
    country: jspb.Message.getFieldWithDefault(msg, 5, ""),
    apiversion: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.ViberUser}
 */
proto.treeleaf.anydone.entities.ViberUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ViberUser;
  return proto.treeleaf.anydone.entities.ViberUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ViberUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ViberUser}
 */
proto.treeleaf.anydone.entities.ViberUser.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatar(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCountry(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
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
proto.treeleaf.anydone.entities.ViberUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ViberUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ViberUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAvatar();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getApiversion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string avatar = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getAvatar = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setAvatar = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string language = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string country = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string apiVersion = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberUser} returns this
 */
proto.treeleaf.anydone.entities.ViberUser.prototype.setApiversion = function(value) {
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
proto.treeleaf.anydone.entities.ViberMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ViberMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ViberMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.ViberMessage}
 */
proto.treeleaf.anydone.entities.ViberMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ViberMessage;
  return proto.treeleaf.anydone.entities.ViberMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ViberMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ViberMessage}
 */
proto.treeleaf.anydone.entities.ViberMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setText(value);
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
proto.treeleaf.anydone.entities.ViberMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ViberMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ViberMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
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
proto.treeleaf.anydone.entities.ViberMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberMessage} returns this
 */
proto.treeleaf.anydone.entities.ViberMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberMessage} returns this
 */
proto.treeleaf.anydone.entities.ViberMessage.prototype.setText = function(value) {
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
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerWebhook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerWebhook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerWebhook.toObject = function(includeInstance, msg) {
  var f, obj = {
    mode: jspb.Message.getFieldWithDefault(msg, 1, ""),
    verifytoken: jspb.Message.getFieldWithDefault(msg, 2, ""),
    challenge: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.MessengerWebhook}
 */
proto.treeleaf.anydone.entities.MessengerWebhook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerWebhook;
  return proto.treeleaf.anydone.entities.MessengerWebhook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerWebhook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerWebhook}
 */
proto.treeleaf.anydone.entities.MessengerWebhook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setVerifytoken(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallenge(value);
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
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerWebhook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerWebhook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerWebhook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getVerifytoken();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChallenge();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string mode = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.getMode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerWebhook} returns this
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.setMode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string verifyToken = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.getVerifytoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerWebhook} returns this
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.setVerifytoken = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string challenge = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.getChallenge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerWebhook} returns this
 */
proto.treeleaf.anydone.entities.MessengerWebhook.prototype.setChallenge = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.ViberWebhook.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.ViberWebhook.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ViberWebhook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ViberWebhook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberWebhook.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventtypesList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    sendname: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    sendphoto: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
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
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook}
 */
proto.treeleaf.anydone.entities.ViberWebhook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ViberWebhook;
  return proto.treeleaf.anydone.entities.ViberWebhook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ViberWebhook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook}
 */
proto.treeleaf.anydone.entities.ViberWebhook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var values = /** @type {!Array<!proto.treeleaf.anydone.entities.EventTypes>} */ (reader.isDelimited() ? reader.readPackedEnum() : [reader.readEnum()]);
      for (var i = 0; i < values.length; i++) {
        msg.addEventtypes(values[i]);
      }
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendname(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSendphoto(value);
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
proto.treeleaf.anydone.entities.ViberWebhook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ViberWebhook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ViberWebhook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberWebhook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventtypesList();
  if (f.length > 0) {
    writer.writePackedEnum(
      2,
      f
    );
  }
  f = message.getSendname();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSendphoto();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated EventTypes eventTypes = 2;
 * @return {!Array<!proto.treeleaf.anydone.entities.EventTypes>}
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.getEventtypesList = function() {
  return /** @type {!Array<!proto.treeleaf.anydone.entities.EventTypes>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EventTypes>} value
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.setEventtypesList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EventTypes} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.addEventtypes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.clearEventtypesList = function() {
  return this.setEventtypesList([]);
};


/**
 * optional bool sendName = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.getSendname = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.setSendname = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional bool sendPhoto = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.getSendphoto = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.ViberWebhook} returns this
 */
proto.treeleaf.anydone.entities.ViberWebhook.prototype.setSendphoto = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
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
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    smsmessagesid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nummedia: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profilename: jspb.Message.getFieldWithDefault(msg, 3, ""),
    smssid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    waid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    smsstatus: jspb.Message.getFieldWithDefault(msg, 6, ""),
    body: jspb.Message.getFieldWithDefault(msg, 7, ""),
    to: jspb.Message.getFieldWithDefault(msg, 8, ""),
    numsegments: jspb.Message.getFieldWithDefault(msg, 9, ""),
    messagesid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    accountsid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    apiversion: jspb.Message.getFieldWithDefault(msg, 12, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingWhatsAppMessage;
  return proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsmessagesid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNummedia(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilename(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmssid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setWaid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSmsstatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setBody(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumsegments(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagesid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccountsid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiversion(value);
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
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSmsmessagesid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNummedia();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfilename();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSmssid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getWaid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSmsstatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBody();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNumsegments();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getMessagesid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAccountsid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getApiversion();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional string smsMessageSid = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getSmsmessagesid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setSmsmessagesid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string numMedia = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getNummedia = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setNummedia = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profileName = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getProfilename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setProfilename = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string smsSid = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getSmssid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setSmssid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string waId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getWaid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setWaid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string smsStatus = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getSmsstatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setSmsstatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string body = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getBody = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setBody = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string to = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string numSegments = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getNumsegments = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setNumsegments = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string messageSid = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getMessagesid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setMessagesid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string accountSid = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getAccountsid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setAccountsid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string apiVersion = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.getApiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingWhatsAppMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingWhatsAppMessage.prototype.setApiversion = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingMessengerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    object: jspb.Message.getFieldWithDefault(msg, 1, ""),
    entryList: jspb.Message.toObjectList(msg.getEntryList(),
    proto.treeleaf.anydone.entities.Entry.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerMessage}
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingMessengerMessage;
  return proto.treeleaf.anydone.entities.IncomingMessengerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerMessage}
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setObject(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.Entry;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Entry.deserializeBinaryFromReader);
      msg.addEntry(value);
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
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingMessengerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getObject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEntryList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.Entry.serializeBinaryToWriter
    );
  }
};


/**
 * optional string object = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.getObject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.setObject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated Entry entry = 2;
 * @return {!Array<!proto.treeleaf.anydone.entities.Entry>}
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.getEntryList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Entry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Entry, 2));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Entry>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.setEntryList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Entry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Entry}
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.addEntry = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.treeleaf.anydone.entities.Entry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMessengerMessage.prototype.clearEntryList = function() {
  return this.setEntryList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.Entry.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.Entry.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Entry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Entry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Entry.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    time: jspb.Message.getFieldWithDefault(msg, 2, 0),
    messagingList: jspb.Message.toObjectList(msg.getMessagingList(),
    proto.treeleaf.anydone.entities.Messaging.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.Entry}
 */
proto.treeleaf.anydone.entities.Entry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Entry;
  return proto.treeleaf.anydone.entities.Entry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Entry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Entry}
 */
proto.treeleaf.anydone.entities.Entry.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTime(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.Messaging;
      reader.readMessage(value,proto.treeleaf.anydone.entities.Messaging.deserializeBinaryFromReader);
      msg.addMessaging(value);
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
proto.treeleaf.anydone.entities.Entry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Entry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Entry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Entry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTime();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMessagingList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.Messaging.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.Entry.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.Entry} returns this
 */
proto.treeleaf.anydone.entities.Entry.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 time = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Entry.prototype.getTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Entry} returns this
 */
proto.treeleaf.anydone.entities.Entry.prototype.setTime = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * repeated Messaging messaging = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.Messaging>}
 */
proto.treeleaf.anydone.entities.Entry.prototype.getMessagingList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.Messaging>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.Messaging, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.Messaging>} value
 * @return {!proto.treeleaf.anydone.entities.Entry} returns this
*/
proto.treeleaf.anydone.entities.Entry.prototype.setMessagingList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.Messaging=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.Messaging}
 */
proto.treeleaf.anydone.entities.Entry.prototype.addMessaging = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.Messaging, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.Entry} returns this
 */
proto.treeleaf.anydone.entities.Entry.prototype.clearMessagingList = function() {
  return this.setMessagingList([]);
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
proto.treeleaf.anydone.entities.Messaging.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.Messaging.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.Messaging} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Messaging.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: (f = msg.getSender()) && proto.treeleaf.anydone.entities.MessengerUser.toObject(includeInstance, f),
    recipient: (f = msg.getRecipient()) && proto.treeleaf.anydone.entities.MessengerUser.toObject(includeInstance, f),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, 0),
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.MessengerMessage.toObject(includeInstance, f),
    read: (f = msg.getRead()) && proto.treeleaf.anydone.entities.MessageRead.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.Messaging}
 */
proto.treeleaf.anydone.entities.Messaging.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.Messaging;
  return proto.treeleaf.anydone.entities.Messaging.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.Messaging} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.Messaging}
 */
proto.treeleaf.anydone.entities.Messaging.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.MessengerUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerUser.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.MessengerUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerUser.deserializeBinaryFromReader);
      msg.setRecipient(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.MessengerMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.MessageRead;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessageRead.deserializeBinaryFromReader);
      msg.setRead(value);
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
proto.treeleaf.anydone.entities.Messaging.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.Messaging.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.Messaging} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.Messaging.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.MessengerUser.serializeBinaryToWriter
    );
  }
  f = message.getRecipient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.MessengerUser.serializeBinaryToWriter
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.MessengerMessage.serializeBinaryToWriter
    );
  }
  f = message.getRead();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.MessageRead.serializeBinaryToWriter
    );
  }
};


/**
 * optional MessengerUser sender = 1;
 * @return {?proto.treeleaf.anydone.entities.MessengerUser}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.getSender = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessengerUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessengerUser, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessengerUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
*/
proto.treeleaf.anydone.entities.Messaging.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
 */
proto.treeleaf.anydone.entities.Messaging.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.hasSender = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MessengerUser recipient = 2;
 * @return {?proto.treeleaf.anydone.entities.MessengerUser}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.getRecipient = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessengerUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessengerUser, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessengerUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
*/
proto.treeleaf.anydone.entities.Messaging.prototype.setRecipient = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
 */
proto.treeleaf.anydone.entities.Messaging.prototype.clearRecipient = function() {
  return this.setRecipient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.hasRecipient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 timestamp = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
 */
proto.treeleaf.anydone.entities.Messaging.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional MessengerMessage message = 4;
 * @return {?proto.treeleaf.anydone.entities.MessengerMessage}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessengerMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessengerMessage, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessengerMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
*/
proto.treeleaf.anydone.entities.Messaging.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
 */
proto.treeleaf.anydone.entities.Messaging.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional MessageRead read = 5;
 * @return {?proto.treeleaf.anydone.entities.MessageRead}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.getRead = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessageRead} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessageRead, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessageRead|undefined} value
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
*/
proto.treeleaf.anydone.entities.Messaging.prototype.setRead = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.Messaging} returns this
 */
proto.treeleaf.anydone.entities.Messaging.prototype.clearRead = function() {
  return this.setRead(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.Messaging.prototype.hasRead = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.treeleaf.anydone.entities.MessageRead.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessageRead.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessageRead} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageRead.toObject = function(includeInstance, msg) {
  var f, obj = {
    mid: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.MessageRead}
 */
proto.treeleaf.anydone.entities.MessageRead.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessageRead;
  return proto.treeleaf.anydone.entities.MessageRead.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessageRead} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessageRead}
 */
proto.treeleaf.anydone.entities.MessageRead.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMid(value);
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
proto.treeleaf.anydone.entities.MessageRead.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessageRead.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessageRead} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessageRead.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string mid = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessageRead.prototype.getMid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessageRead} returns this
 */
proto.treeleaf.anydone.entities.MessageRead.prototype.setMid = function(value) {
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
proto.treeleaf.anydone.entities.MessengerUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    fullname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profilepic: jspb.Message.getFieldWithDefault(msg, 3, ""),
    sendertype: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.treeleaf.anydone.entities.MessengerUser}
 */
proto.treeleaf.anydone.entities.MessengerUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerUser;
  return proto.treeleaf.anydone.entities.MessengerUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerUser}
 */
proto.treeleaf.anydone.entities.MessengerUser.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setFullname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepic(value);
      break;
    case 4:
      var value = /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (reader.readEnum());
      msg.setSendertype(value);
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
proto.treeleaf.anydone.entities.MessengerUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFullname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfilepic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSendertype();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUser} returns this
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string fullName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.getFullname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUser} returns this
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.setFullname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profilePic = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.getProfilepic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUser} returns this
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.setProfilepic = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional MessageActor senderType = 4;
 * @return {!proto.treeleaf.anydone.entities.MessageActor}
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.getSendertype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.MessageActor} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.MessageActor} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUser} returns this
 */
proto.treeleaf.anydone.entities.MessengerUser.prototype.setSendertype = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.MessengerMessage.repeatedFields_ = [4];



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
proto.treeleaf.anydone.entities.MessengerMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, ""),
    seq: jspb.Message.getFieldWithDefault(msg, 3, 0),
    attachmentsList: jspb.Message.toObjectList(msg.getAttachmentsList(),
    proto.treeleaf.anydone.entities.MessengerAttachments.toObject, includeInstance),
    isecho: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
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
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage}
 */
proto.treeleaf.anydone.entities.MessengerMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerMessage;
  return proto.treeleaf.anydone.entities.MessengerMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage}
 */
proto.treeleaf.anydone.entities.MessengerMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSeq(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.MessengerAttachments;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerAttachments.deserializeBinaryFromReader);
      msg.addAttachments(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsecho(value);
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
proto.treeleaf.anydone.entities.MessengerMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSeq();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAttachmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.MessengerAttachments.serializeBinaryToWriter
    );
  }
  f = message.getIsecho();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * optional string mid = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.getMid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.setMid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 seq = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.getSeq = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.setSeq = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated MessengerAttachments attachments = 4;
 * @return {!Array<!proto.treeleaf.anydone.entities.MessengerAttachments>}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.getAttachmentsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.MessengerAttachments>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.MessengerAttachments, 4));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.MessengerAttachments>} value
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
*/
proto.treeleaf.anydone.entities.MessengerMessage.prototype.setAttachmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.MessengerAttachments=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.addAttachments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.treeleaf.anydone.entities.MessengerAttachments, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.clearAttachmentsList = function() {
  return this.setAttachmentsList([]);
};


/**
 * optional bool isEcho = 5;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.getIsecho = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.MessengerMessage} returns this
 */
proto.treeleaf.anydone.entities.MessengerMessage.prototype.setIsecho = function(value) {
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
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerAttachments.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerAttachments} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerAttachments.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    payload: (f = msg.getPayload()) && proto.treeleaf.anydone.entities.IncomingMessengerPayload.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments}
 */
proto.treeleaf.anydone.entities.MessengerAttachments.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerAttachments;
  return proto.treeleaf.anydone.entities.MessengerAttachments.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerAttachments} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments}
 */
proto.treeleaf.anydone.entities.MessengerAttachments.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.treeleaf.anydone.entities.IncomingMessengerPayload;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingMessengerPayload.deserializeBinaryFromReader);
      msg.setPayload(value);
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
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerAttachments.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerAttachments} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerAttachments.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPayload();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.IncomingMessengerPayload.serializeBinaryToWriter
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments} returns this
 */
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional IncomingMessengerPayload payload = 2;
 * @return {?proto.treeleaf.anydone.entities.IncomingMessengerPayload}
 */
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.getPayload = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingMessengerPayload} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingMessengerPayload, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingMessengerPayload|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments} returns this
*/
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.setPayload = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MessengerAttachments} returns this
 */
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.clearPayload = function() {
  return this.setPayload(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MessengerAttachments.prototype.hasPayload = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.treeleaf.anydone.entities.IncomingMessengerPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingMessengerPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerPayload}
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingMessengerPayload;
  return proto.treeleaf.anydone.entities.IncomingMessengerPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerPayload}
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.treeleaf.anydone.entities.IncomingMessengerPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingMessengerPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingMessengerPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMessengerPayload} returns this
 */
proto.treeleaf.anydone.entities.IncomingMessengerPayload.prototype.setUrl = function(value) {
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
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingMessengerContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingMessengerContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    recipientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    textmessage: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingMessengerContent}
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingMessengerContent;
  return proto.treeleaf.anydone.entities.OutgoingMessengerContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingMessengerContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingMessengerContent}
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextmessage(value);
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
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingMessengerContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingMessengerContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecipientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTextmessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string recipientId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.getRecipientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMessengerContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.setRecipientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string textMessage = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.getTextmessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMessengerContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMessengerContent.prototype.setTextmessage = function(value) {
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
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerUserProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerUserProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    firstname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    profilepic: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.treeleaf.anydone.entities.MessengerUserProfile}
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerUserProfile;
  return proto.treeleaf.anydone.entities.MessengerUserProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerUserProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerUserProfile}
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfilepic(value);
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
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerUserProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerUserProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProfilepic();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string firstName = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUserProfile} returns this
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string lastName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUserProfile} returns this
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string profilePic = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.getProfilepic = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerUserProfile} returns this
 */
proto.treeleaf.anydone.entities.MessengerUserProfile.prototype.setProfilepic = function(value) {
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
proto.treeleaf.anydone.entities.MessengerPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.MessengerPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.MessengerPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    messagingtype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipient: (f = msg.getRecipient()) && proto.treeleaf.anydone.entities.MessengerUser.toObject(includeInstance, f),
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.MessengerMessage.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload}
 */
proto.treeleaf.anydone.entities.MessengerPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.MessengerPayload;
  return proto.treeleaf.anydone.entities.MessengerPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.MessengerPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload}
 */
proto.treeleaf.anydone.entities.MessengerPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagingtype(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.MessengerUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerUser.deserializeBinaryFromReader);
      msg.setRecipient(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.MessengerMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.MessengerMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
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
proto.treeleaf.anydone.entities.MessengerPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.MessengerPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.MessengerPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.MessengerPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagingtype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipient();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.MessengerUser.serializeBinaryToWriter
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.MessengerMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional string messagingType = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.getMessagingtype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload} returns this
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.setMessagingtype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional MessengerUser recipient = 2;
 * @return {?proto.treeleaf.anydone.entities.MessengerUser}
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.getRecipient = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessengerUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessengerUser, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessengerUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload} returns this
*/
proto.treeleaf.anydone.entities.MessengerPayload.prototype.setRecipient = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload} returns this
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.clearRecipient = function() {
  return this.setRecipient(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.hasRecipient = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MessengerMessage message = 3;
 * @return {?proto.treeleaf.anydone.entities.MessengerMessage}
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.MessengerMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.MessengerMessage, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.MessengerMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload} returns this
*/
proto.treeleaf.anydone.entities.MessengerPayload.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.MessengerPayload} returns this
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.MessengerPayload.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.treeleaf.anydone.entities.ViberPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ViberPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ViberPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    receiver: jspb.Message.getFieldWithDefault(msg, 1, ""),
    minapiversion: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sender: (f = msg.getSender()) && proto.treeleaf.anydone.entities.ViberUser.toObject(includeInstance, f),
    trackingdata: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, ""),
    text: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.ViberPayload}
 */
proto.treeleaf.anydone.entities.ViberPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ViberPayload;
  return proto.treeleaf.anydone.entities.ViberPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ViberPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ViberPayload}
 */
proto.treeleaf.anydone.entities.ViberPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiver(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMinapiversion(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.ViberUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.ViberUser.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTrackingdata(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.treeleaf.anydone.entities.ViberPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ViberPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ViberPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ViberPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReceiver();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMinapiversion();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.ViberUser.serializeBinaryToWriter
    );
  }
  f = message.getTrackingdata();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string receiver = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.setReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string minApiVersion = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getMinapiversion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.setMinapiversion = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ViberUser sender = 3;
 * @return {?proto.treeleaf.anydone.entities.ViberUser}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getSender = function() {
  return /** @type{?proto.treeleaf.anydone.entities.ViberUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.ViberUser, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.ViberUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
*/
proto.treeleaf.anydone.entities.ViberPayload.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.hasSender = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string trackingData = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getTrackingdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.setTrackingdata = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string type = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string text = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ViberPayload} returns this
 */
proto.treeleaf.anydone.entities.ViberPayload.prototype.setText = function(value) {
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
proto.treeleaf.anydone.entities.SlackWebhook.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackWebhook.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackWebhook} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackWebhook.toObject = function(includeInstance, msg) {
  var f, obj = {
    timestamp: jspb.Message.getFieldWithDefault(msg, 1, 0),
    signature: jspb.Message.getFieldWithDefault(msg, 2, ""),
    slackrequestbody: (f = msg.getSlackrequestbody()) && proto.treeleaf.anydone.entities.SlackRequestBody.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook}
 */
proto.treeleaf.anydone.entities.SlackWebhook.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackWebhook;
  return proto.treeleaf.anydone.entities.SlackWebhook.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackWebhook} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook}
 */
proto.treeleaf.anydone.entities.SlackWebhook.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimestamp(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.SlackRequestBody;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SlackRequestBody.deserializeBinaryFromReader);
      msg.setSlackrequestbody(value);
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
proto.treeleaf.anydone.entities.SlackWebhook.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackWebhook.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackWebhook} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackWebhook.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSlackrequestbody();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.SlackRequestBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 timestamp = 1;
 * @return {number}
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook} returns this
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string signature = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook} returns this
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.setSignature = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional SlackRequestBody slackRequestBody = 3;
 * @return {?proto.treeleaf.anydone.entities.SlackRequestBody}
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.getSlackrequestbody = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SlackRequestBody} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.SlackRequestBody, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SlackRequestBody|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook} returns this
*/
proto.treeleaf.anydone.entities.SlackWebhook.prototype.setSlackrequestbody = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SlackWebhook} returns this
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.clearSlackrequestbody = function() {
  return this.setSlackrequestbody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackWebhook.prototype.hasSlackrequestbody = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackRequestBody.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackRequestBody} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackRequestBody.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    challenge: jspb.Message.getFieldWithDefault(msg, 2, ""),
    type: jspb.Message.getFieldWithDefault(msg, 3, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    apiappid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    event: (f = msg.getEvent()) && proto.treeleaf.anydone.entities.SlackEvent.toObject(includeInstance, f),
    eventid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    eventtime: jspb.Message.getFieldWithDefault(msg, 8, 0),
    eventcontext: jspb.Message.getFieldWithDefault(msg, 9, "")
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
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackRequestBody;
  return proto.treeleaf.anydone.entities.SlackRequestBody.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackRequestBody} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallenge(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setApiappid(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.SlackEvent;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SlackEvent.deserializeBinaryFromReader);
      msg.setEvent(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventid(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setEventtime(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventcontext(value);
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
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackRequestBody.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackRequestBody} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackRequestBody.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChallenge();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getApiappid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEvent();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.SlackEvent.serializeBinaryToWriter
    );
  }
  f = message.getEventid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEventtime();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getEventcontext();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string challenge = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getChallenge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setChallenge = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string type = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string teamId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string apiAppId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getApiappid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setApiappid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional SlackEvent event = 6;
 * @return {?proto.treeleaf.anydone.entities.SlackEvent}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getEvent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SlackEvent} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.SlackEvent, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SlackEvent|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
*/
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setEvent = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.clearEvent = function() {
  return this.setEvent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.hasEvent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string eventId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getEventid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setEventid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int64 eventTime = 8;
 * @return {number}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getEventtime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setEventtime = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string eventContext = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.getEventcontext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackRequestBody} returns this
 */
proto.treeleaf.anydone.entities.SlackRequestBody.prototype.setEventcontext = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
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
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingSlackMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingSlackMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    type: jspb.Message.getFieldWithDefault(msg, 1, ""),
    channel: jspb.Message.getFieldWithDefault(msg, 2, ""),
    user: jspb.Message.getFieldWithDefault(msg, 3, ""),
    text: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ts: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingSlackMessage;
  return proto.treeleaf.anydone.entities.IncomingSlackMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingSlackMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setChannel(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTs(value);
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
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingSlackMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingSlackMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTs();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string channel = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string user = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string text = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ts = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.getTs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingSlackMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingSlackMessage.prototype.setTs = function(value) {
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
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackUserProfile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackUserProfile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUserProfile.toObject = function(includeInstance, msg) {
  var f, obj = {
    avatarhash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    statustext: jspb.Message.getFieldWithDefault(msg, 2, ""),
    statusemoji: jspb.Message.getFieldWithDefault(msg, 3, ""),
    realname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 5, ""),
    email: jspb.Message.getFieldWithDefault(msg, 6, ""),
    imageoriginal: jspb.Message.getFieldWithDefault(msg, 7, ""),
    team: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackUserProfile;
  return proto.treeleaf.anydone.entities.SlackUserProfile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackUserProfile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarhash(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatustext(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatusemoji(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setImageoriginal(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeam(value);
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
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackUserProfile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackUserProfile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUserProfile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvatarhash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatustext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getStatusemoji();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRealname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getImageoriginal();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTeam();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string avatarHash = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getAvatarhash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setAvatarhash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string statusText = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getStatustext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setStatustext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string statusEmoji = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getStatusemoji = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setStatusemoji = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string realName = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getRealname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setRealname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string displayName = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string email = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string imageOriginal = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getImageoriginal = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setImageoriginal = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string team = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.getTeam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserProfile} returns this
 */
proto.treeleaf.anydone.entities.SlackUserProfile.prototype.setTeam = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.treeleaf.anydone.entities.SlackUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    deleted: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    color: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timezone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    timezonelabel: jspb.Message.getFieldWithDefault(msg, 7, ""),
    timezoneoffset: jspb.Message.getFieldWithDefault(msg, 8, ""),
    userprofile: (f = msg.getUserprofile()) && proto.treeleaf.anydone.entities.SlackUserProfile.toObject(includeInstance, f),
    isAdmin: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    isowner: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
    isprimaryOwner: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    isrestricted: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    isultraRestricted: jspb.Message.getBooleanFieldWithDefault(msg, 14, false),
    isbot: jspb.Message.getBooleanFieldWithDefault(msg, 15, false),
    updated: jspb.Message.getFieldWithDefault(msg, 16, 0),
    isappuser: jspb.Message.getBooleanFieldWithDefault(msg, 17, false),
    has2fa: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
    realname: jspb.Message.getFieldWithDefault(msg, 19, "")
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
 * @return {!proto.treeleaf.anydone.entities.SlackUser}
 */
proto.treeleaf.anydone.entities.SlackUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackUser;
  return proto.treeleaf.anydone.entities.SlackUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackUser}
 */
proto.treeleaf.anydone.entities.SlackUser.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setTeamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDeleted(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezonelabel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimezoneoffset(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.SlackUserProfile;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SlackUserProfile.deserializeBinaryFromReader);
      msg.setUserprofile(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsAdmin(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsowner(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsprimaryOwner(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsrestricted(value);
      break;
    case 14:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsultraRestricted(value);
      break;
    case 15:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsbot(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdated(value);
      break;
    case 17:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsappuser(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHas2fa(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealname(value);
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
proto.treeleaf.anydone.entities.SlackUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDeleted();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimezone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTimezonelabel();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTimezoneoffset();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getUserprofile();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.SlackUserProfile.serializeBinaryToWriter
    );
  }
  f = message.getIsAdmin();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getIsowner();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getIsprimaryOwner();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIsrestricted();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getIsultraRestricted();
  if (f) {
    writer.writeBool(
      14,
      f
    );
  }
  f = message.getIsbot();
  if (f) {
    writer.writeBool(
      15,
      f
    );
  }
  f = message.getUpdated();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
  f = message.getIsappuser();
  if (f) {
    writer.writeBool(
      17,
      f
    );
  }
  f = message.getHas2fa();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getRealname();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teamId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setTeamid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool deleted = 4;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getDeleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setDeleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional string color = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string timeZone = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getTimezone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setTimezone = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string timeZoneLabel = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getTimezonelabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setTimezonelabel = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string timeZoneOffSet = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getTimezoneoffset = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setTimezoneoffset = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional SlackUserProfile userProfile = 9;
 * @return {?proto.treeleaf.anydone.entities.SlackUserProfile}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getUserprofile = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SlackUserProfile} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.SlackUserProfile, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SlackUserProfile|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
*/
proto.treeleaf.anydone.entities.SlackUser.prototype.setUserprofile = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.clearUserprofile = function() {
  return this.setUserprofile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.hasUserprofile = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_admin = 10;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsAdmin = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsAdmin = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional bool isOwner = 11;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsowner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsowner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool isPrimary_owner = 12;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsprimaryOwner = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsprimaryOwner = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool isRestricted = 13;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsrestricted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsrestricted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional bool isUltra_restricted = 14;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsultraRestricted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 14, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsultraRestricted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 14, value);
};


/**
 * optional bool isBot = 15;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsbot = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 15, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsbot = function(value) {
  return jspb.Message.setProto3BooleanField(this, 15, value);
};


/**
 * optional int64 updated = 16;
 * @return {number}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getUpdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setUpdated = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};


/**
 * optional bool isAppUser = 17;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getIsappuser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 17, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setIsappuser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 17, value);
};


/**
 * optional bool has2fa = 18;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getHas2fa = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setHas2fa = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string realName = 19;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.getRealname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackUser} returns this
 */
proto.treeleaf.anydone.entities.SlackUser.prototype.setRealname = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.SlackEvent.repeatedFields_ = [10];



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
proto.treeleaf.anydone.entities.SlackEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientmsgid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    user: jspb.Message.getFieldWithDefault(msg, 4, ""),
    ts: jspb.Message.getFieldWithDefault(msg, 5, ""),
    team: jspb.Message.getFieldWithDefault(msg, 6, ""),
    channel: jspb.Message.getFieldWithDefault(msg, 7, ""),
    eventts: jspb.Message.getFieldWithDefault(msg, 8, ""),
    channeltype: jspb.Message.getFieldWithDefault(msg, 9, ""),
    filesList: jspb.Message.toObjectList(msg.getFilesList(),
    proto.treeleaf.anydone.entities.SlackFiles.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.SlackEvent}
 */
proto.treeleaf.anydone.entities.SlackEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackEvent;
  return proto.treeleaf.anydone.entities.SlackEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackEvent}
 */
proto.treeleaf.anydone.entities.SlackEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientmsgid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUser(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTs(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeam(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventts(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setChanneltype(value);
      break;
    case 10:
      var value = new proto.treeleaf.anydone.entities.SlackFiles;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SlackFiles.deserializeBinaryFromReader);
      msg.addFiles(value);
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
proto.treeleaf.anydone.entities.SlackEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientmsgid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUser();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTs();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTeam();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEventts();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getChanneltype();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getFilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.treeleaf.anydone.entities.SlackFiles.serializeBinaryToWriter
    );
  }
};


/**
 * optional string clientMsgId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getClientmsgid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setClientmsgid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string user = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getUser = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setUser = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string ts = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getTs = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setTs = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string team = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getTeam = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setTeam = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string channel = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string eventTs = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getEventts = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setEventts = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string channelType = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getChanneltype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.setChanneltype = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated SlackFiles files = 10;
 * @return {!Array<!proto.treeleaf.anydone.entities.SlackFiles>}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.getFilesList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.SlackFiles>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.SlackFiles, 10));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.SlackFiles>} value
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
*/
proto.treeleaf.anydone.entities.SlackEvent.prototype.setFilesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.SlackFiles=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.SlackFiles}
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.addFiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.treeleaf.anydone.entities.SlackFiles, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.SlackEvent} returns this
 */
proto.treeleaf.anydone.entities.SlackEvent.prototype.clearFilesList = function() {
  return this.setFilesList([]);
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
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    ok: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
    slackuser: (f = msg.getSlackuser()) && proto.treeleaf.anydone.entities.SlackUser.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.SlackUserResponse}
 */
proto.treeleaf.anydone.entities.SlackUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackUserResponse;
  return proto.treeleaf.anydone.entities.SlackUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackUserResponse}
 */
proto.treeleaf.anydone.entities.SlackUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setOk(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.SlackUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.SlackUser.deserializeBinaryFromReader);
      msg.setSlackuser(value);
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
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOk();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getSlackuser();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.SlackUser.serializeBinaryToWriter
    );
  }
};


/**
 * optional bool ok = 1;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.getOk = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserResponse} returns this
 */
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.setOk = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional SlackUser slackUser = 2;
 * @return {?proto.treeleaf.anydone.entities.SlackUser}
 */
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.getSlackuser = function() {
  return /** @type{?proto.treeleaf.anydone.entities.SlackUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.SlackUser, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.SlackUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SlackUserResponse} returns this
*/
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.setSlackuser = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SlackUserResponse} returns this
 */
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.clearSlackuser = function() {
  return this.setSlackuser(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SlackUserResponse.prototype.hasSlackuser = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.treeleaf.anydone.entities.SlackPayload.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackPayload.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackPayload} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackPayload.toObject = function(includeInstance, msg) {
  var f, obj = {
    channel: jspb.Message.getFieldWithDefault(msg, 1, ""),
    text: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.SlackPayload}
 */
proto.treeleaf.anydone.entities.SlackPayload.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackPayload;
  return proto.treeleaf.anydone.entities.SlackPayload.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackPayload} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackPayload}
 */
proto.treeleaf.anydone.entities.SlackPayload.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChannel(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
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
proto.treeleaf.anydone.entities.SlackPayload.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackPayload.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackPayload} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackPayload.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChannel();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string channel = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackPayload.prototype.getChannel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackPayload} returns this
 */
proto.treeleaf.anydone.entities.SlackPayload.prototype.setChannel = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string text = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackPayload.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackPayload} returns this
 */
proto.treeleaf.anydone.entities.SlackPayload.prototype.setText = function(value) {
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
proto.treeleaf.anydone.entities.SlackFiles.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SlackFiles.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SlackFiles} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackFiles.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    created: jspb.Message.getFieldWithDefault(msg, 2, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    urlprivate: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.treeleaf.anydone.entities.SlackFiles}
 */
proto.treeleaf.anydone.entities.SlackFiles.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SlackFiles;
  return proto.treeleaf.anydone.entities.SlackFiles.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SlackFiles} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SlackFiles}
 */
proto.treeleaf.anydone.entities.SlackFiles.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCreated(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTimestamp(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrlprivate(value);
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
proto.treeleaf.anydone.entities.SlackFiles.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SlackFiles.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SlackFiles} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SlackFiles.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCreated();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTimestamp();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUrlprivate();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackFiles} returns this
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string created = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.getCreated = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackFiles} returns this
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.setCreated = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string timestamp = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.getTimestamp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackFiles} returns this
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackFiles} returns this
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string urlPrivate = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.getUrlprivate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SlackFiles} returns this
 */
proto.treeleaf.anydone.entities.SlackFiles.prototype.setUrlprivate = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.repeatedFields_ = [4,5,6,7];



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
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingMailMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingMailMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    mailsubject: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messagecontent: jspb.Message.getFieldWithDefault(msg, 2, ""),
    sentdate: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tolistList: (f = jspb.Message.getRepeatedField(msg, 4)) == null ? undefined : f,
    fromlistList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    cclistList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f,
    replytolistList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    mailmessageid: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingMailMessage;
  return proto.treeleaf.anydone.entities.IncomingMailMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingMailMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailsubject(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessagecontent(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentdate(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addTolist(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addFromlist(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.addCclist(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addReplytolist(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setMailmessageid(value);
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
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingMailMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingMailMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMailsubject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessagecontent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSentdate();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTolistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getFromlistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getCclistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      6,
      f
    );
  }
  f = message.getReplytolistList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getMailmessageid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string mailSubject = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getMailsubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setMailsubject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageContent = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getMessagecontent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setMessagecontent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string sentDate = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getSentdate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setSentdate = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated string toList = 4;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getTolistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setTolistList = function(value) {
  return jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.addTolist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.clearTolistList = function() {
  return this.setTolistList([]);
};


/**
 * repeated string fromList = 5;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getFromlistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setFromlistList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.addFromlist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.clearFromlistList = function() {
  return this.setFromlistList([]);
};


/**
 * repeated string ccList = 6;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getCclistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setCclistList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.addCclist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.clearCclistList = function() {
  return this.setCclistList([]);
};


/**
 * repeated string replyToList = 7;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getReplytolistList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setReplytolistList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.addReplytolist = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.clearReplytolistList = function() {
  return this.setReplytolistList([]);
};


/**
 * optional string mailMessageId = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.getMailmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingMailMessage.prototype.setMailmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
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
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingMailMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingMailMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    email: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 4, ""),
    emailprovider: jspb.Message.getFieldWithDefault(msg, 5, 0),
    messageid: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingMailMessage;
  return proto.treeleaf.anydone.entities.OutgoingMailMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingMailMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 5:
      var value = /** @type {!proto.treeleaf.anydone.entities.EmailProvider} */ (reader.readEnum());
      msg.setEmailprovider(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
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
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingMailMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingMailMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmailprovider();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string email = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string recipientId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getRecipientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setRecipientid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional EmailProvider emailProvider = 5;
 * @return {!proto.treeleaf.anydone.entities.EmailProvider}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getEmailprovider = function() {
  return /** @type {!proto.treeleaf.anydone.entities.EmailProvider} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailProvider} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setEmailprovider = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string MessageId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingMailMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingMailMessage.prototype.setMessageid = function(value) {
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
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.SendReplyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.SendReplyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SendReplyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    sendreplytype: jspb.Message.getFieldWithDefault(msg, 1, 0),
    conversationid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    kgraphreply: (f = msg.getKgraphreply()) && nlu_pb.KGraphReply.toObject(includeInstance, f),
    senderid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    rtcmessageid: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.SendReplyRequest;
  return proto.treeleaf.anydone.entities.SendReplyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.SendReplyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType} */ (reader.readEnum());
      msg.setSendreplytype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = new nlu_pb.KGraphReply;
      reader.readMessage(value,nlu_pb.KGraphReply.deserializeBinaryFromReader);
      msg.setKgraphreply(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSenderid(value);
      break;
    case 6:
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
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.SendReplyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.SendReplyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.SendReplyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSendreplytype();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getKgraphreply();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      nlu_pb.KGraphReply.serializeBinaryToWriter
    );
  }
  f = message.getSenderid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRtcmessageid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType = {
  UNKNOWN_TYPE: 0,
  TEXT_REPLY_TYPE: 1,
  KGRAPH_REPLY_TYPE: 2
};

/**
 * optional SendReplyType sendReplyType = 1;
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getSendreplytype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.SendReplyRequest.SendReplyType} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setSendreplytype = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional string conversationId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional KGraphReply kgraphReply = 4;
 * @return {?proto.treeleaf.anydone.entities.KGraphReply}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getKgraphreply = function() {
  return /** @type{?proto.treeleaf.anydone.entities.KGraphReply} */ (
    jspb.Message.getWrapperField(this, nlu_pb.KGraphReply, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.KGraphReply|undefined} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
*/
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setKgraphreply = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.clearKgraphreply = function() {
  return this.setKgraphreply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.hasKgraphreply = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string senderId = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getSenderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setSenderid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string rtcMessageId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.getRtcmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.SendReplyRequest} returns this
 */
proto.treeleaf.anydone.entities.SendReplyRequest.prototype.setRtcmessageid = function(value) {
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
proto.treeleaf.anydone.entities.EmailAddress.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmailAddress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmailAddress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmailAddress.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    address: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.EmailAddress}
 */
proto.treeleaf.anydone.entities.EmailAddress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmailAddress;
  return proto.treeleaf.anydone.entities.EmailAddress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmailAddress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmailAddress}
 */
proto.treeleaf.anydone.entities.EmailAddress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddress(value);
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
proto.treeleaf.anydone.entities.EmailAddress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmailAddress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmailAddress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmailAddress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAddress();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmailAddress.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmailAddress} returns this
 */
proto.treeleaf.anydone.entities.EmailAddress.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string address = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.EmailAddress.prototype.getAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.EmailAddress} returns this
 */
proto.treeleaf.anydone.entities.EmailAddress.prototype.setAddress = function(value) {
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
proto.treeleaf.anydone.entities.EmailUser.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.EmailUser.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.EmailUser} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmailUser.toObject = function(includeInstance, msg) {
  var f, obj = {
    emailaddress: (f = msg.getEmailaddress()) && proto.treeleaf.anydone.entities.EmailAddress.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.EmailUser.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.EmailUser;
  return proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.EmailUser} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.EmailAddress;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailAddress.deserializeBinaryFromReader);
      msg.setEmailaddress(value);
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
proto.treeleaf.anydone.entities.EmailUser.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.EmailUser} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEmailaddress();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.EmailAddress.serializeBinaryToWriter
    );
  }
};


/**
 * optional EmailAddress emailAddress = 1;
 * @return {?proto.treeleaf.anydone.entities.EmailAddress}
 */
proto.treeleaf.anydone.entities.EmailUser.prototype.getEmailaddress = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmailAddress} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmailAddress, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmailAddress|undefined} value
 * @return {!proto.treeleaf.anydone.entities.EmailUser} returns this
*/
proto.treeleaf.anydone.entities.EmailUser.prototype.setEmailaddress = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.EmailUser} returns this
 */
proto.treeleaf.anydone.entities.EmailUser.prototype.clearEmailaddress = function() {
  return this.setEmailaddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.EmailUser.prototype.hasEmailaddress = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingOutlookMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.toObject, includeInstance),
    datacontext: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingOutlookMessage;
  return proto.treeleaf.anydone.entities.IncomingOutlookMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatacontext(value);
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
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingOutlookMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.serializeBinaryToWriter
    );
  }
  f = message.getDatacontext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.repeatedFields_ = [4,5,6,7];



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
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    sender: (f = msg.getSender()) && proto.treeleaf.anydone.entities.EmailUser.toObject(includeInstance, f),
    from: (f = msg.getFrom()) && proto.treeleaf.anydone.entities.EmailUser.toObject(includeInstance, f),
    torecipientsList: jspb.Message.toObjectList(msg.getTorecipientsList(),
    proto.treeleaf.anydone.entities.EmailUser.toObject, includeInstance),
    ccrecipientsList: jspb.Message.toObjectList(msg.getCcrecipientsList(),
    proto.treeleaf.anydone.entities.EmailUser.toObject, includeInstance),
    bccrecipientsList: jspb.Message.toObjectList(msg.getBccrecipientsList(),
    proto.treeleaf.anydone.entities.EmailUser.toObject, includeInstance),
    replytoList: jspb.Message.toObjectList(msg.getReplytoList(),
    proto.treeleaf.anydone.entities.EmailUser.toObject, includeInstance),
    subject: jspb.Message.getFieldWithDefault(msg, 8, ""),
    bodypreview: jspb.Message.getFieldWithDefault(msg, 9, ""),
    parentfolderid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    conversationid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    conversationindex: jspb.Message.getFieldWithDefault(msg, 12, ""),
    dataetag: jspb.Message.getFieldWithDefault(msg, 13, ""),
    createddatetime: jspb.Message.getFieldWithDefault(msg, 14, ""),
    lastmodifieddatetime: jspb.Message.getFieldWithDefault(msg, 15, ""),
    receiveddatetime: jspb.Message.getFieldWithDefault(msg, 16, ""),
    sentdatetime: jspb.Message.getFieldWithDefault(msg, 17, ""),
    internetmessageid: jspb.Message.getFieldWithDefault(msg, 18, ""),
    isread: jspb.Message.getBooleanFieldWithDefault(msg, 19, false),
    weblink: jspb.Message.getFieldWithDefault(msg, 20, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value;
  return proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.setSender(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.setFrom(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.addTorecipients(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.addCcrecipients(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.addBccrecipients(value);
      break;
    case 7:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.addReplyto(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBodypreview(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setParentfolderid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationindex(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataetag(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateddatetime(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastmodifieddatetime(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiveddatetime(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setSentdatetime(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readString());
      msg.setInternetmessageid(value);
      break;
    case 19:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsread(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readString());
      msg.setWeblink(value);
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
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSender();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getFrom();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getTorecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getCcrecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getBccrecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getReplytoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBodypreview();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getParentfolderid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getConversationindex();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getDataetag();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCreateddatetime();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getLastmodifieddatetime();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getReceiveddatetime();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getSentdatetime();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getInternetmessageid();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getIsread();
  if (f) {
    writer.writeBool(
      19,
      f
    );
  }
  f = message.getWeblink();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional EmailUser sender = 2;
 * @return {?proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getSender = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmailUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmailUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setSender = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearSender = function() {
  return this.setSender(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.hasSender = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional EmailUser from = 3;
 * @return {?proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getFrom = function() {
  return /** @type{?proto.treeleaf.anydone.entities.EmailUser} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.EmailUser|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setFrom = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearFrom = function() {
  return this.setFrom(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.hasFrom = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated EmailUser toRecipients = 4;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmailUser>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getTorecipientsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmailUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 4));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmailUser>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setTorecipientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.addTorecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.treeleaf.anydone.entities.EmailUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearTorecipientsList = function() {
  return this.setTorecipientsList([]);
};


/**
 * repeated EmailUser ccRecipients = 5;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmailUser>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getCcrecipientsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmailUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 5));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmailUser>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setCcrecipientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.addCcrecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.treeleaf.anydone.entities.EmailUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearCcrecipientsList = function() {
  return this.setCcrecipientsList([]);
};


/**
 * repeated EmailUser bccRecipients = 6;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmailUser>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getBccrecipientsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmailUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 6));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmailUser>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setBccrecipientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.addBccrecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.treeleaf.anydone.entities.EmailUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearBccrecipientsList = function() {
  return this.setBccrecipientsList([]);
};


/**
 * repeated EmailUser replyTo = 7;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmailUser>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getReplytoList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmailUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 7));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmailUser>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setReplytoList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.addReplyto = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.treeleaf.anydone.entities.EmailUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.clearReplytoList = function() {
  return this.setReplytoList([]);
};


/**
 * optional string subject = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string bodyPreview = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getBodypreview = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setBodypreview = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string parentFolderId = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getParentfolderid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setParentfolderid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string conversationId = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string conversationIndex = 12;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getConversationindex = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setConversationindex = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string dataEtag = 13;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getDataetag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setDataetag = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string createdDateTime = 14;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getCreateddatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setCreateddatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string lastModifiedDateTime = 15;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getLastmodifieddatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setLastmodifieddatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string receivedDateTime = 16;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getReceiveddatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setReceiveddatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string sentDateTime = 17;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getSentdatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setSentdatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string internetMessageId = 18;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getInternetmessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setInternetmessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional bool isRead = 19;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getIsread = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 19, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setIsread = function(value) {
  return jspb.Message.setProto3BooleanField(this, 19, value);
};


/**
 * optional string webLink = 20;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.getWeblink = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value.prototype.setWeblink = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * repeated Value value = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.getValueList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.IncomingOutlookMessage.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * optional string dataContext = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.getDatacontext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookMessage.prototype.setDatacontext = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingOutlookEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    valuesList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookEvent}
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingOutlookEvent;
  return proto.treeleaf.anydone.entities.IncomingOutlookEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookEvent}
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
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
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingOutlookEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string values = 1;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.setValuesList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.addValues = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.IncomingOutlookEvent} returns this
 */
proto.treeleaf.anydone.entities.IncomingOutlookEvent.prototype.clearValuesList = function() {
  return this.setValuesList([]);
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
proto.treeleaf.anydone.entities.ClientCredentials.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.ClientCredentials.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.ClientCredentials} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ClientCredentials.toObject = function(includeInstance, msg) {
  var f, obj = {
    tokentype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    expiresin: jspb.Message.getFieldWithDefault(msg, 2, 0),
    extexpiresin: jspb.Message.getFieldWithDefault(msg, 3, 0),
    accesstoken: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials}
 */
proto.treeleaf.anydone.entities.ClientCredentials.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.ClientCredentials;
  return proto.treeleaf.anydone.entities.ClientCredentials.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.ClientCredentials} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials}
 */
proto.treeleaf.anydone.entities.ClientCredentials.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTokentype(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpiresin(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExtexpiresin(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccesstoken(value);
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
proto.treeleaf.anydone.entities.ClientCredentials.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.ClientCredentials.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.ClientCredentials} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.ClientCredentials.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTokentype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getExpiresin();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getExtexpiresin();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAccesstoken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string tokenType = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.getTokentype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials} returns this
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.setTokentype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 expiresIn = 2;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.getExpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials} returns this
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.setExpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 extExpiresIn = 3;
 * @return {number}
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.getExtexpiresin = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials} returns this
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.setExtexpiresin = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string accessToken = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.getAccesstoken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.ClientCredentials} returns this
 */
proto.treeleaf.anydone.entities.ClientCredentials.prototype.setAccesstoken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.repeatedFields_ = [1];



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
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutlookUserDetails.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.toObject = function(includeInstance, msg) {
  var f, obj = {
    valueList: jspb.Message.toObjectList(msg.getValueList(),
    proto.treeleaf.anydone.entities.OutlookUserDetails.Value.toObject, includeInstance),
    datacontext: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutlookUserDetails;
  return proto.treeleaf.anydone.entities.OutlookUserDetails.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutlookUserDetails.Value;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutlookUserDetails.Value.deserializeBinaryFromReader);
      msg.addValue(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatacontext(value);
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
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutlookUserDetails.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValueList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutlookUserDetails.Value.serializeBinaryToWriter
    );
  }
  f = message.getDatacontext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
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
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutlookUserDetails.Value.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.toObject = function(includeInstance, msg) {
  var f, obj = {
    dataid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    displayname: jspb.Message.getFieldWithDefault(msg, 2, ""),
    jobtitle: jspb.Message.getFieldWithDefault(msg, 3, ""),
    givenname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    mail: jspb.Message.getFieldWithDefault(msg, 5, ""),
    mobilephone: jspb.Message.getFieldWithDefault(msg, 6, ""),
    officelocation: jspb.Message.getFieldWithDefault(msg, 7, ""),
    preferredlanguage: jspb.Message.getFieldWithDefault(msg, 8, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    userprincipalname: jspb.Message.getFieldWithDefault(msg, 10, ""),
    id: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutlookUserDetails.Value;
  return proto.treeleaf.anydone.entities.OutlookUserDetails.Value.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setJobtitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setGivenname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setMail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMobilephone(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOfficelocation(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPreferredlanguage(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserprincipalname(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
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
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutlookUserDetails.Value.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDataid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getJobtitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getGivenname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getMobilephone();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOfficelocation();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPreferredlanguage();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getUserprincipalname();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string dataId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getDataid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setDataid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string displayName = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string jobTitle = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getJobtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setJobtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string givenName = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getGivenname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setGivenname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string mail = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getMail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setMail = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string mobilePhone = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getMobilephone = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setMobilephone = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string officeLocation = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getOfficelocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setOfficelocation = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string preferredLanguage = 8;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getPreferredlanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setPreferredlanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string surname = 9;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setSurname = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string userPrincipalName = 10;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getUserprincipalname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setUserprincipalname = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string id = 11;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.Value.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated Value value = 1;
 * @return {!Array<!proto.treeleaf.anydone.entities.OutlookUserDetails.Value>}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.getValueList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.OutlookUserDetails.Value>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.OutlookUserDetails.Value, 1));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.OutlookUserDetails.Value>} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails} returns this
*/
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.setValueList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails.Value}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.addValue = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.treeleaf.anydone.entities.OutlookUserDetails.Value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.clearValueList = function() {
  return this.setValueList([]);
};


/**
 * optional string dataContext = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.getDatacontext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutlookUserDetails} returns this
 */
proto.treeleaf.anydone.entities.OutlookUserDetails.prototype.setDatacontext = function(value) {
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.toObject(includeInstance, f),
    savetosentitems: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingOutlookMessage;
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setSavetosentitems(value);
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.serializeBinaryToWriter
    );
  }
  f = message.getSavetosentitems();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.toObject = function(includeInstance, msg) {
  var f, obj = {
    subject: jspb.Message.getFieldWithDefault(msg, 1, ""),
    body: (f = msg.getBody()) && proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.toObject(includeInstance, f),
    torecipientsList: jspb.Message.toObjectList(msg.getTorecipientsList(),
    proto.treeleaf.anydone.entities.EmailUser.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message;
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.deserializeBinaryFromReader);
      msg.setBody(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.EmailUser;
      reader.readMessage(value,proto.treeleaf.anydone.entities.EmailUser.deserializeBinaryFromReader);
      msg.addTorecipients(value);
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.serializeBinaryToWriter
    );
  }
  f = message.getTorecipientsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.EmailUser.serializeBinaryToWriter
    );
  }
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.toObject = function(includeInstance, msg) {
  var f, obj = {
    contenttype: jspb.Message.getFieldWithDefault(msg, 1, ""),
    content: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body;
  return proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setContenttype(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
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
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContenttype();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string contentType = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.getContenttype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.setContenttype = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string content = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subject = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Body body = 2;
 * @return {?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.getBody = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.Body|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} returns this
*/
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.hasBody = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated EmailUser toRecipients = 3;
 * @return {!Array<!proto.treeleaf.anydone.entities.EmailUser>}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.getTorecipientsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.EmailUser>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.EmailUser, 3));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.EmailUser>} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} returns this
*/
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.setTorecipientsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.EmailUser=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.EmailUser}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.addTorecipients = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.treeleaf.anydone.entities.EmailUser, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message.prototype.clearTorecipientsList = function() {
  return this.setTorecipientsList([]);
};


/**
 * optional Message message = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingOutlookMessage.Message|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} returns this
*/
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string saveToSentItems = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.getSavetosentitems = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingOutlookMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingOutlookMessage.prototype.setSavetosentitems = function(value) {
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    agent: jspb.Message.getFieldWithDefault(msg, 1, ""),
    conversationid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    customagentid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    requestid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    message: (f = msg.getMessage()) && proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.toObject(includeInstance, f),
    context: (f = msg.getContext()) && proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.toObject(includeInstance, f),
    sendtime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    authenticationresponse: (f = msg.getAuthenticationresponse()) && proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setAgent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setConversationid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomagentid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRequestid(value);
      break;
    case 5:
      var value = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    case 6:
      var value = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.deserializeBinaryFromReader);
      msg.setContext(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setSendtime(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.deserializeBinaryFromReader);
      msg.setAuthenticationresponse(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAgent();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getConversationid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCustomagentid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRequestid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.serializeBinaryToWriter
    );
  }
  f = message.getContext();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.serializeBinaryToWriter
    );
  }
  f = message.getSendtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAuthenticationresponse();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint = {
  ENTRY_POINT_UNSPECIFIED: 0,
  PLACESHEET: 1,
  MAPS: 2,
  FEATURED_SNIPPETS: 3,
  SITELINKS: 4,
  WEB_WIDGET: 5,
  PHONE: 6,
  URL: 7,
  LOCAL_PACK: 8
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userdevicelocale: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserdevicelocale(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserdevicelocale();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string userDeviceLocale = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.getUserdevicelocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.prototype.setUserdevicelocale = function(value) {
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, ""),
    widgetcontext: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWidgetcontext(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWidgetcontext();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.setUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string widgetContext = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.getWidgetcontext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.prototype.setWidgetcontext = function(value) {
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.toObject = function(includeInstance, msg) {
  var f, obj = {
    entrypoint: jspb.Message.getFieldWithDefault(msg, 1, 0),
    userinfo: (f = msg.getUserinfo()) && proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.toObject(includeInstance, f),
    widget: (f = msg.getWidget()) && proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.toObject(includeInstance, f),
    resolvedlocale: jspb.Message.getFieldWithDefault(msg, 4, ""),
    customcontext: jspb.Message.getFieldWithDefault(msg, 5, ""),
    placeid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    nearplaceid: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint} */ (reader.readEnum());
      msg.setEntrypoint(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.deserializeBinaryFromReader);
      msg.setUserinfo(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget;
      reader.readMessage(value,proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.deserializeBinaryFromReader);
      msg.setWidget(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setResolvedlocale(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCustomcontext(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPlaceid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setNearplaceid(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntrypoint();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getUserinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getWidget();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget.serializeBinaryToWriter
    );
  }
  f = message.getResolvedlocale();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCustomcontext();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPlaceid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getNearplaceid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional EntryPoint entryPoint = 1;
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getEntrypoint = function() {
  return /** @type {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.EntryPoint} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setEntrypoint = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional UserInfo userInfo = 2;
 * @return {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getUserinfo = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.UserInfo|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
*/
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setUserinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.clearUserinfo = function() {
  return this.setUserinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.hasUserinfo = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Widget widget = 3;
 * @return {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getWidget = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Widget|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
*/
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setWidget = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.clearWidget = function() {
  return this.setWidget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.hasWidget = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string resolvedLocale = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getResolvedlocale = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setResolvedlocale = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string customContext = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getCustomcontext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setCustomcontext = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string placeId = 6;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getPlaceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setPlaceid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string nearPlaceId = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.getNearplaceid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context.prototype.setNearplaceid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    text: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createtime: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatetime(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatetime();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string messageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string text = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string createTime = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.getCreatetime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage.prototype.setCreatetime = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    code: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse;
  return proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
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
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string agent = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getAgent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setAgent = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string conversationId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getConversationid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setConversationid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string customAgentId = 3;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getCustomagentid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setCustomagentid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string requestId = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getRequestid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setRequestid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional GoogleMessage message = 5;
 * @return {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getMessage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage, 5));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.GoogleMessage|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional Context context = 6;
 * @return {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getContext = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context, 6));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.Context|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setContext = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.clearContext = function() {
  return this.setContext(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.hasContext = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string sendTime = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getSendtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setSendtime = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional AuthenticationResponse authenticationResponse = 8;
 * @return {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.getAuthenticationresponse = function() {
  return /** @type{?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.AuthenticationResponse|undefined} value
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.setAuthenticationresponse = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.clearAuthenticationresponse = function() {
  return this.setAuthenticationresponse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.IncomingGoogleBusinessMessage.prototype.hasAuthenticationresponse = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.repeatedFields_ = [4];



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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    representative: (f = msg.getRepresentative()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.toObject(includeInstance, f),
    suggestionsList: jspb.Message.toObjectList(msg.getSuggestionsList(),
    proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.toObject, includeInstance),
    fallback: jspb.Message.getFieldWithDefault(msg, 5, ""),
    containsrichtext: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    text: jspb.Message.getFieldWithDefault(msg, 7, ""),
    image: (f = msg.getImage()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.toObject(includeInstance, f),
    richcard: (f = msg.getRichcard()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.deserializeBinaryFromReader);
      msg.setRepresentative(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.deserializeBinaryFromReader);
      msg.addSuggestions(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFallback(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setContainsrichtext(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setText(value);
      break;
    case 8:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.deserializeBinaryFromReader);
      msg.setImage(value);
      break;
    case 9:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.deserializeBinaryFromReader);
      msg.setRichcard(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRepresentative();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.serializeBinaryToWriter
    );
  }
  f = message.getSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.serializeBinaryToWriter
    );
  }
  f = message.getFallback();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContainsrichtext();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getImage();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.serializeBinaryToWriter
    );
  }
  f = message.getRichcard();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType = {
  REPRESENTATIVE_TYPE_UNSPECIFIED: 0,
  BOT: 1,
  HUMAN: 2
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postbackdata: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPostbackdata(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostbackdata();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postbackData = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.getPostbackdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.prototype.setPostbackdata = function(value) {
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.prototype.setUrl = function(value) {
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    phonenumber: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPhonenumber(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPhonenumber();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string phoneNumber = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.prototype.getPhonenumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.prototype.setPhonenumber = function(value) {
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.toObject = function(includeInstance, msg) {
  var f, obj = {
    text: jspb.Message.getFieldWithDefault(msg, 1, ""),
    postbackdata: jspb.Message.getFieldWithDefault(msg, 2, ""),
    openurlaction: (f = msg.getOpenurlaction()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.toObject(includeInstance, f),
    dialaction: (f = msg.getDialaction()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setPostbackdata(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.deserializeBinaryFromReader);
      msg.setOpenurlaction(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.deserializeBinaryFromReader);
      msg.setDialaction(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPostbackdata();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getOpenurlaction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction.serializeBinaryToWriter
    );
  }
  f = message.getDialaction();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction.serializeBinaryToWriter
    );
  }
};


/**
 * optional string text = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string postbackData = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.getPostbackdata = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.setPostbackdata = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional OpenUrlAction openUrlAction = 3;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.getOpenurlaction = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.OpenUrlAction|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.setOpenurlaction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.clearOpenurlaction = function() {
  return this.setOpenurlaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.hasOpenurlaction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional DialAction dialAction = 4;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.getDialaction = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.DialAction|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.setDialaction = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.clearDialaction = function() {
  return this.setDialaction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.prototype.hasDialaction = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.repeatedFields_ = [3];



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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    codechallenge: jspb.Message.getFieldWithDefault(msg, 2, ""),
    scopesList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    codechallengemethod: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodechallenge(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addScopes(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCodechallengemethod(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCodechallenge();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getScopesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getCodechallengemethod();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string clientId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.getClientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.setClientid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string codeChallenge = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.getCodechallenge = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.setCodechallenge = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string scopes = 3;
 * @return {!Array<string>}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.getScopesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.setScopesList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.addScopes = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.clearScopesList = function() {
  return this.setScopesList([]);
};


/**
 * optional string codeChallengeMethod = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.getCodechallengemethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.prototype.setCodechallengemethod = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oauth: (f = msg.getOauth()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.deserializeBinaryFromReader);
      msg.setOauth(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOauth();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.serializeBinaryToWriter
    );
  }
};


/**
 * optional Oauth oauth = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.getOauth = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.setOauth = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.clearOauth = function() {
  return this.setOauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.prototype.hasOauth = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    oauth: (f = msg.getOauth()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.deserializeBinaryFromReader);
      msg.setOauth(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOauth();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth.serializeBinaryToWriter
    );
  }
};


/**
 * optional Oauth oauth = 2;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.getOauth = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Oauth|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.setOauth = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.clearOauth = function() {
  return this.setOauth(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.prototype.hasOauth = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.toObject = function(includeInstance, msg) {
  var f, obj = {
    reply: (f = msg.getReply()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.toObject(includeInstance, f),
    action: (f = msg.getAction()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.toObject(includeInstance, f),
    liveagentrequest: (f = msg.getLiveagentrequest()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.toObject(includeInstance, f),
    authenticationrequest: (f = msg.getAuthenticationrequest()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.deserializeBinaryFromReader);
      msg.setReply(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.deserializeBinaryFromReader);
      msg.setAction(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.deserializeBinaryFromReader);
      msg.setLiveagentrequest(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.deserializeBinaryFromReader);
      msg.setAuthenticationrequest(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getReply();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply.serializeBinaryToWriter
    );
  }
  f = message.getAction();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction.serializeBinaryToWriter
    );
  }
  f = message.getLiveagentrequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest.serializeBinaryToWriter
    );
  }
  f = message.getAuthenticationrequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest.serializeBinaryToWriter
    );
  }
};


/**
 * optional SuggestedReply reply = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.getReply = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedReply|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.setReply = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.clearReply = function() {
  return this.setReply(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.hasReply = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional SuggestedAction action = 2;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.getAction = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.SuggestedAction|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.setAction = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.clearAction = function() {
  return this.setAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.hasAction = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional LiveAgentRequest liveAgentRequest = 3;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.getLiveagentrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.LiveAgentRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.setLiveagentrequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.clearLiveagentrequest = function() {
  return this.setLiveagentrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.hasLiveagentrequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AuthenticationRequest authenticationRequest = 4;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.getAuthenticationrequest = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest, 4));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.AuthenticationRequest|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.setAuthenticationrequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.clearAuthenticationrequest = function() {
  return this.setAuthenticationrequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.prototype.hasAuthenticationrequest = function() {
  return jspb.Message.getField(this, 4) != null;
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.toObject = function(includeInstance, msg) {
  var f, obj = {
    displayname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    avatarimage: jspb.Message.getFieldWithDefault(msg, 2, ""),
    representativetype: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setAvatarimage(value);
      break;
    case 3:
      var value = /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType} */ (reader.readEnum());
      msg.setRepresentativetype(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDisplayname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatarimage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRepresentativetype();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
};


/**
 * optional string displayName = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.getDisplayname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.setDisplayname = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatarImage = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.getAvatarimage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.setAvatarimage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional RepresentativeType representativeType = 3;
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.getRepresentativetype = function() {
  return /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RepresentativeType} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative.prototype.setRepresentativetype = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.toObject = function(includeInstance, msg) {
  var f, obj = {
    contentinfo: (f = msg.getContentinfo()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.deserializeBinaryFromReader);
      msg.setContentinfo(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContentinfo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.serializeBinaryToWriter
    );
  }
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    forcerefresh: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    alttext: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcerefresh(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlttext(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnailurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getForcerefresh();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAlttext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string fileUrl = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.getFileurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.setFileurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnailUrl = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool forceRefresh = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.getForcerefresh = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.setForcerefresh = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string altText = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.getAlttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo.prototype.setAlttext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ContentInfo contentInfo = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.getContentinfo = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.ContentInfo|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.setContentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.clearContentinfo = function() {
  return this.setContentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image.prototype.hasContentinfo = function() {
  return jspb.Message.getField(this, 1) != null;
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    standalonecard: (f = msg.getStandalonecard()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.toObject(includeInstance, f),
    carouselcard: (f = msg.getCarouselcard()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.deserializeBinaryFromReader);
      msg.setStandalonecard(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.deserializeBinaryFromReader);
      msg.setCarouselcard(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStandalonecard();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.serializeBinaryToWriter
    );
  }
  f = message.getCarouselcard();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.serializeBinaryToWriter
    );
  }
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.toObject = function(includeInstance, msg) {
  var f, obj = {
    height: jspb.Message.getFieldWithDefault(msg, 1, 0),
    contentinfo: (f = msg.getContentinfo()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height} */ (reader.readEnum());
      msg.setHeight(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.deserializeBinaryFromReader);
      msg.setContentinfo(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHeight();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getContentinfo();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height = {
  HEIGHT_UNSPECIFIED: 0,
  SHORT: 1,
  MEDIUM: 2,
  TALL: 3
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    fileurl: jspb.Message.getFieldWithDefault(msg, 1, ""),
    thumbnailurl: jspb.Message.getFieldWithDefault(msg, 2, ""),
    forcerefresh: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    alttext: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFileurl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setThumbnailurl(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setForcerefresh(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAlttext(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFileurl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getThumbnailurl();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getForcerefresh();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getAlttext();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string fileUrl = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.getFileurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.setFileurl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string thumbnailUrl = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.getThumbnailurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.setThumbnailurl = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool forceRefresh = 3;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.getForcerefresh = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.setForcerefresh = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string altText = 4;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.getAlttext = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo.prototype.setAlttext = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Height height = 1;
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.getHeight = function() {
  return /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.Height} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.setHeight = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * optional ContentInfo contentInfo = 2;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.getContentinfo = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.ContentInfo|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.setContentinfo = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.clearContentinfo = function() {
  return this.setContentinfo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.prototype.hasContentinfo = function() {
  return jspb.Message.getField(this, 2) != null;
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardcontent: (f = msg.getCardcontent()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.toObject(includeInstance, f)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.deserializeBinaryFromReader);
      msg.setCardcontent(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardcontent();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.serializeBinaryToWriter
    );
  }
};


/**
 * optional CardContent cardContent = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.getCardcontent = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.setCardcontent = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.clearCardcontent = function() {
  return this.setCardcontent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard.prototype.hasCardcontent = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.repeatedFields_ = [4];



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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    media: (f = msg.getMedia()) && proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.toObject(includeInstance, f),
    suggestionsList: jspb.Message.toObjectList(msg.getSuggestionsList(),
    proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.deserializeBinaryFromReader);
      msg.setMedia(value);
      break;
    case 4:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.deserializeBinaryFromReader);
      msg.addSuggestions(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMedia();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media.serializeBinaryToWriter
    );
  }
  f = message.getSuggestionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Media media = 3;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.getMedia = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.Media|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.setMedia = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.clearMedia = function() {
  return this.setMedia(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.hasMedia = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Suggestion suggestions = 4;
 * @return {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.getSuggestionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion, 4));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.setSuggestionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.addSuggestions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.prototype.clearSuggestionsList = function() {
  return this.setSuggestionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.repeatedFields_ = [2];



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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.toObject = function(includeInstance, msg) {
  var f, obj = {
    cardwidth: jspb.Message.getFieldWithDefault(msg, 1, 0),
    cardcontentsList: jspb.Message.toObjectList(msg.getCardcontentsList(),
    proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.toObject, includeInstance)
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
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard;
  return proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth} */ (reader.readEnum());
      msg.setCardwidth(value);
      break;
    case 2:
      var value = new proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent;
      reader.readMessage(value,proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.deserializeBinaryFromReader);
      msg.addCardcontents(value);
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
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCardwidth();
  if (f !== 0.0) {
    writer.writeEnum(
      1,
      f
    );
  }
  f = message.getCardcontentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth = {
  CARD_WIDTH_UNSPECIFIED: 0,
  SMALL: 1,
  MEDIUM: 2
};

/**
 * optional CardWidth cardWidth = 1;
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.getCardwidth = function() {
  return /** @type {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.CardWidth} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.setCardwidth = function(value) {
  return jspb.Message.setProto3EnumField(this, 1, value);
};


/**
 * repeated CardContent cardContents = 2;
 * @return {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent>}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.getCardcontentsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent, 2));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent>} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.setCardcontentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.addCardcontents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CardContent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard.prototype.clearCardcontentsList = function() {
  return this.setCardcontentsList([]);
};


/**
 * optional StandaloneCard standaloneCard = 1;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.getStandalonecard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard, 1));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.StandaloneCard|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.setStandalonecard = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.clearStandalonecard = function() {
  return this.setStandalonecard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.hasStandalonecard = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CarouselCard carouselCard = 2;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.getCarouselcard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard, 2));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.CarouselCard|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.setCarouselcard = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.clearCarouselcard = function() {
  return this.setCarouselcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard.prototype.hasCarouselcard = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string messageId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Representative representative = 3;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getRepresentative = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative, 3));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Representative|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setRepresentative = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.clearRepresentative = function() {
  return this.setRepresentative(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.hasRepresentative = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated Suggestion suggestions = 4;
 * @return {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getSuggestionsList = function() {
  return /** @type{!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion, 4));
};


/**
 * @param {!Array<!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion>} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setSuggestionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion=} opt_value
 * @param {number=} opt_index
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.addSuggestions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Suggestion, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.clearSuggestionsList = function() {
  return this.setSuggestionsList([]);
};


/**
 * optional string fallback = 5;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getFallback = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setFallback = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool containsRichText = 6;
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getContainsrichtext = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setContainsrichtext = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string text = 7;
 * @return {string}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setText = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional Image image = 8;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getImage = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image, 8));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.Image|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setImage = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.clearImage = function() {
  return this.setImage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.hasImage = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional RichCard richCard = 9;
 * @return {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.getRichcard = function() {
  return /** @type{?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard} */ (
    jspb.Message.getWrapperField(this, proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard, 9));
};


/**
 * @param {?proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.RichCard|undefined} value
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
*/
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.setRichcard = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage} returns this
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.clearRichcard = function() {
  return this.setRichcard(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.treeleaf.anydone.entities.OutgoingGoogleBusinessMessage.prototype.hasRichcard = function() {
  return jspb.Message.getField(this, 9) != null;
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
proto.treeleaf.anydone.entities.GoogleVerification.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.GoogleVerification.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.GoogleVerification} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GoogleVerification.toObject = function(includeInstance, msg) {
  var f, obj = {
    signature: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.treeleaf.anydone.entities.GoogleVerification}
 */
proto.treeleaf.anydone.entities.GoogleVerification.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.GoogleVerification;
  return proto.treeleaf.anydone.entities.GoogleVerification.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.GoogleVerification} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.GoogleVerification}
 */
proto.treeleaf.anydone.entities.GoogleVerification.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignature(value);
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
proto.treeleaf.anydone.entities.GoogleVerification.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.GoogleVerification.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.GoogleVerification} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.GoogleVerification.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignature();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signature = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.GoogleVerification.prototype.getSignature = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.GoogleVerification} returns this
 */
proto.treeleaf.anydone.entities.GoogleVerification.prototype.setSignature = function(value) {
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
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    recipientid: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse}
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.treeleaf.anydone.entities.InstagramMessageReplyResponse;
  return proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse}
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecipientid(value);
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
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRecipientid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string messageId = 1;
 * @return {string}
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.getMessageid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse} returns this
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.setMessageid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string recipientId = 2;
 * @return {string}
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.getRecipientid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.treeleaf.anydone.entities.InstagramMessageReplyResponse} returns this
 */
proto.treeleaf.anydone.entities.InstagramMessageReplyResponse.prototype.setRecipientid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.treeleaf.anydone.entities.EventTypes = {
  DELIVERED: 0,
  SEEN: 1,
  FAILED: 2,
  SUBSCRIBED: 3,
  UNSUBSCRIBED: 4,
  CONVERSATION_STARTED: 5
};

goog.object.extend(exports, proto.treeleaf.anydone.entities);
