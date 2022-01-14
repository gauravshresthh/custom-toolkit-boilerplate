import Activity from '../containers/Activity/ActivityWrapper';
import Messages from '../containers/Messages/MessageWrapper';
import Meetings from '../containers/Meetings/MeetingsWrapper';
import CreateMeeting from '../containers/Meetings/CreateMeeting';

export const PrivateRouteList = [
	{ path: '/activity', component: Activity },
	{ path: '/messages/:section/:id', component: Messages },
	{ path: '/meetings', component: Meetings },
	{ path: '/meetings/:meetingId', component: CreateMeeting },
];
