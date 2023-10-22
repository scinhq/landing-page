// pages/api/searchSubjects.js
const searchSubjects = async (req, res) => {
  const query = req.query.description;

  try {
    const apiResponse = await fetch(
      `https://api.elsevier.com/content/subject/scidir`,
      {
        headers: {
          Accept: 'application/json',
          // 'X-ELS-APIKey': 'YOUR_API_KEY' // Uncomment and add your API key if necessary.
        },
      },
    );

    if (!apiResponse.ok) {
      throw new Error('Failed to fetch from Elsevier API');
    }

    const data = await apiResponse.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default searchSubjects;
