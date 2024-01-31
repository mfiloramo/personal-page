import { NextApiRequest, NextApiResponse } from 'next';
import { CourierClient } from '@trycourier/courier';

const courier: CourierClient = new CourierClient({ authorizationToken: process.env.COURIER_AUTH_TOKEN });

export default async function SendMessage(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'POST') {
    try {
      const { name, email, subject, message } = req.body;

      const { requestId } = await courier.send({
        message: {
          to: { email: process.env.ADMIN_EMAIL },
          template: 'J6ZR4BDFZ24KKDMMDH9Q4E9Z88BN',
          data: { name, email, subject, message }
        },
      });

      console.log('Message sent with ID:', requestId);

      res.status(200).json({ message: 'Message sent successfully' });
    } catch (error: any) {
      console.error('Error sending message via Courier:', error);
      if (error.response) {
        console.error('Courier response error:', error.response.data);
      }
      res.status(500).json({ message: 'Failed to send message', error: error.message });
    }
  } else {
    res.setHeader('Allow', [ 'POST' ]);
    res.status(405).end(`Method ${ req.method } Not Allowed`);
  }
}
