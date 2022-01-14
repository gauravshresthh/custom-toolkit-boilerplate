// eslint-disable-next-line import/no-unresolved
import Paho from 'paho-mqtt';
import { CreateUUID } from './helper';
import { host, port } from '../globalConstants';
import LocalDb from '../localStorage';
import { MessageProcessor } from '../messageProcessor/MessagePocessor';
import { Subscribe } from '../messageProcessor/Subscribe';
import { Publish } from '../messageProcessor/Publish';
import MqttConstants from '../messageProcessor/Constants';
import TokenHandler from '../token'

export const clientObj = {
  // Create a client instance
  client: undefined,
};

export const clearClientObj = () => {
 clientObj.client = undefined;
};

export function GenerateNewClientId(
  msgArrivedFunc,
  connectionLostFunc,
  onConnectFunc,
) {
  console.log('client', clientObj, clientObj.client);
  if (clientObj && clientObj.client) {
  } else {
    const newID = CreateUUID();
    clientObj.client = new Paho.Client(host, port, newID);
    console.log('client else', clientObj, clientObj.client);
    startConnection(msgArrivedFunc, connectionLostFunc, onConnectFunc);
  }
}

export function startConnection(
  msgArrivedFunc,
  connectionLostFunc,
  onConnectFunc,
) {
  console.log('%cstart','font-size:30px', clientObj.client.isConnected(),LocalDb.getUserAccountId(),TokenHandler.token());
  if (
    LocalDb.getSessions() &&
    LocalDb.getUserAccountId() &&
    clientObj.client.isConnected() === false
  ) {
    // connect the client
    clientObj.client.connect({
      onSuccess: () => onConnect(onConnectFunc),
      onFailure: () => onFailure(msgArrivedFunc, connectionLostFunc),
      useSSL: true,
      userName: LocalDb.getUserAccountId(),
      password: TokenHandler.token(),
      reconnect: true,
    });
  }
  clientObj.client.isConnected();
  clientObj.client.onMessageArrived = msgArrivedFunc;
  clientObj.client.onConnectionLost = connectionLostFunc;
}

// called when the client connects
export function onConnect(onConnectFunc) {
  console.log(
    '%cSUCCESS',
    consoleStyles.success,
    clientObj.client.isConnected(),
  );
  if (clientObj.client.isConnected()) {
    console.log('%cConnected', 'color:red',LocalDb.getUserAccountId());
    const msgProcessor = new MessageProcessor(new Subscribe(), new Publish());

    msgProcessor.MessageSubscriber(MqttConstants.RTC_MESSAGE_RESPONSE + LocalDb.getUserAccountId());
    msgProcessor.MessageSubscriber(MqttConstants.RTC_MESSAGE_RESPONSE_ERROR + LocalDb.getUserAccountId());

    msgProcessor.MessageSubscriber(MqttConstants.SUBSCRIBE_NOTIFICATION + LocalDb.getUserAccountId());
    msgProcessor.MessageSubscriber(MqttConstants.SUBSCRIBE_ERROR_NOTIFICATION + LocalDb.getUserAccountId());

    msgProcessor.MessageSubscriber(MqttConstants.SUBSCRIBE_VIDEO_NOTIFICATION + LocalDb.getUserAccountId());

    onConnectFunc();
  }
}

export function subscribe(topic) {
  if (clientObj.client.isConnected() === true) {
    clientObj.client.subscribe(topic);
  }
}

export function unsubscribe(topic) {
  if (clientObj.client.isConnected() === true) {
    clientObj.client.unsubscribe(topic);
  }
}

export function publish(topic, msg) {
  console.log('publish', msg.buffer);
  const message = new Paho.Message(msg.buffer);
  message.destinationName = topic;
  clientObj.client.send(message);
}

// export function onMessageArrival(message) {
//   console.log('message arrived', message);
// }

export function onFailure(msgArrivedFunc, connectionLostFunc) {
  console.log(
    'onFailure........',clientObj,
    clientObj.client.isConnected(),
    msgArrivedFunc,
  );
  startConnection(msgArrivedFunc, connectionLostFunc);
}

const consoleStyles = {
  group: 'font-size: 20px; color: green; background-color: black',
  success: 'font-size: 15px; color: green; background-color: white',
  warn: 'font-size: 15px; color: red; background-color: white',
  event: 'font-size: 12px; color: blue; background-color: white',
  celebrate: 'font-size: 25px; color: green; background-color: white',
};
