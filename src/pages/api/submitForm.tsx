import notificationapi from 'notificationapi-node-server-sdk';

notificationapi.init(
  '5kgfm6qi6rcrq0nobt88vb3fc1', // clientId
  '6m2ngbja15mjeh0qf7q3fli72nukvhi43mrfe90ok0hv4dssu3k', // clientSecret
);

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, email } = req.body;

    notificationapi.send({
      notificationId: 'welcome',
      user: {
        id: 'test_user_id',
        email: email,
      },
      mergeTags: {
        firstName: firstName,
        alerts: [{ title: 'This is a new alert from SCIN!' }],
      },
    });

    return res.status(200).json({ success: true });
  }

  return res.status(405).end(); // Method Not Allowed
}
