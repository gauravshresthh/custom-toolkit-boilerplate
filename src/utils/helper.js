/* eslint-disable no-unused-vars */
/* eslint-disable no-sequences */
/* eslint-disable no-unused-expressions */
/* Generate uuid */
/**
 * @return {string}
 */
import React from 'react';
import DocIcons from '../assets/images/messages/DocIcons';

export function CreateUUID() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === 'x' ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}

export const CreateUUIDWithoutDash = () => CreateUUID().replace(/-/g, '');

export function escapeRegExp(string) {
	return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function replaceAll(str, strToReplace, replacementStr) {
	return str.replace(
		new RegExp(escapeRegExp(strToReplace), 'g'),
		replacementStr
	);
}

export const ExtractLinkFromText = string => {
	// const link = string
	//   ? string.match(/((\w+:\/\/\S+)|(\w+[\.:]\w+\S+))[^\s,\.]/gi)
	//   : '';
	const link = string
		? string.match(
				'(((((http|ftp|https|gopher|telnet|file|localhost):\\/\\/)|(www\\.)|(xn--)){1}([\\w_-]+(?:(?:\\.[\\w_-]+)+))([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])?)|(([\\w_-]{2,200}(?:(?:\\.[\\w_-]+)*))((\\.[\\w_-]+\\/([\\w.,@?^=%&:\\/~+#-]*[\\w@?^=%&\\/~+#-])?)|(\\.((org|com|net|edu|gov|mil|int|arpa|biz|info|unknown|one|ninja|network|host|coop|tech)|(jp|br|it|cn|mx|ar|nl|pl|ru|tr|tw|za|be|uk|eg|es|fi|pt|th|nz|cz|hu|gr|dk|il|sg|uy|lt|ua|ie|ir|ve|kz|ec|rs|sk|py|bg|hk|eu|ee|md|is|my|lv|gt|pk|ni|by|ae|kr|su|vn|cy|am|ke))))))(?!(((ttp|tp|ttps):\\/\\/)|(ww\\.)|(n--)))'
		  )
		: '';
	return link;
};

/* Convert bytes into kb,gb,.. */
export const BytesToSize = bytes => {
	const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
	if (bytes === 0) return '0 Byte';
	const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
	return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`;
};

// remove duplicates from array
// const array=[a,a,b,c,c]
// const newArray=[...new Set(array)]
// a,b,c doesnt work well if you have mulitple objects in an array

// remove duplicates from array
export const removeDuplicates = (arr, n) => {
	// Return, if array is empty
	// or contains a single element
	if (n === 0 || n === 1) return n;

	var temp = new Array(n);

	// Start traversing elements
	var j = 0;
	for (var i = 0; i < n - 1; i++)
		// If current element is not equal
		// to next element then store that
		// current element
		if (arr[i] !== arr[i + 1]) temp[j++] = arr[i];

	// Store the last element as whether
	// it is unique or repeated, it hasn't
	// stored previously
	temp[j++] = arr[n - 1];

	// Modify original array
	for (i = 0; i < j; i++) arr[i] = temp[i];

	return j;
};

export const getRandomColorShades = () => {
	var rint = Math.floor(0x100000000 * Math.random());
	return [
		'rgba(' +
			(rint & 255) +
			',' +
			((rint >> 8) & 255) +
			',' +
			((rint >> 16) & 255) +
			',1)',
		'rgba(' +
			(rint & 255) +
			',' +
			((rint >> 8) & 255) +
			',' +
			((rint >> 16) & 255) +
			',0.3)',
	];
};

export function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.round(Math.random() * 15)];
	}
	return color;
}

export function HexToHslConverter(hex) {
	let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	if (result) {
		let r = parseInt(result[1], 16);
		let g = parseInt(result[2], 16);
		let b = parseInt(result[3], 16);
		(r /= 255), (g /= 255), (b /= 255);
		let max = Math.max(r, g, b),
			min = Math.min(r, g, b);
		let h,
			s,
			l = (max + min) / 2;
		if (max === min) {
			h = s = 0; // achromatic
		} else {
			let d = max - min;
			s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
			switch (max) {
				case r:
					h = (g - b) / d + (g < b ? 6 : 0);
					break;
				case g:
					h = (b - r) / d + 2;
					break;
				case b:
					h = (r - g) / d + 4;
					break;
				default:
					break;
			}
			h /= 6;
		}
		s = s * 100;
		s = Math.round(s);
		l = l * 100;
		l = 93;
		h = Math.round(360 * h);
		return 'hsl(' + h + ', ' + s + '%, ' + l + '%)';
	}
}

export const getElemWidth = id => {
	let elem = document.getElementById(id);
	if (elem) {
		return elem.offsetWidth;
	}
};

// get the extension from the url
export function renderIconsBasedOnFileUrl(url) {
	// get the file type .mp3 .jpg .pdf etc
	const ext = url.split(/[#?]/)[0].split('.').pop().trim();

	switch (ext) {
		case 'pdf':
			return <DocIcons.PdfIcons color="#666" />;

		case 'zip':
			return <DocIcons.ZipIcons color="#666" />;

		default:
			return <DocIcons.DocumentIcon color="#666" />;
	}
}

function dayDateFormat(UNIX_timestamp) {
	const a = new Date(UNIX_timestamp * 1000);
	const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const months = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	];
	const day = days[a.getDay()];
	const year = a.getFullYear();
	const month = months[a.getMonth()];
	const date = a.getDate();
	let hour = a.getHours();
	let min = a.getMinutes();
	const ampm = hour >= 12 ? 'PM' : 'AM';
	hour %= 12;
	hour = hour || 12; // the hour '0' should be '12'
	min = min < 10 ? `0${min}` : min;
	const formattedMinuteValue = `0${min}`.slice(-2);
	const sec = a.getSeconds();
	const time = `${date}, ${month} ${year}`;
	return time;
}

export const DayDateFormatting = dayDateFormat;

//check if email is valid
export const isEmailValid = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
};

// search in array
export function SearchEmployeeInArray(nameKey, myArray) {
	const searchedArrayData = [];
	for (let i = 0; i < myArray.length; i++) {
		if (myArray[i].fullName.toLowerCase().includes(nameKey.toLowerCase())) {
			searchedArrayData.push(myArray[i]);
		}
	}
	if (nameKey === '') {
		return myArray;
	}
	return searchedArrayData;
}
