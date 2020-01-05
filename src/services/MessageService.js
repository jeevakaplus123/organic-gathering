import SendSMS from 'react-native-sms'

//some stuff

export async function sendMessage( to=[], body){

	SendSMS.send({
		body: body,
		recipients: to,
		successTypes: ['sent', 'queued']
	}, (completed, cancelled, error) => {

		console.log('SMS Callback: completed: ' + completed + ' cancelled: ' + cancelled + 'error: ' + error);

	})
}