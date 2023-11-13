import clientPromise from '../../lib/mongodb';

const addUsers = async (req, res) => {
  try {
    const client = await clientPromise;
    const db = client.db('scin-database');
    const { firstName, lastName, email, role, fieldOfStudy } = req.body;

    const post = await db.collection('users').insertOne({
      firstName,
      lastName,
      email,
      role,
      fieldOfStudy,
    });

    res.json(post);
  } catch (e) {
    console.error(e);
    throw new Error(e).message;
  }
};

export default addUsers;
